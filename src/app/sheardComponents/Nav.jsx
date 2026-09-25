'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import { usePathname } from 'next/navigation';
import { GymContext } from '../context/MyPlanContext';


const Nav = () => {
    const {todayListCount, saveListCount} = useContext(GymContext)
    const pathname = usePathname()
    return (
        <div className='bg-black border-b border-[#1C1F26] sticky top-0 w-full'> 
            <div className='h-20 navbar shadow-sm flex gap-5 items-center justify-center container mx-auto'>
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-black border border-[#C2F800]/50 shadow-none ">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#C2F800" viewBox="0 0 24 24" stroke="#C2F800"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-lg dropdown-content bg-black text-[#9CA3AF] border border-[#1C1F26] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href='/' className={`font-medium ${pathname == '/' ? 'bg-[#1A2312] text-[#C2F800]' : '' }`}>Workouts</Link></li>
                        <li><Link href='/my-plan' className={`font-medium ${pathname == '/my-plan' ? 'bg-[#1A2312] text-[#C2F800]' : '' }`}>My Plan</Link></li>
                    </ul>
                    </div>
                    
                </div>


                <div className="md:navbar-start max-md:navbar-center flex">
                    <Link href='/' className='flex items-center gap-2 text-lg text-white font-extrabold'>
                        <Image
                            src={logo}
                            alt="Logo"
                            width={28}
                            height={28}
                        />
                        FITLOG
                    </Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-sm font-md text-[#9CA3AF]">
                        <li><Link href='/' className={`py-2.5 px-4 ${pathname == '/' ? 'bg-[#1A2312] text-[#C2F800]' : '' }  rounded-full font-medium`}>Workouts</Link></li>
                        <li><Link href='/my-plan' className={`py-2.5 px-4 ${pathname == '/my-plan' ? 'bg-[#1A2312] text-[#C2F800]' : ''}  rounded-full font-medium`} >My Plan</Link></li>
                    </ul>
                </div>
                <div className="navbar-end text-[#9CA3AF] text-sm font-medium flex items-center gap-2 sm:gap-6">
                    <li className='flex items-center gap-2 font-medium'><Link href='/my-plan'>Plan </Link> <span className='size-5 rounded-full flex justify-center items-center font-bold text-black bg-[#C2F800]'>{todayListCount}</span></li>
                    <li className='flex items-center gap-2 font-medium'><Link href='/my-plan'>Saved </Link> <span className='size-6 rounded-full flex justify-center items-center font-bold text-white border border-[#2D313B]'>{saveListCount}</span></li>
                </div>
            </div>
        </div>
    );
};

export default Nav;