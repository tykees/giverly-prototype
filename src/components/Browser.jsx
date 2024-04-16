import React from 'react';
import Image from 'next/image';
import DonImg from '../../public/bg.png'
import Chrome from '../../public/chrome.png'
import Safari from '../../public/safari.png'
import Brave from '../../public/brave.png'
import Edge from '../../public/edge.png'
import Firefox from '../../public/firefox.png'

const Browser = () => {
  return (
    <div className='browser'>
        <div className='flex flex-col-reverse justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='md:w-1/1'>
                <Image className='w-[700px] mt-10' src={DonImg} alt='img'/>
            </div>
            <div className='md:w-1/3 mr-24'>
            <p className='text-4xl font-extrabold border-l-8 border-green-300 border-spacing-5 pl-5'>Never Miss A Donation Opportunity</p>
                <p className='text-xl mt-5'>Download the Donation Reminder which highlights when a donation is available on over 500+ sites!</p>
                <button className='btn_bg rounded-full px-5 mt-5 py-3 hover:bg-black hover:text-white'>
                <div className='flex justify-start items-center'>
                <Image className='w-[30px]' src={Chrome} alt='img'/>
                <p>Add To Your Browser</p>
                </div>
                </button>
                <p className='text-xl font-bold mt-5 mb-3'>Also Available for</p>
            <div className='flex justify-start items-center gap-2'>
            <Image className='w-[30px]' src={Safari} alt='img'/>
            <Image className='w-[30px]' src={Firefox} alt='img'/>
            <Image className='w-[30px]' src={Edge} alt='img'/>
            <Image className='w-[30px]' src={Brave} alt='img'/>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Browser