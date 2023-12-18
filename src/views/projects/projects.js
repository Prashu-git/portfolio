import React from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue
}

  from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import sarvang from "../../assets/projects/Sarvanga.png";
import eyes from "../../assets/projects/CCTV.png";
import maversesynergy from "../../assets/projects/Mavers.png";
import aim from "../../assets/projects/AimConstruction.png";
import lightWallpaper from "../../assets/fifteen.jpg";
import darkWallpaper from "../../assets/seven.jpg";


export default function Projects() {

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
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
        <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            mb="40px"
          ></Flex>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap="25px"
            alignItems="center"
            justifyContent="center"
            fontFamily={"Times New Roman"}
          >
            <ProjectCard
              projectImage={sarvang}
              projectName={"Simple Static Website"}
              aboutProject={"Therapy website used for marketing "}
              techStack={"NODE JS, REACT JS, TAILWIND CSS, MONGODB, HTML5, ThailwindCSS, CSS, JavaScript"}
              projectLiveLink="https://6524eea44e91d421e351ac92--tangerine-selkie-22acb2.netlify.app/"
              projectLink="https://github.com/manuvini/clout"
            />
            <ProjectCard
              projectImage={maversesynergy}
              projectName={"Educational based Website"}
              aboutProject={"A Realtime Website used for marketing"}
              techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB, HTML5, CSS, JavaScript"}
              projectLiveLink="https://maversesynergy.com/"
              projectLink="https://github.com/Prashu-git/maversesynergy"
            />
            <ProjectCard
              projectImage={eyes}
              projectName={"CCTV"}
              aboutProject={"Official website for the clint"}
              techStack={
                " NODE JS, REACT JS, Java, HTML5, CSS, JavaScript"}
              projectLiveLink="https://cctv-prashanths-projects-7db0adae.vercel.app/"
              projectLink="https://github.com/Prashu-git/cctv"
            />
            <ProjectCard
              projectImage={aim}
              projectName={"Construction Website"}
              aboutProject={"Construction of any type of projects in the industary"}
              techStack={"HTML5, CSS, JavaScript, Java, MySQL"}
              projectLiveLink="https://aimconstruction.netlify.app/"
              projectLink="https://github.com/Prashu-git/AIMConstructions"
            />

          </SimpleGrid>

        </Box>
      </Box>
    </Box>
  );
}
