import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-dvh text-center pt-50 bg-black'>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#C2F800] mb-15'>Page Not Found !</h2>
            <button>
                <Link href='/'
                className='py-3 px-5 sm:py-4 sm:px-8 rounded text-[#C2F800] text-xl font-semibold border border-[#C2F800] hover:bg-[#C2F800] hover:text-black hover:border-transparent'
                >Back to Home</Link>
            </button>
        </div>
    );
};

export default NotFound;