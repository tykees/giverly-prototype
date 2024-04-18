import React from 'react'
import Image from 'next/image'
import Superdry from '../../../../public/superdrylogo.png';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import Link from 'next/link';

import { IoLocationOutline } from "react-icons/io5";


const page = () => {
  return (
    <>
    <div className='user-details'>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-40 justify-center items-start md:justify-around md:flex-row mx-auto space-y-0 md:space-y-0 pb-40 pt-40'>
            <div>
                <Image className='w-[350px] md:w-[200px] shadow-xl' src={Superdry} alt='userimg'></Image>
                <p className='border-b border-slate-500 w-[200px] mt-5'></p>
                <p className='text-2xl'>SuperDry Brand</p> 
                <p className='flex justify-start gap-1 items-center mt-3 text-slate-500 s'> <IoSettingsOutline /> Setting</p>
                <p className='flex justify-start gap-1 items-center mt-2 text-slate-500 '> <FaRegMoneyBill1 /> Billing</p>
                {/* <p className='mt-10 font-bold'>Skills</p>
                <ul className='text-sm text-slate-500'>
                    <li>Web design</li>
                    <li>Branding</li>
                    <li>Content writing</li>
                    <li>Marketing</li>
                </ul> */}
            </div>
            <div>
                <div className='flex justify-start items-center'>
                <p className='flex text-slate-500 text-sm justify-start items-center'><IoLocationOutline /> Dubai, UAE</p>
                </div>
                {/* <p className='text-slate-500 text-sm'>Software Developer</p> */}
                <p className='mt-5'>Brand Rank</p>
                <p className='flex justify-start items-center gap-2 text-xl text-white'>8.6<FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
                <div className='flex justify-start gap-2 items-start'>
                    <button className='mt-10 text-center bg-slate-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
                    <button className='mt-10 text-center bg-white text-slate-600 px-3 py-2 rounded-lg' >Discount</button>
                    <button className='mt-10 text-center bg-slate-500 text-white px-3 py-2 rounded-lg'>Update Store</button>
                </div>
                <p className='flex mt-5 border-b border-slate-500 pb-3 justify-start items-center gap-1'><FaRegUser />About</p>
                
                <p className='text-sm text-slate-400 mt-4'>Contact Information</p>
                <p className='mt-5'>Phone: <span className='ml-10 text-slate-500'>+61 406 902 822</span></p>
                <p className='mt-5'>Address <span className='ml-10'>12 John Street, Kato city.</span></p>
                <p className='mt-5'>Email <span className='ml-10 text-slate-500'>admin@superdry.com</span> </p>

                <p className='text-sm text-slate-400 mt-4'>Basic Information</p>
                <p className='mt-5'>Date of Registration <span className='ml-10'>17th April 2020</span></p>
                {/* <p className='mt-5'>Gender <span className='ml-10'>Female</span></p> */}
            </div>
            <div>
            <div>
                <p className='text-xl mb-3 font-bold'>Account Management</p>
                <div className='px-3 pt-2 py-3 bg-slate-500 rounded-lg shadow'>
                <FaRegMoneyBill1 className='text-3xl text-slate-100' />
                <p className='text-sm mb-2 text-white font-bold'>Credit to Giverly: <span className='text-green-300'>$40,000</span></p>
                <p className='text-sm text-white font-bold'>Last Credit to Giverly: <span className='text-green-300'>$2,000</span></p>
                <p className='text-sm text-white mt-2 font-bold'>Date: <span className='text-green-300'>22-12-2024</span></p>
              <Link href={'/brand/brand-transaction-dashboard'}> <p className='my-2 border shadow-lg text-slate-200 text-center hover:text-green-400 hover:border-green-400 rounded-md px-3 cursor-pointer'>All Transactions</p></Link> 
                </div>
               
                <p>Payment Gateway</p>
                <div className='py-5 px-3 my-2 shadow rounded-lg bg-slate-100'>
                <FaRegMoneyBill1 className='text-3xl text-slate-400' />
                <p className='border shadow-lg mb-5 rounded-md px-2 text-sm py-2'>Debit/Credit</p>
                <p className='border shadow-lg rounded-md px-2 text-sm py-2'>Cryptocurrency</p>
                <p className='text-md mt-3 font-bold'>Total Credit: USD $19,089.03</p>
                <Link href={'/brand/brand-dashboard'}><p className='my-2 border shadow-lg text-slate-200 text-center hover:text-green-400 hover:border-green-400 rounded-md px-3 cursor-pointer'>All Transactions</p></Link>  

                </div>
                <p className='text-slate-500 py-1'>Update Discount</p>
                <input className='accent-slate-600 w-full' type="range" name="" id="" />
                <p className='mt-5 text-center bg-red-600 text-white px-4 py-2 rounded-lg'>Delete Acct</p>

            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default page