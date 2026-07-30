"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root) return;

    if (!reduceMotion) {
      const context = gsap.context(() => {
        gsap.fromTo(".loader-line", { scaleX: 0 }, { scaleX: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" });
        gsap.fromTo(".loader-mark", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
      }, root);
      const timer = window.setTimeout(() => setVisible(false), 950);
      return () => {
        context.revert();
        window.clearTimeout(timer);
      };
    }

    const timer = window.setTimeout(() => setVisible(false), 250);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-screen" ref={rootRef} role="status" aria-live="polite">
      <div className="loader-grid" aria-hidden="true">
        <span className="loader-line" />
        <span className="loader-line" />
        <span className="loader-line" />
        <span className="loader-line vertical" />
      </div>
      <div className="loader-mark">
        <span>RPH</span>
        <small>Royal Planning House</small>
      </div>
    </div>
  );
}

