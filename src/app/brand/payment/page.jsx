import React from 'react';
import Image from 'next/image';
import Visa from '../../../../public/visa.png'
import Link from 'next/link';

const page = () => {
  return (
    <div className='mt-40'>
        <div className='border border-slate-400 max-w-[400px] px- py- mx-auto'>
            <div className='flex justify-between py-2 px-2 bg-slate-200 items-center border-b border-slate-400'>
            <p className='text-sm'>Debit and Credit Card</p>
            <Image className='w-[100px]' src={Visa}></Image>
            </div>
            <div className='flex flex-col justify-center mt-10 items-center'>
            <select className='outline-none w-[380px] h-[40px] rounded-lg border border-slate-400 pl-5 mb-10'  name="" id="">
                <option value="RSPCA South Australia">RSPCA UAE</option>
                <option value="Hen House Coop">Hen House Coop UAE</option>
                <option value="99% Marley">99% Marley UAE</option>
                <option value="Amalia Maliaka ">Amalia Maliaka UAE</option>
                <option value="In2EdAfrica">In2EdUAE</option>
                <option value="Maisha Flow">Maisha Flow UAE</option>
                <option value="Forevermore Foundation">Forevermore Foundation UAE</option>
            </select>
            {/* <p>Discount: 5%</p> */}
            </div>
            <div className='flex flex-col justify-center gap-5 items-center'>
                <input className='outline-none w-[380px] h-[40px] rounded-lg border border-slate-400 pl-5 ' placeholder='Holder Name' type="text" name="" id="" />
                <input className='outline-none w-[380px] h-[40px] rounded-lg border border-slate-400 pl-5 ' placeholder='Card Number' type="number" name="" id="" />
                <div className='flex justify-between gap-20 items-center'>
                <input className='outline-none w-[180px] h-[40px] rounded-lg border border-slate-400 pl-5 ' placeholder='Date' type="date" name="" id="" />
                <input className='outline-none w-[120px] h-[40px] rounded-lg border border-slate-400 pl-5 ' placeholder='CVV' type="number" name="" id="" />
                </div>
                <div className='flex justify-start gap-4 items-center'>
                <input type="checkbox" name="" id="" />
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisici.</p>
                </div>
                <button className='bg-green-400 w-[380px] py-3 mb-2'>Pay Now</button>
            </div>
        </div>
        <div className='flex justify-center mt-4 gap-4 w-[400px] mx-auto items-center py-2 px-2 bg-slate-200 border border-slate-400'>
            <input  type="checkbox" name="" id="" />
          <Link href={'/brand/crypto-payment'}> <p className='text-sm'>Pay With Crypto</p></Link> 
        </div>
    </div>
  )
}

export default page