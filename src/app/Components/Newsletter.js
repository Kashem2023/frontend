import React from 'react'

const Newsletter = () => {
    return (
        <div className='newsletter_bg'>
            <div className='max-w-[1240px] mx-auto'>
                <div>
                    <div className='mt-20 mb-10 ml-4 md:ml-0'>
                        <h1 className='text-[36px] text-white font-bold'>Sign Up To Newsletter</h1>
                        <p className='text-white font-normal'>Receive 20% Discount On Your First Purchase.</p>
                    </div>
                    <div className='md:w-[530px] bg-white h-[50px] flex justify-between items-center border border-gray-300 rounded-full pl-[8px] mx-4 md:mx-0'>
                        <input type="text" placeholder='enter your e-mail address' className='flex-1 outline-none border-none rounded-full p-2' />
                        <button className='w-[110px] h-[42px] bg-[#25AB44] text-white rounded-full mr-1'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter