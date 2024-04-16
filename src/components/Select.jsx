import React from 'react';
import Image from 'next/image';
import SelectImg from '../../public/select.png'
const Select = () => {
  return (
    <div>
        <div className='flex flex-col justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='md:w-1/1'>
                <p className='text-4xl font-extrabold border-l-8 border-green-300 border-spacing-5 pl-5'>How Giverly Works</p>
                <Image className='w-[350px] ml-20 mt-10' src={SelectImg} alt='img'/>
            </div>
            <div className='md:w-1/3'>
                <p className='text-3xl leading-10 font-bold'>Select A Cause</p>
                <p className='text-xl'>Sign up with a single click and select a cause you would like to raise funds for before adding our donation reminder to your browser</p>
            </div>
        </div>
    </div>
  )
}

export default Select