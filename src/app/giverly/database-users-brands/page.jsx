import React from 'react';
import Image from 'next/image';
import { IoSettingsOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";


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
        userStatus: "active",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Lululemon,
        userName: "Lululemon",
        userStatus: "active",
        userType: "Brand",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Speedologo,
        userName: "Speedo",
        userStatus: "active",
        userType: "Brand",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Tina,
        userName: "Tina Thompson",
        userStatus: "inactive",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Dre,
        userName: "Dre Collins",
        userStatus: "inactive",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Coco,
        userName: "Coco Melon",
        userStatus: "active",
        userType: "Brand",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Mich,
        userName: "Mich Thompson",
        userStatus: "active",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Michy,
        userName: "Michy James",
        userStatus: "active",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Icons,
        userName: "Icons",
        userStatus: "active",
        userType: "Charity",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Nakmoto,
        userName: "Satoshi Nakamoto",
        userStatus: "active",
        userType: "Charity",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: NFT,
        userName: "Nina Thompson",
        userStatus: "inactive",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Hive,
        userName: "Turki son",
        userStatus: "active",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Jessica,
        userName: "Jessica Omoki",
        userStatus: "active",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Man,
        userName: "M.O.G",
        userStatus: "Logged in",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Father,
        userName: "Father Man",
        userStatus: "active",
        userType: "Customer",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
]



const page = () => {
  return (
    <div>
        <div className='bg-slate-900 pb-10 pt-40'>
            <div className='flex justify-around items-center mb-10'>
                <div>
                <p className='text-xl text-white font-bold'>All Users Database Management</p>
                <p className='text-slate-500'>Account management BD for all userss.</p>
                </div>
                <div>
                    <select className='outline-none w-[300px] h-[40px] mr-6 rounded-lg border border-slate-400 pl-5' name="" id="">
                        <option value="Customers">Customers</option>
                        <option value="Brands">Brands</option>
                        <option value="Charity">Charity</option>
                    </select>
                <button className='btn-bg px-8 w-[150px] rounded-lg mt-2 py-2'>Search</button>
                </div>
            </div>
          
        </div>
        <div className='flex justify-center items-center'>
            <table className='table-auto text-center shadow-lg w-[1200px]'>
                <thead className='text-start font-bold'>
                    <tr>
                        <th className='border-t border-b  px-5 py-2'>All Users</th>
                        <th className='border-t border-b  px-5 py-2'>Status</th>
                        <th className='border-t border-b  px-5 py-2'>Role</th>
                        <th className='border-t border-b  px-5 py-2'>Phone</th>
                        <th className='border-t border-b  px-5 py-2'>DOB</th>
                        <th className='border-t border-b  px-5 py-2'>Email</th>
                        <th className='border-t border-b  px-5 py-2'>City</th>
                        <th className='border-t border-b  px-5 py-2'>Actions</th>
                        <th className='border-t border-b  px-5 py-2'>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td className='border-t text-sm  flex justify-start items-center gap-2 px-10 py-2'><Image className='w-[30px] rounded-lg' src={item.userImg} alt='img'></Image>{item.userName}</td>
                            <td className='border-t border-b  px-2 py-2'>
                                {item.userStatus === "inactive" ?  
                               <div className='bg-red-400 text-sm rounded-full'>{item.userStatus}</div>  : 
                               <div className='bg-green-400 text-sm  rounded-full'>{item.userStatus}</div>  
                               }
                            </td>
                            <td className='border-t border-b text-sm px-5 py-2'>
                                {item.userType === "Brand" ?
                                <div className='bg-orange-400 text-sm rounded-full'>{item.userType}</div> :
                                item.userType === "Customer" ?
                                <div className='bg-slate-300 text-sm rounded-full'>{item.userType}</div> :
                                <div className='bg-cyan-500 text-sm rounded-full'>{item.userType}</div> 
                                }
                                </td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.userNum}</td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.userDOB}</td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.userEmail}</td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.userCity}</td>
                            <td className=' flex justify-center items-center gap-1 border-b  px-5 py-2'> <IoSettingsOutline className='' /> settings</td>
                            <td className='border-t border-b w-[30px] px-5 py-1 my-3 text-md text-slate-600'>
                             <div className='flex justify-center items-center gap-2'><MdDeleteOutline/> <GrUpdate/></div> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default page;