import React from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig,
  
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import contactimg from "../../assets/contact.png";
import contactimg1 from "../../assets/contact1.png";
import { Link } from "react-router-dom";
import { MdPhoneAndroid } from 'react-icons/md';
import { MdPinDrop } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';



export default function Contact() {
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("blue", "black");
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
      <Box pt="30px">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Image src={contactimg}></Image>
          </Box>
          <Box>
            <Image src={contactimg1}></Image>
          </Box>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mt={{ sm: "20px", xl: "0" }}
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={MdPinDrop}
                  width="30px"
                  height="30px"
                  color="inherit"
                />
              </Box>
              <Text textAlign="center">Location @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                Bengaluru, Karnataka
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:prashanthpkjb8@gmail.com";
                    e.preventDefault();
                  }}
                >
                  <Icon
                    as={FaEnvelope}
                    width="30px"
                    height="30px"
                    color="inherit"
                    cursor="pointer"
                  />
                </Link>
              </Box>

              <Text textAlign="center">Mail @</Text>

              <Text color={textColorPrimary} textAlign="center" mt="5px">
                prashanthpkjb8@gmail.com
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={MdPhoneAndroid}
                  width="30px"
                  height="30px"
                  color="inherit"
                />
              </Box>
              <Text textAlign="center">Contact @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                +91 8496945779
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
