import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/data/images";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Residential Projects",
  "Residential architecture concepts for independent homes, duplex homes, villas, bungalows, compact urban homes and multi-floor residences.",
  "/residential-projects",
);

export default function ResidentialProjectsPage() {
  const residential = projects.filter((project) => ["Residential", "Villas", "2D Plans", "3D Elevations", "Vastu Projects"].includes(project.category));

  return (
    <>
      <PageHero
        eyebrow="Residential projects"
        title="Independent homes, duplexes, villas, bungalows and compact urban homes."
        text="Filter and explore residential concepts focused on comfort, privacy, future expansion and refined exterior identity."
        image={images.residential}
        breadcrumbs={[{ label: "Residential Projects" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Residential showcase" title="Home concepts organized for easy comparison." />
          <ProjectFilter projects={residential} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

