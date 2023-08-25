import React from 'react'
import { Button, Flex,Text } from "@chakra-ui/react";
import { useState } from "react";


const SimpleColor = () => {
    
    const simpleColor = [
        "red",
        "blue",
        "pink",
        "orange",
        "yellow",
        "green",
        "cyan",
        "brown",
        "gray",
        "purple",
        "violet",
        "gainsboro",
        "aqua",
        'skyblue',
        'darkcyan',
        'orchid',
        'fuchsia',
        'silver',
        'gold'
      ];
      const [colorSimple, setColorSimple] = useState("white");
    
      const randomSimple = () => {
        const value = Math.floor(Math.random() * simpleColor.length);
        console.log(value);
        setColorSimple(simpleColor[value]);
      };
    
      const handleGenerate = () => {
        randomSimple();
      };


  return (
    <Flex
    direction={"column"}
    bg={colorSimple}
    justifyContent={"center"}
    alignItems={"center"}
    h={"100%"}
  >
    <Text fontSize={'1.2rem'} mb={'1rem'}>Background Color: {colorSimple} </Text>
    <Button onClick={handleGenerate} p={"0.5rem"} w={"13rem"} h={'3rem'} borderRadius={'10px'}>
      Change Color
    </Button>
  </Flex>
  )
}

export default SimpleColor