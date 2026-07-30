import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/data/images";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Commercial Projects",
  "Commercial planning concepts for shops, showrooms, offices, complexes, institutions, hospitality and mixed-use developments.",
  "/commercial-projects",
);

export default function CommercialProjectsPage() {
  const commercial = projects.filter((project) => project.category === "Commercial");

  return (
    <>
      <PageHero
        eyebrow="Commercial projects"
        title="Efficient planning for shops, showrooms, offices and professional spaces."
        text="Commercial design focuses on space efficiency, frontage visibility, access, circulation and a confident business appearance."
        image={images.commercial}
        breadcrumbs={[{ label: "Commercial Projects" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Commercial showcase" title="Business spaces planned for visibility and movement." />
          <ProjectFilter projects={commercial} initialCategory="Commercial" />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

