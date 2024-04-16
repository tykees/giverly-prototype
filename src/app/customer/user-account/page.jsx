import React from 'react'
import Image from 'next/image'
import Tina from '../../../../public/tina.jpg';
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
        <div className='flex flex-col gap-40 justify-center items-center md:justify-around md:flex-row mx-auto space-y-0 md:space-y-0 pb-40 pt-40'>
            <div>
                <Image className='w-[350px] md:w-[200px] shadow-xl' src={Tina} alt='userimg'></Image>
                <p className='border-b border-slate-500 w-[200px] mt-5'></p>
                <p className='flex justify-start gap-1 items-center mt-3 text-slate-500 s'> <IoSettingsOutline /> Setting</p>
                <p className='flex justify-start gap-1 items-center mt-2 text-slate-500 '> <FaRegMoneyBill1 /> Billing</p>
                <p className='mt-10 font-bold'>Skills</p>
                <ul className='text-sm text-slate-500'>
                    <li>Web design</li>
                    <li>Branding</li>
                    <li>Content writing</li>
                    <li>Marketing</li>
                </ul>
            </div>
            <div>
                <div className='flex justify-start items-center'>
                <p className='text-2xl'>Tina Thompson</p> 
                <p className='flex text-slate-500 text-sm justify-start items-center'><IoLocationOutline /> Dubai, UAE</p>
                </div>
                {/* <p className='text-slate-500 text-sm'>Software Developer</p> */}
                <p className='mt-5'>User Rank</p>
                <p className='flex justify-start items-center gap-2 text-xl text-white'>8.6<FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
                <div className='flex justify-start gap-2 items-start'>
                    <button className='mt-10 text-center bg-slate-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
                    <button className='mt-10 text-center bg-white text-slate-600 px-3 py-2 rounded-lg' >Contacts</button>
                    <button className='mt-10 text-center bg-slate-500 text-white px-3 py-2 rounded-lg'>Report User</button>
                </div>
                <p className='flex mt-5 border-b border-slate-500 pb-3 justify-start items-center gap-1'><FaRegUser />About</p>
                
                <p className='text-sm text-slate-400 mt-4'>Contact Information</p>
                <p className='mt-5'>Phone: <span className='ml-10 text-slate-500'>+61 406 902 822</span></p>
                <p className='mt-5'>Address <span className='ml-10'>12 John Street, Kato city.</span></p>
                <p className='mt-5'>Email <span className='ml-10 text-slate-500'>tinathomption@devus.com</span> </p>

                <p className='text-sm text-slate-400 mt-4'>Basic Information</p>
                <p className='mt-5'>Birthday <span className='ml-10'>17th April 1990</span></p>
                <p className='mt-5'>Gender <span className='ml-10'>Female</span></p>
            </div>
            <div>
            <FaRegMoneyBill1 className='text-3xl text-slate-500' />
            <div>
                <p className='text-xl font-bold'>Linked card</p>
                <p className='text-slate-500 text-2xl'>4288 36** **** 9028</p>
                <p className='text-slate-500'>Tina Thompson</p>

                <div className='py-5 px-8 my-2 bg-green-200'>
                <p>Available Balance</p>
                <p className='text-2xl font-bold'>USD $89.03</p>
                </div>

               <Link href={'/customer/customer-transaction-dashboard'}> <p className='text-slate-500 py-1'>View Transactions</p></Link>
                <p className='text-slate-500 py-1'>Billing address</p>
                <p className='text-red-500 py-1'>Remove Card</p>

                <p  className='text-xl font-bold'>Other payments</p>
                <p className='font-bold mt-5 text-md'>Bitcoin</p>
                <p className='text-md text-slate-500'>0xb1GeE0eh555f55a7650467280cb5b8776d2f2ad6</p>

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