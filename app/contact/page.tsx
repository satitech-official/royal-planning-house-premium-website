import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  businessConfig,
  getMailHref,
  getPhoneHref,
  getWhatsappHref,
} from "@/data/businessConfig";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Contact Us",
  "Contact Royal Planning House for 2D floor plans, 3D elevations, Vastu consultation, villa design and commercial planning enquiries.",
  "/contact",
);

export default function ContactPage() {
  const whatsappHref = getWhatsappHref();
  const whatsappExternal = whatsappHref.startsWith("https://");

  return (
    <>
      <PageHero
        eyebrow="Contact Royal Planning House"
        title="Share your plot details and begin your architectural planning journey."
        text="The consultation form validates project details, accepts drawing uploads and keeps official contact placeholders easy to replace."
        image={images.officePlanning}
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      <section className="section" id="consultation-form">
        <div className="container contact-layout">
          <div>
            <SectionHeading
              eyebrow="Consultation form"
              title="Tell us what you want to design."
              text="Share the basics now. The team can request deeper drawings, references and measurements during the next step."
            />
            <div className="contact-methods">
              <a href={getPhoneHref()}>
                <Phone size={18} aria-hidden="true" />
                {businessConfig.contact.phoneDisplay}
              </a>
              <a href={getMailHref()}>
                <Mail size={18} aria-hidden="true" />
                {businessConfig.contact.emailDisplay}
              </a>
              <a
                href={whatsappHref}
                target={whatsappExternal ? "_blank" : undefined}
                rel={whatsappExternal ? "noopener noreferrer" : undefined}
              >
                <Phone size={18} aria-hidden="true" />
                {businessConfig.contact.whatsappDisplay}
              </a>
              <a href={businessConfig.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Camera size={18} aria-hidden="true" />
                {businessConfig.instagramName}
              </a>
            </div>
          </div>
          <ContactForm source="contact-page" />
        </div>
      </section>
      <section className="section soft-band" id="location">
        <div className="container location-panel">
          <div>
            <p className="eyebrow">Location</p>
            <h2>Office location will appear here after official address verification.</h2>
            <p>{businessConfig.contact.address}</p>
            <Link className="outline-button" href="/contact#consultation-form">
              Request Directions
            </Link>
          </div>
          {businessConfig.contact.mapsEmbedUrl ? (
            <iframe
              src={businessConfig.contact.mapsEmbedUrl}
              title="Royal Planning House office map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="map-placeholder" aria-label="Editable map placeholder">
              <MapPin size={38} aria-hidden="true" />
              <span>Verified Google Maps embed pending</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
