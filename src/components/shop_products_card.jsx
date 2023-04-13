import { Box, Grid, Image, Tag, Text } from "@chakra-ui/react";

export default function ProductCard({ img, content, price, discount }) {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      height={"100%"}
      w={"100%"}
      bg={"white"}
      position="relative"
      my={3}
    >
      <Image src={img} objectFit={"contain"} />
      <Box
        p={2}
        noOfLines={2}
        overflow={"hidden"}
        mb={"1"}
        fontSize={{ base: "small", sm: "medium" }}
      >
        {content}
      </Box>
      <Box
        position={"absolute"}
        color={"#2D7BD8"}
        bottom={"0"}
        p={2}
        bg={"white"}
        fontSize={{ base: "small", sm: "medium" }}
        width={"100%"}
      >
        <Box
          color={"red"}
          textDecoration={"line-through"}
          textDecorationThickness={{ base: "1.4px", md: "1.6px" }}
          fontWeight={"bold"}
          // display={{ base: "block", md: "inline" }}
          display={discount ? { base: "block", md: "inline" } : "none"}
          marginRight={{ base: "0", md: 2 }}
        >
          <span style={{ color: "black" }}>{discount}</span>
        </Box>
        <Box fontWeight={"bold"} display={{ base: "block", sm: "inline" }}>
          GH₵ {price}
        </Box>
      </Box>
    </Box>
  );
}
