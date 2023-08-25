import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SimpleColor from "./components/SimpleColor";
import Hex from "./components/Hex";

function App() {
  const [mode, setMode] = useState("simple");
  const changeMode = (mode) => {
    setMode(mode);
  };

  return (
    <Box w={"100%"} h={"100vh"}>
      <Header changeMode={changeMode} />
      {mode === "simple" ? <SimpleColor /> : <Hex />}
    </Box>
  );
}

export default App;
5;
