"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import type { SiteImage } from "@/data/images";

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: SiteImage;
  after: SiteImage;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [value, setValue] = useState(52);

  return (
    <div className="comparison" style={{ "--compare": `${value}%` } as CSSProperties}>
      <div className="comparison-stage">
        <Image src={after.src} alt={after.alt} fill sizes="100vw" />
        <div className="comparison-before">
          <Image src={before.src} alt={before.alt} fill sizes="100vw" />
        </div>
        <div className="comparison-handle" aria-hidden="true" />
        <span className="compare-label before">{beforeLabel}</span>
        <span className="compare-label after">{afterLabel}</span>
        <input
          aria-label="Move comparison slider"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </div>
    </div>
  );
}
