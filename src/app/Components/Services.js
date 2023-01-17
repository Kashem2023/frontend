import React from 'react'
import { FaTruck } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='services_bg'>
            <div className='max-w-[1240px] mx-auto'>
                <div>
                    <div className='absolute'>
                        <h1 className='md:max-w-[375px] text-[36px] font-semibold mt-20 text-center md:text-start'>
                            Grade A Safety Masks
                            For Sale. Hurry Up!
                        </h1>
                        <div className='flex flex-wrap justify-between px-10 md:px-0 md:max-w-[400px] gap-y-11 mt-12'>
                            <div className='flex items-center gap-3'>
                                <div className=''>
                                    <FaTruck size={40} className="border-r border-r-gray-300 pr-3"/>
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Fast Free Shipping</h1>
                                    <p className='text-[14px]'>Around The World</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className=''>
                                    <FaTruck size={40} className="border-r border-r-gray-300 pr-3"/>
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Fast Free Shipping</h1>
                                    <p className='text-[14px]'>Around The World</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className=''>
                                    <FaTruck size={40} className="border-r border-r-gray-300 pr-3"/>
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Fast Free Shipping</h1>
                                    <p className='text-[14px]'>Around The World</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className=''>
                                    <FaTruck size={40} className="border-r border-r-gray-300 pr-3"/>
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Fast Free Shipping</h1>
                                    <p className='text-[14px]'>Around The World</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute hidden lg:block right-0 w-[52%] mr-10'>
                        <img src='/images/service-img.png' alt='service' className='max-w-full align-middle' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services