'use client'
import React, { Suspense, useContext, useState } from 'react';
import { GymContext } from '../context/MyPlanContext';
import NothingHere from '../cards/NothingHere';
import TodaysCard from '../cards/TodaysCard';
import SavedCard from '../cards/SavedCard';

const TabsButtons = () => {

    const {activeTab, setActiveTab, todaysData, savedData} = useContext(GymContext)

    const handleTabs = ()=>{
        if(activeTab === "today"){
            setActiveTab("saved")
        }else{
            setActiveTab("today")
        }
    }

    const [filter , setFilter] = useState('duration');

    const filterdList = (data)=>{
        const filterd = [...data]

        if(filter === 'rating'){
            filterd.sort((a,b)=> b.rating - a.rating)
        }else if(filter === 'caloriesBurned'){
            filterd.sort((a,b)=> a.caloriesBurned - b.caloriesBurned)
        }else if(filter === 'duration'){
            filterd.sort((a,b)=> a.duration - b.duration)
        }
        return filterd;
    }

    const filterdToday = filterdList(todaysData);
    const filterdSaved = filterdList(savedData);

    return (
        <div>
            <div className="tabs tabs-box bg-[#1F242D] space-x-1 flex flex-wrap gap-y-5 items-center rounded-xl p-4 ">
                    <input type="radio" name="my_tabs_6" className={` ${activeTab === "today" ? 'bg-[#151921] border border-[#232732] text-white ' : 'bg-[#1F242D]  text-white/80 ' } tab rounded-xl `} aria-label="Today's Plan" 
                    checked = {activeTab === "today"}
                    onChange={()=> activeTab === 'saved' && handleTabs()}
                    />
                    {activeTab === "today" && (
                    <div className="tab-content text-white mt-6 mb-2 flex flex-col gap-4">                       
                        
                        {todaysData.length > 0 ? filterdToday.map((data)=>{ return <TodaysCard key={data.id} data={data}/>}) : <NothingHere/>}
                                                                      
                    </div>
                    )}
                    
                    <input type="radio" name="my_tabs_6" className={` ${activeTab === "saved" ? 'bg-[#151921] border border-[#232732] text-white ' : 'bg-[#1F242D] text-white/80 ' } tab rounded-xl  `} aria-label="Saved" 
                    checked = {activeTab === "saved"}
                    onChange={()=> activeTab === 'today' && handleTabs()}
                    />
                    {activeTab === "saved" && (
                    <div className="tab-content text-white mt-6 mb-2 flex flex-col gap-4">
                        
                        {savedData.length > 0 ? filterdSaved.map((data)=>{ return <SavedCard key={data.id} data={data}/>}) : <NothingHere/>}                       
                        
                    </div>
                    )}

                <div className='flex items-center gap-2 sm:ms-auto pe-2 ps-2'>
                    <span className='text-nowrap text-sm text-white/80'>Sort By</span>
                    <select 
                    defaultValue='duration'
                    onChange={(e)=> setFilter(e.target.value)}
                    className="select bg-[#13161D] border border-[#151921] rounded-xl min-w-15 outline-none"
                    >
                        <option value={'duration'}>Duration</option>
                        <option value={'caloriesBurned'}>Calories</option>
                        <option value={'rating'}>Rating</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TabsButtons;