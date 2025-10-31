import React from 'react';
import { motion } from 'framer-motion';
import type { Message } from '../../types/chatbot';

interface ChatMessageProps {
  message: Message;
}

const formatMessage = (text: string): React.ReactNode => {
  // Clean up markdown
  let formatted = text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/###\s*/g, '')
    .trim();

  // Split by double newlines for sections
  const sections = formatted.split(/\n\n+/);

  return (
    <div className="space-y-3">
      {sections.map((section, idx) => {
        const lines = section.split('\n').filter((line) => line.trim());

        // Check if this section is contact info or has phone/email
        const isContactSection =
          section.includes('Phone') ||
          section.includes('Email') ||
          section.includes('WhatsApp') ||
          section.includes('Call') ||
          section.includes('+91');

        if (isContactSection) {
          return (
            <div
              key={idx}
              className="bg-white/20 rounded-lg p-3 space-y-2 border-l-2 border-accent"
            >
              {lines.map((line, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <p className="text-sm leading-relaxed break-words">
                    {line.trim()}
                  </p>
                </div>
              ))}
            </div>
          );
        }

        // Check if has bullet points
        if (section.includes('•') || lines.length > 1) {
          return (
            <div key={idx} className="space-y-2">
              {lines.map((line, i) => {
                const cleanLine = line.replace(/^[-•]\s*/, '').trim();
                return (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span className="text-sm leading-relaxed break-words">
                      {cleanLine}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }

        // Regular paragraph
        return (
          <p key={idx} className="text-sm leading-relaxed break-words">
            {section}
          </p>
        );
      })}
    </div>
  );
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-accent text-white rounded-br-sm'
            : 'bg-neutral-100 text-primary rounded-bl-sm'
        }`}
      >
        <div className="text-sm md:text-base">
          {isUser ? message.content : formatMessage(message.content)}
        </div>
        <p
          className={`text-xs mt-2 ${
            isUser ? 'text-white/70' : 'text-neutral-500'
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
