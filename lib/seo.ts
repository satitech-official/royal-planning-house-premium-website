import type { Metadata } from "next";
import { businessConfig } from "@/data/businessConfig";

const defaultTitle =
  "Royal Planning House | 2D Plans, 3D Elevations and Vastu Design";

export const metadataBase = new URL(businessConfig.siteUrl);

export function createMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const pageTitle = title === "Home" ? defaultTitle : `${title} | ${businessConfig.name}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: businessConfig.name,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Royal Planning House premium architecture and Vastu design preview",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/og.png"],
    },
  };
}

