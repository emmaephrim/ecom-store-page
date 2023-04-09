import React from "react";
import { Box, Image, Text, Link, Divider } from "@chakra-ui/react";
import background_image from "../images/shop_products/background_image.jpg";
import shop_banner_image from "../images/shop_products/shop_banner_image.png";
import shop_profile from "../images/shop_products/shop_profile.png";
import info_icon from "../images/shop_products/info_icon.svg";
export default function Shope() {
  return (
    <Box>
      <Box
        backgroundImage={background_image}
        width={"100%"}
        // height={"auto"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
      >
        <Box
          px={{ md: "10%" }}
          pt={{ md: "10" }}
          pb={{ base: "3px", md: "10" }}
        >
          <Image src={shop_banner_image} objectFit={"cover"} width={"100%"} />
          <Box
            color={"#164169"}
            fontFamily={"Poppins"}
            // color="#164169"
            fontStyle={"normal"}
            display={"flex"}
            px={{ base: "10px" }}
          >
            <Image
              src={shop_profile}
              borderRadius={"50%"}
              mt={"-8"}
              width={{ base: "100px", sm: "150px", lg: "160px" }}
              height={{ base: "100%", md: "" }}
            />
            <Box p={"10px"}>
              <Text
                fontWeight={"800"}
                // fontSize={"px"}
              >
                TRUE BOTANICALS
              </Text>
              <Text display={"flex"} fontSize={"larger"}>
                About
                <Image src={info_icon} ml="1" mb={"0.5"} />
              </Text>
              <Text width={{ md: "90%", lg: "70%" }}>
                Liberate your glow with wildly clean ingredients. 100 % NON
                TOXIC, MADE SAFE® CERTIFIED, CRUELTY -FREE Our clean and
                sustainable products are clinically proven to work at the
                highest standards.
              </Text>
            </Box>
          </Box>
          <hr style={{ height: "2px", backgroundColor: "black" }}></hr>
        </Box>
      </Box>
    </Box>
  );
}
