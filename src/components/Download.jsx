import React from 'react';
import Image from 'next/image';
import DonImg from '../../public/appbg.png';
import Apple from '../../public/apple.png';
import Google from '../../public/google.png';
const Download = () => {
  return (
    <div>
        <div className='download flex-col-reverse justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className=''>
                <Image className='w-[650px] mt-10' src={DonImg} alt='img'/>
            </div>
            <div className='md:w-1/2'>
            <p className='text-4xl font-extrabold border-l-8 border-green-300 border-spacing-5 pl-5'>The Easiest Way To Raise</p>
                <p className='text-sm w-96 pt-3 '>The retailer gives your cause a free donation for every purchase you make</p>
                <div className='flex justify-start items-center'>
                <Image className='w-[150px] mt-10' src={Apple} alt='img'/>
                <Image className='w-[150px] ml-3 mt-10' src={Google} alt='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download