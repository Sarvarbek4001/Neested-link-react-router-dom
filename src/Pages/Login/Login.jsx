import React from 'react'
import useToken from "../../Hooks/useToken"
export function Login(props) {
    const [,setToken] =useToken();
    return (
        <>
            <button onClick={()=>setToken(false)}>Log out</button>
        </>
    )
}
