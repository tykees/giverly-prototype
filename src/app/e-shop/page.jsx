import React from 'react'
import Image from 'next/image'
// import Superdry from '../../../public/superdrylogo.png';
// import Speedo from '../../../public/speedologo.png';
// import Lulu from '../../../public/lululemonlogo.png';
// import Uggsn from '../../../public/uggslogo.png';
import Link from 'next/link';
import Nikered from './assets/nikered.png';
import Nike2 from './assets/nike2.png';
import Balan from './assets/bal.png';
import NikeLemon from './assets/nikelemon.png'
import Kia from './assets/kia.png';
import Burberry from './assets/burberry.png'
import BurberryPef from './assets/burberrypef.png'

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
        <div className='mt-40'>

        </div>
        <p className='text-center text-3xl my-4 font-extrabold'>Promotion Page</p>
        <div className='flex justify-start gap-5 flex-wrap items-center'>
            {shopItems.map((item, index)=> (
                <div className='border w-full mx-4 md:w-[250px] flex flex-col justify-center items-center hover:border-green-300 min-h-[350px] px-3 py-2 shadow-lg' key={index}>
                    <Image className='w-[150px]'  src={item.productImg} alt=''/>
                   
                    <p className='text-center'>{item.desc}</p>
                    <p className='text-center text-xl font-bold mt-4'>{item.price}</p>
                  <Link href={'customer/rating'}> <button className='btn-bg px-20 py-2 rounded-full mt-4'>Buy</button></Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page