import React, { useState } from 'react'
import OrderDetails from './OrderDetails'
import OrderSubmit from './OrderSubmit'

const CheckoutContent = () => {

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

    return (
        <div className='flex justify-between flex-col md:flex-row overflow-x-hidden'>
            <OrderSubmit setBillingAdress={setBillingAdress} billingAdress={billingAdress}/>
            <OrderDetails billingAdress={billingAdress}/>
        </div>
    )
}

export default CheckoutContent