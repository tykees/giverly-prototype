import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container text-center mx-auto mt-40 my-18'>
            <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-3xl font-bold'>Verify Your Identity</p>
         
            <label className='text-sm' htmlFor="">Enter the 5-Digit code sent to +224********89</label>
            <p className='text-sm text-slate-400'>This helps us keep your account secure by verifying that it&apos;s really you</p>
            <div className='flex justify-center items-center gap-5'>
            <input className='outline-none w-[30px] h-[40px] rounded-full border border-slate-900 pl-2 ' placeholder=''  type="text" required name="" id="" />
            <input className='outline-none w-[30px] h-[40px] rounded-full border border-slate-900 pl-2 ' placeholder=''  type="text" required name="" id="" />
            <input className='outline-none w-[30px] h-[40px] rounded-full border border-slate-900 pl-2 ' placeholder=''  type="text" required name="" id="" />
            <input className='outline-none w-[30px] h-[40px] rounded-full border border-slate-900 pl-2 ' placeholder=''  type="text" required name="" id="" />
             <input className='outline-none w-[30px] h-[40px] rounded-full border border-slate-900 pl-2 ' placeholder=''  type="text" required name="" id="" />
             </div>
            <Link href={'/charity/charity-question'}>
            <button className='btn-bg px-12 w-[200px] rounded-full mt-5 py-3'>Confirm</button>
            </Link>
        </div>
    </div>
  )
}

export default page