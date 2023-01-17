import React from 'react'
import { cetagories } from "../Data/data"


const Categories = () => {
    return (
        <div className='max-w-full'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='mt-[80px] mb-[30px]'>
                    <h1 className='text-[36px] font-bold text-center'>Popular Categories</h1>
                </div>
                <div className='flex flex-wrap justify-center md:justify-between'>

                    {
                        cetagories?.map((data) => (
                            <div className='w-[395px] h-[180px] bg-[#F5F5F5] rounded mb-8 flex justify-between items-center px-6 cursor-pointer hb_c'>
                                <div>
                                    <h1 className='text-[25px] font-semibold'>{data.title}</h1>
                                    <br />
                                    <a href="/" className='w-[90px] h-[42px] bg-[#fff] text-black rounded-full px-3 py-2'>View More</a>
                                </div>
                                <div>
                                    <img src={data.image} alt='cetagories' />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Categories