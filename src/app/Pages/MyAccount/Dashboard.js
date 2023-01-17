import React from 'react'

const Dashboard = () => {


    const user = JSON.parse(localStorage.getItem('@User'))

    return (
        <div >
            <h1 className="text-center text-2xl font-bold mb-4">Hi {user?.name}👋,<br />Welcome to your Dashboard</h1>
            <div className="flex flex-col items-center gap-4 mt-5">
                <div className="w-20 h-20 bg-[#F0B12B] flex justify-center items-center rounded-full mt-[6px]">
                    <span className="text-black font-bold">{user.name.charAt(0)[0]}</span>
                </div>
                <div>
                    <h2 className="text-3xl text-bold">{user?.name}</h2>
                    <h3 className="text-lg text-semibold text-primary mt-1">{user?.email}</h3>
                </div>
            </div>
        </div>
    )
}

export default Dashboard