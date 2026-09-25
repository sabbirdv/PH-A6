'use client'
import React, { Suspense, useContext } from 'react';
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

    return (
        <div>
            <div className="tabs tabs-box bg-[#1F242D] space-x-1 flex items-center rounded-xl p-4 ">
                    <input type="radio" name="my_tabs_6" className={` ${activeTab === "today" ? 'bg-[#151921] border border-[#232732] text-white ' : 'bg-[#1F242D]  text-white/80 ' } tab rounded-xl `} aria-label="Today's Plan" 
                    checked = {activeTab === "today"}
                    onChange={()=> activeTab === 'saved' && handleTabs()}
                    />
                    <Suspense fallback={<div className='flex justify-center'><p className="loading loading-spinner text-accent w-10 "></p></div>}>
                    {activeTab === "today" && (
                    <div className="tab-content text-white mt-6 mb-2 flex flex-col gap-4">                       
                        
                        {todaysData.length > 0 ? todaysData.map((data)=>{ return <TodaysCard key={data.id} data={data}/>}) : <NothingHere/>}
                                                                      
                    </div>
                    )}
                    </Suspense>
                    
                    <input type="radio" name="my_tabs_6" className={` ${activeTab === "saved" ? 'bg-[#151921] border border-[#232732] text-white ' : 'bg-[#1F242D] text-white/80 ' } tab rounded-xl  `} aria-label="Saved" 
                    checked = {activeTab === "saved"}
                    onChange={()=> activeTab === 'today' && handleTabs()}
                    />
                    <Suspense fallback={<div className='flex justify-center'><p className="loading loading-spinner text-accent w-10 "></p></div>}>
                    {activeTab === "saved" && (
                    <div className="tab-content text-white mt-6 mb-2 flex flex-col gap-4">
                        
                        {savedData.length > 0 ? savedData.map((data)=>{ return <SavedCard key={data.id} data={data}/>}) : <NothingHere/>}                       
                        
                    </div>
                    )}
                    </Suspense>

                <div className='ms-auto pe-2'>
                    short
                </div>
            </div>
        </div>
    );
};

export default TabsButtons;