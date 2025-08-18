"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      className="w-full max-w-6xl mx-auto text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28 px-4"
    >
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="text-3xl font-bold text-black">About Me</h2>
        </Fade>

        <div className="grid xl:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-8 mt-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Fade
              direction="left"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce
            >
              <Image
                src="/ghibli.png"
                alt="About Me"
                width="500"
                height="200"
                quality="100"
                priority
                className="rounded-3xl object-cover w-[350px] h-[480px]"
              />
            </Fade>
          </div>

          {/* Right Text */}
          <div className="text-lg text-left">
            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
              <p className="mt-2 leading-relaxed text-base text-black">
                I’m Nouman Hafeez, a passionate and detail-oriented software
                engineer currently pursuing a Master’s in Computer Science at{" "}
                <strong>FAST NUCES</strong>, Lahore. I have hands-on experience
                in machine learning, web scraping, and mobile application
                development. Over the years, I’ve worked on diverse projects
                involving Machine Learning, Scrapy, and React Native that are
                not only functional but also efficient and scalable.
              </p>
              <p className="mt-4 leading-relaxed text-base text-black">
                I thrive on exploring new technologies, solving complex
                challenges, and writing clean, maintainable code. Beyond
                academics, I’ve gained valuable industry experience through
                internship, including working as a{" "}
                <strong>Machine Learning Intern at Arbisoft</strong> and as a{" "}
                <strong>Associate Software Engineer at Sortup Dev</strong>.
                These roles have allowed me to bridge the gap between
                data-driven intelligence and user-friendly applications. My
                mission is to contribute to impactful, innovative projects while
                continually growing as a developer—and to make the journey as
                enjoyable as the destination.
              </p>
              {/* Mail Link */}
              <p className="mt-6 text-base text-black">
                Feel free to reach out to me at{" "}
                <a
                  href="mailto:noumanhafeez@email.com"
                  className="text-blue-600 hover:underline"
                >
                  <strong>noumanhafeez@email.com</strong>
                </a>
              </p>
            </Fade>
          </div>
        </div>
        {/* Separator line */}
        <hr className="mt-32 border-t-2 border-gray-300 w-1/2 mx-auto" />
      </div>
    </motion.section>
  );
}
