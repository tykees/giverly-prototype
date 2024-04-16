import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='container mx-auto mt-40'>
        <div className='flex justify-between border-t border-b py-10 mb-10 items-center'>
                <div className='text-center'>
                    <p className='text-3xl font-bold'>Explore</p>
                    <p className='text-slate-500 text-2xl'>Blog</p>
                    <p className='text-slate-500 text-2xl'>Team</p>
                    <p className='text-slate-500 text-2xl'>Contact Us</p>
                </div>
                <div className='text-center'>
                <p className='text-3xl font-bold'>Legal</p>
                <p className='text-slate-500 text-2xl'>Cookies</p>
                <p className='text-slate-500 text-2xl'>Privacy Policy</p>
                <p className='text-slate-500 text-2xl'>Terms & Conditions</p>
                </div>
                <div className='text-center'>
                <p className='text-3xl font-bold'>Support</p>
              <Link href={'/customer/customer-complaint'}> <p className='text-slate-500 text-2xl'>Help</p></Link> 
                <p className='text-slate-500 text-2xl'>Bug Report</p>
                <p className='text-slate-500 text-2xl'>Suggestions</p>
                </div>
        </div>
    </div>
  )
}

export default Footer