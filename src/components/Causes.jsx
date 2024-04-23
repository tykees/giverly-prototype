import React from 'react';
import Image from 'next/image';
import RSPCA from '../../public/rspca.jpeg';
import Henhouse from '../../public/henhouse.jpeg';
import nintynine from '../../public/99.png';
import Amalia from '../../public/amalia.png';
import Africa from '../../public/africa.png';
import  Flowlogo from '../../public/flowlogo.jpeg';

const Causes = () => {
  return (
    <div>
        <div className='container mx-auto mt-40'>
        <p className='text-4xl font-extrabold border-l-8 border-green-300 border-spacing-5 pl-5'>Never Miss A Donation Opportunity</p>
            <p className='text-lg mt-3'>Read about the causes our charities work for and choose a cause to support with your raised funds.</p>
            <button className='btn-bg px-12 rounded-full mt-5 py-3'>View All</button>
        </div>
        <div className='flex flex-col-reverse justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='flex flex-col justify-center items-center w[120px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={RSPCA} alt='img'/>
                <p className='mt-5 px-2 w-[180px]'>RSPCA South Australia</p>
            </div>
            <div className='flex flex-col justify-center items-center w[120px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={Henhouse} alt='img'/>
                <p className='mt-5 px-2 w-[180px]'>Hen House Coop</p>
            </div>
            <div className='flex flex-col justify-center items-center w[120px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={nintynine} alt='img'/>
                <p className='mt-5 px-2 w-[180px]'>99% Marley</p>
            </div>
            <div className='flex flex-col justify-center items-center w[120px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={Amalia} alt='img'/>
                <p className='mt-5 px-2 w-[180px]'>Amalia Maliaka</p>
            </div>
            <div className='flex flex-col justify-center items-center w[120px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={Africa} alt='img'/>
                <p className='mt-5 px-2 w-[180px]'>In2EdAfrica</p>
            </div>
            <div className='flex flex-col justify-center items-center w[120px] h-[150px] border rounded-lg shadow-md'>
                <Image className='overimg rounded-full w-[100px]' src={Flowlogo} alt='img'/>
                <p className='mt-5 px-2 w-[180px]'>Maisha Flow</p>
            </div>
        </div>
    </div>
  )
}

export default Causes