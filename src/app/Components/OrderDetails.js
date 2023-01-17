import React, { useEffect, useRef, useState } from 'react'
import { endPoint } from '../Data/data'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectItems, selectTotalPrice } from '../redux/slices/basketSlice'
import {
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';


const OrderDetails = ({ billingAdress }) => {
    const navigate = useNavigate()

    let { firstName, lastName, company, country, firstAdress, lastAdress, city, state, postalCode, number, email } = billingAdress

    let name = `${firstName} ${lastName}`
    let address = `${firstAdress} ${lastAdress}`

    const [Info, setInfo] = useState(null)

    const getPaymentInfo = async () => {
        const res = await fetch(`${endPoint}/api/get-payment-info`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json'}
        })

        const resData = await res.json()

        setInfo(resData);
    }

    useEffect(() => {
        getPaymentInfo()
    }, [])


    const stripe = useStripe();
    const elements = useElements();
    const payBtn = useRef(null);

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    const cartItems = useSelector(selectItems)
    const cartTotal = useSelector(selectTotalPrice)

    const order = {
        billingAdress,
        orderItems: cartItems,
        totalPrice: cartTotal
    };

    const [selectedValue, setSelectedValue] = useState()

    const getMethod = async (e) => {
        const res = await fetch(`${endPoint}/api/get-method`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })

        const resData = await res.json()
        setSelectedValue(resData?.method[0].name);
    }

    useEffect(() => {
        getMethod()
    }, [])


    const handleOrder = async (e) => {


        payBtn.current.disabled = true;

        var cookieValue = decodeURIComponent(getCookie('token'));

        e.preventDefault()

        const paymentData = {
            amount: Math.round(cartTotal * 100),
        };

        const res = await fetch(`${endPoint}/api/payment/process`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json',  'Authorization': `${cookieValue}`  },
            body: JSON.stringify(paymentData)
        })

        const resData = await res.json()

        console.log(resData);
        const client_secret = resData?.client_secret

        if (!stripe || !elements) return;

        const result = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: name,
                    email: email,
                    address: {
                        line1: address,
                        city: city,
                        state: state,
                        postal_code: postalCode,
                        country: country,
                    },
                },
            },
        });

        if (result.error) {
            payBtn.current.disabled = false;

            alert(result.error.message);

        } else {

            createOrder()

        }


    }

    const createOrder = async (e) => {

        var cookieValue = decodeURIComponent(getCookie('token'));

        const res = await fetch(`${endPoint}/api/order/newStripe`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${cookieValue}` },
            body: JSON.stringify(order)
        })

        const resData = await res.json()
        if (resData.success === false) {
            return alert(resData.message)
        } else {
            navigate('/stripesuccess')
        }
    }



    const sendBank = async (e) => {

        var cookieValue = decodeURIComponent(getCookie('token'));

        const res = await fetch(`${endPoint}/api/order/new`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${cookieValue}`
            },
            body: JSON.stringify(order)
        })

        const resData = await res.json()
        if (resData.success === false) {
            return alert(resData.message)
        } else {
            navigate('/success')
        }
    }

    return (
        <div>

            <h3 className="text-2xl mb-4">Your order</h3>
            <div className="bg-gray-100 p-5 rounded-md w-[360px]">
                <div className="flex justify-between pb-5 border-b">
                    <h2 className="text-base font-bold">PRODUCT</h2>
                    <h2 className="text-base font-bold">TOTAL</h2>
                </div>
                <div className="space-y-3 bg-white">
                    {cartItems.map((item, i) => (
                        <div key={i} className="flex justify-between py-5 px-5 border-b">
                            <h2 className="text-base font-medium">{item?.name} <span className="text-gray-400">(x{item?.quantity})</span></h2>
                            <h2 className="text-base font-bold ml-2">${item?.price}</h2>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-base font-bold">Subtotal</h2>
                    <h2 className="text-base font-bold text-green">${cartTotal}</h2>
                </div>
                <div className="py-5 border-b space-y-3">
                    <span className="text-title">Shipping</span>
                    <ul className="">
                        <li className="">- Flat rate</li>
                    </ul>
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-lg font-bold">Total</h2>
                    <h2 className="text-lg font-bold text-green">${cartTotal}</h2>
                </div>


                {
                    selectedValue === 'Stripe' ?



                        <form onSubmit={handleOrder}>
                            <div className="pt-5 pb-2">
                                <h2 className="text-lg font-bold">Payment method</h2>
                                <p className="text-gray-500 mt-3"> - Pay with a Credit/Debit Card</p>
                            </div>
                            <CardElement hidePostalCode={true} className='py-4 border px-2 my-4 text-[#000]' style={{
                                base: {
                                    color: '#000',
                                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                                    fontSmoothing: 'antialiased',
                                    fontSize: '16px',
                                    '::placeholder': {
                                        color: '#aab7c4'
                                    }
                                },
                                invalid: {
                                    color: '#fa755a',
                                    iconColor: '#fa755a'
                                }
                            }} />

                            <button type='submit' ref={payBtn} className={`bg-[#F0B12B] font-bold w-[100%] rounded py-2 text-center`}>
                                Pay - ${cartTotal}
                            </button>
                        </form>
                        :
                        <div>
                            <div className="pt-5 pb-2 space-y-2">
                                <h2 className="text-lg font-bold">Pay With Bank</h2>
                                <h1><span className='font-semibold text-[20px]'>User Name:</span> {Info?.userName}</h1>
                                <h1><span className='font-semibold text-[20px]'>Account Number:</span> {Info?.accountNumber}</h1>
                                <h1><span className='font-semibold text-[20px]'>Bank Name:</span> {Info?.bankName}</h1>
                            </div>
                            <button type='submit' onClick={sendBank} className={`bg-[#F0B12B] font-bold w-[100%] rounded py-2 text-center`}>
                                Pay - ${cartTotal}
                            </button>
                        </div>

                }

            </div>
        </div>
    )
}

export default OrderDetails