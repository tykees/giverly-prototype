"use client"

import React, {useState} from 'react';
   
const Referral = () => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText('Text to copy');
        setCopied(true);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    };
  return (
    <div>
       <div>
      <button onClick={handleCopy}>Copy Text</button>
      {copied && <span>Copied to clipboard!</span>}
    </div>
    </div>
  )
}

export default Referral