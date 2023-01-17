import { useState } from 'react';
import { endPoint } from '../Data/data'
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const navigate = useNavigate()

    const [searchData, setSearchData] = useState()

    const handleClick = (e) => {
        navigate(`/product?keyword=${searchData}`)
    }

    return (
        <div className="bg-gray-100 p-4 rounded-lg md:flex items-center gap-2 lg:min-w-[650px] md:mx-4 mx-1">
            <select name="product_cat" className="outline-none bg-transparent md:block hidden">
                <option value="0" defaultValue>All Categories</option>
                <option className="level-0" value="breads-sweets">Breads Sweets</option>
                <option className="level-1" value="chocolate">&nbsp;&nbsp;&nbsp;Chocolate</option>
                <option className="level-1" value="cupcakes">&nbsp;&nbsp;&nbsp;Cupcakes</option>
                <option className="level-1" value="fruit-filling">&nbsp;&nbsp;&nbsp;Fruit Filling</option>
                <option className="level-1" value="stouffer">&nbsp;&nbsp;&nbsp;Stouffer</option>
            </select>
            <input
                type="text"
                placeholder="I'm searching for..."
                className="outline-none bg-transparent border-l border-gray-400 md:px-4 px-2 flex-1"
                onChange={(e) => setSearchData(e.target.value)}
            />
            <AiOutlineSearch className="text-2xl cursor-pointer text-gray-600 md:block hidden" onClick={handleClick} />
        </div>
    )
}

export default Search