import React from 'react';
import Image from 'next/image';
import ShopImg from '../../public/stores.png'
const Stores = () => {
  return (
    <div>
        <div className='flex flex-col-reverse justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='container mx-auto ml-20 md:w-1/3'>
            <p className='text-4xl font-extrabold border-l-8 border-green-300 border-spacing-5 pl-5'>Our Stores</p>
                <p className='text-xl mt-5'>Search from our 500+ partner stores. Click Get Donation when the popup appears and shop as you normally would. It doesn&apos;t cost any extra</p>
                <button className='btn-bg px-12 rounded-full mt-5 py-3'>View All</button>
            </div>
            <div className='md:w-1/1'>
                <Image className='w-[800px] ml-20 mt-10' src={ShopImg} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default Stores