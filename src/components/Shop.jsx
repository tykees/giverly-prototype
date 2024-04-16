import React from 'react';
import Image from 'next/image';
import ShopImg from '../../public/shop.png'
const Shop = () => {
  return (
    <div>
        <div className='flex flex-col-reverse justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='md:w-1/3'>
                <p className='text-3xl leading-10 font-bold'>Shop Online</p>
                <p className='text-xl'>Search from our 500+ partner stores. Click Get Donation when the popup appears and shop as you normally would. It doesn&apos;t cost any extra</p>
            </div>
            <div className='md:w-1/1'>
                <Image className='w-[350px] ml-20 mt-10' src={ShopImg} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default Shop