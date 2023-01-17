import React from 'react'
import CartActions from '../Components/CartActions'
import CartTable from '../Components/CartTable'
import Path from '../Components/Path'
import { useSelector } from "react-redux"
import { selectItems } from "../redux/slices/basketSlice"


export const Cart = () => {

    const cartItems = useSelector(selectItems)

    return (
        <main>

            <Path route="cart" />

            <div className="p-5">
                <div className="mx-auto max-w-5xl mt-10">
                    <h1 className="text-4xl text-center text-title font-bold mb-10">Cart</h1>
                    {cartItems.length > 0 ? (
                        <>
                            <CartTable />
                            <CartActions />
                        </>
                    ) : (
                        <>
                            <img
                                src="/images/empty.gif" loading="lazy" alt=""
                                className="mx-auto w-1/3"
                            />
                            <h2 className="text-center text-2xl font-bold my-5">Your cart is empty ＞﹏＜</h2>
                        </>
                    )}

                </div>
            </div>
        </main>
    )
}
