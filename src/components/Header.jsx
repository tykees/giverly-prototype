import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Headframe from '../../public/assetll.png'
export const Header = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col-reverse justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='text-center md:w-1/2'>
                <div className='flex flex-col justify-center md:mt-40 items-center '>
                <p className='head_text text-xl md:text-5xl leading-tight font-extrabold '>We Donate Up To 10% Of Your Online Purchase To Charity</p>
                <p className='text-slate-500 text-xl'>A priceless experience of charity for the same price. It&apos;s simple and 100% free.</p>
                </div>
                <div className='flex flex-col-reverse justify-around gap-5 md:gap-0 md:flex-row items-center'>
                 <Link href={'/customer/customer/signup'}> <button className='btn_bg w-[200px] md:w-[320px] hover:bg-slate-50 shadow-md md:py-4 py-3  md:rounded-l-full px-2 md:px-5'>Support A Cause</button></Link> 
                  <Link href={'/charity/charity-form'}> <button className='btn_bg w-[200px] md:w-[320px] hover:bg-slate-50 shadow-md md:py-4 py-3 md:rounded-r-full px-2 md:px-5'>Register A Cause</button></Link> 
                </div>
            </div>
            <div className='md:w-1/2'>
                <Image className='w-auto md:w-[580px] pl-10' src={Headframe} alt='img'/>
            </div>
        </div>
    </div>
  )
}
