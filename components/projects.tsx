"use client";

import { useState, useMemo, useEffect } from "react";
import { projectsData } from "@/lib/data";

// Only two filters
const filters = ["Certifications", "Projects"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [showToast, setShowToast] = useState(false);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const tags = project.tags.map((tag) => tag.toLowerCase());

      if (activeFilter === "Certifications") {
        return tags.includes("certifications");
      }

      if (activeFilter === "Projects") {
        return !tags.includes("certifications");
      }

      return true;
    });
  }, [activeFilter]);

  useEffect(() => {
    if (activeFilter === "Projects") {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 10000);
      return () => clearTimeout(timer);
    } else {
      setShowToast(false);
    }
  }, [activeFilter]);

  return (
    <section className="relative max-w-[80rem] mx-auto scroll-mt-20 mb-32 px-4 sm:px-6 font-sans">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 max-w-sm rounded-2xl border border-white/20 bg-white/30 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.15)] px-5 py-4 z-50">
          <p className="text-sm font-semibold text-slate-900">Projects Hub</p>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            A collection of work across software engineering and AI/ML.
          </p>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            More builds are actively in progress — new work gets added
            regularly.
          </p>
          <p className="mt-3 text-xs text-slate-500 tracking-wide">
            Exploring, building, and iterating over time.
          </p>
        </div>
      )}

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* Glass Container */}
      <div
        className="
          relative
          rounded-3xl
          border border-white/20
          bg-gradient-to-br from-sky-100/40 via-white/30 to-violet-100/30
          backdrop-blur-2xl backdrop-saturate-150
          shadow-[0_40px_120px_rgba(0,0,0,0.12)]
          px-8 py-10
        "
      >
        {/* soft highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/70 to-transparent opacity-30"
        />

        <div className="relative z-10">
          {/* Filters */}
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-5 py-2 rounded-2xl text-sm font-medium transition-all
                  border backdrop-blur-xl
                  ${
                    activeFilter === filter
                      ? "bg-white/30 border-white/30 text-slate-900 shadow-lg"
                      : "bg-white/10 border-white/10 text-slate-600 hover:bg-white/20 hover:text-slate-900"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="
                    relative
                    rounded-2xl
                    border border-white/20
                    bg-white/20
                    backdrop-blur-xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                    p-6
                    transition-transform duration-300 hover:scale-[1.02]
                  "
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>

                {project.description && (
                  <p className="text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                          text-xs px-3 py-1 rounded-full
                          bg-white/20 border border-white/20
                          text-slate-700
                        "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-5">
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="
                        text-sm font-medium
                        bg-gradient-to-r from-sky-500 to-indigo-500
                        hover:from-sky-600 hover:to-indigo-600
                        text-white
                        px-4 py-2
                        rounded-xl
                        shadow-md
                        transition
                      "
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
