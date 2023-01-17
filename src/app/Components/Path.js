import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Path = ({ route }) => {
    return (
        <div className='path_bg'>
            <div className='h-[150px] flex justify-center items-center'>
                <h1 className='flex items-center gap-2'>
                    <Link to='/' className='hover:text-[#25AB44] duration-300'>
                        <FaHome />
                    </Link>
                    <span className='font-bold text-[15px]'>{">"}</span>
                    <Link to={`/${route}`} className='hover:text-[#25AB44] duration-300 font-semibold'>{route}</Link>
                </h1>
            </div>
        </div>
    )
}

export default Path