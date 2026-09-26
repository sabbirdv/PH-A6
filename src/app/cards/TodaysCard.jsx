'use client';

import React, { useContext, useState } from 'react';
import { GymContext } from '../context/MyPlanContext';
import { IoMdCheckmark } from 'react-icons/io';
import { IoClose, IoTimeOutline } from 'react-icons/io5';
import { AiFillFire } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';

const TodaysCard = ({ data }) => {
    const { todaysData, setTodaysData } = useContext(GymContext);
    const handleMarkButton = () => {
        setTodaysData(
            todaysData.filter((element) => element.id !== data.id)
        );
        toast.success(`${data.name} mark as done`, {
                            position: "bottom-right",
                            autoClose: 1000,
                        })
    };
    const handleCloseButton = () => {
        setTodaysData(
            todaysData.filter((element) => element.id !== data.id)
        );
        toast.info(`${data.name} removed`, {
                            position: "bottom-right",
                            autoClose: 1000,
                        })
    };

    return (
        <div className="w-full rounded-xl border border-[#14171E] bg-[#14171E] p-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">

                <div className="w-full min-w-0 flex items-center gap-4">
                    <Image
                        src={data.image}
                        alt={data.name}
                        width={128}
                        height={72}
                        className="w-32 h-18 rounded-xl object-cover shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold uppercase truncate">
                            {data.name}
                        </h3>

                        <p className="text-[#8A92A0] text-sm font-semibold">
                            {data.equipment}
                        </p>

                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mt-2 text-xs text-[#B5BBC5]">
                            <span className="flex items-center gap-1">
                                <IoTimeOutline className="text-[#CCFF00]" />
                                <p>{data.duration}min</p>
                            </span>

                            <span className="flex items-center gap-1">
                                <AiFillFire className="text-[#CCFF00]" />
                                <p>{data.caloriesBurned}kcal</p>
                            </span>

                            <span className="flex items-center gap-1">
                                <FaRegStar className="text-[#CCFF00]" />
                                <p>{data.rating}</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-2 w-full sm:w-auto sm:ml-auto shrink-0 text-nowrap">
                    <Link
                        href={`/libarys/${data.id}`}
                        className="px-4 py-2.5 rounded-full border border-[#303846] text-white text-sm hover:bg-[#20242C] cursor-pointer"
                    >
                        View Details
                    </Link>

                    <button
                        className="btn flex items-center gap-1 px-4 py-2 rounded-full bg-[#C6FF00] text-black text-sm font-semibold cursor-pointer shadow-none border-none disabled:bg-gray-300 whitespace-nowrap"
                        onClick={()=>handleMarkButton()}
                        >
                        <IoMdCheckmark />
                        <span>Mark as Done</span>
                    </button>

                    <button
                        className="text-[#737B88] text-xl sm:px-1 hover:text-white cursor-pointer shrink-0"
                        onClick={()=>handleCloseButton()}
                    >
                        <IoClose />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TodaysCard;