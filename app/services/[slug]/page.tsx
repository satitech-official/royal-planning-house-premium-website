import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeading } from "@/components/SectionHeading";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata(service.title, service.shortDescription, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.description}
        image={service.image}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />
      <section className="section">
        <div className="container detail-columns">
          <article>
            <SectionHeading eyebrow="What it includes" title="Clear deliverables for confident decisions." />
            <ul className="check-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <SectionHeading eyebrow="Client inputs" title="What helps us design better." />
            <ul className="check-list">
              {service.inputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <SectionHeading eyebrow="Benefits" title="Why this service matters." />
            <ul className="check-list">
              {service.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <section className="section soft-band">
        <div className="container split-section">
          <div>
            <SectionHeading
              eyebrow="Design process"
              title="A focused workflow from brief to review."
              text="The service begins with requirement collection, then moves into concept development, refinement and final deliverable preparation."
            />
            <Link className="gold-button" href="/contact#consultation-form">
              Enquire About {service.title}
            </Link>
          </div>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Related projects" title="Project examples that connect to this service." />
          <ProjectFilter projects={projects.slice(0, 4)} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}
