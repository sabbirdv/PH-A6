import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-black py-10 border-t border-[#1C1F26] z-10' >
            <div className=' container mx-auto px-5 flex items-center justify-between '>
                <Link href='/' className='flex items-center gap-2 text-sm text-white font-extrabold'>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={28}
                        height={28}
                    />
                    FITLOG
                </Link>
                <div>
                    <p className='text-xs text-[#6B7280] font-medium max-sm:max-w-50'>© {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;