import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'reachmodexdigital@gmail.com';
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'noreply@modexdigital.com';

    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return res.status(500).json({ message: 'Email service not configured' });
    }

    // Send email to team
    const emailData = {
      personalizations: [
        {
          to: [{ email: TO_EMAIL }],
          subject: `New Contact Form Submission from ${name}`,
        },
      ],
      from: { email: FROM_EMAIL, name: 'Modex Digital Website' },
      content: [
        {
          type: 'text/html',
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        },
      ],
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    // Send autoresponder to user
    const autoResponderData = {
      personalizations: [
        {
          to: [{ email }],
          subject: 'Thank you for contacting Modex Digital',
        },
      ],
      from: { email: FROM_EMAIL, name: 'Modex Digital' },
      content: [
        {
          type: 'text/html',
          value: `
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${name},</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to call us at +91 8838598345 or email us at reachmodexdigital@gmail.com.</p>
            <br/>
            <p>Best regards,<br/>The Modex Digital Team</p>
          `,
        },
      ],
    };

    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(autoResponderData),
    });

    return res.status(200).json({
      message: 'Message sent successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      message: 'Failed to send message',
      success: false,
    });
  }
}
