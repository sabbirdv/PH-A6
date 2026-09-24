'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import { usePathname } from 'next/navigation';


const Nav = () => {
    const pathname = usePathname()
    return (
        <div className='bg-black '> 
            <div className='h-20 navbar shadow-sm flex items-center justify-center border-b border-[#1C1F26] container mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href='/'>Workouts</Link></li>
                        <li><Link href='/my-plan'>My Plan</Link></li>
                    </ul>
                    </div>
                    <Link href='/' className='flex items-center gap-2 text-lg text-white font-extrabold'>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={28}
                        height={28}
                    />
                    FITLOG</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-sm font-md text-[#9CA3AF]">
                        <li><Link href='/' className={`py-2.5 px-4 ${pathname == '/' ? 'bg-[#1A2312] text-[#C2F800]' : '' }  rounded-full`}>Workouts</Link></li>
                        <li><Link href='/my-plan' className={`py-2.5 px-4 ${pathname == '/my-plan' ? 'bg-[#1A2312] text-[#C2F800]' : ''}  rounded-full`} >My Plan</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <li><Link href='/'>Plan</Link></li>
                    <li><Link href='/'>Saved</Link></li>
                </div>
            </div>
        </div>
    );
};

export default Nav;