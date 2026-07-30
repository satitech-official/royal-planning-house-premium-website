"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Camera, X } from "lucide-react";
import type { GalleryCategory, GalleryItem } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";

type ActiveCategory = "All" | GalleryCategory;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<ActiveCategory>("All");
  const [visibleCount, setVisibleCount] = useState(9);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const visibleItems = useMemo(
    () => (active === "All" ? items : items.filter((item) => item.category === active)),
    [active, items],
  );
  const slicedItems = visibleItems.slice(0, visibleCount);

  return (
    <div className="gallery-module">
      <div className="segmented-controls gallery-controls" aria-label="Gallery filters">
        {galleryCategories.map((category) => (
          <button
            type="button"
            key={category}
            className={active === category ? "active" : ""}
            onClick={() => {
              setActive(category);
              setVisibleCount(9);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="masonry-gallery">
        {slicedItems.map((item, index) => (
          <button
            type="button"
            className={`gallery-item gallery-span-${index % 5}`}
            key={item.id}
            onClick={() => setLightbox(item)}
          >
            <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
            <span>
              <Camera size={18} aria-hidden="true" />
              {item.title}
              <small>{item.category}</small>
            </span>
          </button>
        ))}
      </div>

      {visibleCount < visibleItems.length ? (
        <div className="centered-action">
          <button className="outline-button" type="button" onClick={() => setVisibleCount((count) => count + 6)}>
            Load More
          </button>
        </div>
      ) : null}

      {lightbox ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={() => setLightbox(null)}>
          <button className="icon-button lightbox-close" type="button" aria-label="Close image preview" onClick={() => setLightbox(null)}>
            <X size={20} />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <Image src={lightbox.image.src} alt={lightbox.image.alt} fill sizes="100vw" />
            <figcaption>
              <strong>{lightbox.title}</strong>
              <span>{lightbox.category}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
