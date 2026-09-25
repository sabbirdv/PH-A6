import Image from 'next/image';
import React from 'react';
import heroImg from '../../assets/banner.png';


const Hero = () => {
    return (
        <div className='container mx-auto py-12'>
            <div className='max-w-250 mx-auto border border-[#222630] bg-[#15171D] rounded-xl py-18 px-14 max-sm:text-center flex flex-col sm:flex-row gap-10 justify-between items-center'>
                <div className='flex flex-col max-sm:items-center justify-center gap-5'>
                    <span className='uppercase text-xs font-bold text-[#C2F800]'>WORKOUT LIBRARY</span>
                    <h2 className='uppercase text-4xl font-extrabold max-w-135'>
                        TRAIN WITH INTENT. LOG
                        EVERY SET.
                    </h2>
                    <p className='max-w-125 text-[#9CA3AF]'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>
                    <button className='text-start mt-2'>
                        <a href="#libary"
                        className='py-3 px-6 rounded-lg bg-[#C2F800] text-black text-sm font-medium uppercase'>
                            BROWSE WORKOUTS
                        </a>
                    </button>
                </div>
                <div>
                    <Image
                        src={heroImg}
                        alt="Logo"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;