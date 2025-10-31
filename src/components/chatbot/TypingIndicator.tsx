import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 px-4 py-3 bg-neutral-100 rounded-2xl rounded-bl-sm w-fit">
      <div className="flex space-x-1">
        <div
          className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
          style={{ animationDelay: '0ms' }}
        />
        <div
          className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
          style={{ animationDelay: '150ms' }}
        />
        <div
          className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    </div>
  );
};

export default TypingIndicator;
