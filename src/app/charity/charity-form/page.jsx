import React from 'react';
import Image from 'next/image';
import ShopImg from '../../../../public/shop.png'
import Link from 'next/link';

const page = () => {
  return (
    <div className='container mx-auto my-18'>
        <div className='flex justify-between ml-5 flex-wrap items-center mt-40'>
            <div>
            <Image className='w-[600px]' src={ShopImg} alt='img'></Image>
            </div>
            <div className='flex flex-col gap-3 w-1/2'>
            <p className='text-3xl font-bold'>Charity Sign up </p>
            <input className='outline-none w-[380px] md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Registered Name'  type="text" required name="" id="" />
            <input className='outline-none w-[380px] md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Office Address'  type="text" required name="" id="" />
            <input className='outline-none w-[380px] md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Email Address'  type="email" required name="" id="" />
            <input className='outline-none w-[380px] md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Password'  type="password" required name="" id="" />
            <input className='outline-none w-[380px] md:w-[450px] h-[40px] rounded-full border border-slate-900 pl-5  ' placeholder='Date of incorporation'  type="date" required name="" id="" />
            <label htmlFor="">Upload Documents</label>
            <input  type="file" name="" id="" />
            <span className='text-sm font-bold underline'>+ Add more</span>
            <div className='flex justify-start items-center'>
            <input className='' type="checkbox" name="" required id="" />
            <p className='text-sm text-green-500 pl-3'>Agreed to Terms and Conditions</p>
            </div>
            <Link href={'/submited'}>
            <button className='btn-bg px-12 w-[200px] rounded-full mt-5 py-3'>Submit</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default page