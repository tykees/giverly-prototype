import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container mx-auto my-18'>
        <div className='flex justify-center items-center mt-40'>
            <div className='flex flex-col gap-5 '>
            <p className='my-10 bg-slate-600 text-center pt-10 px-10 h-[200px] w-[500px] rounded-xl text-slate-100 text-xl'>Welcome @user, explore our platform 
            <Link href={'/customer/user-account'}>
            <p className='text-green-300'>View profile</p>
            </Link>
            </p>
        </div>
        </div>
    </div>
  )
}

export default page