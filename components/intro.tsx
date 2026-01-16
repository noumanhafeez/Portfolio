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
      className="mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="
          relative
          rounded-3xl
          border border-teal-300/40
          bg-gradient-to-br
          from-teal-100/60
          via-sky-200/40
          to-violet-200/30
          backdrop-blur-xl backdrop-saturate-150
          shadow-[0_30px_90px_rgba(56,189,248,0.35)]
          px-10 py-14
          text-center
        "
      >
        {/* Glass highlight */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            rounded-3xl
            bg-gradient-to-b
            from-white/70
            to-transparent
            opacity-25
          "
        />

        <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce>
          <h1 className="relative z-10 mb-8">
            <span
              className="
              block
              text-4xl sm:text-5xl
              font-playfair
              font-bold
              tracking-tight
              text-slate-900
            "
            >
              <span className="relative inline-block">
                <span className="relative">Nouman Hafeez</span>
              </span>
            </span>

            <p
              className="
              mt-8
              max-w-3xl mx-auto
              text-[17px]
              font-inter
              font-medium
              text-slate-800
              leading-relaxed
            "
            >
              Hello! Glad to see you here. This is a collection of my personal
              projects created during my MS studies, combining what I learned in
              class with my own curiosity and creativity.
            </p>
          </h1>
        </Fade>
      </motion.div>
    </section>
  );
}
