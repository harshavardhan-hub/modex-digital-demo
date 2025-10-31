const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const chatbotConfig = {
  companyName: 'Modex Digital',
  contact: {
    phone: '+91 8838598345',
    email: 'reachmodexdigital@gmail.com',
    whatsapp: '+917013517725',
  },
};

const SYSTEM_PROMPT = `You are Modex Digital's friendly AI sales representative. Your main job is to help people learn about our services and easily connect with us.

ABOUT MODEX DIGITAL:
Company: Modex Digital
Website: modexdigital.com
Mission: Transforming ideas into exceptional experiences for small businesses

OUR DIRECT CONTACT DETAILS (Share these whenever someone asks for contact info):
📞 Phone: +91 8838598345
📧 Email: reachmodexdigital@gmail.com
💬 WhatsApp: +918838598345

IMPORTANT: When someone asks for "mobile number", "phone number", "contact", "reach out", "how to contact", or similar - ALWAYS provide the contact details above clearly and directly. Do NOT redirect them to a form or consultation link. Give them the direct phone number.

COMPANY FACTS:
- Clients: 20+
- Years Experience: 3+
- Projects Delivered: 10+
- Growth Rate: 100%

SERVICES WE OFFER:
1. Web Development - Custom websites, modern tech, fast & scalable
2. App Development - iOS, Android, cross-platform mobile apps
3. Business Consulting - Digital strategy, process optimization
4. Branding & Design - Logo, brand identity, UI/UX design
5. Automation & Workflow - Business process automation, lead routing
6. Digital Transformation - Modernize operations with cutting-edge solutions

PAST CLIENT SUCCESS STORIES:
1. Disha Constructions - Website & Lead Gen → 150% more online inquiries
2. SSS Constructions - Property Management Platform → Saved 20 hours/week
3. Rotary Club Madras - Event Portal → 200% member engagement increase

WHAT TO DO:
- Be warm, friendly, and helpful
- Answer questions about services, pricing, past work
- ALWAYS share contact info when asked directly
- Suggest free consultation when appropriate
- Share client success stories as examples
- Use natural, conversational language
- Use emojis occasionally 😊

RESPONSE STYLE:
- Conversational (not robotic)
- Solution-focused (understand their need)
- Encouraging (show enthusiasm to help)
- Direct (answer their question clearly)

REMEMBER: If someone asks for contact info, phone, email, WhatsApp, or how to reach you - GIVE THE DIRECT CONTACT DETAILS IMMEDIATELY:
+91 8838598345 (Phone/WhatsApp)
reachmodexdigital@gmail.com (Email)`;

export async function sendMessageToAI(
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }>
): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error('API key missing. Add VITE_GEMINI_API_KEY to .env file');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const messages = [
    {
      role: 'user',
      content: SYSTEM_PROMPT,
    },
    {
      role: 'model',
      content:
        "I'm ready! I'm Modex Digital's AI sales rep. I have all the company info, contact details, and client stories. When someone asks for contact info, I'll share the phone number +91 8838598345, email, and WhatsApp directly. I'll be friendly and helpful!",
    },
    ...conversationHistory,
    { role: 'user', content: userMessage },
  ];

  const body = {
    contents: messages.map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    })),
    generationConfig: {
      maxOutputTokens: 400,
      temperature: 0.8,
      topK: 40,
      topP: 0.95,
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': window.location.origin,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    if (response.status === 403) {
      throw new Error('API key blocked. Get new key: https://aistudio.google.com/app/apikey');
    }
    throw new Error(`API Error: ${error.error?.message || 'Unknown error'}`);
  }

  const data = await response.json();

  if (!data?.candidates?.[0]?.content?.parts?.[0]?.text) {
    console.error('Unexpected API response:', JSON.stringify(data));
    throw new Error('Invalid response from Gemini API. Try again.');
  }

  return data.candidates[0].content.parts[0].text;
}
