import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { VastuCompass } from "@/components/VastuCompass";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Vastu Design",
  "Shahi Vastu Kala and direction-conscious planning for entrances, rooms, kitchen, bedrooms, ventilation and modern architectural layouts.",
  "/vastu-design",
);

export default function VastuDesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Shahi Vastu Kala"
        title="Vastu-based planning balanced with modern architectural comfort."
        text="Direction-based room planning, entrance positioning, natural light, ventilation and practical implementation without sacrificing aesthetics."
        image={images.vastu}
        breadcrumbs={[{ label: "Vastu Design" }]}
      />
      <section className="section">
        <div className="container vastu-grid">
          <div>
            <SectionHeading
              eyebrow="Vastu consultation"
              title="Traditional preference, applied with design discipline."
              text="The aim is to guide spatial decisions while protecting usability, privacy, construction logic and modern lifestyle requirements."
            />
            <ul className="check-list">
              <li>Entrance and direction review</li>
              <li>Kitchen and bedroom placement guidance</li>
              <li>Light, ventilation and movement balance</li>
              <li>Modern planning with traditional design preferences</li>
            </ul>
            <p className="disclaimer">
              Vastu guidance is provided as a design preference and consultation service. Outcomes may vary, and no guarantee is claimed.
            </p>
            <Link className="gold-button" href="/contact#consultation-form">
              Request a Vastu Consultation
            </Link>
          </div>
          <VastuCompass />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

