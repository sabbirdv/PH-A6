'use client'
import React, { useContext } from 'react';
import { GymContext } from '../context/MyPlanContext';
import NothingHere from '../cards/NothingHere';
import TodaysCard from '../cards/TodaysCard';
import SavedCard from '../cards/SavedCard';

const TabsButton = () => {

    const {activeTab, setActiveTab} = useContext(GymContext)

    const handleTabs = ()=>{
        if(activeTab === "today"){
            setActiveTab("saved")
        }else{
            setActiveTab("today")
        }
    }

    return (
        <div>
            <div className="tabs tabs-box bg-[#1F242D] space-x-1 flex items-center ">
                    <input type="radio" name="my_tabs_6" className={` ${activeTab === "today" ? 'bg-[#151921] border border-[#232732] text-white ' : 'bg-[#1F242D]  text-white/80 ' } tab rounded-xl `} aria-label="Today's Plan" 
                    defaultChecked
                    checked = {activeTab === "today"}
                    onChange={()=> activeTab === 'saved' ? handleTabs() : ''}
                    />
                    <div className="tab-content text-white mt-6">
                        
                        <NothingHere/>
                        <TodaysCard/>
                        
                    </div>

                    
                    <input type="radio" name="my_tabs_6" className={` ${activeTab === "saved" ? 'bg-[#151921] border border-[#232732] text-white ' : 'bg-[#1F242D] text-white/80 ' } tab rounded-xl  `} aria-label="Saved" 
                    checked = {activeTab === "saved"}
                    onChange={()=> activeTab === 'today' ? handleTabs() : ''}
                    />
                    <div className="tab-content text-white  mt-6">
                        
                        <NothingHere/>
                        <SavedCard/>
                        
                    </div>

                <div className='ms-auto pe-2'>
                    short
                </div>
            </div>
        </div>
    );
};

export default TabsButton;