import React from 'react'
import Image from 'next/image'

import Nikered from './assets/nikered.png';
import Nike2 from './assets/nike2.png';
import Balan from './assets/bal.png';
import NikeLemon from './assets/nikelemon.png'
import Kia from './assets/kia.png';
import Burberry from './assets/burberry.png'
import { FaEdit } from "react-icons/fa";

const shopItems = [
    {
        productImg: Nikered,
        productName: "Nike 092",
        desc: "1992 Legend Nike Collection",
        price: "$567"
    },

    {
        productImg: Nike2,
        productName: "Nike 102",
        desc: "2008 Nike Collection",
        price: "$967"
    },

    {
        productImg: NikeLemon,
        productName: "Nike 081",
        desc: "2012 Nike Collection",
        price: "$1,267"
    },

    {
        productImg: Balan,
        productName: "Balaenciaga 002",
        desc: "2015 Legend Balenciaga Collection",
        price: "$2,360"
    },

    {
        productImg: Kia,
        productName: "Balaenciaga 022",
        desc: "2012 Balenciaga back pack",
        price: "$1,060"
    },
    {
        productImg: Burberry,
        productName: "Burberry 1002",
        desc: "2016 Burberry SoG Collection",
        price: "$6,360"
    },

] 

const page = () => {
  return (
    <div className='container mx-auto'>
        <div className=' mt-40'>

        </div>
        <p className='text-center text-2xl font-bold py-2'>Promotion Page Update</p>
        <div className=' justify-start items-center'>
            {shopItems.map((item, index)=> (
                <div className='flex justify-between mb-5 items-center border px-3 py-2 shadow-lg' key={index}>
                    <Image className='w-[150px]' src={item.productImg} alt=''/>
                    <p className='text-md'>{item.desc}</p>
                    <p className='text-xl font-bold'>{item.price}</p>
                    < FaEdit/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page