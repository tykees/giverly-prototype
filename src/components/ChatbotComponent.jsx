"use client"
import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;
    script.setAttribute('chatbotId', 'pxjA2zJgYi11PoE3NZIPo');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/pxjA2zJgYi11PoE3NZIPo"
      title="Chatbot"
      width="0%"
      style={{ height: '0%', minHeight: '0px' }}
      frameBorder="0"
    ></iframe>
  );
};

export default ChatbotComponent;
