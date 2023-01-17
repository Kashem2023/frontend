import React from 'react'
import { BRAND } from '../Data/data'

const Brand = () => {
    return (
        <div className='max-w-full py-20'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='border-t border-gray-300 flex md:justify-between justify-center flex-wrap pt-[60px] md:px-0 px-3'>
                    {
                        BRAND?.map((data) => (
                            <img key={data.id} src={data.image} alt="brand" className='md:p-0 p-5' />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Brand