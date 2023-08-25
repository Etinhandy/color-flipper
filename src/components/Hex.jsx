import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const Hex = () => {
  const [color, setColor] = useState("#F5F5F5");

  const hexRandom = () => {
    const val =
      "#" + Math.floor(Math.random() * (256 * 256 * 256)).toString(16);

    setColor(val);
  };

  const handleGenerate = () => {
    hexRandom();
  };

  return (
    <Flex
      direction={"column"}
      bg={color}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100%"}
    >
      <Text mb={"1rem"} fontSize={'1.2rem'}>Background Color: {color} </Text>
      <Button onClick={handleGenerate} p={"0.5rem"} w={"13rem"} h={'3rem'} borderRadius={'10px'}>
        Change Color
      </Button>
    </Flex>
  );
};

export default Hex;
