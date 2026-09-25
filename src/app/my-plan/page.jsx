
import TabsButton from '../buttons/TabsButton';

const MyPlan = () => {

    

    return (
        <div className='bg-[#0D0D0D] text-white py-10'>
            <div className=' container max-w-320 mx-auto px-2 flex flex-col justify-center gap-6'>
                <div className='max-sm:text-center'>
                    <h3 className='text-2xl font-bold'>MY PLAN</h3>
                    <p className='text-[#8A92A0] text-sm'>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div className='px-6 py-8 rounded-xl bg-[#13161D] border border-[#232732] flex justify-between items-center gap-5'>
                    <div className='w-1/3 felx flex-col gap-2 items-center'>
                        <p className='text-xs text-[#8A92A0]'>Exercises</p>
                        <span className='text-3xl text-[#CCFF00] font-bold'>2</span>
                    </div>
                        <div className='border-r border-[#232732] h-10'></div>
                    <div className='w-1/3 felx flex-col gap-2 items-center'>
                        <p className='text-xs text-[#8A92A0]'>Minutes</p>
                        <span className='text-3xl font-bold'>23</span>
                    </div>
                        <div className='border-r border-[#232732] h-10'></div>
                    <div className='w-1/3 felx flex-col gap-2 items-center'>
                        <p className='text-xs text-[#8A92A0]'>Calories</p>
                        <span className='text-3xl font-bold'>190</span>
                    </div>
                </div>

                <div>
                    <TabsButton/>                
                </div>
                
            </div>

            

        </div>
    );
};

export default MyPlan;