import React from 'react';
import { FaRegAngry } from "react-icons/fa";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { ImHappy } from "react-icons/im";
import { IoHappyOutline } from "react-icons/io5";
import Link from 'next/link';

const page = () => {
  return (
    <div className='rating pt-40 pb-40'>
        <div className='text-center flex bg-white shadow rounded-lg flex-col justify-center items-center  w-[350px] h-[350px] mx-auto border px-4 py-3'>
            <p className='text-2xl font-bold mb-2'>Rate Us!</p>
            <p className='py-2 text-slate-400'>Tell us your experience</p>
            <div className='flex justify-center items-center gap-4'>
            <div className='flex flex-col gap-3 justify-center items-center'>
          <Link href={'/brand-website'}><FaRegAngry className='text-4xl text-slate-400 hover:text-red-400' /></Link>
            <sub>Angry</sub>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center'>
            <Link href={'/brand-website'}> <RiEmotionUnhappyLine className='text-4xl text-slate-400 hover:text-yellow-400' /></Link>
            <sub>Unhappy</sub>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center'>
            <Link href={'/brand-website'}>  <IoHappyOutline className='text-4xl text-slate-400 hover:text-green-300' /></Link>
            <sub>Happy</sub>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center'>
            <Link href={'/brand-website'}>   <ImHappy className='text-4xl text-slate-400 hover:text-green-500' /></Link>
            <sub>Very Happy</sub>
            </div>
            </div>
            <Link href={'/brand-website'}>   <button className='mt-10 text-red-500'>Skip</button></Link>
        </div>
    </div>
  )
}

export default page