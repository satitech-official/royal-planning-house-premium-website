"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectCategories } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type Filter = "All Projects" | ProjectCategory;

export function ProjectFilter({
  projects,
  initialCategory = "All Projects",
}: {
  projects: Project[];
  initialCategory?: Filter;
}) {
  const [active, setActive] = useState<Filter>(initialCategory);
  const [sort, setSort] = useState("featured");

  const visibleProjects = useMemo(() => {
    const filtered = active === "All Projects" ? projects : projects.filter((project) => project.category === active);
    if (sort === "name") return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    return filtered;
  }, [active, projects, sort]);

  return (
    <div className="filter-showcase">
      <div className="filter-toolbar" aria-label="Project filters">
        <div className="segmented-controls">
          {projectCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={active === category ? "active" : ""}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="sort-control">
          Sort
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

