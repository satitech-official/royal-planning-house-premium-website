"use client";

import Link from "next/link";
import { ArrowUp, Camera, Mail, MapPin, Phone } from "lucide-react";
import {
  businessConfig,
  getMailHref,
  getPhoneHref,
  getWhatsappHref,
} from "@/data/businessConfig";
import { footerLinks, navigation } from "@/data/navigation";
import { services } from "@/data/services";

export function Footer({ onConsultation }: { onConsultation: () => void }) {
  const whatsappHref = getWhatsappHref();
  const whatsappExternal = whatsappHref.startsWith("https://");

  return (
    <footer className="site-footer">
      <div className="footer-blueprint" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand-mark dark" href="/">
            <span className="brand-monogram">{businessConfig.monogram}</span>
            <span>
              <strong>{businessConfig.name}</strong>
              <small>{businessConfig.tagline}</small>
            </span>
          </Link>
          <p>{businessConfig.description}</p>
          <button className="gold-button" type="button" onClick={onConsultation}>
            Book Consultation
          </button>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            {navigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={service.href}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={getPhoneHref()}>{businessConfig.contact.phoneDisplay}</a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={getMailHref()}>{businessConfig.contact.emailDisplay}</a>
            </li>
            <li>
              <Camera size={16} aria-hidden="true" />
              <a href={businessConfig.socials.instagram} target="_blank" rel="noopener noreferrer">
                {businessConfig.instagramName}
              </a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <Link href="/contact#location">{businessConfig.contact.city}</Link>
            </li>
          </ul>
          <a
            className="outline-button footer-whatsapp"
            href={whatsappHref}
            target={whatsappExternal ? "_blank" : undefined}
            rel={whatsappExternal ? "noopener noreferrer" : undefined}
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Copyright 2026 Royal Planning House. All rights reserved.</p>
        <button
          className="icon-button"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
