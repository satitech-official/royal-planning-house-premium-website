import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { getProject, projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata(project.title, project.summary, `/projects/${project.slug}`);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        text={project.summary}
        image={project.image}
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]}
      />
      <section className="section">
        <div className="container project-detail-layout">
          <aside className="project-specs">
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt>Plot size</dt>
                <dd>{project.plotSize}</dd>
              </div>
              <div>
                <dt>Built-up area</dt>
                <dd>{project.builtUpArea}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{project.status}</dd>
              </div>
              <div>
                <dt>Design style</dt>
                <dd>{project.designStyle}</dd>
              </div>
            </dl>
            <Link className="gold-button" href={`/contact?project=${project.slug}#consultation-form`}>
              Enquire About This Project
            </Link>
          </aside>
          <div className="project-narrative">
            <SectionHeading eyebrow="Client requirement" title="Planning challenge" text={project.challenge} />
            <SectionHeading eyebrow="Design solution" title="How the concept responds" text={project.solution} />
            <div className="vastu-note">
              <h2>Vastu considerations</h2>
              <p>{project.vastu}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section soft-band">
        <div className="container">
          <SectionHeading eyebrow="Image gallery" title="Floor plan, elevation and material previews." />
          <ProjectGallery images={project.gallery} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Related projects" title="Continue exploring similar concepts." />
          <div className="project-grid">
            {related.map((item, index) => (
              <ProjectCard key={item.slug} project={item} index={index} />
            ))}
          </div>
          <div className="centered-action">
            <Link className="text-link" href="/projects">
              View all projects <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

