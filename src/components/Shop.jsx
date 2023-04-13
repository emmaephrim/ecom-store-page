import React from "react";
import { Box, Image, Text, Link, Grid, Divider } from "@chakra-ui/react";
import background_image from "../images/shop_products/background_image.jpg";
import shop_banner_image from "../images/shop_products/shop_banner_image.png";
import shop_profile from "../images/shop_products/shop_profile.png";
import info_icon from "../images/shop_products/info_icon.svg";
import verified_icon from "../images/shop_products/verified_icon.svg";
import ProductCard from "./shop_products_card";
import { Products } from "./Products";
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
          pb={{ base: "20px", md: "10" }}
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
              <Text fontWeight={"800"} fontSize={"20px"} display={"flex"}>
                TRUE BOTANICALS <Image src={verified_icon} width={"20px"} />
              </Text>
              <Text display={"flex"} fontSize={"larger"}>
                About
                <Image src={info_icon} ml="1" mb={"0.5"} />
              </Text>
              <Box
                width={{ md: "90%", lg: "60%" }}
                color={"black"}
                fontSize={{ base: "small", sm: "medium" }}
              >
                Liberate your glow with wildly clean ingredients. 100 % NON
                TOXIC, MADE SAFE® CERTIFIED, CRUELTY -FREE Our clean and
                sustainable products are clinically proven to work at the
                highest standards.
              </Box>
            </Box>
          </Box>
          <Box
            bg={"rgba(0, 0, 0, 0.2)"}
            height={"3px"}
            width={"90%"}
            margin={"0 auto"}
          ></Box>
          {/* <Divider
            bg={"rgba(0, 0, 0, 0.2)"}
            height={"3px"}
            width={"90%"}
            margin={"0 auto"}
          /> */}
          <Grid
            templateColumns={{
              base: "repeat(3,1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4,1fr)",
              xl: "repeat(4, 1fr)",
              "2xl": "repeat(5,1fr)",
            }}
            gap={{ base: "3", sm: "5", md: "6" }}
            paddingX={{ base: "3", md: "0.3px" }}
          >
            {Products.map((item, index) => {
              return (
                <ProductCard
                  content={item.content}
                  img={item.imgSrc}
                  price={item.price}
                  discount={item.discount}
                />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
