import React from 'react'
import {Routes,Route,NavLink, Navigate} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {Products} from "./Pages/Products/Products";
import {Login} from "./Pages/Login/Login"
import { Productsingle } from './Pages/ProductSingle/ProductSIngle';
import { Settings } from './Pages/Settings/Settings';
import { Welcome } from './Pages/Welcome/Welcome';
export function Authenticatedapp(props) {
    
    return (
        <>
        <div className="navbar">
        <nav className="navbar__items container">
           <li className="navbar__item">
             <NavLink className="navbar__item-link" to="/">Home</NavLink>
           </li>
           <li className="navbar__item">
             <NavLink className="navbar__item-link" to="/products">Products</NavLink>
           </li >
           <li className="navbar__item">
             <NavLink className="navbar__item-link" to="/login">Log Out</NavLink>
           </li>
           <li className="navbar__item">
             <NavLink className="navbar__item-link" to="/settings">Settings</NavLink>
           </li>
         </nav>
          </div>
         <Routes>
             <Route path="/" element={<Navigate to="/welcome"/>}/>
             <Route path="/welcome" element={<Welcome/>}/>
             <Route path="/products" element={<Products/>}/>
             <Route path="/products/:productName" element={<Productsingle/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/settings/*" element={<Settings/>}/>
         </Routes>
        </>
    )
}
