"use client";

import { useEffect, useRef, useState } from "react";
import { businessConfig } from "@/data/businessConfig";

export function AnimatedCounters() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      requestAnimationFrame(() => setProgress(1));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const started = performance.now();
        const duration = 1000;
        const tick = (time: number) => {
          const next = Math.min(1, (time - started) / duration);
          setProgress(next);
          if (next < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-grid" ref={rootRef}>
      {businessConfig.stats.map((stat) => (
        <article key={stat.label}>
          <strong>
            {Math.round(stat.value * progress)}
            {stat.suffix}
          </strong>
          <span>{stat.label}</span>
          <small>{stat.note}</small>
        </article>
      ))}
    </div>
  );
}
