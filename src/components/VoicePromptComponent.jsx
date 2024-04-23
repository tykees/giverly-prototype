"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { MdOutlineSettingsVoice } from "react-icons/md";


const VoicePromptComponent = () => {
  const router = useRouter(); // Use the useRouter hook to access the router object
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
    } else if (transcript.includes('brands')) {
      console.log('Navigating to Brands'); // Log navigation
      router.push('/brand/partner-brands');
    } else if (transcript.includes('charity')) {
      console.log('Navigating to Charity'); // Log navigation
      router.push('/charity/charity-list');
    } else if (transcript.includes('shop')) {
      console.log('Navigating to Shop'); // Log navigation
      router.push('/e-shop');
    } else if (transcript.includes('login')) {
      console.log('Navigating to Log In'); // Log navigation
      router.push('/customer/user-category-signin');
    } else if (transcript.includes('signup')) {
      console.log('Navigating to Sign Up'); // Log navigation
      router.push('/user-category');
    } else if (transcript.includes('customer')) {
      console.log('Navigating to customer'); // Log navigation
      router.push('/customer/customer-login');
    } else {
      // Handle unrecognized commands
      console.log('Unrecognized command');
    }
  };

  return (
    <div>
      <button onClick={handleVoiceInput}><MdOutlineSettingsVoice /></button>
      <sub className='text-sm'>{message}</sub>
    </div>
  );
};

export default VoicePromptComponent;
