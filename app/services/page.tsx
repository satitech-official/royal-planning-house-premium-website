import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceMosaic } from "@/components/ServiceMosaic";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Services",
  "Explore Royal Planning House services for 2D planning, 3D elevation design, Vastu-based planning, villa design and commercial planning.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Architecture services"
        title="Detailed planning and visualization services for homes, villas and commercial spaces."
        text="Choose a focused service or combine 2D planning, Vastu review and 3D elevation into one structured design journey."
        image={images.blueprint}
        breadcrumbs={[{ label: "Services" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service overview"
            title="Every service is designed around client inputs, clear deliverables and practical design benefits."
          />
          <ServiceMosaic services={services} />
        </div>
      </section>
      <section className="section soft-band">
        <div className="container service-detail-stack">
          {services.map((service, index) => (
            <article className={`service-row row-${index % 2}`} key={service.slug}>
              <div>
                <p className="eyebrow">{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="deliverable-list">
                <h3>Main deliverables</h3>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container split-section">
          <SectionHeading
            eyebrow="Common questions"
            title="Answers before you book a consultation."
          />
          <FAQAccordion faqs={faqs.slice(0, 5)} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}

