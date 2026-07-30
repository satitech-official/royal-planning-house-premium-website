import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <div className="project-image">
          <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
        </div>
        <div className="project-card-content">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h3>{project.title}</h3>
          </div>
          <ArrowUpRight size={22} aria-hidden="true" />
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt>Plot</dt>
              <dd>{project.plotSize}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
          <p>{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}

