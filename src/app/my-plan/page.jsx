import React from 'react';

const MyPlan = () => {
    return (
        <div className='bg-[#0D0D0D] text-white'>
            <div className=' container w-320 mx-auto'>
                <div>
                    <h3>MY PLAN</h3>
                    <p>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div>
                    <div className='felx flex-col gap-2 items-center'>
                        <p className='text-xs text-[#8A92A0]'>Exercises</p>
                        <span>2</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;