import { Box, Grid, Image, Tag, Text } from "@chakra-ui/react";

export default function ProductCard({ img, content, price, discount }) {
  const getDiscountedPercentage = (price, discount) => {
    let results = (((price - discount) / price) * 100)?.toFixed(1);
    return "-" + results + "%";
  };

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      height={"100%"}
      w={"100%"}
      bg={"white"}
      position="relative"
      my={3}
      _hover={{ shadow: "xl" }}
      fontSize={{ base: "small", sm: "medium" }}
    >
      <Image src={img} objectFit={"contain"} />
      {discount > 0 && (
        <Box
          textAlign={"start"}
          // px={"5.7px"}
          // pt={1}
          position={"absolute"}
          top={0}
          right={0}
        >
          <Tag
            // display={discount ? { base: "block" } : "none"}
            // px={"5.7px"}
            // bg="#04386d33"
            bg={"white"}
            borderRadius={0}
            py={0}
            px={1}
            fontSize={{ lg: "large" }}
          >
            {getDiscountedPercentage(price, discount)}
          </Tag>
        </Box>
      )}

      <Box
        // m={2}
        px="5.7px"
        pb="5.7px"
        // paddingBottom="9px"
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
        px="5.7px"
        bg={"white"}
        fontSize={{ base: "small", sm: "medium" }}
        width={"100%"}
        // paddingTop={0}
      >
        {discount > 0 && (
          <Box
            color={"red"}
            textDecoration={"line-through"}
            textDecorationThickness={{ base: "1.4px", md: "1.6px" }}
            fontWeight={"bold"}
            display={{ base: "block", md: "inline" }}
            marginRight={{ base: "0", md: 2 }}
            // display={discount ? { base: "block", md: "inline" } : "none"}
          >
            <Box
              style={{ color: "black" }}
              display={{ base: "block", md: "inline" }}
            >
              GH₵ {price}
            </Box>
          </Box>
        )}

        <Box
          fontWeight={"bold"}
          display={{ base: "block", sm: "inline" }}
          marginBottom={"auto"}
        >
          GH₵ {discount > 0 ? discount : price}
        </Box>
      </Box>
    </Box>
  );
}
