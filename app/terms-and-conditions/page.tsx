import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Terms and Conditions",
  "Royal Planning House website terms covering consultation requests, project information, Vastu guidance, intellectual property and placeholders.",
  "/terms-and-conditions",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms and Conditions"
        title="Website terms for consultation requests and design information."
        text="These starter terms should be reviewed and customized before the website is used as a public business contract."
        image={images.process}
        breadcrumbs={[{ label: "Terms and Conditions" }]}
      />
      <section className="section">
        <div className="container legal-copy">
          <SectionHeading eyebrow="Terms" title="Use of the Royal Planning House website." />
          <h2>Website content</h2>
          <p>Content on this website explains architectural planning, 3D elevation and Vastu consultation services. It does not replace a signed project agreement, legal approval, structural design or government permission process.</p>
          <h2>Project information</h2>
          <p>Clients are responsible for sharing accurate plot details, requirements, permissions and reference material they are authorized to use.</p>
          <h2>Vastu guidance</h2>
          <p>Vastu guidance is provided as a design preference and consultation service. Outcomes may vary and no guaranteed result is claimed.</p>
          <h2>Design ownership</h2>
          <p>Ownership, usage rights, revisions, fees and delivery terms should be defined in the official project proposal or agreement.</p>
          <h2>Placeholders</h2>
          <p>Official phone, email, address, team, awards and certification details must be verified before public launch.</p>
        </div>
      </section>
    </>
  );
}

