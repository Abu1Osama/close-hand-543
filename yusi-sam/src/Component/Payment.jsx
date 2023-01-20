import React from "react";
import "./payment.css"

function Payment() {
  return (
    <>
      <div class="cart_steps">
        <div class="sc_contect_wraper">
          <div class="logo">
            <a href="../index.html">
              <img
                src="//images.shopclues.com/images/ui/shopclues_logo@2x.png"
                alt=""
              />{" "}
            </a>
          </div>
          <div class="n_steps">
            <ul>
              <li class="progress">Select Address</li>
              <li class="progress">Review Cart</li>
              <li class="progress">Select Payment</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="payment_sec">
        <div id="methods">
          <h3>Select Payment Mode</h3>
          <div class="radio_methods">
            <ul>
              <li>
                <input
                  name="radioof"
                  class="radio"
                  type="radio"
                  value="Debit Card"
                />
                <label for="">Debit Card</label>
              </li>
              <li>
                <input
                  name="radioof"
                  class="radio"
                  type="radio"
                  value="Credit card"
                  checked
                />
                <label for="">Credit card</label>
              </li>
              <li>
                <input name="radioof" class="radio" type="radio" />
                <label for="">Net Banking</label>
              </li>
              <li>
                <input
                  name="radioof"
                  class="radio"
                  type="radio"
                  value="Credit card"
                  checked
                />
                <label for="">Paytm</label>
              </li>
              <li>
                <input name="radioof" class="radio" type="radio" />
                <label for="">UPI</label>
              </li>
              <li>
                <input name="radioof" class="radio" type="radio" />
                <label for="">Wallets</label>
              </li>
              <li>
                <input name="radioof" class="radio" type="radio" />
                <label for="">Cash on Delivery</label>
              </li>
              <li>
                <input name="radioof" class="radio" type="radio" />
                <label for="">EMI</label>
              </li>
              <li>
                <input name="radioof" class="radio" type="radio" />
                <label for="">Gift Cards</label>
              </li>
            </ul>
          </div>
        </div>
        <div id="card_details">
          <h3>Paytm</h3>
          <div class="form_box">
            <form onsubmit="paymentDone(event)" class="form">
              <input type="submit" id="pay" />
            </form>
          </div>
          <div class="logos">
            <img
              src="	https://pay.momoe.in/payment/img/security_logos.png"
              alt=""
            />
          </div>
          <div class="discount_details">
            <img
              src="https://images.shopclues.com/images/ui/coin_ico.png"
              alt=""
            />
            <strong>Get 100% CashBack</strong> instantly on prepaid orders!
            Place order using Debit/Credit cards, Net Banking, Wallets, UPI
            etc.. and get <strong>1500</strong> CluesBucks+ instantly
          </div>
        </div>
        <div class="offers">
          <h3>Bank/Wallet Offers</h3>
          <div class="applied_offer">
            <ul>
              <li>
                <img
                  src="https://images.shopclues.com/images/ui/wallet_logo/post_promotion/mobikwik.png"
                  alt=""
                />
                <label>
                  Rs.300 Supercash* on placing order via Mobikwik, T&C Apply
                </label>
              </li>
              <li>
                <img
                  src="https://images.shopclues.com/images/ui/wallet_logo/post_promotion/airtel.png"
                  alt=""
                />
                <label>
                  Rs.200 Cashback* on your first order with Airtel Payments
                  Bank, T&C Apply
                </label>
              </li>
              <li>
                <img
                  src="https://images.shopclues.com/images/ui/dhani_ico.png"
                  alt=""
                />
                <label>
                  10% off on Dhani OneFreedom Card, Min transaction value is
                  ₹50, Max Discount ₹100
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
