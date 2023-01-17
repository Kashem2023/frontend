import React from 'react'
import { QuickView } from "../Data/data"

const View = () => {
    return (
        <div className='max-w-full'>
            <div className='max-w-[1280px] mx-auto'>
                <div className='md:h-[110px] md:flex justify-between items-center flex-wrap hidden'>

                    {
                        QuickView?.map((data) => (

                            <div className={`md:flex ${data.border_right ? "md:border-r" : "border-none"} pr-7 text-center border-gray-300`}>
                                <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center' style={{backgroundColor: data?.bg_color}}>
                                    <img src={data?.bg_img} alt='quickview' className='w-[25px]' />
                                </div>
                                <div className='ml-5'>
                                    <h1 className='font-semibold text-[17px]'>{data.title}</h1>
                                    <p className='text-[15px]'>{data.details}</p>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default View