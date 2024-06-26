"use client"; // Add this line at the beginning

import React, { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { BsRocketTakeoff } from "react-icons/bs";
import { GrDomain } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoIosUnlock } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';
import Logo from '../../../public/logo.png';
import { useRouter } from 'next/navigation';
import VoicePromptComponent from '../VoicePromptComponent';




const Navbar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (path) => {
    setActiveItem(path);
  };
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
      setShowMenu(false); // Close the menu on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setShowMenu(!showMenu);
    }
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };


  return (
    <>
    <nav className="navbar shadow-md py-4">
      <div className="logo">
        <Link href={'/'} className="links w-[50px]">
          <Image className='w-[180px]' src={Logo} alt="" />
        </Link>
      </div>

      <ul className='pl-40 flex justify-between items-center gap-4 input_ul'>
      <li className='text-black text-2xl'>
      <VoicePromptComponent/>
      </li>
      <li className="relative">
      <input
        className="w-[260px] h-[50px] px-5 rounded-full outline-none shadow-md"
        placeholder="Search for a Store"
        type="text"
      />
      <CiSearch className="absolute text-2xl top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
        </li>
        </ul>
      {isMobile ? (
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`line  ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
        </div>
      ) : (

        <ul className="nav-links text-md container flex items-center gap-2 justify-end text-end">
          <li>
          <Link href={'/'} className={`links ${activeItem === '/' ? 'border-b-4 border-green-400 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
              Home
            </Link>
          </li>
          <li>
          <Link href={'/brand/partner-brands'} className={`links ${activeItem === '/brand/partner-brands' ? 'border-b-4 border-green-400 pb-1' : ''}`} onClick={() => handleItemClick('/brand/partner-brands')}>
              Brands
            </Link>

          </li>
          <li>
            <Link href={'/charity/charity-list'} className={`links ${activeItem === '/charity/charity-list' ? 'border-b-4 border-green-400 pb-1' : ''}`} onClick={() => handleItemClick('/charity/charity-list')}>
              Charity
            </Link>
          </li>
          <li>
            <Link href={'/e-shop'} className={`links ${activeItem === '/e-shop' ? 'border-b-4 border-green-400 pb-1' : ''}`} onClick={() => handleItemClick('/e-shop')}>
              Shop
            </Link>
          </li>
          <li>
            <Link href={'/customer/user-category-signin'} className={`links ${activeItem === '/customer/user-category-signin' ? 'border-b-4 border-green-400 pb-1' : ''}`} onClick={() => handleItemClick('/customer/user-category-signin')}>
              Log In
            </Link>
          </li>
          <li>
            <Link href={'/user-category'} className={`links ${activeItem === '/user-category' ? 'border-b-4 border-green-400 pb-1' : ''}`} onClick={() => handleItemClick('/user-category')}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link href={'/'} className="links">
            <FaHeart className='text-2xl' />
            </Link>
          </li>
          <li className="">
          <select className='text-black outline-none' name="" id="">
         <option value="">Language</option>
        <option value="English">English</option>
      <option value="Arabic">Arabic</option>
    </select>
</li>
        </ul>
      )}

      {isMobile && (
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button className="close-button" onClick={closeMobileMenu}>
          <IoCloseSharp />
          </button>
          <ul>
            <li>
              <Link href={'/'} className="links flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
              <IoHome />  Home
              </Link>
            </li>
            <li>
              <Link href={'/e-shop'} className="links flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
              <BsRocketTakeoff /> Shop
              </Link>
            </li>
            <li>
              <Link href={'/about'} className="links flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
              <GrDomain />  Causes
              </Link>
            </li>
            <li>
              <Link href={'/'} className="links flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
              <FaPeopleGroup />  About Us
              </Link>
            </li>
            <li>
              <Link href={'/business'} className="links border-t-2 flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
              <HiOutlineClipboardDocumentCheck /> T & C
              </Link>
            </li>
            <li>
              <Link href={'/#courses'} className="links flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
             Privacy Policy   <IoIosUnlock />
              </Link>
            </li>
            <li className="">
          <select className='text-black outline-none' name="" id="">
         <option value="">Language</option>
        <option value="English">English</option>
      <option value="Arabic">Arabic</option>
    </select>
</li>
            <span className='the_buttons'>
            <li className='btns mt-5'>
            <Link href={'/customer/user-category-signin'} className="flex text-2xl rounded-full justify-center px-5 text-black font-medium " onClick={handleMenuClick}>Log in</Link>
          </li>
          </span>
          <li className='btns mt-5'>
            <Link href={'/user-category'} className="flex text-2xl rounded-full justify-center px-5 text-black font-medium " onClick={handleMenuClick}>Sign Up</Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
