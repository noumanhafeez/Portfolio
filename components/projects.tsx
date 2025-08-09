"use client";
import { useState } from "react";
import Project from "./project-card"; // your project card component
import { projectsData } from "@/lib/data"; // your data file

const categories = ["All Categories", "Data Visualization", "Data Science"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredProjects =
    activeCategory === "All Categories"
      ? projectsData
      : projectsData.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(activeCategory.toLowerCase())
          )
        );

  return (
    <section className="flex flex-col items-center">
      {/* Navigation Bar */}
      <div className="w-[120%] relative bg-yellow-400 rounded-lg shadow-sm">
        <div className="flex justify-center gap-12 py-4 w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase tracking-wide text-[14px] font-bold transition-colors ${
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

      {/* Projects */}
      <div className="flex flex-col items-center gap-6 mt-8">
        {filteredProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
