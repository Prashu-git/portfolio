import React from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import sarvang from "../../assets/projects/Sarvanga.png";
import eyes from "../../assets/projects/CCTV.png";
import maversesynergy from "../../assets/projects/Mavers.png";
import aim from "../../assets/projects/AimConstruction.png";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
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
        >
          <ProjectCard
            projectImage={sarvang}
            projectName={"Simple Static Website"}
            aboutProject={"Therapy website used for marketing "}
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB, HTML5, ThailwindCSS, CSS, JavaScript"}
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
            aboutProject={ "Official website for the clint" }
            techStack={
              " NODE JS, REACT JS, Java, HTML5, CSS, JavaScript"    }
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
          {/* <ProjectCard
            projectImage={eeg}
            projectName={"Emotion Recognition from Psychological Signals"}
            aboutProject={
              "Detection of Human Emotions from EEG signals using the AMIGOS Dataset"
            }
            techStack={
              "PYTORCH, CNN, SVC, PYTHON, FOURIER AND WAVELET TRANSFORMATIONS, STFT, ENTROPY, FEATURE FUSION"
            }
            projectLink="https://github.com/Rahul1582/Emotion-Recognition-from-Psychological-Signals"
          />
          <ProjectCard
            projectImage={mtrans}
            projectName={"Machine Translation"}
            aboutProject={
              "Translated Texts With The Help Of Encoder- Decoder LSTM Model And Attention Mechanism"
            }
            techStack={"LSTM, ENCODER-DECODER, ATTENTION MECHANISM"}
            projectLink="https://github.com/Rahul1582/Bloggers-Arena"
          /> */}
        </SimpleGrid>
        {/* <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 1"}
            aboutProject={"This blog is about hiding text inside an Image"}
            projectLink="https://rahul1582.medium.com/steganography-6c9af950cbb3"
          />
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 2"}
            aboutProject={"This Blog is about hiding an Image inside an Image"}
            projectLink="https://rahul1582.medium.com/steganography-part-2-ad7452a3ff1"
          />
        </SimpleGrid> */}
      </Box>
    </Box>
  );
}
