import React from "react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import { Box, useStyleConfig, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import lightWallpaper from "../../assets/fifteen.jpg";
import darkWallpaper from "../../assets/seven.jpg";



export default function Resume() {
  const styles = useStyleConfig("Card");
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  const handleDownload = () => {
    window.location.href =
      "https://drive.usercontent.google.com/u/1/uc?id=1uEAh9PMNvD8xORHgbpVec34fc4vZtles&export=download";
  };


  const wallpaper = useColorModeValue(lightWallpaper, darkWallpaper);

  return (
    <Box
      bgImage={`url(${wallpaper})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >


      <Box>
        <Navbar displayText={getActiveRoute(routes)} />
        <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
          <Flex justifyContent="center" alignItems="center">
            <Box
              __css={styles}
              width={{ base: "100%", md: "70%", xl: "70%" }}
              height={{ base: "60vh", md: "100vh", xl: "150vh" }}
              overflow="hidden"
              borderRadius="md"
            >
              <iframe
                src="https://drive.google.com/file/d/1uEAh9PMNvD8xORHgbpVec34fc4vZtles/preview"
                title="Resume"
                width="100%"
                height="100%"
                style={{ border: "5px solid", color: "black" }}
                loading="lazy"
              ></iframe>
            </Box>
          </Flex>
          <Flex justifyContent="center" alignItems="center" mt="40px">
            <Button
              onClick={handleDownload}
              variant="darkBrand"
              fontSize="sm"
              fontFamily="Times New Roman"
              fontWeight={"thin"}
            >
              Download Resume

            </Button>
          </Flex>
          <br />
        </Box>
      </Box>
    </Box>
  );
}
