import React from 'react';
import Image from 'next/image';
import { IoSettingsOutline } from "react-icons/io5";



const users =[
    {
        
        userName: "James Bond",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
       
        userName: "Lululemon",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",

    }, 
    {
      
        userName: "Speedo",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
      
        userName: "Tina Thompson",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
       
        userName: "Dre Collins",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
       
        userName: "Coco Melon",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
        
        userName: "Mich Thompson",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
       
        userName: "Michy James",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",

    }, 
    {
      
        userName: "Icons",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
        
        userName: "Satoshi Nakamoto",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
        
        userName: "Nina Thompson",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
       
        userName: "Turki son",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",

    }, 
    {
        
        userName: "Jessica Omoki",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
       
        userName: "M.O.G",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
    {
        userName: "Father Man",
        credit: "$290",
        commission: "13%",
        transDate: "12-2-2024",
    }, 
]



const page = () => {
  return (
    <div>
        <div className='bg-slate-900 pb-10 pt-40'>
            <div className='flex justify-around items-center mb-10'>
                <div>
                <p className='text-xl text-white font-bold'>Welcome @Brand_Name</p>
                <p className='text-slate-500'>Brand management system.</p>
                </div>
                <div>
                <input className='outline-none w-[300px] h-[40px] mr-6 rounded-lg border border-slate-400 pl-5' type="text" name="" id="" />
                <button className='btn-bg px-8 w-[150px] rounded-lg mt-2 py-2'>Search</button>
                </div>
            </div>
          
        </div>
        <div className='flex justify-center items-center'>
            <table className='table-auto text-center shadow-lg w-[1200px]'>
                <thead className='text-start font-bold'>
                    <tr>
                        <th className='border-t border-b  px-5 py-2'>Customer Name</th>
                        {/* <th className='border-t border-b  px-10 py-2'>Name</th> */}
                        <th className='border-t border-b  px-5 py-2'>Credit</th>
                        <th className='border-t border-b  px-5 py-2'>Commission</th>
                        <th className='border-t border-b  px-5 py-2'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td className='border-t  flex justify-start items-center gap-2 px-10 py-2'>{item.userName}</td>
                            <td className='border-t border-b  px-2 py-2'>{item.credit}
                            </td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.commission}</td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.transDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default page;