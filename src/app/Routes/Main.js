import React, { useEffect, useState } from 'react'
import { endPoint } from '../Data/data'
import { Route, Routes, Navigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Newsletter from '../Components/Newsletter'
import SingleProduct from '../Components/Product/SingleProduct'
import { Cart } from '../Pages/Cart'
import CheckOut from '../Pages/CheckOut'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MyAccout from '../Pages/MyAccount'
import Addresses from '../Pages/MyAccount/Addresses'
import Dashboard from '../Pages/MyAccount/Dashboard'
import DashboardOrders from '../Pages/MyAccount/DashboardOrders'
import UserProfile from '../Pages/MyAccount/UserProfile'
import ProductsPage from '../Pages/ProductsPage'
import Register from '../Pages/Register'
import StripeSuccess from '../Pages/StripeSuccess'
import SuccessContent from '../Pages/Success'


const Main = () => {

    const [user, setUser] = useState(null)

    const [logo, setLogo] = useState()

    const getLogo = async () => {

        const res = await fetch(`${endPoint}/api/getlogo`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })

        const resData = await res.json()

        setLogo(resData?.logo[0]?.selectedFile[0]);

    }

    useEffect(() => {
        getLogo()
    }, [])

    useEffect(() => {

        const token = document.cookie.includes('token')
        setUser(token)

    }, [])




    return (
        <React.Fragment>
            <Nav logo={logo} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={user ? <Navigate to="/my-account" /> : <Login />} />
                <Route path='/register' element={user ? <Navigate to="/my-account" /> : <Register />} />
                <Route path='/product' element={<ProductsPage />} />
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />

                <Route path="/my-account" element={user ? <MyAccout /> : <Login />} >
                    <Route path='' element={<Dashboard />} />
                    <Route path='orders' element={<DashboardOrders />} />
                    <Route path='edit-account' element={<UserProfile />} />
                    <Route path='addresses' element={<Addresses />} />
                </Route>


                <Route path="/check-out" element={<CheckOut />} />

                <Route path="/success" element={<SuccessContent />} />
                <Route path="/stripesuccess" element={<StripeSuccess />} />


            </Routes>
            <Newsletter />
            <Footer logo={logo} />

        </React.Fragment>
    )
}

export default Main