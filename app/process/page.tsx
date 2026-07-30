import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Process",
  "Royal Planning House design process from consultation, plot study and 2D planning to Vastu review, 3D elevation and final delivery.",
  "/process",
);

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Working process"
        title="A clear design journey from first conversation to final delivery."
        text="Every stage has a purpose: gather requirements, understand the site, develop planning, evaluate Vastu preferences, visualize and refine."
        image={images.process}
        breadcrumbs={[{ label: "Process" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Blueprint path" title="Ten stages that keep the project moving." />
          <ProcessTimeline />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

