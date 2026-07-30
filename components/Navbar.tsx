"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { businessConfig } from "@/data/businessConfig";
import { navigation } from "@/data/navigation";

export function Navbar({ onConsultation }: { onConsultation: () => void }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

  return (
    <header className={`site-nav ${scrolled || mobileOpen ? "site-nav-solid" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="nav-inner">
        <Link className="brand-mark" href="/" aria-label="Royal Planning House home">
          <span className="brand-monogram">{businessConfig.monogram}</span>
          <span>
            <strong>{businessConfig.name}</strong>
            <small>{businessConfig.tagline}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>
              <Link className={isActive(item.href) ? "active" : ""} href={item.href}>
                {item.label}
                {item.children ? <ChevronDown size={14} aria-hidden="true" /> : null}
              </Link>
              {item.children ? (
                <div className="nav-dropdown" role="menu">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} role="menuitem">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="gold-button small" type="button" onClick={onConsultation}>
            Get Consultation
          </button>
          <button
            className="icon-button mobile-toggle"
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div key={item.label} className="mobile-nav-group">
              <Link
                className={isActive(item.href) ? "active" : ""}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="mobile-subnav">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <button
            className="gold-button"
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onConsultation();
            }}
          >
            Get Consultation
          </button>
        </nav>
      </div>
    </header>
  );
}

