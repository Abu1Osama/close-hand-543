import React from 'react'
import { Routes,Route } from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import Productdetail from './Productdetail';
import Productlist from './Productlist';
import Signup from './Signup';
import Login from './Login';
function Allroutes() {
  return (
 <>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="contact" element={<h1>Contact Page</h1>}/>
  <Route path="/product" element={<Productlist/>}/>
  <Route path="/Cart" element={<Cart/>}/>
  <Route path="/productdetail" element={<Productdetail/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
 
 </>
  )
}

export default Allroutes