import React from 'react'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Search from './Search'
import { selectTotalCartItems, selectTotalPrice } from "../redux/slices/basketSlice";

const Nav = ({ logo }) => {

    const cartItems = useSelector(selectTotalCartItems)
    const totalPrice = useSelector(selectTotalPrice)


    return (
        <header className="bg-white py-7 border-b md:px-0 px-4">
            <div className="max-w-[1240px] mx-auto">
                {/* Header Top Area */}
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/">
                        <img src={logo?.base64} alt='LOGO' />
                    </Link>
                    {/* Search */}
                    <Search />
                    {/* Contact */}
                    <div className="lg:flex flex-col hidden">
                        <a href='https://api.whatsapp.com/send?phone=07846732816' target="_blank" className="text-2xl font-bold">07846 732816</a>
                        <p className="self-end text-color">Support 24/7</p>
                    </div>
                    {/* Icons */}
                    <div className="flex items-center gap-5">
                        <Link to="/my-account">

                            <AiOutlineUser className="text-3xl text-title" />
                        </Link>
                        <Link to="/cart">
                            <a href="/cart" className="flex items-center gap-5">
                                <div className="relative">
                                    <AiOutlineShoppingCart className="text-3xl text-title" />
                                    <span className="bg-[#F0B12B] rounded text-center absolute px-2 text-sm -right-3 -top-2 font-semibold">{cartItems || 0}</span>
                                </div>
                                <div className="hidden lg:block">
                                    <span className="text-color text-sm">Your Cart</span>
                                    <p className="text-title font-bold text-lg">${totalPrice}</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav