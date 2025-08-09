// pages/api/contact.js

import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  try {
    const { firstName, lastName, email, howDidYouHear, siteRating, suggestionsFeedback, 'bot-field': botField } = req.body;

    if (botField) {
      console.log('Bot detected, submission blocked.');
      return res.status(200).json({ status: 'success' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailBody = `
      New Contact Form Submission:
      ---------------------------
      First Name: ${firstName || 'N/A'}
      Last Name: ${lastName || 'N/A'}
      Email: ${email || 'N/A'}
      How did you hear about us?: ${howDidYouHear || 'N/A'}
      Site Rating: ${siteRating || 'N/A'}
      Suggestions/Feedback:
      ${suggestionsFeedback || 'N/A'}
    `;

    const resendResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL,
      subject: 'New Contact Form Submission',
      html: `<pre>${emailBody}</pre>`,
    });

    if (resendResponse.data) {
      console.log('Email sent successfully via Resend.');
      return res.status(200).json({ status: 'success' });
    } else {
      console.error('Error sending email via Resend:', resendResponse.error);
      return res.status(resendResponse.error.statusCode || 500).json({
        status: 'error',
        message: resendResponse.error.message || 'Error sending email'
      });
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
}
