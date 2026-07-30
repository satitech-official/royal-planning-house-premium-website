import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MousePointer2, Sparkles } from "lucide-react";
import { AnimatedCounters } from "@/components/AnimatedCounters";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ContactBand } from "@/components/ContactBand";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceMosaic } from "@/components/ServiceMosaic";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { VastuCompass } from "@/components/VastuCompass";
import { WhyDiagram } from "@/components/WhyDiagram";
import { businessConfig } from "@/data/businessConfig";
import { galleryItems } from "@/data/gallery";
import { images } from "@/data/images";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createMetadata(
    "Home",
    "Royal Planning House provides customized 2D planning, realistic 3D elevations, Vastu-based design, luxury villa planning and commercial architectural solutions.",
    "/",
  ),
};

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-media">
          <Image src={images.heroVilla.src} alt={images.heroVilla.alt} fill priority sizes="100vw" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow light">{businessConfig.tagline}</p>
            <h1>Designing Royal Spaces with Precision, Purpose and Vastu</h1>
            <p>
              We transform ideas into thoughtfully planned homes, luxury villas and commercial spaces through detailed 2D planning, realistic 3D elevations and Vastu-aligned architectural solutions.
            </p>
            <div className="hero-actions">
              <Link className="gold-button" href="/projects">
                Explore Our Projects <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="outline-button light" href="/contact#consultation-form">
                Book a Consultation
              </Link>
            </div>
          </div>
          <aside className="hero-stat-card" aria-label="Project highlights">
            <Sparkles size={20} aria-hidden="true" />
            <strong>Premium planning studio</strong>
            <span>2D plans, 3D elevations, Vastu consultation and concept visualization</span>
          </aside>
          <a className="scroll-indicator" href="#intro" aria-label="Scroll to introduction">
            <MousePointer2 size={18} aria-hidden="true" />
            Scroll
          </a>
        </div>
      </section>

      <section className="section intro-section" id="intro">
        <div className="container intro-grid">
          <div className="intro-images">
            <Image className="intro-main" src={images.introStudio.src} alt={images.introStudio.alt} width={900} height={1100} />
            <Image className="intro-float" src={images.introElevation.src} alt={images.introElevation.alt} width={520} height={640} />
          </div>
          <div className="intro-copy">
            <SectionHeading
              eyebrow="Studio introduction"
              title="A planning and Vastu design studio for refined Indian homes and commercial spaces."
              text="Royal Planning House combines practical space planning, beautiful exterior elevations and direction-conscious Vastu preferences with a modern luxury design language."
            />
            <p>
              Every project begins with how the space should work. Movement, ventilation, privacy, plot conditions, frontage and future expansion are studied before visual polish is added.
            </p>
            <div className="signature-line">Precision in plan. Royalty in presence.</div>
            <Link className="text-link" href="/about">
              Discover Our Story <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Planning services shaped for real construction decisions."
            text="Each service has its own workflow, visuals and deliverables so clients can move from idea to confident design direction."
          />
          <ServiceMosaic services={services} />
        </div>
      </section>

      <section className="section project-section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured projects"
            title="A curated showcase of planning and elevation concepts."
            text="Project data is centralized and intentionally editable, ready to be replaced with verified client work and official locations."
          />
          <ProjectFilter projects={projects} />
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container split-section">
          <div>
            <SectionHeading
              eyebrow="Before and after"
              title="From drawing clarity to visual confidence."
              text="Compare a planning reference with a refined elevation mood. The slider supports mouse, touch and keyboard input."
            />
          </div>
          <BeforeAfterSlider
            before={images.blueprint}
            after={images.facade}
            beforeLabel="Plan study"
            afterLabel="3D elevation"
          />
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose Royal Planning House"
            title="A balanced method for beauty, practicality and Vastu preference."
            text="The studio process is designed around usable layouts, refined visual identity and clear communication."
            align="center"
          />
          <WhyDiagram />
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="Working process"
            title="A structured journey from first consultation to final design delivery."
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section vastu-section">
        <div className="container vastu-grid">
          <div>
            <SectionHeading
              eyebrow="Shahi Vastu Kala and Design"
              title="Direction-conscious planning without losing modern comfort."
              text="Vastu preferences are studied through entrance position, zoning, natural light, kitchen and bedroom planning, circulation and ventilation."
            />
            <ul className="check-list">
              <li>Direction-based room planning</li>
              <li>Entrance, kitchen and bedroom review</li>
              <li>Natural light and ventilation awareness</li>
              <li>Traditional guidance balanced with practical design</li>
            </ul>
            <p className="disclaimer">
              Vastu guidance is provided as a design preference and consultation service. Outcomes may vary.
            </p>
            <Link className="gold-button" href="/vastu-design">
              Request a Vastu Consultation
            </Link>
          </div>
          <VastuCompass />
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <SectionHeading
            eyebrow="Project statistics"
            title="Editable studio metrics kept in one central file."
            text="The numbers below are modest demonstration values and should be replaced with verified official figures before public launch."
            align="center"
          />
          <AnimatedCounters />
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <SectionHeading
            eyebrow="Client feedback"
            title="Demonstration testimonials ready for verified client quotes."
            text="These editable placeholders show the intended testimonial structure without inventing verified personal identities."
          />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <section className="section instagram-section">
        <div className="container">
          <SectionHeading
            eyebrow="Instagram showcase"
            title={`Project inspiration connected to ${businessConfig.instagramName}.`}
            text="A visual gallery section inspired by social project discovery while keeping the website identity original."
          />
          <div className="instagram-strip">
            {galleryItems.slice(0, 5).map((item) => (
              <a
                href={businessConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                aria-label={`View ${item.title} inspiration on Instagram`}
              >
                <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 900px) 20vw, 50vw" />
                <span>
                  <Camera size={18} aria-hidden="true" />
                  {item.title}
                </span>
              </a>
            ))}
          </div>
          <div className="centered-action">
            <a className="outline-button" href={businessConfig.socials.instagram} target="_blank" rel="noopener noreferrer">
              Follow Royal Planning House
            </a>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
