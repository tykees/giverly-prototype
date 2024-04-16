import React from 'react'
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineDiscount } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";


const page = () => {
  return (
    <>
    <div className='dash_bg shadow-md py-10 mt-40'>
        <p className='text-3xl text-center py-5'>Brand Dashboard</p>
        <div className='flex justify-center items-center gap-5 flex-wrap'>
            <div className='border flex flex-col justify-center items-center w-[300px] h-[120px] px-5 py-5 rounded-lg  bg-slate-500 shadow-lg'>
            <MdDateRange className='text-green-100 text-2xl' />
                <p className='text-green-100 text-md'>Date Signed up:</p>
                <p className='text-sm text-green-100'>17th Jan 2024</p>
            </div>
            <div className='border flex flex-col justify-center items-center w-[300px] h-[120px] px-5 py-5 rounded-lg  bg-green-300 shadow-lg'>
            <GiShoppingCart className='text-slate-500 text-2xl' />
                <p className=' border border-slate-500 shadow-lg text-slate-500 py-2 px-5'>Goto Cart </p>
            </div>
            <div className='border text-green-100  text-center w-[300px] h-[120px] px-5 py-5 rounded-lg bg-slate-500 shadow-lg'>
            <MdOutlineDiscount className='' />
                <label htmlFor="">Adjust Discount</label> <br/>
            <span>Min</span> <input className='text-green-900 bg-black' type="range" name="" id="" /> <span>Max</span>
            </div>
        </div>
        <div className='flex justify-center gap-5 items-center'>
        <div className='flex flex-col'>
        <p  className='text-xl text-center mt-10'>Account Management</p>
        <div className='border w-[300px] h-[180px] px-5 py-5 rounded-lg text-slate-500  bg-green-300 shadow-lg'>
        <MdOutlineAccountBalanceWallet className='text-4xl ' />
                <p className=''>Credit to Giverly: <span>$42,290.19</span></p>
                <p className='pt-1'>Date: <span>27th May 1963</span></p>
                <p className='pt-1'>Amount: <span>$90,002</span></p>
        </div>
        </div>
        <div className='flex flex-col'>
        <p  className='text-xl text-center mt-10'>Payment Gateway</p>
        <div className='border text-center w-[300px] text-green-100 h-[180px] px-5 py-5 rounded-lg  bg-slate-500 shadow-lg'>
                 <p className='text-4xl text-center'><FaMoneyCheckAlt /></p>
                <p className='border shadow-lg py-2 px-4 cursor-pointer'>Debit/Credit <span></span></p>
                <p className='border shadow-lg py-2 px-4 mt-5 cursor-pointer'>Cryptocurrency <span></span></p>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default page