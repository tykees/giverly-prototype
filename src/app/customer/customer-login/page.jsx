import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container text-center mx-auto mt-40 my-18'>
            <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-3xl font-bold'>Customer Login</p>
         
            <label className='text-sm' htmlFor="">Age Category</label>
            <select className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5 ' name="" id="">
            <option value="Below 18">Below 18 Years</option>
                <option value="18 - 35">18 - 35 Years</option>
                <option value="Above 35">Above 35 years</option>
            </select>
            {/* <label htmlFor="">Email</label> */}
            <input className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Email'  type="email" required name="" id="" />
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