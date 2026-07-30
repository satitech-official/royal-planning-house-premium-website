"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Footer } from "./Footer";
import { LoadingScreen } from "./LoadingScreen";
import { Navbar } from "./Navbar";
import { SmoothScroll } from "./SmoothScroll";
import { ConsultationModal } from "./ConsultationModal";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <Navbar onConsultation={() => setConsultationOpen(true)} />
      <main id="main-content">{children}</main>
      <Footer onConsultation={() => setConsultationOpen(true)} />
      <WhatsAppButton />
      <ConsultationModal open={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}

