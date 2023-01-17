import React from 'react'

const OrderTableMobile = (items) => {

    const {user, totalPrice} = items

    return (
        <div className="md:hidden mb-5 border-b pb-5">
            <h3 className="truncate w-4/5">Order ID: {user}</h3>
            <p className="text-sm text-gray-500 mt-3">Payment: success</p>
            <p className="text-sm text-gray-500">Status: <span className="text-primary font-semibold">Pending</span></p>
            <p className="text-sm text-gray-500 mt-2">Total: <span className="text-green font-semibold">${totalPrice}</span></p>
        </div>
    )
}

export default OrderTableMobile