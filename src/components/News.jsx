import React from 'react';
import Image from 'next/image';

import CBS from '../../public/cbs.png';
import FOX from '../../public/fox.svg';
import Left from '../../public/left.png';
import Right from '../../public/right.png';
import NBC from '../../public/nbc.png';

const News = () => {
  return (
    <div className='mt-20 mb-10 py-10 shadow-md'>
        <div className='flex justify-center items-center'>
            <p className='border-t w-[100px] md:w-[250px]'></p>
            <p>AS SEEN ON</p>
            <p className='border-t w-[100px] md:w-[250px]'></p>
        </div>
        <div className='flex justify-center gap-8 md:gap-20 items-center'>
            <Image className='w-[40px] md:w-[50px]' src={Left} alt='img'></Image>
            <Image className='w-[60px] md:w-[80px]' src={CBS} alt='img'></Image>
            <Image className='w-[60px] md:w-[80px]' src={FOX} alt='img'></Image>
            <Image className='w-[60px] md:w-[80px]' src={NBC} alt='img'></Image>
            <Image className='w-[40px] md:w-[50px]' src={Right} alt='img'></Image>
        </div>
        <p className='text-center text-slate-400 text-sm'>AND OVER 200 NEWS SITES</p>
    </div>
  )
}

export default News