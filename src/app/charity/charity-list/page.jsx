import React from 'react'
import Image from 'next/image';
import RSPCA from '../../../../public/education.png';
import Henhouse from '../../../../public/ophanage.png';
import nintynine from '../../../../public/health.png';
import Amalia from '../../../../public/disability.png';
import Africa from '../../../../public/animals.png';
import  Flowlogo from '../../../../public/housing.png';

const page = () => {
  return (
    <div>
        <div className='mt-40'>
            <p className='container mx-auto text-start text-2xl my-10 font-bold'>Charity Category</p>
        <div className='flex justify-around flex-wrap md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 '>
            <div className='flex flex-col justify-center items-center w-[220px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={RSPCA} alt='img'/>
                <p className='mt-5 text-center font-bold text-lg px-2 w-[180px]'>Education</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[220px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={Henhouse} alt='img'/>
                <p className='mt-5 text-center font-bold text-lg  px-2 w-[180px]'>Orphanage</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[220px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={nintynine} alt='img'/>
                <p className='mt-5 text-center font-bold text-lg  px-2 w-[180px]'>Health</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[220px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={Amalia} alt='img'/>
                <p className='mt-5 text-center font-bold text-lg  px-2 w-[180px]'>Disability</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[220px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={Africa} alt='img'/>
                <p className='mt-5 text-center font-bold text-lg  px-2 w-[180px]'>Animal welfare</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[220px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={Flowlogo} alt='img'/>
                <p className='mt-5 text-center font-bold text-lg  px-2 w-[180px]'>Housing Provider</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default page