import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Grid,
} from "@chakra-ui/react";

function Deal({ name, img, p1, p2, p3, dis }) {
  return(

<Box display={"flex"}>
<Box><h1>{name}</h1>
<h1>{p1}</h1></Box>
</Box>


  )
}

export default Deal;
