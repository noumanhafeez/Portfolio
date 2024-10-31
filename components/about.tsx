"use client"

import { DEFAULT_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";
import React from "react";
import { deflate } from "zlib";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
export default function About() {
    const { ref } = useSectionInView("#about");
    return (
        <motion.section
         id="about"
         initial={{opacity:0, y:100}}
         animate={{opacity:1, y:0}}
         transition={{delay:0.175}}
         ref={ref}
         className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28">
            <div className="container mx-auto">
                <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <SectionHeading>
                    about Me
                </SectionHeading>
                </Fade>
                <div className="grid xl:grid-cols-2 lg:text-start">
                    <div className="flex-1">
                        <div className="text-lg mt-12 xl:mt-3">
                            <div className="flex justify-start flex-col">
                            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className="font-bold mt-6">
                                    My Mission
                                </h3>
                                </Fade>
                                <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                                <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                                My mission is to create exceptional mobile experiences that seamlessly bridge the gap between iOS and Android platforms. I am dedicated to developing intuitive, high-performance applications that solve real-world problems and enhance user experiences through innovative React Native solutions.
                                </p>
                                </Fade>
                                <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className="font-bold mt-6">
                                    My Vision
                                </h3>
                                </Fade>
                                <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce={true}>
                                <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                                I envision pushing the boundaries of mobile development by crafting seamless cross-platform applications that set new standards for user interaction. My goal is to contribute to the evolution of mobile technology while delivering solutions that combine technical excellence with intuitive design.
                                </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div>
                    <Fade direction="right" delay={600} cascade damping={1e-1} triggerOnce={true}>
                    <Image
                    src="/about.png"
                    alt="About Me"
                    width="800"
                    height="800"
                    quality="100"
                    priority={true}
                    className="rounded-full mt-8 object-cover"/>
                    </Fade>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}