import { Resend } from 'resend';

export async function POST(req) {
  try {
    const data = await req.json();

    // Init Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send the email
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Replace with verified sender
      to: process.env.CONTACT_EMAIL, // Your receiving address from .env
      subject: 'New Contact Form Submission',
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Suggestions & Feedback:</strong></p>
        <p>${data.suggestionsFeedback}</p>
        <p><strong>Site Rating:</strong> ${data.siteRating || 'N/A'}</p>
        <p><strong>How did you hear about us?:</strong> ${data.howDidYouHear || 'N/A'}</p>
        <p><strong>User Role:</strong> ${data.userRole || 'N/A'}</p>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend API error:', emailResponse.error);
      return new Response(JSON.stringify({ error: emailResponse.error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });

  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
