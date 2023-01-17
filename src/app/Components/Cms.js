import React from 'react'
import { CMS } from "../Data/data"

const Cms = () => {
    return (
        <div className='max-w-full'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='flex flex-wrap justify-center gap-y-6 md:justify-between'>
                    {
                        CMS?.map((data) => (
                            <div style={{ backgroundImage: `url(${data.bg_img})`, position: "relative", width: "395px", height: "395px", backgroundPosition: "center", cursor: "pointer" }}>
                                <p className='text-[#F37336] text-[20px] text-center font-semibold mt-[26px]'>{data.title}</p>
                                <h1 className='font-bold text-[32px] text-center'>{data.details}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cms