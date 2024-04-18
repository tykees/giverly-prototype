import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <>
    <div className='bg-slate-700'>
    <div className='container text-center mx-auto pt-40 pb-40 my-18'>
            <div className='flex flex-col justify-center w-[350px] mx-auto shadow-lg pb-10 items-center gap-5'>
            <p className='text-3xl font-bold text-slate-200'>Admin Login</p>
            {/* <label htmlFor="">Email</label> */}
            <input className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Admin Email'  type="text" required name="" id="" />
            {/* <label htmlFor="">Password</label> */}
            <input className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5  ' placeholder='Generated Password' type="password" required name="" id="" />
            <Link href={'/giverly/dashboard-level-access'}>
            <button className='btn-bg px-12 w-[300px] rounded-full mt-5 py-2'>Login</button>
            </Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default page