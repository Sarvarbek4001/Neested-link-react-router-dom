import React from 'react'
import {Link,useNavigate} from "react-router-dom"
export function Products(props) {
    const navigate = useNavigate()

    return (
        <>
            <h1>Products</h1>
            <button onClick={()=>navigate(-1)}>Backward</button>
            <button onClick={()=>navigate(1)}>Forward</button>
            <ul className='products__itmes'>
                <li className='products__item'>
                    <button className='products__item-link' onClick={()=>navigate("/products/mackbook-pro")}>Macbook Pro</button>
                    <button className='products__item-link' onClick={()=>navigate("/products/iphone-13-pro")}>Iphone 13 Pro</button>
                    <button className='products__item-link' onClick={()=>navigate("/products/iwatch-7")}>Iwatch 7</button>
                </li>
            </ul>
        </>
    )
}
