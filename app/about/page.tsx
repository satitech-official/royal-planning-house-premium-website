import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounters } from "@/components/AnimatedCounters";
import { images } from "@/data/images";
import { processSteps, values } from "@/data/process";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "About Us",
  "Learn about Royal Planning House, its design philosophy, Vastu-conscious approach and client-first architectural planning process.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Royal Planning House"
        title="A premium architectural planning and Shahi Vastu Kala design studio."
        text="Royal Planning House builds a design journey around clarity, proportion, family comfort, business function and refined visual identity."
        image={images.introElevation}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <section className="section">
        <div className="container story-grid">
          <div>
            <SectionHeading
              eyebrow="Brand story"
              title="Designed for clients who want plans they can understand and spaces they can feel proud to build."
              text="The studio focuses on residential homes, luxury villas, commercial projects, 2D planning, 3D elevations and Vastu-based planning preferences."
            />
            <p>
              Royal Planning House does not publish unverified founder names, awards, certifications or addresses. Those details are intentionally kept as editable placeholders until the official business information is provided.
            </p>
            <div className="quote-panel">
              “Architecture should bring discipline to a dream, and grace to everyday living.”
            </div>
          </div>
          <div className="story-image-stack">
            <Image src={images.process.src} alt={images.process.alt} width={760} height={920} />
            <Image src={images.blueprint.src} alt={images.blueprint.alt} width={560} height={420} />
          </div>
        </div>
      </section>

      <section className="section soft-band">
        <div className="container three-column">
          {[
            {
              title: "Mission",
              text: "To create practical, refined and Vastu-conscious planning solutions that help clients make confident design decisions before construction begins.",
            },
            {
              title: "Vision",
              text: "To become a trusted architecture and Vastu planning studio known for clarity, elegance and thoughtful project presentation.",
            },
            {
              title: "Approach",
              text: "Start with site and requirements, refine the plan, evaluate Vastu preferences, then build a visual direction through elevation and review.",
            },
          ].map((item) => (
            <article className="lux-panel" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Values"
            title="The principles behind each planning conversation."
            align="center"
          />
          <div className="values-grid">
            {values.map((value) => (
              <article key={value}>{value}</article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band">
        <div className="container split-section">
          <div>
            <SectionHeading
              eyebrow="Timeline"
              title="A process that keeps clients informed from concept to delivery."
              text="The journey is built to reduce confusion, gather decisions at the right time and keep the design direction clear."
            />
            <Link className="gold-button" href="/process">
              View Full Process
            </Link>
          </div>
          <ol className="mini-timeline">
            {processSteps.slice(0, 6).map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedCounters />
        </div>
      </section>

      <ContactBand />
    </>
  );
}

