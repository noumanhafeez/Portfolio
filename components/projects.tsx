"use client";

import { useState } from "react";
import Project from "./project-card";
import { projectsData } from "@/lib/data";

const categories = [
  "All Categories",
  "Certifications",
  "Coursera Projects",
  "Data Visualization",
  "Data Science",
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredProjects =
    activeCategory === "All Categories"
      ? projectsData
      : projectsData.filter((project) =>
          project.tags.some(
            (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
          )
        );

  const comingSoonCategories = ["Data Visualization", "Data Science"];
  const isComingSoon = comingSoonCategories.includes(activeCategory);

  return (
    <section className="flex flex-col items-center min-h-[900px] px-4 sm:px-6 max-w-[75rem] mx-auto scroll-mt-20">
      {/* Mini Nav */}
      <div className="w-full mb-8">
        <div
          className="
          relative
          rounded-3xl
          border border-teal-300/30
          bg-gradient-to-br from-teal-100/40 via-sky-100/30 to-violet-100/20
          backdrop-blur-xl backdrop-saturate-150
          shadow-[0_20px_60px_rgba(56,189,248,0.25)]
          px-6 py-4
          flex justify-center overflow-x-auto
        "
        >
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between space-x-4 sm:space-x-8 font-bold text-xs sm:text-sm uppercase tracking-wide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "text-pink-600"
                    : "text-black hover:text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Glass highlight overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-20" />
        </div>
      </div>

      {/* Projects Grid / Coming Soon */}
      <div className="w-full">
        {isComingSoon ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600 text-lg font-medium animate-pulse">
              🚧 {activeCategory} projects coming soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="
                  relative
                  rounded-3xl
                  border border-teal-200/30
                  bg-gradient-to-br from-white/30 via-white/20 to-white/10
                  backdrop-blur-xl backdrop-saturate-150
                  shadow-[0_20px_60px_rgba(56,189,248,0.15)]
                  overflow-hidden
                  transition-transform hover:scale-[1.02]
                "
              >
                <Project {...project} />
                {/* Glass highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-20" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Separator Line */}
      <hr className="mt-32 border-t-2 border-gray-300 w-3/4 mx-auto" />
    </section>
  );
}
