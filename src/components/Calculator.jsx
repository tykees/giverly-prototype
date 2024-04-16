import React from 'react'

const Calculator = () => {
  return (
    <div className='container mx-auto mt-40'>
        <div>
        <p className='text-4xl font-extrabold border-l-8 border-green-300 border-spacing-5 pl-5'>Never Miss A Donation Opportunity</p>
        <p className='mt-4 text-lg'>Enter your annual spend on each category to estimate the total amount you could raise.</p>
        </div>
        <div className='flex flex-col justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='flex flex-col gap-3'>
                <div  className='flex justify-between items-center w-full md:w-[600px] h-[60px] rounded-full border'>
                <input className='outline-none w-[100px] md:w-[300px] ml-5 ' type="number" name="" id="" />
                <p className='pr-10 text-left'>Fashion <span>avg</span></p>
                </div>
                <div  className='flex justify-between items-center  w-full md:w-[600px] h-[60px] rounded-full border'>
                <input className='outline-none w-[100px] md:w-[300px] ml-5 ' type="number" name="" id="" />
                <p className='pr-10'>Fashion <span>avg</span></p>
                </div>
                <div  className='flex justify-between items-center  w-full md:w-[600px] h-[60px] rounded-full border'>
                <input className='outline-none w-[100px] md:w-[300px] ml-5 ' type="number" name="" id="" />
                <p className='pr-10'>Fashion <span>avg</span></p>
                </div>
                <div  className='flex justify-between items-center  w-full md:w-[600px] h-[60px] rounded-full border'>
                <input className='outline-none w-[100px] md:w-[300px] ml-5 ' type="number" name="" id="" />
                <p className='pr-10'>Fashion <span>avg</span></p>
                </div>
                <div  className='flex justify-between items-center  w-full md:w-[600px] h-[60px] rounded-full border'>
                <input className='outline-none w-[100px] md:w-[300px] ml-5 ' type="number" name="" id="" />
                <p className='pr-10'>Fashion <span>avg</span></p>
                </div>
                <div  className='flex justify-between items-center  w-full md:w-[600px] h-[60px] rounded-full border'>
                <input className='outline-none w-[100px] md:w-[300px] ml-5 ' type="number" name="" id="" />
                <p className='pr-10'>Fashion <span>avg</span></p>
                </div>
            </div>
            <div className='md:w-1/2'>
                <p>Total Raised</p>
                <p>$0.00</p>
            </div>
        </div>
    </div>
  )
}

export default Calculator