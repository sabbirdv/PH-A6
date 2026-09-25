'use client'
import React, { useContext } from 'react';
import { MdDateRange } from 'react-icons/md';
import { GymContext } from '../context/MyPlanContext';
import { toast } from 'react-toastify';

const AddTodayButton = ({data}) => {
    console.log(data)
    const {todaysData, setTodaysData} = useContext(GymContext)
    const handleAddTodayBtn = ()=>{
        if(todaysData.some((element)=> element.id == data.id )){
            toast.warning('Already added to list!', {
            position: "bottom-right",
            autoClose: 2000,
        })
        }else{
            
            setTodaysData([...todaysData, data])
            toast.success('Add to Today\'s list.', {
            position: "bottom-right",
            autoClose: 1000,
        })
        }
    }
    return (
        <div>
            <button className="max-sm:w-[80vw] flex items-center justify-center gap-1 cursor-pointer rounded-lg bg-[#c7ff00] px-5 py-3 text-xs font-bold text-black transition "
            onClick={()=>handleAddTodayBtn()}
            >
                <MdDateRange className='text-sm' /> 
                <p>Add to today&apos;s plan</p>
            </button>
        </div>
    );
};

export default AddTodayButton;