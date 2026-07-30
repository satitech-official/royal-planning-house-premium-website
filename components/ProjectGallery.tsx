"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { SiteImage } from "@/data/images";

export function ProjectGallery({ images }: { images: SiteImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => (current === null ? current : (current + 1) % images.length));
      if (event.key === "ArrowLeft") setActive((current) => (current === null ? current : (current - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <>
      <div className="detail-gallery">
        {images.map((image, index) => (
          <button key={image.src} type="button" onClick={() => setActive(index)}>
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project gallery image" onClick={() => setActive(null)}>
          <button className="icon-button lightbox-close" type="button" aria-label="Close project image" onClick={() => setActive(null)}>
            <X size={20} />
          </button>
          <button
            className="icon-button lightbox-prev"
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current === null ? current : (current - 1 + images.length) % images.length));
            }}
          >
            <ChevronLeft size={22} />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <Image src={images[active].src} alt={images[active].alt} fill sizes="100vw" />
            <figcaption>{images[active].alt}</figcaption>
          </figure>
          <button
            className="icon-button lightbox-next"
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current === null ? current : (current + 1) % images.length));
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      ) : null}
    </>
  );
}

