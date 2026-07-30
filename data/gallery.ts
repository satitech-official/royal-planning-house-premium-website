import { images } from "./images";

export type GalleryCategory =
  | "2D Plans"
  | "3D Elevations"
  | "Residential Projects"
  | "Commercial Projects"
  | "Villas"
  | "Design Process"
  | "Site Visits"
  | "Sketches and Concepts";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: typeof images.heroVilla;
};

export const galleryItems: GalleryItem[] = [
  { id: "plan-table-study", title: "Dimensioned planning review", category: "2D Plans", image: images.blueprint },
  { id: "royal-facade", title: "Royal villa facade mood", category: "Villas", image: images.luxuryVilla },
  { id: "modern-front", title: "Modern residential front elevation", category: "3D Elevations", image: images.facade },
  { id: "commercial-axis", title: "Commercial frontage visibility", category: "Commercial Projects", image: images.commercial },
  { id: "family-home", title: "Family residence concept", category: "Residential Projects", image: images.residential },
  { id: "vastu-compass", title: "Direction-conscious planning", category: "Sketches and Concepts", image: images.vastu },
  { id: "site-coordination", title: "Site understanding and coordination", category: "Site Visits", image: images.siteVisit },
  { id: "studio-review", title: "Architectural design review", category: "Design Process", image: images.introStudio },
  { id: "night-render", title: "Night elevation ambience", category: "3D Elevations", image: images.nightElevation },
  { id: "compact-urban", title: "Compact urban home frontage", category: "Residential Projects", image: images.compactHome },
  { id: "showroom-entry", title: "Showroom entry composition", category: "Commercial Projects", image: images.showroom },
  { id: "farmhouse-zoning", title: "Farmhouse landscape planning", category: "Residential Projects", image: images.farmhouse },
  { id: "materials", title: "Material and colour visualization", category: "Design Process", image: images.materialStudy },
  { id: "office-flow", title: "Office circulation planning", category: "Commercial Projects", image: images.officePlanning },
  { id: "concept-board", title: "Interior planning reference", category: "Sketches and Concepts", image: images.sketches },
  { id: "layout-light", title: "Natural light planning study", category: "2D Plans", image: images.interiorPlan },
];

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "2D Plans",
  "3D Elevations",
  "Residential Projects",
  "Commercial Projects",
  "Villas",
  "Design Process",
  "Site Visits",
  "Sketches and Concepts",
];

