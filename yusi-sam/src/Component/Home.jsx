import React from "react";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Deal from "./Deal";
import Gadget from "./Gadget";
import Daily_essential from "./Daily_essential";
import Prime_mall from "./Prime_mall";
import Festive_Specials from "./Festive_Specials";
import Trending_Fashion_Zone from "./Trending_Fashion_Zone";
import Budget_Bazaar from "./Budget_Bazaar";
import Sports_Health from "./Sports_Health";
import Brand_Store from "./Brand_Store";
import Branded_Deals from "./Branded_Deals";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://cdn.shopclues.com/images/banners/2023/Jan/21/HB1_Anniversary_Web_SYM_21Jan23.jpg",
    "https://cdn.shopclues.com/images/banners/2023/Jan/21/HB2_Jacket_Web_SYM_21Jan23.jpg",
    "https://cdn.shopclues.com/images/banners/2023/Jan/21/HB3_Blockbuster_Web_SYM_21Jan23.jpg",
    "https://cdn.shopclues.com/images/banners/2023/Jan/21/HB4_JDD_Web_SYM_21Jan23.jpg",
    "https://cdn.shopclues.com/images/banners/2023/Jan/11/ShopcluesPCRefresh_Web_SYM_11Jan23.jpg",
  ];

  const bestseling_product = [
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/97673/160/160/144264990-97673863-1552293470.jpg",
      name: "Refurbished Nokia 1100/G...",
      p3: "969",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/108304/160/160/150274047-108304383-1598424782.jpg",
      name: "I Kall K18 New 2.4 inch Disp...",
      p3: "999",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/112439/160/160/151644357-112439509-1608043117.jpg",
      name: "Refurbished Iphone 5S 1G...",
      p3: "6999",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/114072/160/160/151368684-114072791-1621067507.jpg",
      name: "Refurbished Iphone 4S 16G...",
      p3: "4199",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/108304/160/160/150274090-108304486-1594015695.jpg",
      name: "I Kall New 2.8 inch Di...",
      p3: "1099",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/100740/160/160/146388171-100740822-1598963228.jpg",
      name: "Refurbished Nokia 1600 Bla...",
      p3: "999",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/104955/160/160/148961798-104955503-1581584855.jpg",
      name: "Refurbished Nokia 2200 Mo...",
      p3: "1309",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/95267/160/160/142782625-95267466-1544373387.jpg",
      name: "Refurbished Nokia C5-03(6...",
      p3: "1599",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/112439/160/160/151644360-112439517-1608043134.jpg",
      name: "Refurbished Iphone 5S 1G...",
      p3: "6999",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/114072/160/160/151368684-114072791-1621067507.jpg",
      name: "Refurbished Iphone 4S 16G...",
      p3: "4199",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/108304/160/160/150274090-108304486-1594015695.jpg",
      name: "I Kall New 2.8 inch Di...",
      p3: "1099",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/100740/160/160/146388171-100740822-1598963228.jpg",
      name: "Refurbished Nokia 1600 Bla...",
      p3: "999",
    },
  ];

  const deals_of_the_day = [
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg",
      name: "Venerate Headphone ...",
      p1: "269",
      p2: "1999",
      p3: "1299",
      dis: "87% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/81476/320/320/135627858-81476269-1665754103.jpg",
      name: "MTR MT310 Dual Sim..",
      p1: "749",
      p2: "999",
      p3: "237",
      dis: "25% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/114233/200/200/152310615-114233377-1621542810.jpg",
      name: "POCKESTER Brown Wood K...",
      p1: "129",
      p2: "699",
      p3: "128",
      dis: "81% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/71795/200/200/128902274-71795769-1653057803.jpg",
      name: "Premium Quality Nylon Braded ...",
      p1: "250",
      p2: "399",
      p3: "427",
      dis: "37  % off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/46673/320/320/113119558-46673382-1653791314.jpg",
      name: "Blue Cotton Paddad Bralatte...",
      p1: "449",
      p2: "999",
      p3: "5537",
      dis: "55% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/110894/200/200/151056678-110894199-1602215912.jpg",
      name: "Nike ?men Slipper",
      p1: "419",
      p2: "1495",
      p3: "380",
      dis: "74% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/106955/200/200/149777643-106955049-1593024830.jpg",
      name: "I Kall K900 5.5 inches(13.97 ...",
      p1: "5399",
      p2: "7999",
      p3: "4551",
      dis: "43% off",
    },
  ];
  const Your_gadget_store = [
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/99370/200/200/145508146-99370521-1634810951.jpg",
      name: "i7S TWS Twins Wireless In t...",
      p1: "379",
      p2: "2999",
      p3: "342",
      dis: "88% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/95357/200/200/142826933-95357827-1606398228.jpg",
      name: "HBS-730 In the Ear Bluetoot...",
      p1: "329",
      p2: "1099",
      p3: "294",
      dis: "73% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/81476/200/200/135627858-81476269-1619845151.jpg",
      name: "MTR MT310 Dual Sim Featu...",
      p1: "749",
      p2: "999",
      p3: "693",
      dis: "30% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/112883/200/200/151860087-112883707-1625898295.jpg",
      name: "Innotek Mini K1 Universal W...",
      p1: "149",
      p2: "599",
      p3: "123",
      dis: "79% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/98012/200/200/144475154-98012302-1584693159.jpg",
      name: "Refurbished Nokia 1100 Bla...",
      p1: "1199",
      p2: "1999",
      p3: "1045",
      dis: "47% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/112883/200/200/151860087-112883707-1625898295.jpg",
      name: "Innotek Mini K1 Universal W...",
      p1: "149",
      p2: "599",
      p3: "123",
      dis: "79% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/98012/200/200/144475154-98012302-1584693159.jpg",
      name: "Refurbished Nokia 1100 Bla...",
      p1: "1199",
      p2: "1999",
      p3: "1045",
      dis: "47% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/105068/200/200/149071836-105068393-1582034843.jpg",
      name: "Raptech Compatible Micro...",
      p1: "189",
      p2: "999",
      p3: "161",
      dis: "83% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/102529/200/200/147616538-102529620-1584606292.jpg",
      name: "3 meter long Universal mobi...",
      p1: "179",
      p2: "799",
      p3: "158",
      dis: "80% off",
    },
  ];
  const daily_essential = [
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/105589/280/1/149278210-105589660-1585251645.jpg",
      name: "Coooking Essentials",
      p3: "Starting at Rs.49",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/105589/320/1/149278289-105589933-1585251885.jpg",
      name: "Skin, Hair & Body",
      p3: "Starting at Rs.99",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/104441/280/1/148788228-104441348-1578472379.jpg",
      name: "Kitchen Essentials",
      p3: "Starting at Rs.49",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/105520/280/1/149254102-105520442-1584863770.jpg",
      name: "Mask, Sanitizer  & More",
      p3: "Starting at Rs.49",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/42332/280/1/966030079473255231PUTPaCZnL146606056314665883171470319810.jpg",
      name: "Cleaning & Dusting Supplies",
      p3: "Starting at Rs.109",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/105577/320/320/149274414-105577366-1585235325.jpg",
      name: "Laundry Detergents",
      p3: "Starting at Rs.49",
    },
  ];
  const prime_mall = [
    {
      img: "https://gd.image-gmkt.com/li/698/249/1669249698.g_800-w-st_g.jpg",
      name: "Fitgo Black Mens Trackpant...",
      p2: "999",
      p3: "189",
      dis: "81% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/102/570/1652570102.g_800-w-st_g.jpg",
      name: "Trueware Ruff Tuff Jug 120...",
      p2: "499",
      p3: "289",
      dis: "42% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/323/424/1674424323.g_800-w-st_g.jpg",
      name: "Wisholics ID116 Plus Blueto...",
      p2: "1299",
      p3: "469",
      dis: "64% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/203/881/1658881203.g_800-w-st_g.jpg",
      name: "Attitude Jeans Black Cotton...",
      p2: "999",
      p3: "159",
      dis: "84% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/838/389/1674389838.g_800-w-st_g.jpg",
      name: "Digital Alarm Clock",
      p2: "699",
      p3: "179",
      dis: "74% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/017/612/1669612017.g_800-w-st_g.jpg",
      name: "Style Wind Mens Black Full...",
      p2: "899",
      p3: "299",
      dis: "75% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/397/217/1651217397.g_800-w-st_g.jpg",
      name: "29K Stylish Comfortable Me...",
      p2: "599",
      p3: "179",
      dis: "70% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/369/295/1653295369.g_800-w-st_g.jpg",
      name: "Gilol Adjustable Mobile Stand",
      p2: "799",
      p3: "179",
      dis: "78% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/001/604/1641604001.g_800-w-st_g.jpg",
      name: "Heart Rate Finger Pulse Oxi...",
      p2: "5495",
      p3: "279",
      dis: "95% off",
    },
    {
      img: "https://gd.image-gmkt.com/li/045/620/1657620045.g_800-w-st_g.jpg",
      name: "Adaaistic Men s Black Stret...",
      p2: "1899",
      p3: "569",
      dis: "70% off",
    },
  ];
  const festive_special = [
    {
      img: "https://cdn.shopclues.com/images/thumbnails/88912/320/320/131487154GOLDENPEACOCK1512550255.jpg",
      name: "Women's Ethinic Wear",
      p3: "Upto 80% off",
    },
    {
      img: "https://cdn.shopclues.com/images/detailed/41945/HandloomPinkKurta1_1469600960.jpg",
      name: "Men's Ethnic Waer",
      p3: "Min 40% off",
    },
    {
      img: "https://cdn.shopclues.com/images/detailed/85345/129033198_Untitled1copy_1506507048.jpg",
      name: "Ethnic Footwaer",
      p3: "Upto 80% off",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/48680/320/320/61SUwF0UAAL1480795166.jpg",
      name: "Wooden Temples",
      p3: "Upto 60% off",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/67262/320/320/IMAES9GDZV3NPG8M1491081901.jpg",
      name: "Pooja Essentials",
      p3: "Upto 70% off",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/84338/320/320/128352190Ganesh1505896312.jpg",
      name: "Wall Decors",
      p3: "Min 60% off",
    },
  ];
  const trending_fashion_zone_data = [
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/105327/320/320/149167360-105327521-1664659530.jpg",
      name: "Westchic Plain Black Georg...",
      p1: "259",
      p2: "999",
      p3: "437",
      dis: "74% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/95098/200/200/142654363-95098986-1543836693.jpg",
      name: "Fashlook Brown Leatherite...",
      p1: "189",
      p2: "1789",
      p3: "161",
      dis: "91% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/104223/200/200/148695190-104223920-1598444855.jpg",
      name: "PAUSE Blue  Solid Lapel Coll...",
      p1: "379",
      p2: "1299",
      p3: "342",
      dis: "73% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/107255/200/200/149878229-107255354-1634817960.jpg",
      name: "29K Men Black Casual Strip...",
      p1: "309",
      p2: "999",
      p3: "288",
      dis: "71% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/104223/200/200/148695185-104223914-1603182895.jpg",
      name: "Pause Men Silver Cotton La...",
      p1: "279",
      p2: "1299",
      p3: "278",
      dis: "78% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/103492/200/200/148176235-103492898-1572160253.jpg",
      name: "Men Soft Bi-fold Tan Color...",
      p1: "449",
      p2: "3999",
      p3: "427",
      dis: "89% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/107255/200/200/149878229-107255354-1634817960.jpg",
      name: "29K Men Black Casual Strip...",
      p1: "309",
      p2: "999",
      p3: "288",
      dis: "71% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/104223/200/200/148695185-104223914-1603182895.jpg",
      name: "Pause Men Silver Cotton La...",
      p1: "279",
      p2: "1299",
      p3: "278",
      dis: "78% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/103492/200/200/148176235-103492898-1572160253.jpg",
      name: "Men Soft Bi-fold Tan Color...",
      p1: "449",
      p2: "3999",
      p3: "427",
      dis: "89% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/110871/200/200/151047473-110871442-1601973238.jpg",
      name: "Wrstchic Women Maroon P..",
      p1: "",
      p2: "999",
      p3: "399",
      dis: "60% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/105344/200/200/149172710-105344978-1583307035.jpg",
      name: "Trendyz Men Black Cotton H...",
      p1: "449",
      p2: "899",
      p3: "475",
      dis: "47% off",
    },
  ];

  const budget_bazaar = [
    {
      img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_01.jpg",
    },
    {
      img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_02.jpg",
    },
    {
      img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_03.jpg",
    },
    {
      img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_04.jpg",
    },
    {
      img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_05.jpg",
    },
  ];

  const sports_and_health = [
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/108803/280/1/150436700-108803780-1596188707.jpg",
      name: "Medical Equipment & Acces...",
      dis: "Upto 80% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/104507/280/1/148819339-104507472-1579085071.jpg",
      name: "Fitness Brands & Watches",
      dis: "Upto 80% off",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/27595/280/1/11448611056.jpg",
      name: "Bottlers & Shakers",
      dis: "Upto 80% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/103419/280/1/148130677-103419160-1571212818.jpg",
      name: "Nutrition  Supplements",
      dis: "Upto 80% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/95250/280/1/142772233-95250978-1544273464.jpg",
      name: "Skipping Ropes",
      dis: "Starting @199",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/107160/280/1/149847355-107160132-1590790597.jpg",
      name: "Yoga Mates",
      dis: "Upto 80% off",
    },
  ];
  const brand_store = [
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/104122/280/1/148627878-104122294-1577180435.jpg",
      name: "Khadi",
      dis: "Starting @69",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/104461/280/1/148797859-104461120-1578647077.jpg",
      name: "Nike",
      dis: "Upto 85% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/109822/280/1/150760050-109822495-1600850631.jpg",
      name: "Redmi",
      dis: "Save Upto Rs. 5000",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/34620/280/1/902417708981309282209372miltonwaterbottleset1434449243144186494711454507692145672090914577949341459228900.jpg",
      name: "Milton",
      dis: "Upto 60% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/108976/320/1/150501198-108976885-1596612884.jpg",
      name: "Fastrack",
      dis: "Mini 40% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/109013/280/1/150523151-109013699-1603186269.jpg",
      name: "Realme",
      dis: "Save Upto Rs. 5000",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/34620/280/1/902417708981309282209372miltonwaterbottleset1434449243144186494711454507692145672090914577949341459228900.jpg",
      name: "Milton",
      dis: "Upto 60% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/108976/320/1/150501198-108976885-1596612884.jpg",
      name: "Fastrack",
      dis: "Mini 40% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/109013/280/1/150523151-109013699-1603186269.jpg",
      name: "Realme",
      dis: "Save Upto Rs. 5000",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/109124/280/1/150563834-109124498-1600113360.jpg",
      name: "Vivo",
      dis: "Save Upto Rs. 5000",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/108804/280/1/150437204-108804736-1602946705.jpg",
      name: "Philips",
      dis: "Upto 40% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/108327/320/1/150284086-108327730-1594283471.jpg",
      name: "American Tourister",
      dis: "Upto 75% off",
    },
  ];
  const branded_deal = [
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/102732/200/200/147786464-102732679-1568202982.jpg",
      name: "Eja Art Love Bird Vinyl Wall...",
      p1: "219",
      p2: "1199",
      p3: "190",
      dis: "84% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/115792/200/200/152872993-115792044-1639566707.jpg",
      name: "CULQ IK-44 Power 2600mA...",
      p1: "139",
      p2: "599",
      p3: "133",
      dis: "77% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/111797/200/200/151327576-111797365-1603895509.jpg",
      name: "Nike Men Tanjun Sports Sho...",
      p1: "913",
      p2: "4795",
      p3: "892",
      dis: "81% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/95122/200/200/142672483-95122315-1615809654.jpg",
      name: "Vizo Wireless Magnetic Blue...",
      p1: "209",
      p2: "999",
      p3: "180",
      dis: "81% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/84855/200/200/137076261-84855545-1597052006.jpg",
      name: "SaraHusainatther 7 Pieces S...",
      p1: "299",
      p2: "999",
      p3: "266",
      dis: "73% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/74865/200/200/131046271-74865163-1552367251.jpg",
      name: "MTR MT312 Dual Sim Featu...",
      p1: "749",
      p2: "2999",
      p3: "693",
      dis: "33% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/74865/200/200/131046271-74865163-1552367251.jpg",
      name: "MTR MT312 Dual Sim Featu...",
      p1: "749",
      p2: "2999",
      p3: "693",
      dis: "32% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/115440/200/200/152761666-115440346-1633506453.jpg",
      name: "JA DALLAS Men Black Solid...",
      p1: "359",
      p2: "845",
      p3: "323",
      dis: "61% off",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/79723/200/200/124615653NewNike1502005958.jpg",
      name: "Nike Multicolour Cotton Ank...",
      p1: "99",
      p2: "499",
      p3: "98",
      dis: "90% off",
    },
    {
      img: "https://cdn.shopclues.com/images/thumbnails/89591/200/200/104016383GlovesLeatherdriving214829084631513685612.jpg",
      name: "Takson Wet & Dry Black Lea...",
      p1: "129",
      p2: "499",
      p3: "128",
      dis: "74% off",
    },
    {
      img: "https://cdn.shopclues.com/images1/thumbnails/112228/200/200/151575367-112228841-1607752435.jpg",
      name: "Fashlook Men Black BalKala...",
      p1: "299",
      p2: "999",
      p3: "266",
      dis: "73% off",
    },
  ];
  const setting1 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const setting2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const setting3 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const setting4 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const setting5 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const setting6 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const setting7 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const setting8 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const setting9 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };



  return (
    <>
      <Box
        position={"relative"}
        height={"400px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={"calc(20% + 10px)"}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
    <div className="osama" style={{width:"80%"}}>
    <Slider {...settings} ref={(slider) => setSlider(slider)} >
          {cards.map((url, index) => (
            <Box
              key={index}
              height={"3xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
    </div>
      </Box>
      {/* <Box className="picbottom" style={{border:"1px solid", width:"70%"}}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem
            w="100%"
            h="20"
            boxShadow={
              "box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
            }
          >
            <h4 className="pictext"  >
              Refurbished Smartphone
            </h4>
          </GridItem>
          <GridItem
            w="100%"
            h="20"
            boxShadow={
              "box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
            }
          >
            <h4 className="pictext" >
              Automotive Sale
            </h4>
          </GridItem>
          <GridItem
            w="100%"
            h="20"
            boxShadow={
              "box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
            }
          >
            <h4  className="pictext" >
              Prebuzz
            </h4>{" "}
          </GridItem>
          <GridItem
            w="100%"
            h="20"
            boxShadow={
              "box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
            }
          >
            <h4 className="pictext" >
              JMAX Smartphones
            </h4>
          </GridItem>
          <GridItem
          color={"teal"}
            w="100%"
            h="20"
            boxShadow={
              "box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
            }
          >
            <h4  className="pictext">
              Intel
            </h4>
          </GridItem>
        </Grid>
      </Box> */}
      <div className="picbottom" >
        <h1  className="under">ShopCluses  Aniversary Sale</h1>
        <h2 className="under"> Men's Blue Jacket</h2>
        <h2 className="under">Blockbuster Jacket</h2>
        <h2 className="under">Jdd</h2>
        <h2 className="under">Intel</h2>
        
      </div>

      <Slider {...setting1}>
        {deals_of_the_day.map((item) => (
          <Deal
            name={item.name}
            img={item.img}
            p1={item.p1}
            p2={item.p2}
            p3={item.p3}
            dis={item.dis}
          />
        ))}
      </Slider>

      <Slider {...setting2}>
        {Your_gadget_store.map((item) => (
          <Gadget
            name={item.name}
            img={item.img}
            p1={item.p1}
            p2={item.p2}
            p3={item.p3}
            dis={item.dis}
          />
        ))}
      </Slider>

      <Slider {...setting3}>
        {daily_essential.map((item) => (
          <Daily_essential name={item.name} img={item.img} p3={item.p3} />
        ))}
      </Slider>

      <Slider {...setting4}>
        {prime_mall.map((item) => (
          <Prime_mall
            name={item.name}
            img={item.img}
            p1={item.p3}
            p2={item.p2}
            dis={item.dis}
          />
        ))}
      </Slider>

      <Slider {...setting5}>
        {festive_special.map((item) => (
          <Festive_Specials
            name={item.name}
            img={item.img}
            p2={item.p2}
            p3={item.p3}
          />
        ))}
      </Slider>

      <Slider {...setting6}>
        {trending_fashion_zone_data.map((item) => (
          <Trending_Fashion_Zone
            name={item.name}
            img={item.img}
            p1={item.p1}
            p2={item.p2}
            p3={item.p3}
            dis={item.dis}
          />
        ))}
      </Slider>

      <Slider {...setting7}>
        {budget_bazaar.map((item) => (
          <Budget_Bazaar img={item.img} />
        ))}
      </Slider>

      <Slider {...setting8}>
        {sports_and_health.map((item) => (
          <Sports_Health name={item.name} img={item.img} dis={item.dis} />
        ))}
      </Slider>

      <Slider {...setting9}>
        {brand_store.map((item) => (
          <Brand_Store name={item.name} img={item.img} dis={item.dis} />
        ))}
      </Slider>
  
<Slider {...setting9}>
        {branded_deal.map((item) => (
          <Branded_Deals
            name={item.name}
            img={item.img}
            p1={item.p1}
            p2={item.p2}
            p3={item.p3}
            dis={item.dis}
          />
        ))}
      </Slider>
    </>
  );
}
