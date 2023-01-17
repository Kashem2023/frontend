import React, { useEffect, useState } from 'react'
import { endPoint } from '../../Data/data'
import { useParams } from "react-router-dom";
import Path from '../Path';
import FooterCard from '../FooterCard';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectItems, removeItem } from '../../redux/slices/basketSlice';


const SingleProduct = () => {

    let { id } = useParams();

    const dispatch = useDispatch()
    const cartItems = useSelector(selectItems)

    const [product, setProduct] = useState(null)
    const [Option, setOption] = useState(null)

    let image = product?.selectedFile[0].base64
    let price = Option ? Number(Option) : product?.price


    const getSingleProduct = async () => {
        const res = await fetch(`${endPoint}/api/products/${id}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })

        const resData = await res.json()

        setProduct(resData.product);
    }

    useEffect(() => {

        getSingleProduct()

    }, [])

    const checkItemExists = (id) => {
        const find = cartItems.filter(item => item._id === id)
        return !!find.length
    }

    const addToBasket = (product) => {
        if (Option) {
            product.price = Number(Option)
        }else{
            product.price = product.price
        }
        dispatch(addItem({
            ...product,
            quantity: 1
        }))
    }

    const removeItemFromCart = () => {
        dispatch(removeItem(id))
    }

    const handleChecked = (e) => {
        
        let price = e.target.value.split(' ')[0]

        setOption(price)

    }

    return (

        <div className="bg-[#F5F5F5]">
            <Path route={product?.name} />
            <div className="max-w-[1240px] mx-auto">
                <div className="p-10 bg-white rounded-2xl">
                    <div className="flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-7">
                        <div className="lg:w-2/5 w-full lg:border-r">
                            <img src={image} alt="" loading="lazy" />
                        </div>
                        <div className="lg:w-2/5 w-full lg:px-10 pl-0">
                            <h4 className="md:text-xl text-base font-bold mb-2 mt-5 text-orange">MartFury</h4>
                            <h1 className="text-title md:text-3xl text-xl font-semibold mb-5">{product?.name}</h1>
                            <span className="text-color text-xs">⭐⭐⭐⭐⭐</span>
                            <div className="my-3">
                                <span className="text-sm text-color mb-2 block">500gl</span>
                                <div className="flex items-center gap-1">
                                    <span className={`text-xl font-bold`}>£{price}</span>
                                </div>
                            </div>
                            <div className="my-5 bg-[#EBFAE9] w-fit px-3 py-2 border border-[#82d45e] rounded-md">
                                Availability: <span className="text-green ml-1 font-bold">In stock</span>
                            </div>
                            <div className="border-t"></div>
                            <div className='my-3'>
                                <h1 className='text-2xl font-semibold my-2'>Available Option</h1>
                                <div className='ml-5'>
                                    {
                                        product?.Option.map((item) => (
                                            <div key={item}>
                                                <input type="checkbox" onChange={handleChecked} id="vehicle1" name="vehicle1" value={item} checked={Option === item} />
                                                <label className='ml-3' for="vehicle1">£ {item}</label><br />
                                            </div>
                                        ))
                                    }


                                </div>
                            </div>
                            <div className="border-t"></div>
                            <div className="my-5">
                                <div className="flex gap-3">


                                    {
                                        checkItemExists(id) ?
                                            <button onClick={(e) => {
                                                e.stopPropagation()
                                                e.preventDefault()
                                                removeItemFromCart()
                                            }} className="btn-white bg-[#F0B12B] px-4 py-2 rounded-lg">Cart Added</button>
                                            :
                                            <button onClick={(e) => {
                                                e.stopPropagation()
                                                e.preventDefault()
                                                addToBasket(product)
                                            }} className="btn-white bg-[#F0B12B] px-4 py-2 rounded-lg">Add to cart</button>
                                    }


                                </div>
                            </div>
                            <div className="border-t my-7"></div>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-900"><span className="text-color">Categories:</span> Breakfast Cereals, Chocolate & Sweets, Crisps, Snacks & Nuts, Food Cupboard, Tins & Cans</p>
                                <div>
                                    <h1 className='text-2xl font-semibold my-2'>Discription</h1>
                                    <p className=''>{product?.description}</p>
                                </div>
                                <div className="border-t"></div>
                                <div>
                                    <h1 className='text-2xl font-semibold my-2'>Features</h1>
                                    <p className=''>{product?.features}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/5 w-full">
                            <div className="bg-[#F3F3F3] px-5 py-7 rounded-md">
                                <FooterCard
                                    image="/icons/f(1).svg"
                                    title="Free Shipping"
                                    subtitle="For all orders over $200"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/icons/f(2).svg"
                                    title="1 & 1 Returns"
                                    subtitle="Cancellation after 1 day"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/icons/f(3).svg"
                                    title="Secure Payment"
                                    subtitle="100% secure payments"
                                />
                            </div>
                            <div className="bg-[#F3F3F3] px-5 mt-5 py-7 rounded-md">
                                <p className="font-bold text-title">Hotline Order:</p>
                                <span className="text-color">Mon - Fri: 7:00 am - 18:00PM</span>
                                <p className="text-xl md:text-2xl font-bold text-title mt-5">+856 332 - 466</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct