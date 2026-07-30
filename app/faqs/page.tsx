import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Frequently Asked Questions",
  "Answers to Royal Planning House questions about 2D floor plans, 3D elevations, Vastu design, commercial planning and revisions.",
  "/faqs",
);

export default function FAQsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="FAQs"
        title="Clear answers before you start your design consultation."
        text="Understand the planning inputs, elevation workflow, Vastu limitations and revision process."
        image={images.materialStudy}
        breadcrumbs={[{ label: "FAQs" }]}
      />
      <section className="section">
        <div className="container split-section">
          <SectionHeading eyebrow="Questions" title="Planning, elevation and Vastu FAQs." />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

