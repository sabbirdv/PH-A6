import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiTwotoneFire } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { IoTimeOutline } from "react-icons/io5";

const LibaryCard = ({data}) => {
    return (
        <Link href={`/libarys/${data.id}`}>
            <div className="min-w-70 overflow-hidden rounded-2xl border border-[#292e35] hover:border-[#C2F800] bg-[#15181e] shadow-lg cursor-pointer">
                <Image
                    src= {data.image}
                    height={153}
                    width={250}
                    alt="Barbell Bench Press"
                    className="w-full object-cover"
                />
                <div className="p-4">
                    <div className="mb-3 flex gap-2">
                        {
                            data.muscleGroups.map((muscleGroup) => (
                                <span key={muscleGroup} className="rounded-full uppercase bg-[#C2F800] px-3 py-1 text-[10px] font-bold text-black">{muscleGroup}</span>))
                        }
                    </div>

                    <h2 className="text-[16px] font-extrabold uppercase tracking-wide text-white text-nowrap">
                        { data.name }
                    </h2>

                    <p className="mt-1 text-[11px] text-gray-500">{data.equipment}</p>

                    <div className="my-3 border-t border-[#292e35]"></div>

                    <div className="flex items-center gap-4 text-[11px] text-gray-400">
                        <span className='flex items-center gap-0.5'><IoTimeOutline />{data.duration}</span>
                        <span className='flex items-center gap-0.5'><AiTwotoneFire />{data.caloriesBurned}</span>
                        <span className='flex items-center gap-0.5'><FaStar />{data.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibaryCard;