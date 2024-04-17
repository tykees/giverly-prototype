import React from 'react'
import Image from 'next/image';
import { IoSettingsOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { MdOutlineReport } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
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
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Lululemon,
        userName: "Lululemon",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Speedologo,
        userName: "Speedo",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Tina,
        userName: "Tina Thompson",
        userStatus: "inactive",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Dre,
        userName: "Dre Collins",
        userStatus: "inactive",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Coco,
        userName: "Coco Melon",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Mich,
        userName: "Mich Thompson",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Michy,
        userName: "Michy James",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Icons,
        userName: "Icons",
        userStatus: "active",
        userNum: "+244 783 000",
        userDOB: "17-03-1995",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Nakmoto,
        userName: "Satoshi Nakamoto",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: NFT,
        userName: "Nina Thompson",
        userStatus: "inactive",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Hive,
        userName: "Turki son",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Jessica,
        userName: "Jessica Omoki",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Man,
        userName: "M.O.G",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Father,
        userName: "Father Man",
        userStatus: "active",
        userNum: "+244 783 000",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
]


const page = () => {
  return (
    <div className='pt-30 mt-24'>
        <div className='flex justify-around items-start'>
                <div className='left-side pt-10 shadow-lg'>
                    <ul className='mx-2'>
                        <li className='flex justify-start items-center gap-3 text-slate-600 py-3 pl-2 rounded-lg shadow-lg mb-5'> <LuLayoutDashboard /> Dashboard</li>
                        <li className='flex justify-start items-center gap-3 text-slate-600 py-3 pl-2 rounded-lg shadow mb-5'> <ImProfile />Profile</li>
                        <li className='flex justify-start items-center gap-3 text-slate-600 py-3 pl-2 rounded-lg shadow mb-5'> <MdOutlineReport />Report</li>
                        <li className='flex justify-start items-center gap-3 text-slate-600 py-3 pl-2 rounded-lg shadow mb-5'> <MdOutlineMessage />Messages</li>
                        <li className='flex justify-start items-center gap-3 text-slate-600 py-3 pl-2 rounded-lg shadow mb-5'> <IoSettingsOutline />Setting</li>
                    </ul>
                </div>

                <div>
                    <div className='flex justify-between mt-20 gap-10 items-center'>
                    <p className='text-2xl ml-8 font-bold'>Dashboard (Donate to Charity)</p>
                    <p className='flex justify-start items-start gap-2 text-sm mr-8 shadow-lg text-green-500 rounded-full py-2 px-3 font-bold'> <SlCalender /> 17-04-2024</p>
                    </div>

                    <div className='flex justify-between gap-5 items-center'>
                        <div className='border w-[250px] h-[120px] rounded-lg mt-5 shadow-lg pt-5 px-5 mx-5 my-5'>
                        <p className='text-sm'>Total Donation</p>  
                        <p className=' flex justify-between items-center text-xl'>26778 <span className='text-white rounded-full p-3 bg-green-400'><FaChartLine /></span> </p>
                        <p className='text-sm text-slate-400'>Since Last month</p>
                        </div>
                        <div className='border w-[250px] h-[120px] rounded-lg mt-5 shadow-lg pt-5 px-5 mx-5 my-5'>
                        <p className='text-sm'>Total Donation</p>  
                        <p className=' flex justify-between items-center text-xl'>26778 <span className='text-white rounded-full p-3 bg-green-400'><FaChartLine /></span> </p>
                        <p className='text-sm text-slate-400'>Since Last month</p>
                        </div>
                        <div className='border w-[250px] h-[120px] rounded-lg mt-5 shadow-lg pt-5 px-5 mx-5 my-5'>
                        <p className='text-sm'>Total Donation</p>  
                        <p className=' flex justify-between items-center text-xl'>26778 <span className='text-white rounded-full p-3 bg-green-400'><FaChartLine /></span> </p>
                        <p className='text-sm text-slate-400'>Since Last month</p>
                        </div>                   
                    </div>
                    <div className='flex justify-center items-center'>
            <table className='table-auto text-center shadow-lg w-[1200px]'>
                <thead className='text-start font-bold'>
                    <tr>
                        <th className='border-t border-b  px-5 py-2'>All Charity</th>
                        <th className='border-t border-b  px-5 py-2'>Status</th>
                        <th className='border-t border-b  px-5 py-2'>Phone</th>
                        <th className='border-t border-b  px-5 py-2'>Email</th>
                        <th className='border-t border-b  px-5 py-2'>City</th>
                        <th className='border-t border-b  px-5 py-2'>Actions</th>
                        <th className='border-t border-b  px-5 py-2'>Delete</th>
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
                           
                            <td className='border-t border-b text-sm px-5 py-2'>{item.userNum}</td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.userEmail}</td>
                            <td className='border-t border-b text-sm px-5 py-2'>{item.userCity}</td>
                            <td className=' flex justify-center items-center gap-1 border-b  px-5 py-2'> <input className='outline-none w-[200px] h-[30px] rounded-lg border border-slate-900 pl-5' placeholder='Allocate' type="text" name="" id="" /> <FaCheck className='' /></td>
                            <td className='border-t border-b w-[30px] px-10 py-1 my-3 rounded-full text-sm text-red-600'>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                </div>
        </div>
    </div>
  )
}

export default page