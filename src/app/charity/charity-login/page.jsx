import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container text-center mx-auto mt-40 my-18'>
            <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-3xl font-bold'>Charity Login</p>
            {/* <label htmlFor="">Email</label> */}
            <input className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Brand Name or Email'  type="text" required name="" id="" />
            {/* <label htmlFor="">Password</label> */}
            <input className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5  ' placeholder='Password' type="password" required name="" id="" />
            <Link href={'/customer/customer-auth'}>
            <button className='btn-bg px-12 w-[200px] rounded-full mt-5 py-3'>Login</button>
            </Link>
            <Link href={'/customer/customer-password-reset'}>
            <p>Forgot Password?</p>
            </Link>
        </div>
    </div>
  )
}

export default page