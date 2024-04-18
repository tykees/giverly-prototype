import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className='welcome py-18'>
        <div className='flex justify-center items-center pt-40'>
            <div className='flex flex-col gap-5 '>
            <p className='my-10 bg-slate-700 text-center h-[350px] w-[350px] rounded-lg'>
              <div className='flex flex-col justify-center items-center bg-white h-[300px]'>
              <p className='text-green-600 w-[250px]'>Successfully Logged In</p>
              <Link href={'/brand/partner-brands'}>
            <p className='bg-slate-700 text-green-300 mt-5 text-sm rounded-full px-4 py-2 cursor-pointer'>Continue</p>
            </Link>
              </div>
            </p>
        </div>
        </div>
    </div>
  )
}

export default page