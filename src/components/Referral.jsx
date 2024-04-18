"use client"

import React, {useState} from 'react';
   
const Referral = () => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText('https://giverly-prototype.vercel.app/customer/user-account');
        setCopied(true);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    };
  return (
    <div>
       <div className='text-sm mt-4'>
      <button  className='text-sm px-2 py-2 rounded-md bg-slate-500 text-white' onClick={handleCopy}>Referral Link</button> <br/>
      {copied && <span className='text-sm text-green-900'>Copied to clipboard!</span>}
    </div>
    </div>
  )
}

export default Referral