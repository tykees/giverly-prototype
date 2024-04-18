import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-between border-t border-b py-10 mb-10 items-center'>
                <div className='text-center'>
                    <p className='text-3xl font-bold'>Explore</p>
                    <p className='text-slate-500 text-xl'>Blog</p>
                    <p className='text-slate-500 text-xl'>Team</p>
                    <p className='text-slate-500 text-xl'>Contact Us</p>
                </div>
                <div className='text-center'>
                <p className='text-3xl font-bold'>Legal</p>
                <p className='text-slate-500 text-xl'>Cookies</p>
                <p className='text-slate-500 text-xl'>Privacy Policy</p>
                <p className='text-slate-500 text-xl'>Terms & Conditions</p>
                </div>
                <div className='text-center'>
                <p className='text-3xl font-bold'>Support</p>
              <Link href={'/customer/customer-complaint'}> <p className='text-slate-500 text-xl'>Help</p></Link> 
                <p className='text-slate-500 text-xl'>Bug Report</p>
                <p className='text-slate-500 text-xl'>Suggestions</p>
                </div>
        </div>
    </div>
  )
}

export default Footer