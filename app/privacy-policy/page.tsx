import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Privacy Policy",
  "Royal Planning House privacy policy for enquiry form data, uploads, communication and analytics placeholders.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How enquiry details and project references are handled."
        text="This starter policy should be reviewed by the business before public launch and adapted to local legal requirements."
        image={images.blueprint}
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="section">
        <div className="container legal-copy">
          <SectionHeading eyebrow="Policy" title="Privacy principles for project enquiries." />
          <h2>Information collected</h2>
          <p>Royal Planning House may collect name, phone number, email, city, plot details, project requirements, messages and uploaded reference files submitted through the consultation form.</p>
          <h2>Use of information</h2>
          <p>The information is used to respond to enquiries, understand project requirements, prepare consultation notes and communicate about requested services.</p>
          <h2>Uploads</h2>
          <p>Uploaded files should contain only material the sender has permission to share. File type and size restrictions are applied for safety.</p>
          <h2>Contact and retention</h2>
          <p>Official retention periods, business email recipients and deletion request contacts should be added after verified business details are provided.</p>
          <h2>Legal note</h2>
          <p>This policy is a practical website draft and should be reviewed by a qualified professional before launch.</p>
        </div>
      </section>
    </>
  );
}

