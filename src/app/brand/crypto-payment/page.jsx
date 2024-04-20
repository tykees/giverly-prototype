import React from 'react';
import Image from 'next/image';
import Stripe from '../../../../public/stripe.png'
import { FaBitcoin } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa6";
import { TbCoin } from "react-icons/tb";


const page = () => {
  return (
    <div className='mt-40'>
        <div className='border border-slate-400 max-w-[400px] px- py- mx-auto'>
        <Image className='w-[250px] mx-auto' src={Stripe}></Image>
            <div className='flex flex-col justify-center mt-10 items-center'>
            <p>Discount: 5%</p>
            <select className='outline-none w-[380px] h-[40px] rounded-lg border border-slate-400 pl-5 mb-10'  name="" id="">
                <option value="RSPCA South Australia">RSPCA South Australia</option>
                <option value="Hen House Coop">Hen House Coop</option>
                <option value="99% Marley">99% Marley</option>
                <option value="Amalia Maliaka ">Amalia Maliaka</option>
                <option value="In2EdAfrica">In2EdAfrica</option>
                <option value="Maisha Flow">Maisha Flow</option>
                <option value="Forevermore Foundation">Forevermore Foundation</option>
            </select>
            <p className='text-slate-400'>Amount to be paid</p>
            <p className='text-3xl border-b border-blue-400 mb-4'>$230.20</p>
            <div className='flex flex-col justify-start items-center'>
            <button className='flex justify-start items-center gap-4 pl-10 text-lg bg-yellow-600 text-yellow-100 w-[380px] py-2 mb-2'> <FaBitcoin /> Bitcoin</button>
            <button className='flex justify-start items-center gap-4 pl-10 text-lg bg-black text-slate-300 w-[380px] py-3 mb-2'><FaEthereum /> Ethereum</button>
            <button className='flex justify-start items-center gap-4 pl-10 text-lg bg-green-700 text-green-100 w-[380px] py-3 mb-2'> <TbCoin />USDT</button>
            </div>
            </div>
            <div className='flex flex-col justify-center gap-5 items-center'>
                <div className='flex justify-start gap-4 items-center'>
                <input type="checkbox" name="" id="" />
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisici.</p>
                </div>
                <button className='bg-green-400 w-[380px] py-3 mb-2'>Pay Now</button>
            </div>
        </div>
    </div>
  )
}

export default page