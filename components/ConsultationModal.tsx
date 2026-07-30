"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";

type ConsultationModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ConsultationModal({ open, onClose }: ConsultationModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const dialog = document.querySelector<HTMLElement>("[data-consultation-dialog]");
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="consultation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        data-consultation-dialog
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} className="icon-button modal-close" type="button" onClick={onClose} aria-label="Close consultation form">
          <X size={20} />
        </button>
        <p className="eyebrow">Start your project</p>
        <h2 id="consultation-title">Book a Royal Planning House Consultation</h2>
        <p className="modal-intro">
          Share your project type, preferred service and a short message. The extended contact page includes upload and full plot detail fields.
        </p>
        <ContactForm compact source="consultation-modal" />
      </section>
    </div>
  );
}

