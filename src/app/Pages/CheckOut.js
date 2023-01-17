import React from 'react'
import CheckoutContent from '../Components/CheckoutContent'
import Path from '../Components/Path'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CheckOut = () => {

    const stripePromise = loadStripe('pk_test_51MGmmbDG06gMbGlubEdCwCu7dPeDE0AZTnPuAZGHpPdSqbYTOiEY5VVGgmskyR3KFZKEwz0wIZiFxnYnaxJFO0eE00o5AU8lr3');


    return (
        <>

            <Path route="checkout" />

            <div className="p-5">
                <div className="mx-auto max-w-[1240px] mt-10">
                    <h1 className="text-4xl text-center text-title font-bold mb-10">Checkout</h1>
                    <Elements stripe={stripePromise}>
                        <CheckoutContent />
                    </Elements>
                </div>
            </div>
        </>
    )
}

export default CheckOut