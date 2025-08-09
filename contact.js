// functions/contact.js

export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response(JSON.stringify({ status: 'error', message: 'Method Not Allowed' }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const formData = await context.request.formData();
    const formObject = Object.fromEntries(formData);

    if (formObject['bot-field']) {
      console.log('Bot detected, submission blocked.');
      return new Response(JSON.stringify({ status: 'success' }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const { RESEND_API_KEY, CONTACT_EMAIL } = context.env;

    if (!RESEND_API_KEY || !CONTACT_EMAIL) {
      console.error('API key or recipient email not configured.');
      return new Response(JSON.stringify({ status: 'error', message: 'Server configuration error' }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      });
    }

    const emailBody = `
      New Contact Form Submission:
      ---------------------------
      First Name: ${formObject.firstName || 'N/A'}
      Last Name: ${formObject.lastName || 'N/A'}
      Email: ${formObject.email || 'N/A'}
      How did you hear about us?: ${formObject.howDidYouHear || 'N/A'}
      Site Rating: ${formObject.siteRating || 'N/A'}
      Suggestions/Feedback:
      ${formObject.suggestionsFeedback || 'N/A'}
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: `onboarding@resend.dev`,
        to: [CONTACT_EMAIL],
        subject: "New Contact Form Submission",
        html: `<pre>${emailBody}</pre>`,
      }),
    });

    if (resendResponse.ok) {
      console.log('Email sent successfully via Resend.');
      return new Response(JSON.stringify({ status: 'success' }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const resendError = await resendResponse.json();
      console.error('Error sending email via Resend:', resendError);
      return new Response(JSON.stringify({ status: 'error', message: resendError.message }), {
        headers: { "Content-Type": "application/json" },
        status: resendResponse.status,
      });
    }

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Internal server error' }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
