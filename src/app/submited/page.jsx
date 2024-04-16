import React from 'react';
import Image from 'next/image';
import ShopImg from '../../../public/donation.png'

const page = () => {
  return (
    <div className='container mx-auto my-18'>
        <div className='flex justify-between items-center mt-40'>
            <div>
            <Image className='w-[600px]' src={ShopImg} alt='img'></Image>
            </div>
            <div className='flex flex-col gap-5 w-1/2'>
            <p className='my-10 bg-slate-600 pt-10 px-10 h-[200px] w-[500px] rounded-full text-green-300 text-xl'>Thank you for applying to partner with us, our team will get back to you regarding the next step</p>
        </div>
        </div>
    </div>
  )
}

export default page