import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { businessConfig } from "@/data/businessConfig";
import { metadataBase } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Royal Planning House | 2D Plans, 3D Elevations and Vastu Design",
    template: "%s | Royal Planning House",
  },
  description: businessConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Royal Planning House | 2D Plans, 3D Elevations and Vastu Design",
    description: businessConfig.description,
    url: "/",
    siteName: businessConfig.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Royal Planning House premium architecture preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Planning House | 2D Plans, 3D Elevations and Vastu Design",
    description: businessConfig.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: businessConfig.name,
    url: businessConfig.siteUrl,
    description: businessConfig.description,
    sameAs: [businessConfig.socials.instagram],
    areaServed: "India",
    serviceType: [
      "Architectural Planning",
      "2D Floor Plans",
      "3D Elevations",
      "Vastu-Based Planning",
      "Residential Architecture",
      "Commercial Planning",
    ],
    telephone: businessConfig.contact.phone || undefined,
    email: businessConfig.contact.email || undefined,
  };

  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

