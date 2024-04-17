"use client"

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

import ChartOne from '@/components/ChartOne';
import ChartTwo from '@/components/ChartTwo';
import ChartThree from '@/components/ChartThree';


const users =[
    {
        userImg: Tee,
        userName: "James Bond",
        userStatus: "active",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Lululemon,
        userName: "Lululemon",
        userStatus: "active",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Speedologo,
        userName: "Speedo",
        userStatus: "active",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Dre,
        userName: "Dre Collins",
        userStatus: "inactive",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
    {
        userImg: Coco,
        userName: "Coco Melon",
        userStatus: "active",
        userEmail: "james@gmail.com",
        userCity: "UAE"
    }, 
  
]


const page = () => {
  return (
    <div className='pt-30 mt-24 shadow'>
        <div className='flex justify-around items-start'>
                <div className='left-side-gra pt-10 w-[500px]'>
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
                    <p className='text-2xl ml-8 font-bold'>Graphical Visualization DB</p>
                    <p className='flex justify-start items-start gap-2 text-sm mr-8 shadow-lg text-green-500 rounded-full py-2 px-3 font-bold'> <SlCalender /> 17-04-2024</p>
                    </div>

                    <div className='flex justify-around gap-5 flex-wrap items-center'>
                        <div className='border w-[500px] h-[250px] rounded-lg mt-5 shadow-lg pt-5 px-5 mx-5 my-5'>
                        <ChartTwo />
                        </div>
                        <div className='border w-[500px] h-[250px] rounded-lg mt-5 shadow-lg pt-5 px-1 mx-1 my-5'>
                        <ChartThree/>
                        </div>
                        <div className='border w-[500px] h-[250px] shadow-lg rounded-lg mt-5 pt-5 px-5 mx-2 my-2'>
                        <div className='flex justify-center  items-center'>
                  <table className='table-auto table-fot text-center w-[400px]'>
                <thead className='text-start font-bold'>
                    <tr>
                        <th className='border-t table-fot  text-sm border-b  px-1 py-1'>All Charity</th>
                        <th className='border-t table-fot  text-sm border-b  px-1 py-1'>Status</th>
                        <th className='border-t table-fot  text-sm border-b  px-1 py-1'>Email</th>
                        <th className='border-t table-fot  text-sm border-b  px-1 py-1'>City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td className='border-t table-fot  text-sm  flex justify-start items-center gap-2 px-4 py-1'><Image className='w-[20px] rounded-lg' src={item.userImg} alt='img'></Image>{item.userName}</td>
                            <td className='border-t border-b  px-1 py-1'>
                                {item.userStatus === "inactive" ?  
                               <div className='text-red-400 table-fot  text-sm'>{item.userStatus}</div>  : 
                               <div className='text-green-400 table-fot  text-sm '>{item.userStatus}</div>  
                               }
                            </td>
                            <td className='border-t border-b table-fot  text-sm px-2 py-2'>{item.userEmail}</td>
                            <td className='border-t border-b table-fot  text-sm px-2 py-2'>{item.userCity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                        </div>   
                        <div className='border w-[500px] h-[250px] rounded-lg mt-5 shadow-lg pt-5 px-5 mx-5 my-5'>
                            <ChartOne/>
                        </div>                  
                    </div>
                </div>
        </div>
    </div>
  )
}

export default page