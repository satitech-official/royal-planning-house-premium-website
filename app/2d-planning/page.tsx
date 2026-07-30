import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "2D Planning",
  "2D architectural planning for residential homes, villas and commercial layouts with dimensions, circulation, ventilation and Vastu preferences.",
  "/2d-planning",
);

export default function TwoDPlanningPage() {
  const planItems = galleryItems.filter((item) => ["2D Plans", "Design Process", "Sketches and Concepts"].includes(item.category));

  return (
    <>
      <PageHero
        eyebrow="2D architectural planning"
        title="Clear, functional layouts before construction decisions begin."
        text="Residential floor plans, villa layouts and commercial plans shaped around plot size, family needs, furniture placement, privacy and movement."
        image={images.blueprint}
        breadcrumbs={[{ label: "2D Planning" }]}
      />
      <section className="section">
        <div className="container detail-columns">
          {[
            "Room dimensions and furniture placement",
            "Circulation, parking and privacy planning",
            "Ventilation and natural light consideration",
            "Future expansion and Vastu-aligned layout preferences",
          ].map((item) => (
            <article className="lux-panel" key={item}>
              <h2>{item}</h2>
              <p>Each planning decision is reviewed for usability, construction clarity and long-term comfort.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section soft-band">
        <div className="container">
          <SectionHeading eyebrow="Plan previews" title="Sample planning visuals with filterable zoom gallery." />
          <GalleryGrid items={planItems} />
          <p className="disclaimer">Confidential client blueprints should be published only after permission is granted.</p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
