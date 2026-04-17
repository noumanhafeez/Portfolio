"use client";

import { useState, useMemo, useEffect } from "react";
import { projectsData } from "@/lib/data";

// Simple filters
const filters = ["Certifications", "Machine Learning", "MLOps"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [showToast, setShowToast] = useState(false);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const tags = project.tags.map((tag) => tag.toLowerCase());

      if (activeFilter === "Certifications") {
        return tags.includes("certifications");
      }

      if (activeFilter === "Machine Learning") {
        return (
          tags.includes("machine learning") ||
          tags.includes("nlp") ||
          tags.includes("deep learning")
        );
      }

      if (activeFilter === "MLOps") {
        return tags.includes("mlops");
      }

      return true;
    });
  }, [activeFilter]);

  // Toast for MLOps
  useEffect(() => {
    if (activeFilter === "MLOps") {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    } else {
      setShowToast(false);
    }
  }, [activeFilter]);

  return (
    <section className="relative flex flex-col items-center min-h-[700px] px-4 sm:px-6 max-w-[80rem] mx-auto scroll-mt-20 mb-32">

      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 max-w-xs bg-white/30 backdrop-blur-lg border border-white/30 text-slate-900 px-6 py-4 rounded-2xl shadow-2xl z-50">
          🚀 More MLOps projects coming soon!
        </div>
      )}

      {/* Filter Tabs */}
      <div className="w-full mb-12 flex justify-center gap-4 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-2xl font-semibold text-sm transition-all ${
              activeFilter === filter
                ? "bg-white/20 border border-white/30 text-pink-600 shadow-2xl"
                : "bg-white/10 text-gray-700 hover:bg-white/20 hover:text-pink-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects */}
      {filteredProjects.length === 0 ? (
        <div className="h-64 flex items-center">
          <p className="text-gray-600 animate-pulse">
            🚧 No projects found for {activeFilter}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl border bg-white/30 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all p-6"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {project.title}
              </h3>

              {project.description && (
                <p className="text-sm text-gray-700 line-clamp-3">
                  {project.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-white/20 text-pink-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="text-sm font-semibold bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}