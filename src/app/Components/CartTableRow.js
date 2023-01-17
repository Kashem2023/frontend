import React from 'react'
import Quantity from './Quantity'
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from '../redux/slices/basketSlice';

const CartTableRow = ({ _id, name, selectedFile, price, weight, quantity }) => {

    

    let image = selectedFile[0].base64

    const dispatch = useDispatch()

    const increaseQuantity = () => {
        dispatch(increaseItemQuantity(_id))
    }

    const decreaseQuantity = () => {
        dispatch(decreaseItemQuantity(_id))
    }

    return (
        <>
            <tr className="border-b md:border-r md:border-l table_row">
                <td className="py-5 pl-3">
                    <img src={image} loading="lazy" alt="" className="w-20 h-20 object-cover rounded-md" />
                </td>
                <td className="py-5 max-w-[250px]">
                    <div className="">
                        <h1 className="text-lg font-bold text-title">{name}</h1>
                        <p className="text-sm text-gray-500">Weight: {weight}</p>
                    </div>
                </td>
                <td className="py-5">£{price}</td>
                <td className="py-5">
                    <div className="w-32">
                        <Quantity
                            quantity={quantity}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                        />
                    </div>
                </td>
                <td className="py-5">£{(quantity * price).toFixed(2)}</td>
                <td className="py-5">
                    <MdDelete onClick={() => dispatch(removeItem(_id))} className="text-2xl cursor-pointer" />
                </td>
            </tr>
        </>
    )
}

export default CartTableRow