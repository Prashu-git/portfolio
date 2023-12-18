import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHouse,
  MdDescription,
  MdSubject,
  MdAssessment,
  MdInfoOutline
} from "react-icons/md";

import Dashboard from "./views/dashboard/dashboard";
import About from "./views/about/about";
import Resume from "./views/resume/resume";
import Projects from "./views/projects/projects";
import Contact from "./views/contact/contact";

const routes = [
  {
    name: <span style={{ fontFamily: 'Times New Roman' }}>Home</span>,
    path: "/home",
    navbarDisplayName: <span style={{ fontFamily: 'Times New Roman' }}>Home</span>,
    icon: <Icon as={MdHouse} width="30px" height="30px" color="inherit" />,
    component: Dashboard
  },
  {
    name: <span style={{ fontFamily: 'Times New Roman' }}>About Me</span>,
    path: "/about",
    navbarDisplayName: <span style={{ fontFamily: 'Times New Roman' }}>About Me</span>,
    icon: <Icon as={MdSubject} width="30px" height="30px" color="inherit" />,
    component: About
  },
  {
    name: <span style={{ fontFamily: 'Times New Roman' }}>Projects</span>,
    path: "/projects",
    navbarDisplayName: <span style={{ fontFamily: 'Times New Roman' }}>Projects</span>,
    icon: <Icon as={MdAssessment} width="30px" height="30px" color="inherit" />,
    component: Projects
  },
  {
    name: <span style={{ fontFamily: 'Times New Roman' }}>Resume</span>,
    path: "/resume",
    navbarDisplayName: <span style={{ fontFamily: 'Times New Roman' }}>Resume</span>,
    icon: <Icon as={MdDescription} width="30px" height="30px" color="inherit" />,
    component: Resume
  },
  {
    name: <span style={{ fontFamily: 'Times New Roman' }}>Contact Me</span>,
    path: "/contact",
    navbarDisplayName: <span style={{ fontFamily: 'Times New Roman' }}>Contact Me</span>,
    icon: <Icon as={MdInfoOutline} width="30px" height="30px" color="inherit" />,
    component: Contact
  }
];

export default routes;
