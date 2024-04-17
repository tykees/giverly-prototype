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


const users =[
    {
        userImg: Tee,
        userName: "James Bond",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
    {
        userImg: Lululemon,
        userName: "Lululemon",
        userStatus: "Logged in",
        userType: "Brand"
    }, 
    {
        userImg: Speedologo,
        userName: "Speedo",
        userStatus: "Logged out",
        userType: "brand"
    }, 
    {
        userImg: Tina,
        userName: "Tina Thompson",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
    {
        userImg: Dre,
        userName: "Dre Collins",
        userStatus: "Logged out",
        userType: "Customer"
    }, 
    {
        userImg: Coco,
        userName: "Coco Melon",
        userStatus: "Logged in",
        userType: "Brand"
    }, 
    {
        userImg: Mich,
        userName: "Mich Thompson",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
    {
        userImg: Michy,
        userName: "Michy James",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
    {
        userImg: Icons,
        userName: "Icons",
        userStatus: "Logged in",
        userType: "Brand"
    }, 
    {
        userImg: Nakmoto,
        userName: "Satoshi Nakamoto",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
    {
        userImg: NFT,
        userName: "Nina Thompson",
        userStatus: "Logged out",
        userType: "Customer"
    }, 
    {
        userImg: Hive,
        userName: "Turki son",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
    {
        userImg: Jessica,
        userName: "Jessica Omoki",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
    {
        userImg: Man,
        userName: "M.O.G",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
    {
        userImg: Father,
        userName: "Father Man",
        userStatus: "Logged in",
        userType: "Customer"
    }, 
]



const page = () => {
  return (
    <div>
        <div className='bg-slate-900 pb-10 pt-40'>
            <div className='flex justify-around items-center mb-10'>
                <div>
                <p className='text-xl text-white font-bold'>User Management</p>
                <p className='text-slate-500'>Account management dashboard for brand and customers.</p>
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
                        <th className='border-t border-b  px-5 py-2'>Users</th>
                        {/* <th className='border-t border-b  px-10 py-2'>Name</th> */}
                        <th className='border-t border-b  px-5 py-2'>Status</th>
                        <th className='border-t border-b  px-5 py-2'>UserType</th>
                        <th className='border-t border-b  px-5 py-2'>Actions</th>
                        <th className='border-t border-b  px-5 py-2'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td className='border-t  flex justify-start items-center gap-2 px-10 py-2'><Image className='w-[30px] rounded-xl' src={item.userImg} alt='img'></Image>{item.userName}</td>
                            <td className='border-t border-b  px-2 py-2'>
                                {item.userStatus === "Logged out" ?  
                               <div className='bg-red-400 text-sm rounded-full'>{item.userStatus}</div>  : 
                               <div className='bg-green-400 text-sm  rounded-full'>{item.userStatus}</div>  
                               }
                            </td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.userType}</td>
                            <td className=' flex justify-center items-center gap-1 border-b  px-5 py-2'> <IoSettingsOutline className='' /> settings</td>
                            <td className='border-t border-b w-[30px] px-10 py-1 my-3 rounded-full text-sm text-red-600'>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default page;