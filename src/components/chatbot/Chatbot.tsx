import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import { sendMessageToAI, chatbotConfig } from '../../services/gemini';
import type { Message } from '../../types/chatbot';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hi! 👋 I'm Modex Assistant, your AI companion. I can help you with:\n\nOur services (Web, App, Consulting)\nPricing & free consultations\nPast project success stories\nScheduling a call with our team\n\nWhat would you like to know?`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastRequestTime = useRef<number>(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime.current;
    if (timeSinceLastRequest < 2000) {
      const waitMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Please wait a moment before sending another message. ⏱️',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, waitMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    lastRequestTime.current = now;

    try {
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const aiResponse = await sendMessageToAI(
        userMessage.content,
        conversationHistory
      );

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chatbot Error:', error);

      let errorMessage = "I'm having trouble connecting right now. ";

      if (error instanceof Error) {
        if (error.message.includes('API key not configured')) {
          errorMessage += "Please add your Gemini API key to the .env file. 🔑";
        } else if (error.message.includes('Invalid API key')) {
          errorMessage += "Your API key appears to be invalid. Please check it. 🔑";
        } else if (error.message.includes('Rate limit')) {
          errorMessage += "Rate limit hit. Please wait a moment and try again. ⏱️";
        } else if (error.message.includes('Network error')) {
          errorMessage += "Please check your internet connection. 🌐";
        } else {
          errorMessage += error.message;
        }
      }

      errorMessage += `\n\n📞 You can also reach us:\n${chatbotConfig.contact.phone}\n📧 ${chatbotConfig.contact.email}`;

      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorMessage,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* 🤖 AI ASSISTANT CHAT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-accent via-accent to-accent2 text-white rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300 group"
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            // Close icon (X)
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 180, opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.div>
          ) : (
            // AI Robot icon (visible when closed)
            <motion.div
              key="ai-icon"
              initial={{ rotate: 180, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -180, opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center"
            >
              {/* AI Robot Head */}
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Head */}
                <rect x="4" y="6" width="16" height="14" rx="2" fill="currentColor" />
                {/* Left antenna */}
                <rect x="8" y="2" width="2" height="4" fill="currentColor" />
                {/* Right antenna */}
                <rect x="14" y="2" width="2" height="4" fill="currentColor" />
                {/* Left eye */}
                <circle cx="9" cy="11" r="1.5" fill="white" />
                {/* Right eye */}
                <circle cx="15" cy="11" r="1.5" fill="white" />
                {/* Smile */}
                <path d="M9 15 Q12 16.5 15 15" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-white/30 pointer-events-none"
          />
        )}

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-full mb-3 right-0 whitespace-nowrap pointer-events-none"
        >
          <div className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            Modex Assistant
          </div>
          <div className="w-2 h-2 bg-primary absolute -bottom-1 right-3 rotate-45" />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-[90vw] max-w-md h-[600px] max-h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-accent2 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Modex Assistant</h3>
                  <p className="text-xs text-white/80">
                    Online • AI Powered
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-neutral-200">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 border border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                  disabled={isTyping}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Send message"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
