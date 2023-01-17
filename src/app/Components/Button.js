import React from 'react'

const Button = ({ className, title, ...rest }) => {
    return (
        <button className={`bg-[#F0B12B] font-bold px-6 rounded ${className}`} {...rest}>
            {title}
        </button>
    )
}

export default Button