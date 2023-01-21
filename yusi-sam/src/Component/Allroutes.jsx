import React from 'react'
import { Routes,Route } from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import Productlist from './Productlist';
function Allroutes() {
  return (
 <>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="contact" element={<h1>Contact Page</h1>}/>
  <Route path="/product" element={<Productlist/>}/>
  <Route path="/Cart" element={<Cart/>}/>
  <Route path="/login" element={<h1>Login Page</h1>}/>
</Routes>
 
 </>
  )
}

export default Allroutes