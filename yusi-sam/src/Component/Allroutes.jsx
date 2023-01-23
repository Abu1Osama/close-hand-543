import React from 'react'
import { Routes,Route } from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import Productdetail from './Productdetail';
import Productlist from './Productlist';
import Signup from './Signup';
import Login from './Login';
import { useState } from 'react';
function Allroutes(props) {
const [size,setSize]=useState( {
  "name":"Fasense Women's Cotton Solid Color Wire Free Non Padded Bra (Pack of 2)",
  "price":416 ,
  "product_id": 152414155,
  "description":"Comfort is the key which comes first when you purchase your Bra, Thats Why FASENSE bring daily use REGULAR BRAS for every women in Cotton-Spun Fabric. This Bra is exclusively designed by our designers keeping in mind of today weather and comfort level to every teen girl or women. This bra is Non-Padded with Round Cups & comes with 3/4 Medium Coverage, Its Fabric is streatchable and comfortable with Regular Straps and it can wear comfortably entire Day also you also get a choice of different colors in this bra. Its Powder coated rings & adjusters comes with life long durability & Ultra soft Back hook and eyelet that gives comfort fit with no itiches on skin.            ",
  "image":"https://cdn.shopclues.com/images1/thumbnails/114467/320/320/152414155-114467815-1624096129.jpg"
})
const [addcart,setAddtocart]=useState([ {
  "name":"Singularity Clothing Trendy Collar and Cuff Shirt for men in Pink ",
          "price":429 ,
          "product_id": 152492016,
          "description":"Gladiator products enterprises presents its elite brand  ‘’SINGULARITY®’’ that believes in re-inventing, re-establishing and re-discovering fashion and style with quality and precision. We take pride in presenting you “made in India” products indigenously developed and manufactured wholesome in India. ",
          "image":"https://cdn.shopclues.com/images1/thumbnails/114606/320/320/152492016-114606757-1625662985.jpg "
}])
//  const obj=(naam)=> {
//     console.log(naam)
    
//   }


  return (
 <>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="contact" element={<h1>Contact Page</h1>}/>
  <Route path="/product" element={<Productlist  setSize={setSize} spike={props.pro} sarees={props.sarees} shirt={props.shirt} jeans={props.jeans} />}/>
  <Route path="/Cart"  element={<Cart addcart={addcart} data={"abc"} />}/>
  <Route path="/productdetail" element={<Productdetail addcart={addcart} setAddtocart={setAddtocart} size={size} />}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
 
 </>
  )
}

export default Allroutes