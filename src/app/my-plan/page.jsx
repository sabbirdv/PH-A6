'use client'
import { useContext } from 'react';
import TabsButtons from '../buttons/TabsButtons';
import { GymContext } from '../context/MyPlanContext';

const MyPlan = () => {

    const {todaysData, savedData, activeTab} = useContext(GymContext)

    return (
        <div className='bg-[#0D0D0D] text-white py-10 h-dvh '>
            <div className=' container max-w-7xl mx-auto px-2 flex flex-col justify-center gap-6'>
                <div className='max-sm:text-center'>
                    <h3 className='text-2xl font-bold'>MY PLAN</h3>
                    <p className='text-[#8A92A0] text-sm'>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div className='px-6 py-8 rounded-xl bg-[#13161D] border border-[#232732] flex justify-between items-center gap-5'>
                    <div className='w-1/3 felx flex-col gap-2 items-center'>
                        <p className='text-xs text-[#8A92A0]'>Exercises</p>
                        <span className='text-3xl text-[#CCFF00] font-bold'>
                            {activeTab === 'today' ? todaysData.length : savedData.length}
                        </span>
                    </div>
                        <div className='border-r border-[#232732] h-10'></div>
                    <div className='w-1/3 felx flex-col gap-2 items-center'>
                        <p className='text-xs text-[#8A92A0]'>Minutes</p>
                        <span className='text-3xl font-bold'>
                            {activeTab === 'today' ? todaysData.reduce((acc, element)=> acc + element.duration,0) : savedData.reduce((acc, element)=> acc + element.duration,0) }
                        </span>
                    </div>
                        <div className='border-r border-[#232732] h-10'></div>
                    <div className='w-1/3 felx flex-col gap-2 items-center'>
                        <p className='text-xs text-[#8A92A0]'>Calories</p>
                        <span className='text-3xl font-bold'>
                            {activeTab === 'today' ? todaysData.reduce((acc, element)=> acc + element.caloriesBurned,0) : savedData.reduce((acc, element)=> acc + element.caloriesBurned,0) }
                        </span>
                    </div>
                </div>

                <div>
                    <TabsButtons/>                
                </div>
                
            </div>

            

        </div>
    );
};

export default MyPlan;