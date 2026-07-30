import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Gallery",
  "Filterable Royal Planning House gallery for 2D plans, 3D elevations, residential projects, commercial concepts, site visits and sketches.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A masonry gallery for plans, elevations, process visuals and project inspiration."
        text="Filter by category, open full-screen previews and load more work as the verified portfolio expands."
        image={images.sketches}
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Visual archive" title="Filterable project and design process gallery." />
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

