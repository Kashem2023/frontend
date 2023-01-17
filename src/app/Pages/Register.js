import React, { useState } from 'react'
import { endPoint } from '../Data/data'
import { Link } from 'react-router-dom'
import Path from '../Components/Path'

const Register = () => {
    

    const [regData, setRegData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        password: "",
        confirmPassword: ""
    })

    const inputHandle = (e) => {
        setRegData({
            ...regData,
            [e.target.name]: e.target.value
        })
    }

    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    const Register = async (e) => {
        e.preventDefault();

        const res = await fetch(`${endPoint}/api/resister`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(regData)
        })

        

        const resData = await res.json()
       
        const setUser = JSON.stringify(resData.user)

        if(resData.success === false){
            return alert(resData.message)
        }else{
            localStorage.setItem('@User', setUser)
            setCookie('token', resData.token, 1)
            window.location.reload();
            
        }

    }


    return (
        <div className='max-w-full'>
            <Path route="Register" />
            <div className='max-w-[1240px] mx-auto'>
                <div className='mb-[20px]'>
                    <div>
                        <h1 className='text-[25px] font-semibold py-[20px]'>My cart</h1>
                        <p>If you already have an account with us, please login at the <Link to="/login" className='underline text-[#25AB44]'>login page</Link>.</p>
                    </div>
                    <form onSubmit={Register}>
                        <h1 className='text-[20px] font-semibold py-[35px]'>Your Personal Details</h1>
                        <div className="flex justify-between items-center">
                            <label>First Name</label>
                            <input type="text" onChange={inputHandle} name="firstName" value={setRegData.firstName} placeholder='First Name' className='outline-none border-[1px] border-gray-300 w-[975px] h-[38px] pl-5 text-[14px] mt-2' required />
                        </div>
                        <div className="flex justify-between items-center">
                            <label>Last Name</label>
                            <input type="text" onChange={inputHandle} name="lastName" value={setRegData.lastName} placeholder='Last Name' className='outline-none border-[1px] border-gray-300 w-[975px] h-[38px] pl-5 text-[14px] mt-2' required/>
                        </div>
                        <div className="flex justify-between items-center">
                            <label>Enter your e-mail address</label>
                            <input type="email" onChange={inputHandle} name="email" value={setRegData.email} placeholder='Enter your e-mail address' className='outline-none border-[1px] border-gray-300 w-[975px] h-[38px] pl-5 text-[14px] mt-2' required/>
                        </div>
                        <div className="flex justify-between items-center">
                            <label>Telephone</label>
                            <input type="number" onChange={inputHandle} name="telephone" value={setRegData.telephone} placeholder='Telephone' className='outline-none border-[1px] border-gray-300 w-[975px] h-[38px] pl-5 text-[14px] mt-2' required/>
                        </div>
                        <h1 className='text-[20px] font-semibold py-[20px]'>Your Password</h1>
                        <div className="flex justify-between items-center">
                            <label>Password</label>
                            <input type="text" onChange={inputHandle} name="password" value={setRegData.password} placeholder='Password' className='outline-none border-[1px] border-gray-300 w-[975px] h-[38px] pl-5 text-[14px] mt-2' required/>
                        </div>
                        <div className="flex justify-between items-center">
                            <label>Password Confirm</label>
                            <input type="text" onChange={inputHandle} name="confirmPassword" value={setRegData.confirmPassword} placeholder='Password Confirm' className='outline-none border-[1px] border-gray-300 w-[975px] h-[38px] pl-5 text-[14px] mt-2' required/>
                        </div>
                        <div className='py-6'>I have read and agree to the Privacy Policy <input type="checkbox" /></div>
                        <button type='submit' className='w-[140px] h-[42px] bg-[#25AB44] text-white rounded-full mr-1'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register