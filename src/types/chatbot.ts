export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatbotConfig {
  companyName: string;
  services: string[];
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
}
