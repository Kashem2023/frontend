import React from 'react'
import { Link } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, selectItems } from '../../redux/slices/basketSlice';

const ProductCard = ({ product }) => {

    const { _id, selectedFile, name, price, weight = 200, oldPrice } = product

    let image = selectedFile[0].base64
    let id = _id


    const cartItems = useSelector(selectItems)
    const dispatch = useDispatch()

    const OffCalc = () => {
        const off = ((oldPrice - price) / oldPrice) * 100
        return Math.round(off)
    }

    const checkItemExists = (id) => {
        const find = cartItems.filter(item => item._id === id)
        return !!find.length
    }

    const addToBasket = (product) => {
        dispatch(addItem({
            ...product,
            quantity: 1
        }))
    }

    const removeItemFromCart = () => {
        dispatch(removeItem(id))
    }


    return (
        <Link to={`/products/${id}`}>
            <div className="product-card bg-slate-100 rounded-xl relative duration-200 hover:shadow-lg">
                {oldPrice && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md absolute top-5 left-5 z-10">
                        {OffCalc()}% OFF
                    </span>
                )}
                <img src={image} className="w-[200px] h-[230px] object-contain mx-auto rouded-lg" alt={name} />
                <div className="flex flex-col gap-1 mt-1 pb-[6px] max-w-[275px]">
                    <h4 className="w-[275px] text-sm font-bold text-color pl-6">Farmart</h4>
                    <h3 className="text-lg font-bold text-title truncate pl-6">{name}</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm text-color pl-6">{weight}</span>
                            <div className="flex items-center gap-1">
                                <span className={`text-base font-bold pl-6 ${oldPrice ? 'text-orange' : 'text-green'}`}>£{price}</span>
                                {oldPrice && (
                                    <span className="text-sm line-through text-gray-400">£{oldPrice}</span>
                                )}
                            </div>
                        </div>

                        {checkItemExists(id) ? (
                            <button onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                removeItemFromCart()
                            }} className='bg-[#F0B12B] text-white rounded-full w-10 h-10 flex justify-center items-center mr-2'>
                                <BsFillCartCheckFill size={16} />
                            </button>
                        ) : (
                            <button onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                addToBasket(product)
                            }} className='bg-gray-600 text-white rounded-full w-10 h-10 flex justify-center items-center mr-2'>
                                <FaCartPlus size={16} />
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard