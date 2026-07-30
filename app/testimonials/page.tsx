import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { images } from "@/data/images";
import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Testimonials",
  "Read editable Royal Planning House testimonial examples for planning, Vastu guidance, elevation design and client communication.",
  "/testimonials",
);

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Client feedback structure for verified planning and elevation stories."
        text="The current testimonials are clearly editable demonstration placeholders until verified client names and quotes are approved."
        image={images.introStudio}
        breadcrumbs={[{ label: "Testimonials" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Client voice" title="Feedback designed around real project experiences." />
          <TestimonialSlider testimonials={testimonials} />
          <p className="disclaimer">
            Replace these editable examples with approved client testimonials before public launch if verification is required.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

