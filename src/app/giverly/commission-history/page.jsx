import React from 'react';
import Image from 'next/image';
import { IoSettingsOutline } from "react-icons/io5";
import Tee from './assets/tee.png';
import Lululemon from './assets/lululemonlogo.jpeg';
import Speedologo from './assets/speedologo.png';
import Tina from './assets/tina.jpg';
import Dre from './assets/dre.png';
import Coco from './assets/coco.webp';
import Mich from './assets/mich.png';
import Michy from './assets/michy.png';
import Icons from './assets/icons.png';
import Nakmoto from './assets/nakmoto.jpeg';
import NFT from './assets/nft.jpeg';
import Hive from './assets/hive.png';
import Jessica from './assets/jessica.png';
import Man from './assets/man.jpg';
import Father from './assets/father.jpeg'

import Link from 'next/link';


const users =[
    {
        userImg: Tee,
        userName: "James Bond",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Lululemon,
        userName: "Lululemon",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Speedologo,
        userName: "Speedo",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Tina,
        userName: "Tina Thompson",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Dre,
        userName: "Dre Collins",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Coco,
        userName: "Coco Melon",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Mich,
        userName: "Mich Thompson",
        userStatus: "inactive",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Michy,
        userName: "Michy James",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Icons,
        userName: "Icons",
        userStatus: "inactive",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Nakmoto,
        userName: "Satoshi Nakamoto",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: NFT,
        userName: "Nina Thompson",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Hive,
        userName: "Turki son",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Jessica,
        userName: "Jessica Omoki",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Man,
        userName: "M.O.G",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
    {
        userImg: Father,
        userName: "Father Man",
        userStatus: "active",
        commission: "$30",
        lastTrac: "23-02-2023"
    }, 
]



const page = () => {
  return (
    <div>
        <div className='bg-slate-900 pb-10 pt-40'>
            <div className='flex justify-around items-center mb-10'>
                <div>
                <p className='text-xl text-white font-bold'>Commission History</p>
                <p className='text-slate-500'>History of commision recieved from Brands.</p>
                </div>
                <div>
                <input className='outline-none w-[300px] h-[40px] mr-6 rounded-lg border border-slate-400 pl-5' placeholder='Search Brand' type="text" name="" id="" />
                <button className='btn-bg px-8 w-[150px] rounded-lg mt-2 py-2'>Search</button>
                </div>
            </div>
            <div className='flex justify-center text-slate-400 items-center gap-5'>
            <Link href={'/giverly/database-users-brands'}><button className='btn- text-sm px-3 py-2 rounded-md'>All users</button></Link> 
            <Link href={'/giverly/donation-to-charity'}> <button className='btn-  text-sm px-3 py-2 rounded-md'>Donations to Charity</button></Link>
             <Link href={'/giverly/commission-history'}><button className='btn-  text-sm px-3 py-2 rounded-md'>Commision History</button></Link>
              <button className='btn-  text-sm px-3 py-2 rounded-md'>Contracts</button>
           <Link href={'/giverly/graphical-dashboard'}> <button className='btn-  text-sm px-3 py-2 rounded-md'>Analytics</button></Link>

            </div>
        </div>
        <div className='flex justify-center items-center'>
            <table className='table-auto text-center shadow-lg w-[1200px]'>
                <thead className='text-start font-bold'>
                    <tr>
                        <th className='border-t border-b  px-5 py-2'>Brands</th>
                        {/* <th className='border-t border-b  px-10 py-2'>Name</th> */}
                        <th className='border-t border-b  px-5 py-2'>Status</th>
                        <th className='border-t border-b  px-5 py-2'>Total Commission</th>
                        <th className='border-t border-b  px-5 py-2'>Last Tranc.</th>
                        <th className='border-t border-b  px-5 py-2'>Expand</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td className='border-t  flex justify-start items-center gap-2 px-10 py-2'><Image className='w-[30px] rounded-xl' src={item.userImg} alt='img'></Image>{item.userName}</td>
                            <td className='border-t border-b  px-2 py-2'>
                                {item.userStatus === "inactive" ?  
                               <div className='bg-red-400 text-sm rounded-full'>{item.userStatus}</div>  : 
                               <div className='bg-green-400 text-sm  rounded-full'>{item.userStatus}</div>  
                               }
                            </td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.commission}</td>
                            <td className=' flex justify-center items-center gap-1 border-b  px-5 py-2'>{item.lastTrac}</td>
                            <td className='border-t border-b w-[30px] px-10 py-1 my-3 rounded-full text-sm cursor-pointer text-green-600'>View</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default page;