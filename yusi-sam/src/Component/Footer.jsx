import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.87 8.07H37.87V20.2H34.87V8.07ZM39.06 15.62C39.06 12.62 40.9 10.83 43.74 10.83C46.58 10.83 48.42 12.62 48.42 15.62C48.42 18.62 46.62 20.42 43.74 20.42C40.86 20.42 39.06 18.67 39.06 15.62ZM45.41 15.62C45.41 13.97 44.76 13 43.74 13C42.72 13 42.08 14 42.08 15.62C42.08 17.24 42.71 18.22 43.74 18.22C44.77 18.22 45.41 17.3 45.41 15.63V15.62ZM49.55 20.79H52.43C52.5671 21.0945 52.7988 21.3466 53.0907 21.5088C53.3826 21.6709 53.7191 21.7345 54.05 21.69C55.19 21.69 55.79 21.07 55.79 20.17V18.49H55.73C55.491 19.0049 55.1031 19.4363 54.6165 19.7287C54.1299 20.021 53.5668 20.1608 53 20.13C50.81 20.13 49.36 18.46 49.36 15.59C49.36 12.72 50.74 10.91 53.04 10.91C53.6246 10.8871 54.2022 11.0434 54.6955 11.3579C55.1888 11.6725 55.5742 12.1303 55.8 12.67V12.67V11H58.8V20.1C58.8 22.29 56.87 23.65 54.02 23.65C51.37 23.65 49.72 22.46 49.55 20.8V20.79ZM55.8 15.61C55.8 14.15 55.13 13.23 54.07 13.23C53.01 13.23 52.36 14.14 52.36 15.61C52.36 17.08 53 17.91 54.07 17.91C55.14 17.91 55.8 17.1 55.8 15.62V15.61ZM59.93 15.61C59.93 12.61 61.77 10.82 64.61 10.82C67.45 10.82 69.3 12.61 69.3 15.61C69.3 18.61 67.5 20.41 64.61 20.41C61.72 20.41 59.93 18.67 59.93 15.62V15.61ZM66.28 15.61C66.28 13.96 65.63 12.99 64.61 12.99C63.59 12.99 63 14 63 15.63C63 17.26 63.63 18.23 64.65 18.23C65.67 18.23 66.28 17.3 66.28 15.63V15.61ZM70.44 8.82C70.4321 8.51711 70.5144 8.2187 70.6763 7.96261C70.8383 7.70651 71.0726 7.50427 71.3496 7.38151C71.6266 7.25875 71.9338 7.221 72.2323 7.27305C72.5308 7.32511 72.8071 7.46462 73.0262 7.67389C73.2454 7.88317 73.3974 8.1528 73.4631 8.44859C73.5288 8.74438 73.5052 9.05301 73.3952 9.33536C73.2853 9.61772 73.094 9.86108 72.8456 10.0346C72.5973 10.2081 72.3029 10.304 72 10.31C71.7992 10.3238 71.5977 10.2959 71.4082 10.2281C71.2186 10.1603 71.0452 10.0541 70.8987 9.91601C70.7522 9.77796 70.6358 9.61111 70.5569 9.42594C70.4779 9.24077 70.4381 9.04128 70.44 8.84V8.82ZM70.44 11.02H73.44V20.2H70.44V11.02ZM84.33 15.61C84.33 18.61 83 20.32 80.72 20.32C80.1354 20.3575 79.5533 20.2146 79.0525 19.9106C78.5517 19.6065 78.1564 19.156 77.92 18.62H77.86V23.14H74.86V11H77.86V12.64H77.92C78.1454 12.0951 78.5332 11.6329 79.0306 11.3162C79.528 10.9995 80.1109 10.8437 80.7 10.87C83 10.91 84.37 12.63 84.37 15.63L84.33 15.61ZM81.33 15.61C81.33 14.15 80.66 13.22 79.61 13.22C78.56 13.22 77.89 14.16 77.88 15.61C77.87 17.06 78.56 17.99 79.61 17.99C80.66 17.99 81.33 17.08 81.33 15.63V15.61ZM89.48 10.81C91.97 10.81 93.48 11.99 93.55 13.88H90.82C90.82 13.23 90.28 12.82 89.45 12.82C88.62 12.82 88.25 13.14 88.25 13.61C88.25 14.08 88.58 14.23 89.25 14.37L91.17 14.76C93 15.15 93.78 15.89 93.78 17.28C93.78 19.18 92.05 20.4 89.5 20.4C86.95 20.4 85.28 19.18 85.15 17.31H88.04C88.13 17.99 88.67 18.39 89.55 18.39C90.43 18.39 90.83 18.1 90.83 17.62C90.83 17.14 90.55 17.04 89.83 16.89L88.1 16.52C86.31 16.15 85.37 15.2 85.37 13.8C85.39 12 87 10.83 89.48 10.83V10.81ZM103.79 20.18H100.9V18.47H100.84C100.681 19.0441 100.331 19.5466 99.8468 19.8941C99.3629 20.2415 98.7748 20.413 98.18 20.38C97.7242 20.4059 97.2682 20.3337 96.8427 20.1682C96.4172 20.0027 96.0322 19.7479 95.7137 19.4208C95.3952 19.0938 95.1505 18.7021 94.9964 18.2724C94.8422 17.8427 94.7821 17.3849 94.82 16.93V11H97.82V16.24C97.82 17.33 98.38 17.91 99.31 17.91C99.5281 17.9104 99.7437 17.8643 99.9425 17.7746C100.141 17.6849 100.319 17.5537 100.463 17.3899C100.606 17.226 100.714 17.0333 100.777 16.8247C100.84 16.616 100.859 16.3962 100.83 16.18V11H103.83L103.79 20.18ZM105.24 11H108.14V12.77H108.2C108.359 12.2035 108.702 11.7057 109.174 11.3547C109.646 11.0037 110.222 10.8191 110.81 10.83C111.409 10.7821 112.003 10.9612 112.476 11.3318C112.948 11.7024 113.264 12.2372 113.36 12.83H113.42C113.601 12.2309 113.977 11.7093 114.488 11.3472C114.998 10.9851 115.615 10.8031 116.24 10.83C116.648 10.8163 117.054 10.8886 117.432 11.0422C117.811 11.1957 118.152 11.4272 118.435 11.7214C118.718 12.0157 118.936 12.3662 119.075 12.7501C119.213 13.134 119.27 13.5429 119.24 13.95V20.2H116.24V14.75C116.24 13.75 115.79 13.29 114.95 13.29C114.763 13.2884 114.577 13.327 114.406 13.4032C114.235 13.4794 114.082 13.5914 113.958 13.7317C113.834 13.872 113.741 14.0372 113.686 14.2163C113.631 14.3955 113.616 14.5843 113.64 14.77V20.2H110.79V14.71C110.79 13.79 110.34 13.29 109.52 13.29C109.331 13.2901 109.143 13.3303 108.971 13.408C108.798 13.4858 108.643 13.5993 108.518 13.741C108.392 13.8827 108.298 14.0495 108.241 14.2304C108.185 14.4112 108.167 14.6019 108.19 14.79V20.2H105.19L105.24 11Z"
        fill="currentColor"
      />
      <path
        d="M26.48 8.62001C25.9711 7.45637 25.2975 6.37195 24.48 5.40001C23.2714 3.92035 21.7632 2.71341 20.0546 1.85862C18.346 1.00383 16.4758 0.520582 14.567 0.440674C12.6582 0.360766 10.7541 0.68601 8.98 1.395C7.20594 2.104 5.60214 3.18067 4.27417 4.55414C2.94619 5.92762 1.92414 7.56676 1.27529 9.36369C0.626436 11.1606 0.365493 13.0746 0.509634 14.9796C0.653775 16.8847 1.19973 18.7376 2.11157 20.4164C3.02341 22.0953 4.28046 23.562 5.79998 24.72C6.77498 25.4779 7.85233 26.094 8.99998 26.55C10.609 27.2094 12.3311 27.549 14.07 27.55C17.6594 27.5421 21.0992 26.1113 23.6354 23.5713C26.1717 21.0314 27.5973 17.5894 27.6 14C27.6026 12.1485 27.2213 10.3166 26.48 8.62001V8.62001ZM14.06 3.19001C15.6215 3.18984 17.1642 3.53115 18.58 4.19001V4.19001C18.2347 4.33918 17.8718 4.44337 17.5 4.50001C16.2766 4.67711 15.1432 5.24509 14.2691 6.11918C13.3951 6.99328 12.8271 8.12661 12.65 9.35001C12.5722 10.0361 12.2602 10.6744 11.7665 11.1572C11.2728 11.64 10.6277 11.9377 9.93998 12C8.71657 12.1771 7.58324 12.7451 6.70915 13.6192C5.83505 14.4933 5.26707 15.6266 5.08998 16.85C5.03002 17.5024 4.75167 18.1155 4.29998 18.59V18.59C3.52063 16.9433 3.17053 15.1261 3.28225 13.3077C3.39397 11.4893 3.96388 9.72871 4.93895 8.18976C5.91401 6.65081 7.26255 5.38353 8.85905 4.50586C10.4555 3.62819 12.2481 3.16865 14.07 3.17001L14.06 3.19001ZM5.78998 21C5.90998 20.89 6.02998 20.79 6.14998 20.67C7.03963 19.8075 7.61069 18.6689 7.76998 17.44C7.83456 16.7493 8.14298 16.1041 8.63998 15.62C9.11822 15.1222 9.76195 14.8163 10.45 14.76C11.6734 14.5829 12.8067 14.0149 13.6808 13.1408C14.5549 12.2667 15.1229 11.1334 15.3 9.91001C15.3432 9.18752 15.6533 8.50685 16.17 8.00001C16.66 7.51186 17.3099 7.21711 18 7.17001C19.1239 7.01537 20.1721 6.51573 21 5.74001C21.9426 6.52208 22.7413 7.46291 23.36 8.52001C23.322 8.57136 23.2784 8.61832 23.23 8.66001C22.7526 9.16221 22.1098 9.47477 21.42 9.54001C20.1953 9.71401 19.0603 10.281 18.1856 11.1557C17.311 12.0303 16.744 13.1654 16.57 14.39C16.4995 15.0784 16.1932 15.7213 15.7029 16.2098C15.2127 16.6982 14.5687 17.0021 13.88 17.07C12.653 17.2458 11.5154 17.8126 10.6363 18.6863C9.75713 19.5601 9.18328 20.6941 8.99998 21.92C8.94616 22.4087 8.77832 22.878 8.50998 23.29C7.48397 22.6808 6.56506 21.9072 5.78998 21V21ZM14.06 24.86C13.0452 24.8611 12.0354 24.7197 11.06 24.44C11.3936 23.818 11.6106 23.1402 11.7 22.44C11.7701 21.7531 12.0749 21.1114 12.5632 20.6232C13.0514 20.135 13.6931 19.8301 14.38 19.76C15.6052 19.5849 16.7408 19.0178 17.6168 18.1435C18.4929 17.2693 19.0624 16.1349 19.24 14.91C19.3101 14.2231 19.6149 13.5814 20.1032 13.0932C20.5914 12.605 21.2331 12.3001 21.92 12.23C22.842 12.1101 23.7208 11.7668 24.48 11.23C24.9015 12.8279 24.9515 14.5012 24.626 16.1214C24.3004 17.7416 23.6081 19.2657 22.6021 20.5768C21.5961 21.8879 20.3031 22.9511 18.8224 23.6849C17.3417 24.4187 15.7125 24.8036 14.06 24.81V24.86Z"
        fill="#2F855A"
      />
    </svg>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Shopper Central</ListHeader>
            <Link href={"#"}></Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Easy Returns & Replacement</Link>
            </Stack>
            <Link href={"#"}>Our Policies</Link>
            <Link href={"#"}>CluesBucks</Link>
            <Link href={"#"}>Payment Options</Link>
            <Link href={"#"}>ShopClues Bazaar Surety</Link>
            <Link href={"#"}>FAQs (Help)</Link>
            <Link href={"#"}>Service Centers</Link>
            <Link href={"#"}>User Agreement </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Merchant Central</ListHeader>
            <Link href={"#"}>Merchant Panel</Link>
            <Link href={"#"}>How To Sell</Link>
            <Link href={"#"}>Commission Structure</Link>
            <Link href={"#"}> Fullfillment Policy</Link>
            <Link href={"#"}>Policies & Rules</Link>
            <Link href={"#"}>User Agreement</Link>
            <Link href={"#"}>Testimonials</Link>
            <Link href={"#"}>Seller Summit</Link>
            <Link href={"#"}>Merchant Blog</Link>
            <Link href={"#"}>Developer Resources</Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About Us</ListHeader>
            <Link href={"#"}>History</Link>
            <Link href={"#"}>Brand of Trust</Link>
            <Link href={"#"}>In the News</Link>
            <Link href={"#"}>Awards</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Blogs</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Link href={"#"}>Merchant Support</Link>
            <Link href={"#"}>Bulk Orders</Link>
            <Link href={"#"}>Press</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Press</ListHeader>
            <Link href={"#"}>In the News</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box>
        <Stack>
         <Box display={"flex"} justifyContent={"space-between"} borderBottom={"1px"} borderTop={"1px"} >

         <Box  width={"50%"}>
            <Text font padding={"10px"}>Keep In Touch</Text>
            
            <Flex>
              <Image
                boxSize={"200px"}
                width={"8 0px"}
                height={"100px"}
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              />
              <Image
                boxSize={"100px"}
                borderRadius={"50%"}
                width={"80px"}
                height={"100px"}
                src="data:image/png;base64,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"
              />
              <Image
                boxSize={"100px"}
                width={"80px"}
                height={"80px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHAoJegL0SO0-R608_qXoIf_JW_NllwyusYaCk6E9&s"
              />
              <Image
                boxSize={"100px"}
                borderRadius={"50%"}
                width={"80px"}
                height={"80px"}
                src="https://www.freeiconspng.com/thumbs/google-plus-logo/google-plus-logo-4.png"
              />
              <Image
                boxSize={"100px"}
                width={"80px"}
                height={"100px"}
                src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
              />
            </Flex>
          </Box>
          <Box width={"50%"}>
            <Text padding={"10px"}>
100% Secure and Trusted Payment</Text>
          <Flex>
          <Image src="https://images.shopclues.com/images/ui/pgateway_dkt@2x.png"/>
           
          </Flex>


          </Box>

         </Box>
          <Flex padding={"25px 20px"}>
            <Text fontWeight={"600"} fontSize={"20px"}>
              Our Leading Categories
            </Text>
          </Flex>
          <Flex gap={"5px"} flexWrap={"wrap"} padding={"0px 20px"}>
            <Text fontWeight={"600"}> MObile and Tablets:</Text>
            <Link>Android Phones</Link>|<Link>Smartphones</Link>|
            <Link>Feature Phones</Link>|<Link>Unboxed Phones</Link>|
            <Link>Refurbished Phones</Link>|<Link>Tablets</Link>|
            <Link>CDMA Phones</Link>|<Link>Value Added Services</Link>|
            <Link>Sell Old/ Used Mobiles</Link>
          </Flex>
          <Flex gap={"5px"} flexWrap={"wrap"}  padding={"0px 20px"}>
            <Text fontWeight={"600"}> Computers:</Text>
            <Link>Laptops</Link>|<Link>Printers</Link>|<Link>Routers</Link>|
            <Link>Ink & Toner Cartridges</Link>|<Link>Monitors</Link>|
            <Link>Video Games</Link>|<Link>Unboxed & Refurbished Laptops</Link>|
            <Link>Assembled Desktops| Data Cards</Link>
          </Flex>
          <Flex gap={"5px"}flexWrap={"wrap"}  padding={"0px 20px"}>
            <Text fontWeight={"600"}> TV, Audio & Large Appliances:</Text>
            <Link>TVs & DTH</Link> |<Link>Home Theatre Systems</Link>|
            <Link>Hidden Cameras & CCTVs</Link>|<Link>Refrigerators</Link>|
            <Link>Washing Machines</Link>|<Link>Air Conditioners</Link>|
            <Link>Cameras</Link>|<Link>Speakers</Link>
          </Flex>

          <Flex gap={"5px"}  flexWrap={"wrap"} padding={"0px 20px"}>
            <Text fontWeight={"600"}> Mobile & Laptop Accessories:</Text>
            <Link>Headphones</Link>|<Link>Power Banks</Link>|
            <Link>Backpacks</Link>|<Link>Mobile Cases & Covers</Link>|
            <Link>Pen Drives</Link>|<Link>External Hard Disks</Link>|
            <Link>Mouse</Link>|
            <Link>Smart Watches & Fitness Bands| MicroSD Cards</Link>
          </Flex>
          <Flex gap={"5px"} flexWrap={"wrap"}  padding={"0px 20px"}>
            <Text fontWeight={"600"}> Appliances:-</Text>
            <Link>Trimmers</Link>|<Link>Hair Dryers</Link>|
            <Link>Emergency Lights</Link>|<Link>Water Purifiers</Link>|
            <Link>Electric Kettles</Link>|<Link>Hair Straighteners</Link>|
            <Link>Induction Cooktops| Sewing Machines| Geysers</Link>
          </Flex>

          <Flex gap={"5px"}  flexWrap={"wrap"} padding={"0px 20px"}>
            <Text fontWeight={"600"}>Home & Kitchen:</Text>
            <Link>Bedsheets</Link>|<Link>Hardware & Sanitaryware</Link>|
            <Link>Towels, Bath Linens</Link>|<Link>Furniture</Link>| Cookware |
            <Link>Kitchen Tools</Link>|<Link>Home Cleaning Utilities</Link>|
            <Link>Doormats</Link>| Curtains |<Link>Gardening Essentials</Link>
          </Flex>

          <Flex gap={"5px"} flexWrap={"wrap"} padding={"0px 20px"}>
            <Text fontWeight={"600"}>Fashion:</Text>
            <Link>Women's Clothing</Link>|<Link>Men's Clothing</Link>|
            <Link>Women's Ethnic Wear</Link>|
            <Link>Men's Fashion Accessories</Link>|<Link>Sports Wear</Link>|
            <Link>Western Wear</Link>|<Link>Handbags & Wallets, Clutches</Link>|
            <Link>Handbags</Link>|<Link>Sarees</Link>|<Link>T-Shirts</Link>|
            <Link>Lingerie & Sleep Wear</Link>
          </Flex>
          <Flex gap={"5px"} flexWrap={"wrap"} padding={"0px 20px"}>
            <Text fontWeight={"600"}>Footwear:</Text>
            <Link>Men's Sports Shoes</Link>|<Link>Men's Slippers</Link>|
            <Link>Casual Shoes</Link>|<Link>Sandals & Floaters</Link>|
            <Link>Formal Shoes</Link>|<Link>Women Flats</Link>|
            <Link>Ballerinas</Link>|<Link>Loafers</Link>|<Link>Boots</Link>|
            <Link>Shoe Care & Accessories</Link>
          </Flex>
          <Flex gap={"5px"}flexWrap={"wrap"}  padding={"0px 20px"}>
            <Text fontWeight={"600"}>Travel & Luggage:</Text>
            <Link>Duffle Bags</Link>|<Link>Laptop Bags</Link>|
            <Link>Travel Pouches</Link>|<Link>Backpacks</Link>|
            <Link>Suitcases & Trolleys</Link>|<Link>Travel Accessories</Link>|
            <Link>Gym Bags</Link>|<Link>Messenger Bags</Link>|
            <Link>School Bags</Link>|<Link>Safety Locks</Link>
          </Flex>
          <Flex gap={"5px"}flexWrap={"wrap"}  padding={"0px 20px"}>
            <Text fontWeight={"600"}>Jewelry & Watches:</Text>
            <Link>Coins & Bars</Link>|<Link>Men's Watches</Link>|
            <Link>Women's Watches</Link>|<Link>Necklaces Sets</Link>|
            <Link>Fashion Jewelry</Link>|<Link>Pendants and Lockets</Link>|
            <Link>Earrings</Link>|<Link>Rings</Link>|<Link>Jewelry Boxes</Link>|
            <Link>Kid's Watches</Link>
          </Flex>
          <Flex gap={"5px"}flexWrap={"wrap"}  padding={"0px 20px"}>
            <Text fontWeight={"600"}>Automotive:</Text>
            <Link>Bike Accessories / Tools</Link>|<Link>Car Cleaning Aids</Link>
            |<Link>Helmets</Link>|<Link>Bike Body Covers</Link>|
            <Link>Car Accessories / Tools</Link>|<Link>Riding Gloves</Link>|
            <Link>Car Perfumes</Link>|<Link>Car Scratch Removers</Link>|
            <Link>Car Audio</Link>|<Link>Video</Link>|<Link>Bike Alarms</Link>
          </Flex>
          <Flex gap={"5px"} flexWrap={"wrap"} padding={"0px 20px"}>
            <Text fontWeight={"600"}>Toys, Baby & Kids :</Text>
            <Link>Diapers</Link>|<Link>Educational Toys</Link>|
            <Link>Kid's Footwear</Link>|<Link>Remote Controlled Toys</Link>|
            <Link>Soft Toys</Link>|<Link>Party Supplies</Link>|
            <Link>Cubes</Link>|<Link>Maternity Care</Link>|
            <Link>Kid's Apparel</Link>
          </Flex>
          <Flex gap={"5px"} flexWrap={"wrap"} padding={"0px 20px"}>
            <Text fontWeight={"600"}>Gourmet & Daily Needs :</Text>
            <Link>Office Supplies</Link>|<Link>Pet Supplies</Link>|
            <Link>Books</Link>|<Link>Namkeen</Link>|<Link>Stationery</Link>|
            <Link>Pens & Markers</Link>|<Link>Tea & Coffee</Link>|
            <Link>Chocolates & Candies</Link>|<Link>Indian Sweets</Link>|
            <Link>Gifts</Link>
          </Flex>
          <Flex gap={"5px"}flexWrap={"wrap"}  padding={"0px 20px"}>
            <Text fontWeight={"600"}>Sports and Health:</Text>
            <Link>Home Gym Equipment</Link>|<Link>Exercise Bikes</Link>|
            <Link>Gym Accessories</Link>|<Link>Massagers</Link>|
            <Link>Diabetic Care</Link>|<Link>Cricket</Link>|
            <Link>Table Tennis</Link>
          </Flex>
          <Flex gap={"5px"} flexWrap={"wrap"} padding={"0px 20px"}>
            <Text fontWeight={"600"}>Beauty & Perfumes:</Text>
            <Link>Grooming Essentials</Link>|<Link>Deodorants</Link>|
            <Link>Men's Perfumes</Link>|<Link>Hair Care</Link>|
            <Link>Women's Perfumes</Link>|<Link>Face Packs</Link>|
            <Link>Oral Care</Link>|<Link>Herbal Care</Link>|
            <Link>Value Combo</Link>|<Link>Women's Hygiene</Link>
          </Flex>
          <Flex padding={"25px 20px"}>
            <Text fontWeight={"600"} fontSize={"25px"}>
              Popular on ShopClues Bazaar
            </Text>
          </Flex>
          <Flex gap={"5px"} flexWrap={"wrap"} padding={"0px 20px"}>
            <Link>Offers & Coupons</Link>|<Link>Couple Watches</Link>|
            <Link>Gas Stoves</Link>|<Link>Air Coolers</Link>|
            <Link>Air Purifiers</Link>|<Link>Headphones / Mic / Headset</Link>|
            <Link>Pressure Cookers</Link>|<Link>Sandwich Makers</Link>|
            <Link>Air Friers / Deep Friers</Link>|<Link>Irons</Link>|
            <Link>LED TV</Link>|<Link>Men Jackets</Link>|
            <Link>Educational Toys</Link>|<Link>Stabilizers</Link>|
            <Link>Heaters</Link>|<Link>Car Audio Systems</Link>|
            <Link>Photo Frames</Link>|<Link>Men's Shoes</Link>|
            <Link>Decorative Lights</Link>|<Link>Rain Wear</Link>|
            <Link>Bedsheets</Link>|<Link>Top Brands</Link>
          </Flex>
        </Stack>
      </Box>

      <Box
        background={"#eff7fa"}
        borderBottom={"1px"}
        borderTop={"1px"}
        marginTop={"20px"}
      >
        <Text
          fontWeight={"600"}
          padding={" 10px 20px"}
          marginTop={"30px"}
          fontSize={"25px"}
        >
          Online Shopping in India @Bazaar.ShopClues.com
        </Text>

        <Text fontWeight={"600"} padding={" 5px 20px"}>
          India’s Asli Online Shopping Hub – Bazaar.ShopClues.com
        </Text>
        <Text padding={" 5px 20px"}>
          Back in 2011, when people were hopping from one Store to another for
          best bargains on an overall household’s monthly bill, ShopClues Bazaar
          was being developed as a budget-friendly online bazaar in India.
          Bazaar.ShopClues.com was then given a shape and strategy in 2012 as
          India’s First & Largest Fully Managed Marketplace.
        </Text>
        <Text fontWeight={"600"} padding={" 5px 20px"}>
          Ting se Leke Tong – with Aflatooni Products!
        </Text>
        <Text padding={" 5px 20px"}>
          ‘What you Think is What you Get’ isn’t just a saying at ShopClues
          Bazaar. With over 2.8 crore products, you can get just about
          everything that you can imagine at ShopClues Bazaar. From usual
          products in Electronics, Fashion, Home & Kitchen, to unusual products
          like cow dung cakes, Knife Sharpeners, etc., ShopClues Bazaar tops in
          everything. So, you see what we mean when we say Aflatooni Products!
          ShopClues Bazaar has revolutionized the conceptual Online Shopping in
          India with initiatives such as Ghar Wapsi Sale, Bigger than the
          Biggest Thank You Sale, #EkZeroKum Sale etc. Amongst many other
          shopping sites, ShopClues Bazaar is the leader in unstructured
          categories like Daily Utilities, Garden Needs, Hardware, Kitchen
          Storage, and others.
        </Text>
        <Text fontWeight={"600"} padding={" 5px 20px"}>
          {" "}
          Believable Shopping @ Unbelievable Prices
        </Text>
        <Text padding={" 5px 20px"}>
          Every day, ShopClues Bazaar delights millions of discount-hunters with
          Paisa-Vasool Shopping Experience with prices as low as Re.1. We are
          the first ones to introduce the idea of ‘Sab Kuch Wholesale Ke Rate
          Par’ on an online platform with shopping options to both wholesale as
          well as retail seekers.
        </Text>
        <Text fontWeight={"600"} padding={" 5px 20px"}>
          {" "}
          Experiencing the neighbourhood Local Bazaar
        </Text>
        <Text padding={" 5px 20px"}>
          ShopClues Bazaar brings the experience of India’s Flea Markets online,
          in the form of its weekly properties - Sunday Flea Market, Refreshing
          Monday Sale, Triple Value Friday Sale, and Wednesday Brand Bazaar.
          Another property capturing the essence of regional Indian shopping is
          called NRH (National Regional Heritage), which gives a sneak-peek into
          India’s Cultural Gullies at very reasonable prices. These online
          markets showcase products with range so wide, and prices so low, that
          they beat the offline neighbourhood markets of India. The concept
          especially works incredibly well with the middle class population
          habituated in tier 2 & 3 cities.
        </Text>
        <Text fontWeight={"600"} padding={"5px 20px"}>
          {" "}
          An Online Selling Space for SME Merchants
        </Text>
        <Text padding={"5px 20px"}>
          Working as a marketplace, ShopClues Bazaar has been well-supported by
          a bourgeoning community of certified merchants in India. Unlike
          various other online shopping sites, ShopClues Bazaar has achieved the
          largest merchant base of over 3.5 Lakhs. This online shopping website
          is creating history by empowering local and regional merchants,
          primarily from Tier 2 & 3 cities and making them a national enterprise
          at ShopClues Bazaar.
        </Text>

        <Text fontWeight={"600"} padding={"5px 20px"}>
          {" "}
          ShopClues Bazaar Surety
        </Text>

        <Text padding={"5px 20px"}>
          The ShopClues Bazaar Surety Program, was launched in order to ensure a
          hassle free shopping experience for its customers. This premium
          service is in addition to the ShopClues Bazaar Buyer Protection
          program which ensures an extensive 5 point quality check of the
          products in order to give Customers a seamless shopping experience. In
          order to make it user-friendly, the platform marks out the rating of
          the products classified into ‘Best Buy’, ‘Great Buy’, ‘Value Buy’ or
          ‘Brand Authorized’. This allows the customer to make an optimal
          purchase decision while shopping on the platform.
        </Text>

        <Text fontWeight={"600"} padding={" 5px 20px"}>
          {" "}
          ShopClues Bazaar VIP Club{" "}
        </Text>
        <Text padding={"5px 20px"}>
          Get Rewards Every time you Shop! Join the VIP Club and Get 5% Cashback
          on Every Order. That's not all! With Free Membership, No Hidden Costs
          & No Registration Procedures, get Exclusive Benefits on Grofers,
          Lenskart, Food Panda & Hi Care Pest Control Services.
          <Link>Join the Club Now</Link>
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent={"space-between"}
        gap={"5px"}
        flexWrap={"wrap"}
        padding={"25px 20px"}
      >
        <Flex gap={"5px"} flexWrap={"wrap"}>
          <Link>Privacy Policy</Link>|<Link>User Agreement</Link>|
          <Link>Notes to Security Practices</Link>|
          <Link>Compliance Wall of Fame</Link>
        </Flex>
        <Flex>
          <Text>
            © 2023 AbuOsama. All rights reserved.No copyright Pvt. Ltd.{" "}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
