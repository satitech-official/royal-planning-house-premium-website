import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/data/images";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Projects",
  "View Royal Planning House residential, villa, commercial, 2D plan, 3D elevation and Vastu project showcases.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project showcase"
        title="Residential, villa, commercial and Vastu-aligned concepts."
        text="A curated project presentation with filters, detail pages and editable project data for future verified work."
        image={images.luxuryVilla}
        breadcrumbs={[{ label: "Projects" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Filter projects"
            title="Explore by category, service and design direction."
          />
          <ProjectFilter projects={projects} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

