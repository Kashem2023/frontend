import React, { useState } from 'react'
import Button from '../../Components/Button'

const Addresses = () => {

    const [billingAdress, setBillingAdress] = useState({
        firstName: "",
        lastName: "",
        company: "",
        country: "",
        firstAdress: "",
        lastAdress: "",
        city: "",
        state: "",
        postalCode: "",
        number: "",
        email: ""
    })

    const inputHandle = (e) => {
        setBillingAdress({
            ...billingAdress,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div>
                <label className='text-[14px]'>First Name</label>
                <br />
                <input type="text" onChange={inputHandle} name="firstName" value={setBillingAdress.firstName} placeholder='First Name' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>Last Name</label>
                <br />
                <input type="text" onChange={inputHandle} name="lastName" value={setBillingAdress.lastName} placeholder='Last Name' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>Company</label>
                <br />
                <input type="text" onChange={inputHandle} name="company" value={setBillingAdress.company} placeholder='Enter your Company Name' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>country</label>
                <br />
                <input type="text" onChange={inputHandle} name="country" value={setBillingAdress.country} placeholder='Country' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>1st Address</label>
                <br />
                <input type="text" onChange={inputHandle} name="firstAdress" value={setBillingAdress.firstAdress} placeholder='Enter Your Adress' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>2nd Address</label>
                <br />
                <input type="text" onChange={inputHandle} name="lastAdress" value={setBillingAdress.lastAdress} placeholder='2nd Adress' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>City</label>
                <br />
                <input type="text" onChange={inputHandle} name="city" value={setBillingAdress.city} placeholder='City' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>state</label>
                <br />
                <input type="text" onChange={inputHandle} name="state" value={setBillingAdress.state} placeholder='State' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>Postal code</label>
                <br />
                <input type="number" onChange={inputHandle} name="postalCode" value={setBillingAdress.postalCode} placeholder='Postal Code / Zip Code' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>Phone Number</label>
                <br />
                <input type="text" onChange={inputHandle} name="number" value={setBillingAdress.number} placeholder='Mobile Number' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                <label className='text-[14px]'>email</label>
                <br />
                <input onChange={inputHandle} name="email" value={setBillingAdress.email} type="text" placeholder='Enter your e-mail address' className='outline-none border-[1px] border-gray-300 md:w-[595px] w-[300px] h-[38px] pl-5 text-[14px] mt-2 mb-4' />
                <br />
                < Button
                    title="Update Profile"
                    className="py-4 mt-5 text-white mr-5"
                />
            </div>
        </div>
    )
}

export default Addresses
