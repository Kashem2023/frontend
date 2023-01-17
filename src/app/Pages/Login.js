import React, { useState } from 'react'
import { endPoint } from '../Data/data'
import { Link } from 'react-router-dom'
import Path from '../Components/Path'

const Login = () => {

    const [logData, setLogData] = useState({
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setLogData({
            ...logData,
            [e.target.name]: e.target.value
        })
    }

    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    const Login = async (e) => {

        e.preventDefault();

        const res = await fetch(`${endPoint}/api/login`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(logData)
        })

        const resData = await res.json()

        const setUser = JSON.stringify(resData.user)
       
        if(resData.success === false){
            return alert(resData.message)
        }else{
            setCookie('token', resData.token, 1)
            localStorage.setItem('@User', setUser)
            window.location.reload();
        }

    }

  return (
    <div className='max-w-full'>
        <Path route="Login" />
        <div className='max-w-[1240px] mx-auto'>
            <div className='flex justify-between mt-[35px] mb-[40px]'>
                <div className='max-w-[600px]'>
                    <h1 className='text-[20px] font-semibold mb-[25px]'>New Customer</h1>
                    <h2 className='text-[15px] font-medium mb-[20px]'>Register</h2>
                    <p className='text-[14px] font-[400] mb-[20px]'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                    <Link to="/register" className='w-[110px] h-[42px] bg-[#25AB44] text-white rounded-full mr-1 px-4 py-2'>Continue</Link>
                </div>
                <div className='w-[600px]'>
                    <h1 className='text-[20px] font-semibold mb-[25px]'>Returning Customer</h1>
                    <h2 className='text-[15px] font-medium mb-[20px]'>I am a returning customer</h2>
                    <form onSubmit={Login}>
                        <label className='text-[14px]'>Enter your e-mail address</label>
                        <br />
                        <input type="email" onChange={inputHandle} name="email" value={setLogData.email} placeholder='Enter your e-mail address' className='outline-none border-[1px] border-gray-300 w-[595px] h-[38px] pl-5 text-[14px] mt-2 mb-4'/>
                        <label className='text-[14px]'>Password</label>
                        <br />
                        <input type="text" onChange={inputHandle} name="password" value={setLogData.password} placeholder='Password' className='outline-none border-[1px] border-gray-300 w-[595px] h-[38px] pl-5 text-[14px] mt-2'/>
                        <a href='/' className='mt-1 hover:text-[#25AB44] duration-200'>Forgotten Password</a>
                        <br />
                        <button className='w-[110px] h-[42px] bg-[#25AB44] text-white rounded-full mr-1 mt-4'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login