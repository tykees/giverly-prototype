import React from 'react';
import Image from 'next/image';
import DonImg from '../../public/donation.png'
const Donation = () => {
  return (
    <div>
        <div className='flex flex-col-reverse justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='md:w-1/1'>
                <Image className='w-[350px] ml-20 mt-10' src={DonImg} alt='img'/>
            </div>
            <div className='md:w-1/3'>
                <p className='text-3xl leading-10 font-bold'>Raise Free Donations</p>
                <p className='text-xl'>The retailer gives your cause a free donation for every purchase you make</p>
            </div>
        </div>
    </div>
  )
}

export default Donation