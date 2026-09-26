import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-dvh text-center pt-50 bg-black'>
            <h2 className='text-6xl sm:text-9xl font-extrabold text-[#C2F800] mb-5'>4<span className="loading w-15 sm:w-25"></span>4</h2>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#C2F800]/80 mb-10'> Page Not Found !</h2>
            <button>
                <Link href='/'
                className='py-3 px-5 sm:py-4 sm:px-8 rounded text-[#C2F800]/80 text-xl font-semibold border border-[#C2F800] hover:bg-[#C2F800] hover:text-black hover:border-transparent'
                >Back to Home</Link>
            </button>
        </div>
    );
};

export default NotFound;