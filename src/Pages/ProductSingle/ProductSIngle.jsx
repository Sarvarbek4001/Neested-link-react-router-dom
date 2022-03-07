import React from 'react'
import {useParams,useNavigate} from "react-router-dom";
export function Productsingle(props) {
    const {productName} = useParams();
    const navigate = useNavigate()

    return (
        <>
            <h1>Products Single</h1>
            <button onClick={()=>navigate("/")}>Home page</button>
            <p>{productName}</p>
        </>
    )
}
