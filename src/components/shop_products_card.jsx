import { Box, Grid, Image, Text } from "@chakra-ui/react";

export default function ProductCard({ img, content, price }) {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      height={"100%"}
      w={"100%"}
      bg={"white"}
      position="relative"
      my={3}
      // alignItems={"center"}
    >
      <Image src={img} objectFit={"contain"} />
      <Box p={2} noOfLines={2} overflow={"hidden"} mb={"1"}>
        {content}
      </Box>
      <Box
        position={"absolute"}
        color={"#2D7BD8"}
        bottom={"0"}
        p={2}
        bg={"white"}
      >
        GH₵ {price}
      </Box>
    </Box>
  );
}
