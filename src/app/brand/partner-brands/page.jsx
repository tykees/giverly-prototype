import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Lululemon from '../../../../public/lululemonlogo.jpeg';
import Speedo from '../../../../public/speedologo.png';
import Superdry from '../../../../public/superdrylogo.png';
import Uggs from '../../../../public/uggslogo.jpeg';
import Lacoste from '../../../../public/lacostelogo.png';
import  Puma from '../../../../public/pumalogo.png';

const page = () => {
  return (
    <div className=' partner-brands bg-slate-100 pb-40 pt-40'>
        <div className='md:px-28 px-5 flex justify-between items-center'>
             <p className='text-3xl font-extrabold mb-5'>Shop Brands</p>
             <Link href={'/customer/user-account'}>
            <p className='bg-slate-700 text-green-300 mb-5 text-sm rounded-full px-4 py-2 cursor-pointer'>My Account</p>
            </Link>
        </div>
        <div className='flex justify-around  flex-wrap gap-5 items-center'>
            <div className='flex px-5 py-5 bg-white justify-around rounded-xl items-center shadow'>
                <div className='w-[300px]'>
                <p className='text-3xl font-bold mb-3'>Puma</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, rerum! Earum qui facere pariatur, illum nihil blanditiis rerum. Commodi amet vitae nihil!</p>
                <p className='text-lg my-2 font-bold'>Discount: <span>5%</span> </p>
              <Link href={'/e-commerce'}><button className='btn-bg px-4 py-2 rounded-full mt-4'>Shop now</button></Link> 
                </div>
                <Image className='w-[200px] p-2' src={Puma} alt='img'></Image>
            </div>
            <div className='flex px-5 py-5 bg-white justify-around rounded-xl items-center shadow'>
                <div className='w-[300px]'>
                <p className='text-3xl font-bold mb-3'>Lululemon</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, rerum! Earum qui facere pariatur, illum nihil blanditiis rerum. Commodi amet vitae nihil!</p>
                <p className='text-lg my-2 font-bold'>Discount: <span>5%</span> </p>
                <button className='btn-bg px-4 py-2 rounded-full mt-4'>Shop now</button>
                </div>
                <Image className='w-[200px] p-2' src={Lululemon} alt='img'></Image>
            </div>
            <div className='flex px-5 py-5 bg-white justify-around rounded-xl items-center shadow'>
                <div className='w-[300px]'>
                <p className='text-3xl font-bold mb-3'>Speedo</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, rerum! Earum qui facere pariatur, illum nihil blanditiis rerum. Commodi amet vitae nihil!</p>
                <p className='text-lg my-2 font-bold'>Discount: <span>5%</span> </p>
                <button className='btn-bg px-4 py-2 rounded-full mt-4'>Shop now</button>
                </div>
                <Image className='w-[200px] p-2' src={Speedo} alt='img'></Image>
            </div>
            <div className='flex px-5 py-5 bg-white justify-around rounded-xl items-center shadow'>
                <div className='w-[300px]'>
                <p className='text-3xl font-bold mb-3'>Superdry</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, rerum! Earum qui facere pariatur, illum nihil blanditiis rerum. Commodi amet vitae nihil!</p>
                <p className='text-lg my-2 font-bold'>Discount: <span>5%</span> </p>
                <button className='btn-bg px-4 py-2 rounded-full mt-4'>Shop now</button>
                </div>
                <Image className='w-[200px] p-2' src={Superdry} alt='img'></Image>
            </div>
            <div className='flex px-5 py-5 bg-white justify-around rounded-xl items-center shadow'>
                <div className='w-[300px]'>
                <p className='text-3xl font-bold mb-3'>Uggs</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, rerum! Earum qui facere pariatur, illum nihil blanditiis rerum. Commodi amet vitae nihil!</p>
                <p className='text-lg my-2 font-bold'>Discount: <span>5%</span> </p>
                <button className='btn-bg px-4 py-2 rounded-full mt-4'>Shop now</button>
                </div>
                <Image className='w-[200px] p-2' src={Uggs} alt='img'></Image>
            </div>
            <div className='flex px-5 py-5 bg-white justify-around rounded-xl items-center shadow'>
                <div className='w-[300px]'>
                <p className='text-3xl font-bold mb-3'>Lacoste</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, rerum! Earum qui facere pariatur, illum nihil blanditiis rerum. Commodi amet vitae nihil!</p>
                <p className='text-lg my-2 font-bold'>Discount: <span>5%</span> </p>
                <button className='btn-bg px-4 py-2 rounded-full mt-4'>Shop now</button>
                </div>
                <Image className='w-[200px] p-2' src={Lacoste} alt='img'></Image>
            </div>
        </div>
    </div>
  )
}

export default page