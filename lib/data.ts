import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mecware from "@/public/mecware.png";
import vihan from "@/public/vihan.png";
import digikala from "@/public/digikala.png";
import solo from "@/public/solo.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Mashhad",
        description:
            "I graduated after 2 months of studying. Then I coded two bot projects for telegram and instagram.",
        icon: React.createElement(LuGraduationCap),
        date: "2018",
    },
    {
        title: "Full-Stack Developer",
        location: "Mashhad",
        description:
            "I worked as a full-stack developer for 3 years in 1 job in a startup.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Python Developer",
        location: "Mashhad",
        description:
            "I'm a back-end developer working as a freelancer in c# and python. I'm open to full-time opportunities.",
        icon: React.createElement(FaPython),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Mecware",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. An app to read and write on Modbus/TCP for a BMS System.",
        tags: ["Blazor", "SignalR", "SQL", "Tailwind", "EFCore"],
        imageUrl: mecware,
    },
    {
        title: "Vihan",
        description:
            "Managment dashboard for a library . It has features like filtering, sorting and pagination.",
        tags: ["ASPCore", "SQL", "Bootstrap"],
        imageUrl: vihan,
    }, 
    {
        title: "SoloPy",
        description:
            "SoloPy is a Python library published by SOLO Motor Controllers to control, command or read all the parameters that are stored or existing in the command set of SOLO devices.",
        tags: ["Python"],
        imageUrl: solo,
    },
    {
        title: "DigiKala Analyzer",
        description:
            "An assistant app for sellers to manage price of their products on the digikala marketplace.",
        tags: ["ASPCore", "Background Jobs", "SQL lite"],
        imageUrl: digikala,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "C#",
    "ASPCore",
    "Blazor",
    "WPF",
    "Winform",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "EFCore",
    "Express",
    "Python",
    "Framer Motion",
] as const;