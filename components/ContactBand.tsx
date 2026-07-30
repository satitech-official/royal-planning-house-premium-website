import Link from "next/link";
import { ArrowRight, Camera, MessageCircle } from "lucide-react";
import { businessConfig, getWhatsappHref } from "@/data/businessConfig";

export function ContactBand() {
  const whatsappHref = getWhatsappHref();
  const whatsappExternal = whatsappHref.startsWith("https://");

  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <p className="eyebrow light">Consultation CTA</p>
          <h2>Let us Design a Space That Reflects Your Vision</h2>
          <p>
            Share your plot details, requirements and design preferences with Royal Planning House to begin your architectural journey.
          </p>
        </div>
        <div className="cta-actions">
          <Link className="gold-button" href="/contact#consultation-form">
            Start Your Project <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a
            className="outline-button light"
            href={whatsappHref}
            target={whatsappExternal ? "_blank" : undefined}
            rel={whatsappExternal ? "noopener noreferrer" : undefined}
          >
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
          </a>
          <a className="outline-button light" href={businessConfig.socials.instagram} target="_blank" rel="noopener noreferrer">
            <Camera size={18} aria-hidden="true" /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
