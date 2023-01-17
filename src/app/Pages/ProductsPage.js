import React, { useEffect, useState } from 'react'
import { endPoint } from '../Data/data'
import Path from '../Components/Path'
import { useLocation } from 'react-router-dom';
import ProductCard from '../Components/Product/ProductCard';
import Spinner from '../Components/Spinner';

const ProductsPage = () => {

    const [product, setProduct] = useState(null)
    const [categories, setCategories] = useState(null)

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword')
    const [loading, setLoading] = useState(null)

    const getCategories = async () => {

        setLoading(true)

        const res = await fetch(`${endPoint}/api/getCategories`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })

        const resData = await res.json()

        setCategories(resData?.categories);

        setLoading(false)

    }

    useEffect(() => {
        getCategories()
    }, [])


    const getAllProduct = async () => {

        setLoading(true)

        if (keyword) {
            const res = await fetch(`${endPoint}/api/getAllProduct?keyword=${keyword}`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })

            const resData = await res.json()

            setProduct(resData.products);

        } else {
            const res = await fetch(`${endPoint}/api/getAllProduct`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })

            const resData = await res.json()

            setProduct(resData.products);
        }

        setLoading(false)
    }

    useEffect(() => {
        getAllProduct()
    }, [keyword])

    return (
        <div className='max-w-full'>
            <Path route={keyword} />
            <div className='max-w-[1240px] mx-auto'>
                <div className='flex justify-between'>
                    <div><span>Product Compare (0)</span></div>
                    <div className='flex space-x-6'>
                        <div className='border rounded-full px-3 py-1'>
                            <select name="product_cat" className="outline-none bg-transparent md:block hidden">
                                <option value="0" defaultValue>All Categories</option>
                                {
                                    categories?.map((i) => (
                                        <option className="level-0" value={i?.Cdata}>{i?.Cdata}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='border rounded-full px-3 py-1'>
                            <select name="product_cat" className="outline-none bg-transparent md:block hidden">
                                <option value="0" defaultValue>Price</option>
                                <option className="level-0" value="breads-sweets">0 - 200</option>
                                <option className="level-1" value="chocolate">200 - 400</option>
                                <option className="level-1" value="cupcakes">400 - 600</option>
                                <option className="level-1" value="fruit-filling">600 - 800</option>
                                <option className="level-1" value="stouffer">800 - 1000</option>
                            </select>
                        </div>
                    </div>
                </div>
                {
                    loading ? <Spinner /> :
                        <div className="w-full flex gap-7 mt-5 pt-5 pb-14 pl-2 -ml-2 flex-wrap justify-center">
                            {product?.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    product={product}
                                />
                            ))}
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductsPage