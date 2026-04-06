"use client";

import { useState, useMemo, useEffect } from "react";
import { projectsData } from "@/lib/data";

// Only two filters
const filters = ["Certifications", "MLOps / Machine Learning"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [showToast, setShowToast] = useState(false);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "Certifications") {
      return projectsData.filter((project) =>
        project.tags.some((tag) => tag.toLowerCase() === "certifications"),
      );
    } else if (activeFilter === "MLOps / Machine Learning") {
      return projectsData.filter((project) =>
        project.tags.some(
          (tag) =>
            tag.toLowerCase() === "machine learning" ||
            tag.toLowerCase() === "mlops",
        ),
      );
    }
    return [];
  }, [activeFilter]);

  // Show toast when MLOps / Machine Learning is selected
  useEffect(() => {
    if (activeFilter === "MLOps / Machine Learning") {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 4000); // auto-dismiss after 4s
      return () => clearTimeout(timer);
    } else {
      setShowToast(false);
    }
  }, [activeFilter]);

  return (
    <section className="relative flex flex-col items-center min-h-[700px] px-4 sm:px-6 max-w-[80rem] mx-auto scroll-mt-20 mb-32">
      {/* Toast Notification */}
      {showToast && (
        <div
          onClick={() => setShowToast(false)}
          className="
    fixed top-6 right-6
    max-w-xs
    bg-gradient-to-r from-white/30 via-white/20 to-white/10
    backdrop-blur-lg
    border border-white/30
    text-slate-900
    px-6 py-4
    rounded-2xl
    shadow-2xl
    cursor-pointer
    z-50
    transition-transform transform
    whitespace-normal break-words
  "
        >
          🚀 More Projects are on the way!
          <br />
          Check out my GitHub for latest updates.
        </div>
      )}

      {/* Filter Tabs */}
      <div className="w-full mb-12">
        <div className="flex justify-center flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
          px-5 py-2 rounded-2xl font-semibold text-sm transition-all
          ${
            activeFilter === filter
              ? "bg-white/20 backdrop-blur-md border border-white/30 text-pink-600 shadow-2xl"
              : "bg-white/10 text-gray-700 hover:bg-white/20 hover:text-pink-600"
          }
        `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      {filteredProjects.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600 text-lg font-medium animate-pulse">
            🚧 No projects found for {activeFilter}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="
                relative rounded-2xl border border-gray-200
                bg-white/30 backdrop-blur-xl backdrop-saturate-150
                shadow-lg hover:shadow-2xl transition-all
                p-6 flex flex-col justify-between gap-3
              "
            >
              {/* Project Info */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {project.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
        text-xs font-medium
        px-2 py-1 rounded-full
        bg-gradient-to-r from-white/20 via-white/10 to-white/5
        backdrop-blur-md
        text-pink-700
        shadow-md
      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                {activeFilter === "Certifications" ? (
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="text-sm font-semibold bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    View Certificate
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="text-sm font-semibold bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      View Code
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
