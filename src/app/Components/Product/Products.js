import { endPoint } from '../../Data/data'
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'

const Products = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState()


    const getAllProduct = async () => {
        setLoading(true)
        const res = await fetch(`${endPoint}/api/getAllProductHome`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })

        const resData = await res.json()

        if (resData.products) {
            setProduct(resData.products);
            setLoading(false)
        } else {
            setLoading(true)
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    return (
        <section className="max-w-full py-20">
            <div className="max-w-[1240px] mx-auto">

                {
                    loading ? <Spinner />
                        :

                        <div className="w-full flex gap-7 mt-5 pt-5 pb-14 pl-2 -ml-2 flex-wrap justify-center">
                            {product?.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    product={product}
                                />
                            ))}
                        </div>
                }
                <div className='flex justify-center'>
                    <Link to='/product' className='bg-[#25AB44] text-white w-[200px] py-4 flex justify-center rounded-lg'>All Product</Link>
                </div>
            </div>
        </section>
    )
}

export default Products