import React from "react";
import { Flex, Input, Image, Text, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

function Cart() {
  const [count, setCount] = useState(1);
  function dec() {
    setCount(count - 1);
  }

  function inc() {
    setCount(count + 1);
  }
  let price = 100;

  return (
    <>
      <Box>
        <p>
          Congrats! You are eligible for Extra 10 Per Off on Prepaid orders with
          minimum cart value of Rs 299 and Maximum discount of Rs 100. Use
          coupon code RUPAY10. Limit one coupon at a time..
        </p>
      </Box>
      <Box border={"1px"} marginBottom={"30px"}>
        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
          <Box border={"1px"}>
            <Image src="https://images.shopclues.com/images1/thumbnails/104902/320/320/149009359-104902508-1581168144.jpg"></Image>
          </Box>
          <Box>
            <h1>cloth cloth cloth</h1>
            <h2>Color: white</h2>
          </Box>
          <Box border={"1px"} width={"150px"} textAlign={"center"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Button disabled={count} onClick={dec}>
                -
              </Button>
              <Text>{count}</Text>
              <Button onClick={inc}>+</Button>
            </Flex>
            <Text>Remove</Text>
          </Box>
          <Box border={"1px"}>
            Price:{price}
            <Text>Sipping: FREE</Text>
          </Box>
          <Box border={"1px"}>
            <p>
              ₹ {count * price} <br />{" "}
              <p>Inclusive of all the applicable taxes</p>
            </p>
          </Box>
        </Flex>
      </Box>
      <Box border={"1px"} marginBottom={"30px"}>
        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
          <Box border={"1px"}>
            <Image src="https://cdn.shopclues.com/images1/thumbnails/111797/320/320/151327681-111797485-1603901018.jpg"></Image>
          </Box>
          <Box>
            <h1>cloth cloth cloth</h1>
            <h2>Color: white</h2>
          </Box>
          <Box border={"1px"} width={"150px"} textAlign={"center"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Button disabled={count} onClick={dec}>
                -
              </Button>
              <Text>{count}</Text>
              <Button onClick={inc}>+</Button>
            </Flex>
            <Text>Remove</Text>
          </Box>
          <Box border={"1px"}>
            Price:{price}
            <Text>Sipping: FREE</Text>
          </Box>
          <Box border={"1px"}>
            <p>
              ₹ {count * price} <br />{" "}
              <p>Inclusive of all the applicable taxes</p>
            </p>
          </Box>
        </Flex>
      </Box>
      <Box textAlign={"center"}>
        <Flex justifyContent={"space-between"} padding={"5px 20px"}>
          <Box>
            <Flex>
              <Box>
                <Text>Delivery pincode </Text>
                <Flex>
                  <Input placeholder="Enter your pincode" />
                  <Button background={"teal"}>Submit</Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box width={"200px"} border={"1px"}>
            <Flex justifyContent={"space-between"}>
              <h2> Total:</h2>
              <h2>₹ {price * count}</h2>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <h1>Grand Total:</h1>
              <h1>₹ {price * count}</h1>
            </Flex>
            <Button background={"teal"}>Place Order</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Cart;
