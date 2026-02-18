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
      <div
        className="
          relative rounded-3xl
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
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-25"
        />

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 mt-8 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/me.jpeg"
                alt="Nouman Hafeez portrait"
                width={350}
                height={480}
                priority={false}
                className="rounded-3xl object-cover w-[350px] h-[480px]"
              />
            </div>

            {/* Text */}
            <div className="text-left text-base text-slate-900 leading-relaxed">
              <p>
                I’m <strong>Nouman Hafeez</strong>, a software engineer
                currently pursuing a Master’s in Computer Science at{" "}
                <strong>FAST NUCES</strong>, Lahore. I have hands-on experience
                in machine learning, web scraping, and mobile application
                development, working on scalable and efficient solutions.
              </p>

              <p className="mt-4">
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
                  className="text-blue-600 hover:underline"
                >
                  <strong>noumanhafeez@email.com</strong>
                </a>
              </p>
            </div>
          </div>

          <hr className="mt-32 border-t-2 border-gray-300 w-1/2 mx-auto" />
        </div>
      </div>
    </section>
  );
}
