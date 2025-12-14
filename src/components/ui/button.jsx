import React from 'react'

export function Button({ children, className = '', ...rest }) {
    const base = `inline-flex items-center justify-center rounded ${className}`
    return (
        <button className={base} {...rest}>
            {children}
        </button>
    )
}

export default Button
