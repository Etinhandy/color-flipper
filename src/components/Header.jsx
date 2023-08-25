import React from 'react'
import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Header = ({changeMode}) => {

  return (
    <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"2rem"}
        boxShadow="0 0 5px rgba(0, 0, 0, 0.4)"
        w={"100%"}
        h={"3rem"}
        bg={"#F5F5F5F"}
      >
        <Text fontSize={"1.5rem"}>Color Flipper</Text>
        <Box>
          <Link href='#' onClick={() => changeMode("simple")} p={"2rem"}>
            Simple
          </Link>
          <Link href='#' onClick={() => changeMode("hex")}>Hex</Link>
        </Box>
      </Flex>
  )
}

export default Header