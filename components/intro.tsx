"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  //const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <section
      ref={ref}
      className=" mb-28 max-w-[75rem] text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 2, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 245,
              damping: 10,
              duration: 0.5,
            }}
          ></motion.div>
        </div>
      </div>

      <Fade
        direction="up"
        delay={300}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-10 mt-4 px-4 sm:text-4xl text-black font-bold">
          <span className="!leading-[1.5] relative inline-block">
            <span className="!leading-[2.5] text-6xl pb-2 border-b-4 border-yellow-100">
              Nouman Hafeez
              <span className="absolute left-0 right-0 -bottom-2 mx-auto h-1 w-32 bg-yellow-100 rounded-full"></span>
            </span>
          </span>
          <p className="text-[16px] font-bold text-black mt-5">
            Hello! Glad to see you here. This is a collection of my personal
            projects created during my MS studies, combining what I learned in
            class with my own curiosity and creativity.
          </p>
        </h1>
      </Fade>
    </section>
  );
}
