import type { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ContactBand } from "@/components/ContactBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "3D Elevations",
  "Premium 3D elevation design for modern, contemporary, royal, minimal, luxury villa and commercial facades.",
  "/3d-elevations",
);

export default function ThreeDElevationsPage() {
  const elevationItems = galleryItems.filter((item) => ["3D Elevations", "Villas", "Residential Projects", "Commercial Projects"].includes(item.category));

  return (
    <>
      <PageHero
        eyebrow="3D elevation design"
        title="Realistic exterior visualization for confident facade decisions."
        text="Explore modern elevations, royal facades, commercial frontage ideas, day and night moods, material direction and colour visualization."
        image={images.facade}
        breadcrumbs={[{ label: "3D Elevations" }]}
      />
      <section className="section">
        <div className="container split-section">
          <SectionHeading
            eyebrow="Before and after"
            title="From basic massing to premium elevation mood."
            text="The comparison tool helps clients understand how proportion, texture and lighting change the final impression."
          />
          <BeforeAfterSlider before={images.compactHome} after={images.nightElevation} beforeLabel="Basic structure" afterLabel="Premium elevation" />
        </div>
      </section>
      <section className="section soft-band">
        <div className="container">
          <SectionHeading eyebrow="Elevation gallery" title="Every elevation visual uses a different image reference." />
          <GalleryGrid items={elevationItems} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

