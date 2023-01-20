import React from 'react'
import "./productlist.css"

function Productlist() {
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
      <div class="cat-div">
        <div class="cat-inside">
          <div class="flex">Category Filters</div>
          <ul>
            <a href=""><span>Mobile & Tablets</span></a>
          </ul>
        </div>
      </div>
      <div class="discount-div">
        <div class="flex">
          Discount
          <span class="clear-all1">Clear All</span>
        </div>
        <ul>
          <input class="twenty" type="checkbox" />
          <label for="">Upto 20% </label>
        </ul>
        <ul>
          <input class="forty" type="checkbox" name="" id="" />
          <label for="">21-40% </label>
        </ul>
        <ul>
          <input class="sixty" type="checkbox" />
          <label for="">41-60% </label>
        </ul>
        <ul>
          <input class="eighty" type="checkbox" />
          <label for="">61-80%</label>
        </ul>
        <ul>
          <input class="aboveAll" type="checkbox" />
          <label for="">More than 80% </label>
        </ul>
      </div>
      <div class="price-div">
        <div class="flex">
          Price
          <span class="clear-all">Clear All</span>
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
      <div class="prod-rating">
        <div class="flex">
          Product Rating
          <span>Clear All</span>
        </div>
        <ul>
          <input class="rat-one" type="checkbox" />
          <label for="">4 & Above(15)</label>
        </ul>
        <ul>
          <input class="rat-two" type="checkbox" name="" id="" />
          <label for="">3 & Above(47)</label>
        </ul>
        <ul>
          <input class="rat-three" type="checkbox" name="" id="" />
          <label for="">2 & Above(35)</label>
        </ul>
        <ul>
          <input class="rat-four" type="checkbox" name="" id="" />
          <label for="">1 & Above(10)</label>
        </ul>
      </div>
      <div class="avail-div">
        <div class="flex">
          Availability
          <span>Clear All</span>
        </div>
        <ul>
          <input class="avail-out" type="checkbox" name="" id="" />
          <label for="">Include out of stock</label>
        </ul>
      </div>
      <div class="cod">
        <div class="flex">
          CoD
          <span>Clear All</span>
        </div>
        <ul>
          <input class="cod-out" type="checkbox" name="" id="" />
          <label for="">Only Cod products(29)</label>
        </ul>
      </div>
      <div class="brand">
        <div class="flex">
          Brand
          <span>Clear All</span>
        </div>
        <ul>
          <input class="Apple" type="checkbox" name="" id="" />
          <label for="">Apple(29)</label>
        </ul>
        <ul>
          <input class="Blackberry" type="checkbox" name="" id="" />
          <label for="">Blackberry(29)</label>
        </ul>
        <ul>
          <input class="iphone" type="checkbox" name="" id="" />
          <label for="">iphone(29)</label>
        </ul>
        <ul>
          <input class="itel" type="checkbox" name="" id="" />
          <label for="">itel(29)</label>
        </ul>
        <ul>
          <input class="Micromax" type="checkbox" name="" id="" />
          <label for="">Micromax(29)</label>
        </ul>
        <ul>
          <input class="Oneplus" type="checkbox" name="" id="" />
          <label for="">Oneplus(29)</label>
        </ul>
        <span>View All</span>
      </div>
      <div class="item-cond">
        <div class="flex">
          Items condition
          <span>Clear All</span>
        </div>
        <ul>
          <input class="New" type="checkbox" name="" id="" />
          <label for="">New(29)</label>
        </ul>
        <ul>
          <input class="Refurbished" type="checkbox" name="" id="" />
          <label for="">Refurbished(29)</label>
        </ul>
      </div>
    </div>
    <div id="main-div">
      <div class="sj">
        <div>
          <h2>Smartphone Junction</h2>
        </div>
        <div class="product-found">
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
      <div id="list_div">

       Show Your Product here
      </div>
    </div>
  </div>
  </>
   
  )
}

export default Productlist