import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, updateBasket } from '../redux/slices/basketSlice'
import Main from './Main'


const Routers = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectItems)

    useEffect(() => {
        // get cart items from local storage
        const local_items = localStorage.getItem('@CART_ITEMS')
            ? JSON.parse(localStorage.getItem('@CART_ITEMS'))
            : []

        dispatch(updateBasket(local_items))

    }, [])

    useEffect(() => {
        if (!cartItems.length) return
        // save cart items to local storage
        const items = JSON.stringify(cartItems || [])
        localStorage.setItem('@CART_ITEMS', items)
    }, [cartItems])



    return (
        <React.Fragment>
            <Main />
        </React.Fragment>
    )
}

export default Routers