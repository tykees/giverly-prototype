import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container text-center mx-auto mt-40 my-18'>
            <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-2xl font-bold'>Security Question</p>
         
            <label className='text-sm' htmlFor=""></label>
            <p className='text-sm text-slate-400'></p>
            <div className='flex flex-col justify-center items-center gap-5'>
              <select className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-2 ' name="" id="">
                <option value="What is the middlename of your first Girlfriend?">What is the name of your first Girlfriend</option>
                <option value="In what city did you start your first Job?">In what city did you start your first Job?</option>
                <option value="Best childhood memory?">Best childhood memory?</option>
              </select>
            <input className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-2 ' placeholder=''  type="text" required name="" id="" />
             </div>
            <Link href={'/brand/brand-account'}>
            <button className='btn-bg px-12 w-[200px] rounded-full mt-5 py-3'>Confirm</button>
            </Link>
        </div>
    </div>
  )
}

export default page