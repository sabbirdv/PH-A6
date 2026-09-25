import Link from 'next/link';
import React from 'react';

const NothingHere = () => {
    return (
        <div className='h-full w-full bg-[#111317] py-10 px-6 rounded-xl border border-dashed border-white/10 flex flex-col justify-center items-center text-center'>
                <h3 className='text-xl font-bold'>NOTHING HERE YET</h3>
                <p className='text-[#A1A1AA] text-xs'>Browse the library and add a lift to get today moving.</p>
                <Link href='/' className='py-2.5 px-6 text-black text-sm bg-[#C2F10D] rounded-full mt-6'>Go to workouts</Link>
        </div>
    );
};

export default NothingHere;