"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/data/faqs";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <article className="faq-item" key={faq.question}>
          <button
            type="button"
            aria-expanded={open === index}
            aria-controls={`faq-${index}`}
            onClick={() => setOpen((current) => (current === index ? -1 : index))}
          >
            <span>{faq.question}</span>
            <ChevronDown size={20} aria-hidden="true" />
          </button>
          <div id={`faq-${index}`} className={open === index ? "open" : ""}>
            <p>{faq.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

