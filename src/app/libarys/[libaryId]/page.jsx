import Image from 'next/image';
import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { RiSave3Line } from 'react-icons/ri';


const fetchData = async ()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data
}

const libaryDetails = async ({params}) => {

    const getData = await fetchData();
    console.log(getData, "getdata")
    const {libaryId} = await params
    console.log(libaryId, "libaryId")
    const data = getData.find((datas)=> datas.id == libaryId)
    console.log(data)

    return (
        <div className='bg-[#0D0D0D] text-white'>
            <div className="flex flex-col md:flex-row gap-20 pt-5 pb-20 container max-w-320 mx-auto px-2">
                <div className="overflow-hidden rounded-xl">
                    <Image
                    src={data.image}
                    alt={data.name}
                    width={300}
                    height={450}
                    className="h-full min-h-[450px] w-full max-w-200 object-cover"
                    />
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white">
                    {data.name}
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                    {data.description}
                    </p>

                    <div className="mt-4 flex gap-2">
                    {data.muscleGroups.map((muscle) => (
                        <span
                        key={muscle}
                        className="rounded-full bg-[#c7ff00] px-4 py-1 text-xs font-bold text-black"
                        >
                        {muscle}
                        </span>
                    ))}
                    </div>

                    <div className="mt-6 overflow-hidden rounded-xl border border-[#292e38] bg-[#161a22] max-w-250">
                        {[
                            ["EQUIPMENT", data.equipment],
                            ["DIFFICULTY", data.difficulty],
                            ["SETS", data.sets],
                            ["REPS", data.reps],
                            ["DURATION", `${data.duration} min`],
                            ["CALORIES", `${data.caloriesBurned} kcal`],
                            ["RATING", data.rating],
                        ].map(([label, value]) => (
                            <div key={label} className="flex items-center justify-between border-b border-[#292e38] px-5 py-3.5 last:border-b-0">
                                <span className="text-[10px] font-bold tracking-wider text-gray-400">{label}</span>
                                <span className="text-xs text-gray-200">{value}</span>
                            </div>
                        ))}
                    </div>

                    <h2 className="mt-7 text-sm font-bold uppercase tracking-wide text-white">
                    Instructions
                    </h2>

                    <ol className="mt-3 space-y-3">
                        {
                            data.instructions.map((instruction, index) => (
                                <li key={index} className="flex gap-3 text-xs leading-5 text-gray-400">
                                    <span className="text-gray-500">{index + 1}.</span>
                                    <span>{instruction}</span>
                                </li>
                            ))
                        }
                    </ol>

                    <div className="mt-7 flex flex-col sm:flex-row max-sm:mx-auto gap-3">
                        <button className="max-sm:w-[80vw] flex items-center justify-center gap-1 cursor-pointer rounded-lg bg-[#c7ff00] px-5 py-3 text-xs font-bold text-black transition ">
                        <MdDateRange className='text-sm' /> 
                        <p>Add to today's plan</p>
                        </button>

                        <button className="max-sm:w-[80vw] flex items-center justify-center gap-1 cursor-pointer rounded-lg border border-[#343b47] px-5 py-3 text-xs text-gray-300 transition hover:bg-[#191e27]">
                            <RiSave3Line className='text-sm' /> 
                            <p>Save for later</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default libaryDetails;