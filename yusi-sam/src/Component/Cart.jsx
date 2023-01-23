import React from "react";
import { Flex, Input, Image, Text, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import {Link} from "react-router-dom"

function Cart(props) {
  const [count, setCount] = useState(1);
  function dec() {
    setCount(count - 1);
  }

  function inc() {
    setCount(count + 1);
  }

  let arr=props.addcart

  return (
    <>
      <Box textAlign={"center"}>
        <p>
          Congrats! You are eligible for Extra 10 Per Off on Prepaid orders with
          minimum cart value of Rs 299 and Maximum discount of Rs 100. Use
          coupon code RUPAY10. Limit one coupon at a time..
        </p>
      </Box>

      {arr.map((item) => (
         
      
      <Box border={"1px solid #7fd1dc"} marginBottom={"30px"} width={"98%"} margin={"auto"} borderRadius={"10px"}>
        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
          <Box >
            <Image src={item.image}></Image>
          </Box>
          <Box>
            <h1>{item.name}</h1>
            <h2>Color: Black</h2>
          </Box>
          <Box  width={"150px"} textAlign={"center"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Button disabled={count} onClick={dec}>
                -
              </Button>
              <Text>{count}</Text>
              <Button onClick={inc}>+</Button>
            </Flex>
            <Text>Remove</Text>
          </Box>
          <Box>
            Price:₹{" "}{item.price}
            <Text>Sipping: FREE</Text>
          </Box>
          <Box >
            <p >
             Total:- ₹ {count * item.price} <br />{" "}
              <p>Inclusive of all the applicable taxes</p>
            </p>
          </Box>
        </Flex>
      </Box>
       ))}
      <Box textAlign={"center"}>
        <Flex justifyContent={"space-between"} padding={"5px 20px"}>
          <Box>
            <Flex>
              <Box>
                <Text>Delivery pincode </Text>
                <Flex>
                  <Input placeholder="Enter your pincode" />
                  <Button background={"#24a3b5"}>Submit</Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box width={"200px"} border={"1px"}>
            <Flex justifyContent={"space-between"}>
              <h2> Total:</h2>
              <h2>₹ {arr[0].price* count}</h2>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <h1>Grand Total:</h1>
              <h1>₹ {arr[0].price* count}</h1>
            </Flex>
            <Link to={"/"}><Button background={"#24a3b5"}>Place Order</Button></Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Cart;
