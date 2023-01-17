import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button'

const UserProfile = () => {

    const user = JSON.parse(localStorage.getItem('@User'))

    return (
        <div>
            <h1 className="text-3xl text-bold">User Profile</h1>
            <div className="flex items-center gap-4 mt-5">
            <div className="w-10 h-10 bg-[#F0B12B] flex justify-center items-center rounded-full mt-[6px]">
                    <span className="text-black font-bold">{user.name.charAt(0)[0]}</span>
                </div>
                <div>
                    <h2 className="text-3xl text-bold">{user?.name}</h2>
                    <h3 className="text-lg text-semibold text-primary mt-1">{user?.email}</h3>
                </div>
            </div>
            <Link to="/my-account/orders">
                <Button
                    title="View orders"
                    className="py-4 mt-5 text-white mr-5"
                />
            </Link>
            <Link to="/my-account/addresses">
                <Button
                    title="Update billing information"
                    className="py-4 mt-5 text-white"
                />
            </Link>
        </div>
    )
}

export default UserProfile