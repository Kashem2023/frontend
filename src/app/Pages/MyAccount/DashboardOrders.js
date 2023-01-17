import React, { useEffect, useState } from 'react'
import { endPoint } from '../../Data/data'
import OrderTableMobile from '../../Components/OrderTableMobile'
import OrderTableRow from '../../Components/OrderTableRow'
import Spinner from '../../Components/Spinner'

const DashboardOrders = () => {

    const [allOrder, setAllOrder] = useState(null)
    const [loading, setLoading] = useState()

    const getAllUser = async () => {
        setLoading(true)
        const res = await fetch(`${endPoint}/api/orders/me`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })

        const resData = await res.json()

        setAllOrder(resData?.orders);
        setLoading(false)
    }

    useEffect(() => {
        getAllUser()
    }, [])

    return (
        <div className="my-5 relative">
            <table className="w-full md:table hidden">
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="text-title py-5 pl-3">Order Id</th>
                        <th className="text-title py-5">Products</th>
                        <th className="text-title py-5">Total Price</th>
                        <th className="text-title py-5">Time ago</th>
                        <th className="text-title py-5">Payment</th>
                        <th className="text-title py-5">Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        loading ? <div className='mt-5 ml-10'><Spinner /></div> : <>
                            {allOrder?.map((item, i) => (
                                <OrderTableRow key={i} {...item} />
                            ))}
                        </>
                    }


                </tbody>

            </table>

            {
                loading ? <div className='md:hidden'><Spinner /></div> : <>
                    {allOrder?.map((item, i) => (
                        <OrderTableMobile key={i} {...item} />
                    ))}
                </>
            }


        </div>
    )
}

export default DashboardOrders