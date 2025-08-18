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

  // categories you want to mark as "coming soon"
  const comingSoonCategories = ["Data Visualization", "Data Science"];
  const isComingSoon = comingSoonCategories.includes(activeCategory);

  return (
    <section className="flex flex-col items-center min-h-[900px]">
      {/* Mini Nav */}
      <div className="relative w-full">
        <div className="bg-yellow-400 w-full rounded-2xl shadow-md px-20">
          <div className="flex justify-center space-x-12 py-4 font-bold text-xs uppercase tracking-wide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-colors ${
                  activeCategory === cat
                    ? "text-pink-600"
                    : "text-black hover:text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid / Coming Soon */}
      <div className="w-full px-6 mt-8">
        {isComingSoon ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600 text-lg font-medium animate-pulse">
              🚧 {activeCategory} projects coming soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        )}
      </div>

      {/* Separator Line */}
      <hr className="mt-32 border-t-2 border-gray-300 w-3/4 mx-auto" />
    </section>
  );
}
