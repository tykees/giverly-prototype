import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container text-center mx-auto mt-40 my-18'>
            <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-3xl font-bold'>Complaint Form</p>
         
            <label className='text-sm' htmlFor="">Age Category</label>
            <select className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5 ' name="" id="">
            <option value="Below 18">Below 18 Years</option>
                <option value="18 - 35">18 - 35 Years</option>
                <option value="Above 35">Above 35 years</option>
            </select>
            {/* <label htmlFor="">Email</label> */}
            <input className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='Full Name'  type="text" required name="" id="" />
            <input className='outline-none w-[300px] h-[40px] rounded-full border border-slate-900 pl-5 ' placeholder='email'  type="Email" required name="" id="" />
            {/* <label htmlFor="">Password</label> */}
            <textarea  className='outline-none  rounded-2xl border border-slate-900 pl-5'  name="" id="" cols="30" rows="10"></textarea>
       
            <Link href={'/submited'}>
            <button className='btn-bg px-12 w-[200px] rounded-full mt-5 py-3'>Submit</button>
            </Link>
        </div>
    </div>
  )
}

export default page