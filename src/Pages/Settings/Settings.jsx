import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
export function Settings(props) {
    

    return (
        <>
            <h1>Settings</h1>

            <ul className='container' style={{display:'flex',listStyle:'none',justifyContent:'space-between'}}>
                <li >
                    <Link style={{display:"block",textDecoration:'none',fontSize:'24px'}} to="notifications">Notifications</Link>
                </li>
                <li>
                <Link style={{display:"block",textDecoration:'none',fontSize:'24px'}} to="security">Security</Link>
                </li>
            </ul>

            <Routes>
                 <Route path="/notifications" element={<p>Notifications</p>}/>
                 <Route path="/security" element={<p>Security</p>}/>
            </Routes>
        </>
    )
}
