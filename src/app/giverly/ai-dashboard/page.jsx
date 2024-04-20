"use client"

import React from 'react'
import Image from 'next/image';
import { IoSettingsOutline } from "react-icons/io5";
import { GiRobotGolem } from "react-icons/gi";
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
    <div className='pt-40 bg-black shadow'>
        <div className='flex justify-around items-start'>
                <div className='left-side-ai pt-10 w-[500px]'>
                    <ul className='mx-2'>
                        <li className='flex justify-start items-center gap-3 text-slate-500 btn-bg py-3 pl-2 text-xl font-extrabold rounded-lg shadow-lg mb-5'> <GiRobotGolem /> Giverly Predictive AI</li>
                        <li className='flex justify-start items-center gap-3 text-green-300 py-3 pl-2 rounded-lg shadow mb-5'> <ImProfile />Activity Projection</li>
                        <li className='flex justify-start items-center gap-3 text-green-300 py-3 pl-2 rounded-lg shadow mb-5'> <MdOutlineReport />Report</li>
                        <li className='flex justify-start items-center gap-3 text-green-300 py-3 pl-2 rounded-lg shadow mb-5'> <MdOutlineMessage />Data</li>
                        <li className='flex justify-start items-center gap-3 text-green-300 py-3 pl-2 rounded-lg shadow mb-5'> <IoSettingsOutline />Data Process</li>
                    </ul>
                </div>

                <div>
                    <div className='flex justify-around mt-10 gap-5 items-center'>
                    <div className='flex flex-col justify-center items-center text-slate-400'>
                    <p className='text-lg font-bold '>0.000055%</p>
                    <p className='text-sm'>Customer Impact</p>
                    <sub className='mt-2 text-green-400'>12%</sub>
                    </div>

                    <div className='flex flex-col justify-center items-center text-slate-400'>
                    <p className='text-lg font-bold '>1.000055%</p>
                    <p className='text-sm'>Customer Impact</p>
                    <sub className='mt-2 text-red-400'>-32%</sub>
                    </div>

                    <div className='flex flex-col justify-center items-center text-slate-400'>
                    <p className='text-lg font-bold '>20.00055%</p>
                    <p className='text-sm'>Charity Impact</p>
                    <sub className='mt-2 text-green-400'>22%</sub>
                    </div>

                    <div className='flex flex-col justify-center items-center text-slate-400'>
                    <p className='text-lg font-bold '>0.000055%</p>
                    <p className='text-sm'>Customer Impact</p>
                    <sub className='mt-2 text-green-400'>12%</sub>
                    </div>

                    <div className='flex flex-col justify-center items-center text-slate-400'>
                    <p className='text-lg font-bold '>10.000055%</p>
                    <p className='text-sm'>Brand Impact</p>
                    <sub className='mt-2 text-red-400'>-2%</sub>
                    </div>

                    <div className='flex flex-col justify-center items-center text-slate-400'>
                    <p className='text-lg font-bold '>102.05%</p>
                    <p className='text-sm'>Giver growth</p>
                    <sub className='mt-2 text-green-400'>18%</sub>
                    </div>
                    </div>

                    <div className='flex justify-around gap-5 flex-wrap items-center'>
                        <div className='border border-green-400 w-[500px] h-[250px] rounded-lg mt-5 shadow-lg pt-5 px-5 mx-5 my-5'>
                        <ChartTwo />
                        </div>
                        <div className='border border-green-400 w-[500px] h-[250px] rounded-lg mt-5 shadow-lg pt-5 px-1 mx-1 my-5'>
                        <ChartThree/>
                        </div>
                        <div className='border w-[500px] border-green-400 h-[250px] shadow-lg rounded-lg mt-5 pt-5 px-5 mx-2 my-2'>
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
                        <div className='border border-green-400 w-[500px] h-[250px] rounded-lg mt-5 shadow-lg pt-5 px-5 mx-5 my-5'>
                            <ChartOne/>
                        </div>                  
                    </div>
                </div>
        </div>
    </div>
  )
}

export default page