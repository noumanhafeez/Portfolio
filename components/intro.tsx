"use client";

import { useSectionInView } from "@/lib/useInView";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4"
    >
      <div
        className="
          relative
          rounded-3xl
          border border-white/20
          bg-gradient-to-br from-sky-100/40 via-white/30 to-violet-100/30
          backdrop-blur-2xl backdrop-saturate-150
          shadow-[0_40px_120px_rgba(0,0,0,0.12)]
          px-10 py-14
          text-center
          font-sans
        "
      >
        {/* soft highlight layer */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/70 to-transparent opacity-30"
        />

        <div className="relative z-10">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Nouman Hafeez
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl mx-auto text-[17px] text-slate-700 leading-relaxed">
            Hello! Glad to see you here. This is a collection of my personal
            projects during my MS studies — combining academic learning with
            curiosity, experimentation, and real-world building.
          </p>

          {/* Tags */}
          <p className="mt-5 text-xs tracking-[0.25em] text-slate-500 uppercase">
            software · ai/ml · systems · exploration
          </p>
        </div>
      </div>
    </section>
  );
}
