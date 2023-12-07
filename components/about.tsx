"use client"

import React from 'react'
import {motion} from 'framer-motion'
import SectionHeading from './section-heading'
import { useActiveLinkInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useActiveLinkInView("About")


  return <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
      I enrolled in a coding bootcamp and learned{" "}
      <span className="font-medium">full-stack web development</span>.{" "}
      <span className="italic">My favorite part of programming</span> is the
      problem-solving aspect. I <span className="underline">love</span> the
      feeling of finally figuring out a solution to a problem. My core stack
      is{" "}
      <span className="font-medium">
        ASPCore, Blazor and SQL
      </span>
      . I am also familiar with Python, Node.js, Next.js and TypeScript. I am currently a freelancer and
      learning <span className="font-medium">web3 development with Ethereum and Solidity</span>
    </p>

    <p>
      <span className="italic">When I'm not coding</span>, I enjoy playing
      video games, watching movies, and reading books. I also enjoy{" "}
      <span className="font-medium">outdoor pursuits, like hiking and riding</span>
    </p>
  </motion.section>
}
