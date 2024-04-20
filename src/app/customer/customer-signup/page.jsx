import React from 'react';
import Image from 'next/image';
import ShopImg from '../../../../public/select.png'
import Link from 'next/link';

const page = () => {
  return (
    <div className='container mx-auto my-18'>
        <div className='flex flex-col justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='img_signup'>
            <Image className=' w-[200px] md:w-[600px]' src={ShopImg} alt='img'></Image>
            </div>
            <div className='flex flex-col gap-3 mx-5 md:w-1/2'>
            <p className='text-3xl font-bold'>Customer Sign Up</p>
            {/* <label htmlFor="">Name</label> */}
            <input className='outline-none w-full md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Full Name' type="text" required name="" id="" />
            {/* <label htmlFor="">Preffered Name</label> */}
            <input className='outline-none w-full md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Preffered Name' type="text" required name="" id="" />
            <label className='text-sm' htmlFor="">Age Category</label>
            <select className='outline-none w-full md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' name="" id="">
                <option value="Below 18">Below 18 Years</option>
                <option value="18 - 35">18 - 35 Years</option>
                <option value="Above 35">Above 35 years</option>
            </select>
            {/* <label htmlFor="">Email</label> */}
            <input className='outline-none w-full md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Email'  type="email" required name="" id="" />
            <input className='outline-none w-full md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='DOB'  type="data" required name="" id="" />
            {/* <label htmlFor="">Phone No</label> */}
            <input className='outline-none w-full md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5  ' placeholder='Phone No' type="phone" required name="" id="" />
            {/* <label htmlFor="">Password</label> */}
            <input className='outline-none w-full md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5  ' placeholder='Password' type="password" required name="" id="" />
            {/* <label htmlFor="">Confirm Password</label> */}
            <input className='outline-none w-full md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5  ' placeholder='Confirm Password'  type="password" required name="" id="" />
            <Link href={'/customer/welcome'}>
            <button className='btn-bg px-12 w-[200px] rounded-full mt-5 py-3'>Submit</button>
            </Link>
            <Link href={'/customer/customer-login'}>
            <p>Already have an account? Login</p>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default page