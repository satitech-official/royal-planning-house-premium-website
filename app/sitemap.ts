import type { MetadataRoute } from "next";
import { businessConfig } from "@/data/businessConfig";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/projects",
  "/2d-planning",
  "/3d-elevations",
  "/vastu-design",
  "/residential-projects",
  "/commercial-projects",
  "/process",
  "/gallery",
  "/testimonials",
  "/faqs",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessConfig.siteUrl;
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.75,
    })),
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}

