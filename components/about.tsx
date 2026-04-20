"use client";

import Image from "next/image";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <section
      id="about"
      ref={ref}
      className="mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4"
    >
      {/* Glassmorphism Container (matched with Intro style) */}
      <div
        className="
          relative rounded-3xl
          border border-white/20
          bg-gradient-to-br from-sky-100/40 via-white/30 to-violet-100/30
          backdrop-blur-2xl backdrop-saturate-150
          shadow-[0_40px_120px_rgba(0,0,0,0.12)]
          px-10 py-14
          font-sans
        "
      >
        {/* soft highlight layer */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/70 to-transparent opacity-30"
        />

        <div className="relative z-10 text-center">
          {/* Title (gradient style like Intro name) */}
          <h2 className="text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 mt-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/me.jpeg"
                alt="Nouman Hafeez portrait"
                width={350}
                height={480}
                className="rounded-3xl object-cover w-[350px] h-[480px] shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="text-left text-[17px] text-slate-700 leading-relaxed">
              <p>
                I’m <strong>Nouman Hafeez</strong>, a software engineer
                currently pursuing a Master’s in Computer Science at{" "}
                <strong>FAST NUCES</strong>, Lahore. I have hands-on experience
                in machine learning, web scraping, and mobile application
                development, working on scalable and efficient solutions.
              </p>

              <p className="mt-5">
                I’ve worked as a{" "}
                <strong>Machine Learning Intern at Arbisoft</strong> and as an{" "}
                <strong>Associate Software Engineer at Sortup Dev</strong>,
                bridging data-driven intelligence with user-friendly
                applications. I enjoy solving complex problems and writing
                clean, maintainable code.
              </p>

              <p className="mt-6">
                Feel free to reach out at{" "}
                <a
                  href="mailto:noumanhafeez@email.com"
                  className="text-sky-600 hover:text-indigo-600 transition"
                >
                  <strong>noumanhafeez@email.com</strong>
                </a>
              </p>
            </div>
          </div>

          <p className="mt-12 text-xs tracking-[0.25em] text-slate-500 uppercase">
            software · ai/ml · systems · exploration
          </p>
        </div>
      </div>
    </section>
  );
}
