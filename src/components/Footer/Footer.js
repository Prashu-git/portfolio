import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  const textColor = useColorModeValue("black", "white");

  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row"
      }}
      alignItems={{
        base: "center",
        xl: "start"
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "40px" }}
      pb="30px"
      mt="20px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start"
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={{
          base: "10px",
          md: "15px",
          xl: "20px"
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        {/* {" "}
        &copy; {1900 + new Date().getYear()}
        {"</>"} with <AiFillHeart /> by Prashanth Kumar R • All Rights Reserved */}
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link
            href="https://github.com/Prashu-git"
            target="blank"
            _hover={{
              color: "teal.500",
              boxShadow: "0 0 10px teal, 0 0 20px teal, 0 0 30px teal",
              transform: "scale(1.2)",
              transition: "all 0.3s ease"
            }}
            fontSize="24px"
          >
            <AiFillGithub />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link
            href="https://www.linkedin.com/in/prashanth-career/"
            target="blank"
            _hover={{
              color: "blue.500",
              boxShadow: "0 0 10px blue, 0 0 20px blue, 0 0 30px blue",
              transform: "scale(1.2)",
              transition: "all 0.3s ease"
            }}
            fontSize="24px"
          >
            <BiLogoLinkedin />
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "40px"
          }}
          opacity="0.6"
          _hover={{ opacity: 1 }}
        >
          <Link
            href="https://www.instagram.com/_prashanth__kumar__/"
            target="blank"
            _hover={{
              color: "purple.500",
              boxShadow: "0 0 10px purple, 0 0 20px purple, 0 0 30px purple",
              transform: "scale(1.2)",
              transition: "all 0.3s ease"
            }}
            fontSize="24px"
          >
            <BsInstagram />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
