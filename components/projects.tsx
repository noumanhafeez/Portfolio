"use client";

import { useState, useMemo } from "react";
import { projectsData } from "@/lib/data";

const categories = [
  "Certifications",
  "Coursera Projects",
  "Data Visualization",
  "Data Science",
];
const comingSoonCategories = ["Data Visualization", "Data Science"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      project.tags.some(
        (tag) => tag.toLowerCase() === activeCategory.toLowerCase(),
      ),
    );
  }, [activeCategory]);

  const isComingSoon = comingSoonCategories.includes(activeCategory);

  return (
    <section className="flex flex-col items-center min-h-[700px] px-4 sm:px-6 max-w-[75rem] mx-auto scroll-mt-20">
      {/* Category Tabs */}
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
                className={`
                  whitespace-nowrap
                  transition-colors
                  px-4 py-2 rounded-full relative overflow-hidden
                  ${
                    activeCategory === cat
                      ? "text-pink-600 bg-white/20 backdrop-blur-xl"
                      : "text-black hover:text-gray-700"
                  }
                `}
              >
                {/* Active glass highlight */}
                {activeCategory === cat && (
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-white/25 backdrop-blur-xl rounded-full pointer-events-none"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects List / Coming Soon */}
      {isComingSoon ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600 text-lg font-medium animate-pulse">
            🚧 {activeCategory} projects coming soon!
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="
                relative rounded-3xl border border-teal-200/30
                bg-gradient-to-br from-white/30 via-white/20 to-white/10
                backdrop-blur-xl backdrop-saturate-150
                shadow-[0_20px_60px_rgba(56,189,248,0.15)]
                px-6 py-4
                transition-transform hover:scale-[1.02]
                cursor-pointer
              "
              onClick={() => window.open(project.link, "_blank")}
            >
              {/* Glass highlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-20"
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-700">
                  {project.tags.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Separator Line */}
      <hr className="mt-32 border-t-2 border-gray-300 w-3/4 mx-auto" />
    </section>
  );
}
