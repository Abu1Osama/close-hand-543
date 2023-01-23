import React from "react";
import "./nav.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "react-dropdown/style.css";

import { Link } from "react-router-dom";
import { useState } from "react";
export const Nav = (props) => {
  const [poptemp, setPoptemp] = useState({
    men: "none",
    women: "none",
    kids: "none",
    home_kitchen: "none",
    mobile_more: "none",
    appliances: "none",
    Sport_more: "none",
    essential: "none",
    offers: "none",
    global: "none",
    bg: "none",
  });
  const popupbg = () => {
    setPoptemp({
      men: "none",
      women: "none",
      kids: "none",
      home_kitchen: "none",
      mobile_more: "none",
      appliances: "none",
      Sport_more: "none",
      essential: "none",
      offers: "none",
      global: "none",
      bg: "none",
    });
  };

  const temp = (e) => {
    if (e.target.value == "men") {
      setPoptemp({
        men: "flex",
        women: "none",
        mobile_more: "none",
        home_kitchen: "none",
        appliances: "none",
        Sport_more: "none",
        essential: "none",
        offers: "none",
        global: "none",
        bg: "block",
      });
    } else if (e.target.value == "women") {
      setPoptemp({
        men: "none",
        women: "flex",
        mobile_more: "none",
        home_kitchen: "none",
        appliances: "none",
        Sport_more: "none",
        essential: "none",
        offers: "none",
        global: "none",
        bg: "block",
      });
    } else if (e.target.value == "home_kitchen") {
      setPoptemp({
        men: "none",
        women: "none",
        mobile_more: "none",
        home_kitchen: "flex",
        appliances: "none",
        Sport_more: "none",
        essential: "none",
        offers: "none",
        global: "none",
      });
    } else if (e.target.value == "mobile_more") {
      setPoptemp({
        men: "none",
        women: "none",
        mobile_more: "flex",
        home_kitchen: "none",
        appliances: "none",
        Sport_more: "none",
        essential: "none",
        offers: "none",
        global: "none",
        bg: "block",
      });
    } else if (e.target.value == "appliances") {
      setPoptemp({
        men: "none",
        women: "none",
        mobile_more: "none",
        home_kitchen: "none",
        appliances: "flex",
        Sport_more: "none",
        essential: "none",
        offers: "none",
        global: "none",
        bg: "block",
      });
    } else if (e.target.value == "Sport_more") {
      setPoptemp({
        men: "none",
        women: "none",
        mobile_more: "none",
        home_kitchen: "none",
        appliances: "none",
        Sport_more: "flex",
        essential: "none",
        offers: "none",
        global: "none",
        bg: "block",
      });
    } else if (e.target.value == "essential") {
      setPoptemp({
        men: "none",
        women: "none",
        mobile_more: "none",
        home_kitchen: "none",
        appliances: "none",
        Sport_more: "none",
        essential: "flex",
        offers: "none",
        global: "none",
        bg: "block",
      });
    } else if (e.target.value == "offers") {
      setPoptemp({
        men: "none",
        women: "none",
        mobile_more: "none",
        home_kitchen: "none",
        appliances: "none",
        Sport_more: "none",
        essential: "none",
        offers: "flex",
        global: "none",
        bg: "block",
      });
    } else if (e.target.value == "global") {
      setPoptemp({
        men: "none",
        women: "none",
        mobile_more: "none",
        home_kitchen: "none",
        appliances: "none",
        Sport_more: "none",
        essential: "none",
        offers: "none",
        global: "none",
        bg: "block",
      });
    }
  };
  return (
    <div style={{marginBottom:"140px"}}>
      <div className="nav_fixed">
      {/* <div id="top">
        <p>Sell With Us | </p>
        <p>Call Us | </p>
        <p>Download App: </p>
      </div> */}
      <div id="nav_p">
        <div>
          <Link to={"/"}>
            {" "}
            <img
              className="logoclue"
              src="https://images.shopclues.com/images/ui/shopclues_logo@2x.png"
              alt=""
            />
          </Link>
        </div>
        <div className="join">
          <input
            type="text"
            name=""
            id="Search"
            placeholder="What is on your mind today?"
          />
          <Link>
            <button id="btn">Search</button>
          </Link>
        </div>
        <div id="sellListbtm">
          <ul>
            <li>
             
              <i className="fa fa-map-marker-alt"></i>
            </li>
            <li>
              <i className="far fa-bell"></i>
            </li>
            <li>
              <i className="far fa-heart"></i>
            </li>
            <li>
              <a href="/cart">
                <i className="fa fa-shopping-cart" id="showcart">
                  <span id="qty"></span>
                </i>
              </a>
              <div className="hover_content1">
                <div id="quickCart">
                  <div className="nItems"></div>
                  <div className="listItem"></div>
                  <div className="btnContainer">
                    <a href="/cart">View Cart</a>
                    <a href="">Place Order</a>
                  </div>
                </div>
              </div>
            </li>
            <li id="signin">
            {/* <a id="login_sucess">Sign In</a> */}
             <Link to={"/signup"}>Signup</Link>
              {/* <div className="hover_content">
                <div id="userHeading">
                
                  <div className="vip">
                  <i className="fal fa-user-circle"></i>
                  <p id="login_sucess1">Login/Register</p>
                  <p >Join VIP club  </p>
                  </div>
                </div>
                <ul id="gotouserpage">
                  <li>
                    <i className="fas fa-clipboard-list"></i>
                    My Orders
                  </li>
                  <li>
                    <i className="fal fa-comment-alt-dots"></i>
                    My Returns
                  </li>
                  <li>
                    <i className="far fa-heart"></i>
                    Wishlist
                  </li>
                  <li>
                    <i className="far fa-user-circle"></i>
                    My Profile
                  </li>
                  <li>
                    <i className="fas fa-comment-alt-dots"></i>
                    My Chat
                  </li>
                  <li>
                    <i className="fa fa-rupee-sign"></i>
                    My CluesBucks
                  </li>
                  <li>
                    <i className="far fa-comment-alt-edit"></i>
                    My Feedback
                  </li>
                  <li>
                    <i className="far fa-user-headset"></i>
                    Help & Support
                  </li>
                  <li>
                    <i className="fa fa-rupee-sign"></i>
                    My Favorite Stores
                  </li>
                  <li id="signout">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                  </li>
                </ul>
              </div> */}
            </li>
          </ul>
        </div>
      </div>
      <div id="nav_t">
        <div>
          <img
            id="navimg"
            src="https://images.shopclues.com/images/ui/madeinindia.png"
            alt=""
          />
        </div>

        <button value={"mobile_more"} onMouseEnter={temp} id="btn1">
          Mobiles & more
        </button>
        <button value={"men"} onMouseEnter={temp} id="btn1">
          Men
        </button>
        <button value={"women"} onMouseEnter={temp} id="btn1">
          Women
        </button>
        <button value={"home_kitchen"} onMouseEnter={temp} id="btn1">
          Home & Kitchen
        </button>
        <button value={"appliances"} onMouseEnter={temp} id="btn1">
          Appliances
        </button>
        <button value={"Sport_more"} onMouseEnter={temp} id="btn1">
          Sports & More
        </button>
        <button value={"essential"} onMouseEnter={temp} id="btn1">
          Essentials
        </button>
        <button value={"offers"} onMouseEnter={temp} id="btn1">
          Offers
        </button>
        <button value={"global"} onMouseEnter={temp} id="btn1">
          Global Shopping
        </button>

        <div
          onMouseEnter={popupbg}
          className="popup_bg"
          style={{ display: poptemp.bg }}
        ></div>

        <div className="popup" style={{ display: poptemp.men }}>
          <ul>
            
              <h3>Men's Clothing</h3>
            
            <li>T-shirt</li>
            <li onClick={props.shirt}>Shirt</li>
            <li  onClick={props.jeans}>Jeans</li>
            <li>Cargos</li>
            <li>Trousers</li>
            <li>Track Pants</li>
            <li>Shorts & 3/4th</li>
            <li>Jackets</li>
            <li>Ethnic Wear</li>
            <li>Winter wear</li>
            <li>Inner & Sleepwear</li>
            <li>29K Store</li>
              <h3>Sportswear</h3>
          </ul>
          <ul>
              <h3>Footwear</h3>
            <li>Casual Shoes</li>
            <li>Sports Shoes</li>
            <li>Formal Shoes</li>
            <li>Sandals & Floaters</li>
            <li>Slippers & Flip Flops</li>
            <li>Loafers And Moccasins</li>
            <li>Boots</li>
            <li>Ethnic</li>
            <li>Speciality Footwear</li>
            <li>Shoe Care Kit & Accessories</li>
            <li>Top Selling Brands</li>
          </ul>
          <ul>
              <h3>Men's Watches</h3>
            <li>Watch Combos</li>
            <li>Couple Watches</li>
            <li>Fastrack, Sonata & More</li>
            <li>Budget Watches</li>
            <li>Smart Watches</li>
              <h3>Men's Jewellery</h3>
            <li>Fashion Jewellery</li>
            <li>Chains & Pendants</li>
            <li>Precious Jewellery</li>
            <li>Silver Jewellery</li>
            <li>Coins & Collectibles</li>
          </ul>
          <ul>
              <h3>Fragrances</h3>
            <li>Fragrance Combos and Kits</li>
            <li>Deodorants</li>
              <h3>Grooming</h3>
            <li>Beard & Moustache Care</li>
            <li>Men's Shaving</li>
            <li>Grooming Appliances</li>
            <li>Bath Essentials</li>
            <li>Oral Care</li>
            <li>Skin Care</li>
            <li>Hair Care</li>
              <h3>Eyewear</h3>
            <li>Sunglasses</li>
            <li>Spectacle Frames</li>
          </ul>
          <ul>
              <h3>Fashion Accessories</h3>
            <li>Wallets</li>
            <li>Belts</li>
            <li>Socks</li>
            <li>Caps</li>
            <li>Winter Accessories</li>
            <li>Men's Accessories Gift Sets</li>
              <h3>Bags & luggage</h3>
            <li>Backpacks & Laptop Bags</li>
            <li>Gym Bags</li>
            <li>Trolleys & Duffle Bags</li>
            <li>Travel Accessories</li>
            <li>Messenger Bags</li>
            <li>Rucksacks</li>
          </ul>
        </div>

        <div className="popup" style={{ display: poptemp.women }}>
          <ul>
              <h3>Ethnic Wear</h3>
            <Link to={"/product"}>
              {" "}
              <li onClick={props.sarees}>Sarees</li>
            </Link>
            <li>Kurtas & Kurtis</li>
            <li>Lehengas & Party Gowns</li>
            <li>Dress Material</li>
            <li>Leggings & Churidar</li>
            <li>Meia Store</li>
              <h3>Western Wear</h3>
            <li>Tops & Tees</li>
            <li>Dresses</li>
            <li>Jeans & Jeggings</li>
            <li>Pants & Trousers</li>
            <li>Skirts</li>
            <li>Code Yellow Store</li>
          </ul>
          <ul>
              <h3>Lingerie</h3>
            <li onClick={props.call}>Bra</li>
            <li>Panties</li>
            <li>Sleepwear</li>
            <li>Shapewear</li>
            <li>Lingerie Sets</li>
              <h3>Footwear</h3>
            <li>Casual Shoes</li>
            <li>Flats & Sandals</li>
            <li>Women's Heels & Pumps</li>
            <li>Women Sports Shoes</li>
            <li>Wedges</li>
            <li>Women's Bellies</li>
            <li>Flip Flops & Slippers</li>
          </ul>
          <ul>
              <h3>All Jewellery</h3>
            <li>Fashion Jewellery</li>
            <li>Pendant & Necklace Sets</li>
            <li>Mangalsutra & Bangles</li>
            <li>Earrings & Rings</li>
            <li>Gold & Diamond Jewellery</li>
            <li>Silver Jewellery</li>
            <li>Coins & Collectibles</li>
              <h3>Women's Watches</h3>
            <li>Casual Wear Watches</li>
            <li>Office Wear Watches</li>
            <li>Branded Watches</li>
            <li>Budget Watches</li>
            <li>
              <h3>Couple Watches</h3>
            </li>
          </ul>
          <ul>
              <h3>Beauty & Perfumes</h3>
            <li>Skin Care</li>
            <li>Make-Up</li>
            <li>Hair Care</li>
            <li>Personal Care & Grooming</li>
            <li>Beauty Accessories</li>
            <li>Grooming Appliances</li>
            <li>Bath Essentials</li>
            <li>Oral Care</li>
            <li>Women Hygiene</li>
              <h3>Fragrances</h3>
            <li>Perfumes</li>
            <li>Deodorants</li>
          </ul>
          <ul>
              <h3>Fashion Accessories</h3>
            <li>Socks & Stockings</li>
            <li>Hair Accessories</li>
            <li>Scarves & Stoles</li>
            <li>Belts</li>
            <li>Handkerchiefs</li>
            <li>Shawls</li>
              <h3>Bags & luggage</h3>
            <li>Backpacks & Laptop Bags</li>
            <li>Gym Bags</li>
          </ul>
        </div>
        <div className="popup" style={{ display: poptemp.mobile_more }}>
          <ul>
              <h3>
                <a href="#">Smartphones & Tablets</a>
              </h3>
            <li>
              <a href="#">I KALL</a>
            </li>
            <li>
              <a href="#">Mi</a>
            </li>
            <li>
              <a href="#">Realme</a>
            </li>
            <li>
              <a href="#">Samsung</a>
            </li>
            <li>
              <a href="#">Vivo</a>
            </li>
            <li>
              <a href="#">Oppo</a>
            </li>
            <li>
              <a href="#">Apple</a>
            </li>
            <li>
              <a href="#">Techno</a>
            </li>
            <li>
              <a href="#">Infinix</a>
            </li>
            <li>
              <a href="#">Micromax</a>
            </li>
           
          </ul>
          <ul>
              <h3>Feature Phones</h3>
            <li>Micromax</li>
            <li>I KALL</li>
            <li>Nokia</li>
            <li>MTR</li>
            <li>Heemax</li>
            <li>Karbonn</li>
            <li>Kechaoda</li>
            <li>Gfive</li>
            <li>Blackbear</li>
            <li>Samsung</li>
              <h3>Gaming Consoles</h3>
            <li>Gaming Titles</li>
            <li>Gaming Accessories</li>
          </ul>
          <ul>
              <h3>Bestsellers in Accessories</h3>
            <li>Top Rated Accessories</li>
            <li>Combos</li>
            <li>Power Banks</li>
            <li>Cases & Covers</li>
            <li>Mobile Holders</li>
            <li>Cables</li>
            <li>Adapter & Chargers</li>
            <li>Selfie Sticks</li>
              <h3>Storage Devices</h3>
            <li>Memory Cards</li>
            <li>Pen Drives</li>
            <li>External Hard disks</li>
          </ul>
          <ul>
              <h3>Branded Accessories</h3>
            <li>Tiitan</li>
            <li>Toshiba</li>
            <li>Sandisk</li>
            <li>Philips</li>
            <li>Portronics</li>
            <li>Zebronics</li>
            <li>Boat</li>
            <li>Syska</li>
            <li>JBL</li>
              <h3>Audio Store</h3>
            <li>Headphones & Earphones</li>
            <li>Bluetooth Earphones</li>
            <li>Bluetooth Speakers</li>
          </ul>
          <ul>
              <h3>Laptops</h3>
            <li>HP</li>
            <li>Lenovo</li>
            <li>Asus</li>
            <li>Acer</li>
            <li>Coconics</li>
            
              <h3>Laptop Accessories</h3>
            <li>Mouse</li>
            <li>Keyboards</li>
            <li>Laptop Bags</li>
            <li>Laptop Skins</li>
            
          </ul>
        </div>
        <div className="popup" style={{ display: poptemp.home_kitchen }}>
          <ul>
              <h3>Kitchen & Dining</h3>
            <li>Dinner sets</li>
            <li>Cookware</li>
            <li>Container Sets</li>
            <li>Kitchen tools</li>
            <li>Lunch box</li>
            <li>Kitchen storage</li>
              <h3>Kitchen Appliances</h3>
            <li>Gas Cooktops</li>
            <li>Juicer Mixer Grinders</li>
            <li>Induction Cooktops</li>
            <li>Kettles</li>
            <li>Sandwich Makers</li>
            <li>Blenders and choppers</li>
          </ul>
          <ul>
              <h3>Home Furnishing</h3>
            <li>Home Berry</li>
            <li>Bedsheets</li>
            <li>Curtains</li>
            <li>Carpets & Rugs</li>
            <li>Blankets</li>
            <li>Towels</li>
            <li>Furnishing Combos</li>
              <h3>Bathroom & Sanitaryware</h3>
            <li>Sanitaryware</li>
            <li>Bathroom Fixtures</li>
            <li>Bathing Utilities</li>
            <li>Bathroom Mirror and Cabinets</li>
            <li>Faucets and Jet sprays</li>
          </ul>
          <ul>
              <h3>Lighting Solutions</h3>
            <li>Led bulbs</li>
            <li>Tubelights & Battens</li>
            <li>Rechargeable Lights</li>
            <li>Electrical</li>
            <li>Panel & Ceiling Lights</li>
              <h3>Tools & Hardware</h3>
            <li>Hand Tools</li>
            <li>Power Tools</li>
            <li>Safety Equipments</li>
              <h3>Home Improvement</h3>
            <li>Cleaning Supplies</li>
            <li>Laundry Organisation</li>
            <li>Organisers</li>
          </ul>
          <ul>
              <h3>Decor</h3>
            <li>Clocks</li>
            <li>Hookahs & Accessories</li>
            <li>Wall Decor</li>
            <li>Religion & Spirituality</li>
            <li>Table Decoratives</li>
            <li>Garden</li>
              <h3>Furniture</h3>
            <li>Inflatable Sofas</li>
            <li>Storage Furniture</li>
            <li>Bean Bags</li>
            <li>Wall Shelves</li>
            <li>Sofa Sets</li>
            <li>Beds</li>
          </ul>
          <ul>
              <h3>Home Appliance</h3>
            <li>Water Purifiers</li>
            <li>Irons</li>
            <li>Emergency Lights</li>
            <li>Sewing Machines</li>
            <li>Vacuum Cleaners</li>
            <li>Appliances Parts & Components</li>
          </ul>
        </div>
        <div className="popup" style={{ display: poptemp.appliances }}>
          <ul>
              <h3>TV & DTH</h3>
            <li>Television</li>
            <li>Full HD</li>
            <li>HD Ready</li>
            <li>Ultra HD</li>
              <h3>Shop TV By Screen</h3>
            <li>Below 32 Inch</li>
            <li>32 Inch</li>
            <li>39 Inch - 42 Inch</li>
            <li>43 Inch & Above</li>
              <h3>DTH</h3>
          </ul>
          <ul>
              <h3>Large Home Appliances</h3>
            <li>Air Conditioners</li>
            <li>Split ACs</li>
            <li>Window Acs</li>
            <li>
              <h3>Stabilizers</h3>
            </li>
            <li>
              <h3>Air Coolers</h3>
            </li>
            <li>
              <h3>Air Purifiers And De-Humidifiers</h3>
            </li>
              <h3>Refrigerators</h3>
            <li>Single Door</li>
            <li>Double Door</li>
            <li>Side by Side</li>
          </ul>
          <ul>
              <h3>Washing Machine</h3>
            <li>Semi Automatic</li>
            <li>Fully Automatic Top Load</li>
            <li>Fully Automatic Front Load</li>
            <li>
              <h3>Geysers</h3>
            </li>
            <li>
              <h3>Heaters</h3>
            </li>
            <li>
              <h3>Inverters</h3>
            </li>
              <h3>Large Kitchen Appliances</h3>
            <li>Chimney & Hoods</li>
            <li>Microwave and Halogen Ovens</li>
            <li>OTG</li>
            <li>Dishwashers</li>
          </ul>
        </div>
        <div className="popup" style={{ display: poptemp.Sport_more }}>
          <ul>
              <h3>Diet Nutrition</h3>
            <li>Whey Protein</li>
            <li>Weight Gainers</li>
            <li>Pre & Post Workout</li>
            <li>Fat Burners</li>
            <li>Vitamins & Minerals</li>
            <li>Ayurveda & Herbal</li>
              <h3>Healthcare</h3>
            <li>Flu Care</li>
            <li>Massage & Relaxation</li>
            <li>Weighing Scales</li>
            <li>BP Monitors</li>
            <li>Supports & Elderly Care</li>
            <li>General Wellness</li>
          </ul>
          <ul>
              <h3>Fitness & Exercise</h3>
            <li>Ab Exercisers</li>
            <li>Home Gyms</li>
            <li>Exercise Bikes</li>
            <li>Fitness Accessories</li>
            <li>Treadmills</li>
            <li>Cardio Equipments</li>
              <h3>Sports</h3>
            <li>Cricket Bats</li>
            <li>Footballs</li>
            <li>Badminton Racquets</li>
            <li>Table Tennis</li>
            <li>Basketball</li>
            <li>Swimming & Water Sports</li>
          </ul>
          <ul>
              <h3>Car Accessories & Electronics</h3>
            <li>Perfumes & Fresheners</li>
            <li>Dashboard Accessories</li>
            <li>Sun Shades</li>
            <li>Car Body Covers</li>
            <li>Door & Bumper Guards</li>
            <li>Car Electronics</li>
              <h3>Bike Accessories & more</h3>
            <li>Bike Body Covers</li>
            <li>Riding Gear</li>
            <li>Helmets</li>
            <li>Bike Locks & Alarm Systems</li>
            <li>Car & Bike Care</li>
            <li>Tools & Oils</li>
          </ul>
          <ul>
              <h3>Beauty & Perfumes</h3>
            <li>Skin Care</li>
            <li>Make-Up</li>
            <li>Hair Care</li>
            <li>Personal Care & Grooming Products</li>
            <li>Beauty Accessories</li>
              <h3>Grooming</h3>
            <li>Fragrance Combos and Kits</li>
            <li>Beard & Moustache Care</li>
            <li>Men's Shaving</li>
            <li>Grooming Appliances</li>
            <li>Bath Essentials</li>
            <li>Oral Care</li>
          </ul>
          <ul>
              <h3>Daily Needs & Essentials</h3>
            <li>Food & Beverages</li>
            <li>Household Supplies</li>
            <li>Pet Suplies</li>
            <li>Regional Sweets and snacks</li>
            <li>Stationery</li>
            <li>Books</li>
              <h3>Gift Cards</h3>
          </ul>
        </div>
        <div className="popup" style={{ display: poptemp.essential }}>
          <ul>
              <h3>Food and Beverage</h3>
            <li>Oils & Vinegars</li>
            <li>Pastas & Noodles</li>
            <li>Coffee & Tea</li>
            <li>Cakes Biscuits & Chips</li>
            <li>Dry Fruits Nuts & Seeds</li>
            <li>Jams Honey & Spreads</li>
            <li>Mouth Freshners & Digestives</li>
            <li>Ready to cook</li>
            <li>Sauces Dips & Pickles</li>
              <h3>Grocery & Staples</h3>
            <li>Rice & Flours</li>
            <li>Pulses</li>
            <li>Sugar & Jaggery</li>
          </ul>
          <ul>
              <h3>Household Supplies</h3>
            <li>Laundry and Detergents</li>
            <li>Disposables</li>
            <li>Pooja Essentials</li>
            <li>Repellents & Devices</li>
              <h3>Medical Equipment & Accessories</h3>
            <li>Ayurveda & Herbal</li>
            <li>Family Nutrition</li>
            <li>Vitamins and Minerals</li>
          </ul>
          <ul>
              <h3>Personal Care and Grooming</h3>
            <li>Men's Grooming</li>
            <li>Feminine Hygiene</li>
            <li>Oral Care</li>
            <li>Hair Care</li>
            <li>Fragrances</li>
              <h3>Baby Care</h3>
            <li>Baby Food</li>
            <li>Bath & Skin Care</li>
            <li>Diapers & Wipes</li>
              <h3>Pet Supplies</h3>
          </ul>
          <ul>
              <h3>Top Brands</h3>
              <h3>Pharma</h3>
            <li>Ayurveda</li>
            <li>Pain Relief</li>
            <li>Sexual Wellness</li>
            <li>Homeopathy</li>
          </ul>
        </div>
        <div className="popup" style={{ display: poptemp.offers }}>
          <ul>
              <h3>All Offers</h3>
            <li>Womens Tops & Skirts</li>
            <li>FlipFlops</li>
            <li>Mens Shorts</li>
              <h3>Popular Categories</h3>
            <li>Women Ethnic</li>
            <li>Mens Tshirt</li>
            <li>Watches</li>
            <li>Mens Footwear</li>
            <li>Women Western</li>
            <li>Home Furnishing</li>
          </ul>
          <ul>
              <h3>Wholesale</h3>
            <li>Mobile and Laptop Accessories</li>
            <li>Fashion</li>
            <li>Home & Kitchen</li>
            <li>Footwear</li>
              <h3>Featured Brands</h3>
            <li>Stylogue</li>
            <li>Ikall</li>
            <li>eglob</li>
            <li>Walltola</li>
            <li>Seagate HD</li>
            <li>DCH</li>
          </ul>
          <ul>
              <h3>New Arrivals</h3>
            <li>Lifestyle</li>
            <li>Home & Living</li>
            <li>Electronic</li>
            <li>Daily Utility</li>
              <h3>Explore Our Stores</h3>
            <li>Saree Fest</li>
            <li>Watch Carnival</li>
            <li>Lighting Shoppe</li>
            <li>Jeans Fest</li>
            <li>Mobile Accessories</li>
            <li>Bed Sheets</li>
          </ul>
          <ul>
              <h3>Shop By Price</h3>
            <li>Under 99</li>
            <li>Under 199</li>
            <li>Under 249</li>
            <li>Under 349</li>
              <h3>Shop By Discount</h3>
            <li>Upto 25% Off</li>
            <li>Upto 50% Off</li>
            <li>Upto 60% Off</li>
            <li>Upto 80% Off</li>
          </ul>
          <ul>
              <h3>Buy More Save More</h3>
            <li>Ethnic Wear Combo</li>
            <li>Men Combo</li>
            <li>Watch Combo</li>
            <li>Footwear Combo</li>
              <h3>Best Offers</h3>
            <li>Korean Avenue</li>
            <li>Refer & Earn</li>
            <li>Wholesale</li>
          </ul>
        </div>
        <div className="popup" style={{ display: poptemp.global }}></div>
      </div>

      <div id="back">
        <div className="popup_signin">
          <div className="points">
            <ul>
              <li>
                <i className="fas fa-hand-holding-usd"></i>
                <h6>Loyalty Points</h6>
                <p>Earn CluesBucks on prepaid orders</p>
              </li>
              <li>
                <i className="fas fa-cart-arrow-down"></i>
                <h6>Instant Checkout</h6>
                <p>Hassle-Free Payment Everytime</p>
              </li>
              <li>
                <i className="fas fa-badge-percent"></i>
                <h6>Exclusive Offers</h6>
                <p>For special offers & value deals</p>
              </li>
            </ul>
          </div>
          <div id="page_signin">
            <div id="select_op">
              <h2 id="showin">LOGIN</h2>
              <h2 id="showster">REGISTER</h2>
              <button id="closetab">
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="signinShow">
              <form>
                <input
                  type="text"
                  placeholder="Enter your username"
                  id="username2"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password2"
                />
                <input type="submit" value="Login" id="checkdetail" />
              </form>
              <h3>Social Login</h3>
              <button>Continue with Facebook</button>
            </div>
            <div className="signup">
              <form>
                <input
                  type="email"
                  placeholder="Enter your email id"
                  id="email"
                />
                <p id="emailError"></p>
                <input
                  type="number"
                  placeholder="Enter your mobile number"
                  id="number"
                />
                <p id="MobileError"></p>
                <input
                  type="text"
                  placeholder="Enter your username"
                  id="username1"
                />
                <p id="UsernameError"></p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password1"
                />
                <p id="PasswordError"></p>
                <input type="submit" value="Register" id="storedetail" />
              </form>
              <h3>Register With</h3>
              <button>Continue with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
