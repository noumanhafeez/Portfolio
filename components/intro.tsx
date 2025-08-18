"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-20"
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
        <h1 className="mb-10 mt-4 px-4 sm:text-4xl text-slate-900 font-bold">
          <span className="!leading-[1.5] relative inline-block">
            <span className="!leading-[2.5] text-4xl pb-2 border-b-4 border-slate-300">
              Nouman Hafeez
            </span>
          </span>
          <p className="text-[16px] font-bold text-slate-900 mt-5">
            Hello! Glad to see you here. This is a collection of my personal
            projects created during my MS studies, combining what I learned in
            class with my own curiosity and creativity.
          </p>
        </h1>
      </Fade>
    </section>
  );
}
