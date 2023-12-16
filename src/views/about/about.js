import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  Icon,
  useColorModeValue,
  // useColorMode,

} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import myphoto from "../../assets/aboutMePhoto.jpeg";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import { FaWalking } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";



export default function About() {
  const styles = useStyleConfig("Card");
  // const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("blue", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >

          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
              />
              <LazyLoadImage
                src={myphoto}
                width="100%"
                height="100%"
                alt="Image Alt"
                effect="blur"
                style={{ height: "100%" }}
              />
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Bengaluru, Karnataka"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="Don Bosco Institute Of Technology, Bengaluru "
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="Bachelor of Engineering"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value={<span> <strong>ಕನ್ನಡ</strong> ,English, <strong>हिंदी</strong></span>}
                    />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >

<Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={FaVolleyballBall}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Sports</Text>
            <Text color={"black"} textAlign="center" mt="5px">
            Engaging in sports isn't just about physical activity, it's a holistic experience that shapes character, fosters teamwork, and cultivates resilience. Through the rhythm of each game, I've learned the art of discipline, honed my skills, and embraced the essence of fair play. Sports have been my canvas for personal growth, teaching me the value of perseverance in the face of challenges and the joy of celebrating victories, big or small. It's not just about winning; it's about the camaraderie, the thrill of the game, and the lessons learned both on and off the field.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={FaWalking}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Travelling & Exploring</Text>
            <Text color={"black"} textAlign="center" mt="5px">
            Traveling and exploring are the threads that weave the fabric of my adventures. Each journey is an odyssey, an opportunity to learn cultures, and experiences.  Traveling fuels my curiosity, broadens my horizons and teaches me the art of adaptation. It's not just about visiting places; it's about immersing me in diverse traditions and connecting with people. Exploring isn't merely a hobby, it's a mindset a perpetual quest for new perspectives and a continuous celebration of the world's myriad treasures.   
                                 </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={FaNewspaper}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Reading</Text>
            <Text color={"black"} textAlign="center" mt="5px">
            Diving into the pages of a book is a timeless voyage, a journey that transcends time and space. For me, reading isn't just a pastime; it's an understanding of the world. With each turn of the page, I traverse realms unknown and delve into the depths of human emotions. Books aren't mere collections of words; they are portals to infinite knowledge, empathy, and inspiration. It's not just about the stories within the pages; it's about the transformative power of words that resonate long after the book is closed.
            </Text>
          </Box>
          
        </SimpleGrid>


      </Box>
    </Box>
  );
}
