"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <section
      id="about"
      ref={ref}
      className="mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="
          relative
          rounded-3xl
          border border-teal-300/30
          bg-gradient-to-br
          from-teal-100/40
          via-sky-100/30
          to-violet-100/20
          backdrop-blur-xl backdrop-saturate-150
          shadow-[0_30px_90px_rgba(56,189,248,0.25)]
          px-10 py-14
        "
      >
        {/* Glass highlight */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            rounded-3xl
            bg-gradient-to-b
            from-white/50
            to-transparent
            opacity-25
          "
        />

        <div className="relative z-10 text-center">
          <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce>
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          </Fade>

          <div className="grid xl:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-8 mt-8 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <Fade
                direction="left"
                delay={400}
                cascade
                damping={0.1}
                triggerOnce
              >
                <Image
                  src="/me.jpeg"
                  alt="About Me"
                  width="500"
                  height="200"
                  quality={100}
                  priority
                  className="rounded-3xl object-cover w-[350px] h-[480px]"
                />
              </Fade>
            </div>

            {/* Right Text */}
            <div className="text-lg text-left">
              <Fade
                direction="up"
                delay={500}
                cascade
                damping={0.1}
                triggerOnce
              >
                <p className="mt-2 leading-relaxed text-slate-900 text-base">
                  I’m Nouman Hafeez, a passionate and detail-oriented software
                  engineer currently pursuing a Master’s in Computer Science at{" "}
                  <strong>FAST NUCES</strong>, Lahore. I have hands-on
                  experience in machine learning, web scraping, and mobile
                  application development. Over the years, I’ve worked on
                  diverse projects involving Machine Learning, Scrapy, and React
                  Native that are not only functional but also efficient and
                  scalable.
                </p>
                <p className="mt-4 leading-relaxed text-slate-900 text-base">
                  I thrive on exploring new technologies, solving complex
                  challenges, and writing clean, maintainable code. Beyond
                  academics, I’ve gained valuable industry experience through
                  internship, including working as a{" "}
                  <strong>Machine Learning Intern at Arbisoft</strong> and as a{" "}
                  <strong>Associate Software Engineer at Sortup Dev</strong>.
                  These roles have allowed me to bridge the gap between
                  data-driven intelligence and user-friendly applications. My
                  mission is to contribute to impactful, innovative projects
                  while continually growing as a developer—and to make the
                  journey as enjoyable as the destination.
                </p>
                <p className="mt-6 text-base text-slate-900">
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
      </motion.div>
    </section>
  );
}
