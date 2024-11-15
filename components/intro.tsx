"use client";

import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function Intro() {

    const { ref } = useSectionInView("#home", 0.5);
    //const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
    return (
        <section  ref={ref} className=" mb-28 max-w-[75rem] text-center sm:mb-0" id="home">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                    initial={{opacity: 0, scale:0}}
                    animate={{opacity:2, scale:1}}
                    transition={{
                        type: "spring",
                        stiffness: 245,
                        damping: 10,
                        duration:0.5
                    }}>
                        <Image
                        src="/boy.png"
                        width= "480"
                        height= "480"
                        alt="portrait"
                        quality="100"
                        priority={true}
                        className='rounded-full shadow-xl object-cover'
                        />
                    </motion.div>
                    <motion.span
                    initial={{opacity: 0, scale:0}}
                    animate={{opacity:2, scale:1}}
                    transition={{
                        type: "spring",
                        stiffness: 245,
                        damping: 10,
                        duration:0.5
                    }}
                    className='text-6xl absolute bottom-8 right-12'>
                        👋
                    </motion.span>
                </div>
            </div>

            <Fade direction='up' delay={300} cascade damping={1e-1}
            triggerOnce={true}>
                <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
                <span className="font-medium !leading-[1.5]">
                <span className="font-medium !leading-[1.5]">
                Software Engineer specializing in React Native Development.
                </span>
                </span>{" "}
                <p className='text-[16px]'>
                
                    Dynamic developer focused on creating seamless mobile experiences. <br/> Skilled in building cross-platform applications that combine intuitive design with powerful functionality.

                </p>
            </h1>
            </Fade>
            <motion.div
            initial={{opacity: 0, y:100}}
            animate={{opacity:2, y:0}}
            transition={{
                delay:0.1
            }}
            className="flex sm:flex-row items-center justify-center
            gap-4 px-4 text-lg font-medium">
                <Link 
                href="https://www.upwork.com/freelancers/~010b8f4f5e594bde3c?mp_source=share"
                target="_blank"
                className="group bg-gray-900 text-white px-7 py-3 flex
                items-center gap-2 rounded-full outline-non focus:scale-110
                hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-150
                transition"
                >
                    Hire Me!
                    <img src='/upwork2.png' alt="Upwork" className="w-5 h-5" />
                </Link>
                <a
                className="bg-gray-900 p-4 text-white flex items-center gap-2
                rounded-full focus:scale-[1.15] hover:scale-[1.15]
                active:scale-105 transition cursor-pointer borderblack
                dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/nouman-hafeez"
                target="_blank">
                    <BsLinkedin/>
                </a>
                <a
                className="bg-gray-900 p-4 text-white flex items-center gap-2
                rounded-full focus:scale-[1.15] hover:scale-[1.15]
                active:scale-105 transition cursor-pointer borderblack
                dark:bg-white/10 dark:text-white/60"
                href="https://github.com/noumanhafeez"
                target="_blank">
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}