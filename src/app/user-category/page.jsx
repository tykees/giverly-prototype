import React from 'react';
import Image from 'next/image';
import { FaHouseUser } from "react-icons/fa";
import { LuFactory } from "react-icons/lu";
import { BiSolidDonateHeart } from "react-icons/bi";

const page = () => {
  return (
    <div className='user_category'>
        <div className='container mx-auto pt-40'>
            <p className='font-bold text-2xl '>Select a Category</p>
            <p className='text-sm text-slate-400'>Select the category for sign up</p>
        </div>
        <div className='flex justify-center gap-10 items-center'>
            <div className='flex flex-col rounded-lg hover:border-white shadow-lg justify-center items-center border border-slate-500 w-[200px] h-[180px] text-center'>
                 <FaHouseUser className='text-5xl text-slate-500 hover:text-slate-300' />
                <p className='text-slate-500'>Customer</p>
                <p className='border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-slate-200 btn-bg py-2 px-6 mt-5 rounded-full'>Select</p>
            </div>
            <div className='flex flex-col rounded-lg hover:border-white shadow-lg justify-center items-center border border-slate-500 w-[200px] h-[180px] text-center'>
                 <LuFactory className='text-5xl text-slate-500 hover:text-slate-300' />
                <p className='text-slate-500'>Brand</p>
                <p className='border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-slate-200 btn-bg py-2 px-6 mt-5 rounded-full'>Select</p>
            </div>
            <div className='flex flex-col rounded-lg hover:border-white shadow-lg justify-center items-center border border-slate-500 w-[200px] h-[180px] text-center'>
                 <BiSolidDonateHeart className='text-5xl text-slate-500 hover:text-slate-300' />
                <p className='text-slate-500'>Charity</p>
                <p className='border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-slate-200 btn-bg py-2 px-6 mt-5 rounded-full'>Select</p>
            </div>
        </div>
    </div>
  )
}

export default page