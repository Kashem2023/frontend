import React from 'react'
import { DASHBOARD_NAV } from '../../Data/data'
import { Link } from 'react-router-dom'

const DashboardNavigation = () => {
    return (
        <div className="bg-gray-100 p-3 rounded-md space-y-3 flex flex-col">
            {
                DASHBOARD_NAV?.map((data) => (
                    <Link to={`${data.href}`} key={data.title} className={`flex items-center gap-4 rounded-md cursor-pointer p-2`}>

                        <div className="flex items-center justify-center text-base text-white bg-[#F0B12B] bg-opacity-80 p-2 rounded-md">
                            {data.icon}
                        </div>
                        <h4 className="font-semibold">{data.title}</h4>

                    </Link>
                ))
            }
        </div>
    )
}

export default DashboardNavigation