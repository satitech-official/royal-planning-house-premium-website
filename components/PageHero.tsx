import Image from "next/image";
import { Breadcrumbs } from "./Breadcrumbs";
import type { SiteImage } from "@/data/images";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: SiteImage;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHero({ eyebrow, title, text, image, breadcrumbs }: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="page-hero-media">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" />
      </div>
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </header>
  );
}

