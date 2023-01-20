import React from 'react'
import "./cart1.css"

function Cart1() {
  return (
    <>
    <div class="box0">
        <span>
            <a href="" class="left_arrow">&#8592;</a>
            <a href=""><img
                class="shopclues"
                src="https://images.shopclues.com/images/ui/shopclues_logo@2x.png"
                alt="shopclues"/>
            </a> 
        </span>
    </div>
    <div class="container-1">
            <h2 class="heading">My Cart ( 0 Item )</h2>
            <p class="coupon">Congrats! You are eligible for Flat Rs 100 off on Prepaid orders with minimum cart value of Rs 1000. Use coupon code PREPAID100.Limit one coupon at a time..</p>
            <div id="append">
            <div class="box1">
            <div class="img">
                <img
                class="small-img"
                src=""
                alt="item"/>
            </div>
            <div class="text">
                <span class="box1-1">
                    <p class="product">cloth</p>
                    <p id="minus">-</p><p id="number">1</p><p class="plus">+</p>
                    <p class="price">Price :</p>
                    <p class="rate">₹</p>
                    <p  id="money">₹</p>
                </span>
                <span class="box1-2">
                    <p class="cod">COD not applicable</p>
                    <p class="remove">Remove</p>
                    <p class="fee">Shipping Fee :</p>
                    <p class="free">FREE</p>
                    <p class="tax">Inclusive of all the applicable taxes</p>
                </span>
            </div>
        </div>
                
            </div>
    </div>
    <div class="container-2">
        <div class="first-box">
            <div id="pincode"> 
            <div class="first-1">
                <span>
                    <img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bliPHslbHZ4QJutmOC9EoCfLcSqnSYc5BX88AU1BsHJfcr-7hFWqbh3CewWNbE9kcH0&usqp=CAU" alt=""/>
                    <p class="delivery">Delivery pincode</p>
                </span>
            </div>
            <div class="first-2">
                <span>
                    <input id="pc" class="pincode" type="number" placeholder="Enter your pincode"/>
                    <button onclick="pincodeChange()" class="submit">Submit</button>
                </span>
            </div>
        </div>
           
        </div>
        <div class="third-box">
            <span class="spanning">
                <p class="total">Total</p>
                <p id="rs">₹ 0</p>
            </span>
            <span class="spanning">
                <p class="totals">Grand Total</p>
                <p id="amount">₹ 0</p>
            </span>
            <p class="taxes">Inclusive of all the applicable taxes</p>
            <button class="place">Place Order</button>
        </div>
    </div>
   </>
  )
}

export default Cart1