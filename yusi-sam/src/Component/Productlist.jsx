import React from 'react'
import "./productlist.css"
import {Link, useNavigate} from "react-router-dom"
import axios  from "axios";
import { useEffect,useState } from 'react';
import data from './db.json';

function Productlist(props) {
  // const[spike,setDataI]=useState("sarees")

  // async function loadJSON(url) {
  //   const res = await fetch(url);
  //   return await res.json();
  // }
 
  //  useEffect(() => {
  //   // fetchData(spike).then((res)=>setDataI(res.data))
  //   loadJSON(`db.json/sarees`).then((data) => {
  //     setDataI(data)
  //     console.log(spike);
  //   });
     
  //  }, [])
  // const [data, setData] = useState([])
  // const fetchJson = () => {
  //   fetch('./db.json')
  //   .then(response => {
  //     return response.json();
  //   }).then(data => {
  //     setData(data);
  //   })
  // }
  useEffect(() => {
   console.log(data)
  },[])
 
  
  const Navigate=useNavigate();

  return (
    <>
    <div id="promodiv">
    <div id="promowrap">
      <ul>
        <li>Time Sale</li>
        <li>Flu Care</li>
        <li>Food & Beverage</li>
        <li>Personal Hygiene</li>
        <li>Home Cleaning</li>
        <li>Nutrition & Supplements</li>
        <li>Kitchen & Dining</li>
        <li>Refurbished Mobiles</li>
        <li>Mobile Accessories</li>
      </ul>
    </div>
  </div>
  <div id="cont">
    <div id="side-div">
      <div className="cat-div">
        <div className="cat-inside">
          <div className="flex">Category Filters</div>
          <ul>
            <a href=""><span>Womens</span></a>
          </ul>
        </div>
      </div>
      <div className="discount-div">
        <div className="flex">
          Discount
          <span className="clear-all1">Clear All</span>
        </div>
        <ul>
          <input className="twenty" type="checkbox" />
          <label for="">Upto 20% </label>
        </ul>
        <ul>
          <input className="forty" type="checkbox" name="" id="" />
          <label for="">21-40% </label>
        </ul>
        <ul>
          <input className="sixty" type="checkbox" />
          <label for="">41-60% </label>
        </ul>
        <ul>
          <input className="eighty" type="checkbox" />
          <label for="">61-80%</label>
        </ul>
        <ul>
          <input className="aboveAll" type="checkbox" />
          <label for="">More than 80% </label>
        </ul>
      </div>
      <div className="price-div">
        <div className="flex">
          Price
          <span className="clear-all">Clear All</span>
        </div>
        <ul>
          <input id="price-one" type="checkbox" />
          <label for="">2501-5000</label>
        </ul>
        <ul>
          <input id="price-two" type="checkbox" />
          <label for="">Above 5000</label>
        </ul>
      </div>
      <div className="prod-rating">
        <div className="flex">
          Product Rating
          <span>Clear All</span>
        </div>
        <ul>
          <input className="rat-one" type="checkbox" />
          <label for="">4 & Above(15)</label>
        </ul>
        <ul>
          <input className="rat-two" type="checkbox" name="" id="" />
          <label for="">3 & Above(47)</label>
        </ul>
        <ul>
          <input className="rat-three" type="checkbox" name="" id="" />
          <label for="">2 & Above(35)</label>
        </ul>
        <ul>
          <input className="rat-four" type="checkbox" name="" id="" />
          <label for="">1 & Above(10)</label>
        </ul>
      </div>
      <div className="avail-div">
        <div className="flex">
          Availability
          <span>Clear All</span>
        </div>
        <ul>
          <input className="avail-out" type="checkbox" name="" id="" />
          <label for="">Include out of stock</label>
        </ul>
      </div>
      <div className="cod">
        <div className="flex">
          CoD
          <span>Clear All</span>
        </div>
        <ul>
          <input className="cod-out" type="checkbox" name="" id="" />
          <label for="">Only Cod products(29)</label>
        </ul>
      </div>
      <div className="brand">
        <div className="flex">
          Brand
          <span>Clear All</span>
        </div>
        <ul>
          <input className="Apple" type="checkbox" name="" id="" />
          <label for="">Apple(29)</label>
        </ul>
        <ul>
          <input className="Blackberry" type="checkbox" name="" id="" />
          <label for="">Blackberry(29)</label>
        </ul>
        <ul>
          <input className="iphone" type="checkbox" name="" id="" />
          <label for="">iphone(29)</label>
        </ul>
        <ul>
          <input className="itel" type="checkbox" name="" id="" />
          <label for="">itel(29)</label>
        </ul>
        <ul>
          <input className="Micromax" type="checkbox" name="" id="" />
          <label for="">Micromax(29)</label>
        </ul>
        <ul>
          <input className="Oneplus" type="checkbox" name="" id="" />
          <label for="">Oneplus(29)</label>
        </ul>
        <span>View All</span>
      </div>
      <div className="item-cond">
        <div className="flex">
          Items condition
          <span>Clear All</span>
        </div>
        <ul>
          <input className="New" type="checkbox" name="" id="" />
          <label for="">New(29)</label>
        </ul>
        <ul>
          <input className="Refurbished" type="checkbox" name="" id="" />
          <label for="">Refurbished(29)</label>
        </ul>
      </div>
    </div>
    <div id="main-div">
      <div className="sj">
        <div>
        </div>
        <div className="product-found">
          <p>30 Products found</p>
          <ul id="sortby">
            <span>Sort By:</span>
            <span id="high-price">High Price |</span>
            <span id="low-price">Low price |</span>
            <span><a href="#">Popular Products |</a></span>
            <span><a href="#">Best Selling |</a></span>
            <span><a href="#">New Arrivals</a></span>
          </ul>
        </div>
      </div>
   <div className='dis'>
   {
      data[props.spike].map((item)=>(
        <div id="list_div">
        <div className="mobile-div">
             
               <button onClick={()=>{props.setSize(item)
         Navigate("/productdetail")
    } }> <div className="img-div">
               <span id="wishlist">
                  <a 
                    ><img
                      src="https://cdn-icons-png.flaticon.com/128/6320/6320703.png"
                      alt=""
                  /></a>
                </span>
                  <img
                    src={item.image}
                    alt="pimage"
                  />
                </div></button>
                <div>
                  <p id="shipping">{item.name}</p>
                  <div className="new-price">
                    <span className="p-price">₹{" "}{item.price}</span>
                    <span className="prd-discount">80%Off</span>
                  </div>
                  <div className="old-price">
                    <span>₹{" "}1000</span>
                  </div>
                  <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p id="shipping"><i className="fal fa-truck"></i>Free Shipping</p>
                </div>
              </div>

        </div>
      ))
    }
   </div>

    </div>
  </div>
  </>
   
  )
}

export default Productlist