"use client"

import React, { useState } from 'react';

const VoicePromptComponent = ({ router }) => {
  const [message, setMessage] = useState('');

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log('Transcript:', transcript); // Log the transcript
      setMessage(transcript);
      navigatePage(transcript);
    };

    recognition.start();
  };

  const navigatePage = (transcript) => {
    if (transcript.includes('home')) {
      console.log('Navigating to Home'); // Log navigation
      router.push('/');
    } else if (transcript.includes('about')) {
      console.log('Navigating to About'); // Log navigation
      router.push('/about');
    } else if (transcript.includes('contact')) {
      console.log('Navigating to Contact'); // Log navigation
      router.push('/contact');
    } else {
      // Handle unrecognized commands
      console.log('Unrecognized command');
    }
  };

  return (
    <div>
      <button onClick={handleVoiceInput}>Start Voice Prompt</button>
      <p>{message}</p>
    </div>
  );
};

export default VoicePromptComponent;
