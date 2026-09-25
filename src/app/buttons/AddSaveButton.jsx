'use client'
import React, { useContext } from 'react';
import { RiSave3Line } from 'react-icons/ri';
import { GymContext } from '../context/MyPlanContext';
import { toast } from 'react-toastify';

const AddSaveButton = ({data}) => {
    const {savedData, setSavedData} = useContext(GymContext)
    const handleSaveBtn = ()=>{
            if(savedData.some((element)=> element.id == data.id )){
                toast.warning('Already added to list!', {
                position: "bottom-right",
                autoClose: 2000,
            })
            }else{
                
                setSavedData([...savedData, data])
                toast.success('Add to Save list.', {
                position: "bottom-right",
                autoClose: 1000,
            })
            }
        }
    return (
        <div>
            <button className="max-sm:w-[80vw] flex items-center justify-center gap-1 cursor-pointer rounded-lg border border-[#343b47] px-5 py-3 text-xs text-gray-300 transition hover:bg-[#191e27]"
            onClick={()=>handleSaveBtn()}
            >
                <RiSave3Line className='text-sm' /> 
                <p>Save for later</p>
            </button>
        </div>
    );
};

export default AddSaveButton;