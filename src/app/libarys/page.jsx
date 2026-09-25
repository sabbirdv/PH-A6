import React from 'react';
import LibaryCard from '../cards/LibaryCard';


const fetchData =async ()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data
}

const Libary = async () => {

    const getData = await fetchData();

    return (
        <div id='libary' className='container mx-auto w-250 pt-4 pb-16'>
            <div className='max-sm:text-center pb-8'>
                <h2 className='uppercase text-2xl font-bold mb-1'>THE LIBARY</h2>
                <p className='text-[#9CA3AF] text-sm'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                {
                    getData.map((data)=>{
                        return (
                            <LibaryCard key={data.id} data={data}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Libary;