import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
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
        <Box px={{ md: "10%" }} py={{ md: "10" }}>
          <Image src={shop_banner_image} objectFit={"cover"} width={"100%"} />
          <Box>
            <Image
              src={shop_profile}
              borderRadius={"50%"}
              mt={"-8"}
              width={{ base: "20%", md: "15%" }}
            />
            <Box>
              <Text
                fontFamily={"Poppins"}
                color="#164169"
                fontStyle={"normal"}
                fontWeight={"700"}
                // fontSize={"px"}
              >
                TRUE BOTANICALS
              </Text>
              <Text display={"flex"}>
                About <Image src={info_icon} />
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
