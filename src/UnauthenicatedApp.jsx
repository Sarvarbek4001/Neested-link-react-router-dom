import React from 'react'
import useToken from './Hooks/useToken'
export function Unauthenicatedapp(props) {
     const [token,setToken] = useToken()
     const handleSubmit = (evt)=>{
         evt.preventDefault();
         const {username,password} = evt.target.elements;
         setToken({
            username:username.value,
            password:password.value
        })
     }
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' name='username' />
                <input type="password" placeholder='password' name='password' />
                <button type='submit'>Send</button>
            </form>
        </>
    )
}
