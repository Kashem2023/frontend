import React from 'react'

const OrderTableRow = (items) => {

     const timeAgo = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " Years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " Months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " Days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " Hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " Minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    const {orderStatus, totalPrice, user, orderItems, createdAt} = items

    console.log(orderItems.length);

    return (
        <>
            <tr className="border-b md:border-r md:border-l table_row">
                <td className="py-5 pl-3">
                   
                        <h3 className="truncate w-20">{user}</h3>
                    
                </td>
                <td className="py-5">{orderItems.length}</td>
                <td className="py-5">${totalPrice}</td>
                <td className="py-5">
                    {timeAgo(createdAt)} ago
                </td>
                <td className="py-5">
                    success
                </td>
                <td className="py-5">
                    {/* Order status */}
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <p className="text-sm text-yellow-500">Pending</p>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default OrderTableRow