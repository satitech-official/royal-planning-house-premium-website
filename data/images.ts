export type SiteImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const images = {
  heroVilla: {
    src: unsplash("photo-1600585154340-be6161a56a0c", 2400),
    alt: "Luxury modern villa exterior with warm architectural lighting",
  },
  introStudio: {
    src: unsplash("photo-1497366754035-f200968a6e72", 1600),
    alt: "Architect reviewing detailed planning drawings on a studio desk",
  },
  introElevation: {
    src: unsplash("photo-1600607687939-ce8a6c25118c", 1400),
    alt: "Premium residential elevation with landscaped entry",
  },
  blueprint: {
    src: unsplash("photo-1503387762-592deb58ef4e", 1600),
    alt: "Architectural floor plan with measurement tools",
  },
  facade: {
    src: unsplash("photo-1512917774080-9991f1c4c750", 1600),
    alt: "Contemporary home facade with glass and stone finishes",
  },
  vastu: {
    src: unsplash("photo-1532323544230-7191fd51bc1b", 1600),
    alt: "Architectural compass and planning notes for directional study",
  },
  dreamHome: {
    src: unsplash("photo-1600566753190-17f0baa2a6c3", 1600),
    alt: "Spacious family home exterior with modern planning",
  },
  luxuryVilla: {
    src: unsplash("photo-1613490493576-7fde63acd811", 1600),
    alt: "Luxury villa with pool, open terrace and premium landscape",
  },
  commercial: {
    src: unsplash("photo-1486406146926-c627a92ad1ab", 1600),
    alt: "Commercial building facade with professional architectural presence",
  },
  process: {
    src: unsplash("photo-1581094794329-c8112a89af12", 1600),
    alt: "Planning meeting with drawings and construction documentation",
  },
  residential: {
    src: unsplash("photo-1570129477492-45c003edd2be", 1600),
    alt: "Residential architecture with clean roofline and garden edge",
  },
  nightElevation: {
    src: unsplash("photo-1600047509807-ba8f99d2cdde", 1600),
    alt: "Modern residential elevation shown in evening light",
  },
  siteVisit: {
    src: unsplash("photo-1541888946425-d81bb19240f5", 1600),
    alt: "Architectural site planning and construction coordination",
  },
  officePlanning: {
    src: unsplash("photo-1497366811353-6870744d04b2", 1600),
    alt: "Professional office planning with meeting tables and circulation",
  },
  showroom: {
    src: unsplash("photo-1518005020951-eccb494ad742", 1600),
    alt: "Architectural commercial frontage with strong geometric lines",
  },
  interiorPlan: {
    src: unsplash("photo-1524758631624-e2822e304c36", 1600),
    alt: "Interior space planning with open work area and natural light",
  },
  farmhouse: {
    src: unsplash("photo-1599423300746-b62533397364", 1600),
    alt: "Large residence planned with open landscape and privacy",
  },
  compactHome: {
    src: unsplash("photo-1568605114967-8130f3a36994", 1600),
    alt: "Compact urban home exterior with efficient front elevation",
  },
  materialStudy: {
    src: unsplash("photo-1505693416388-ac5ce068fe85", 1600),
    alt: "Warm material palette for premium residential interiors",
  },
  sketches: {
    src: unsplash("photo-1500530855697-b586d89ba3ee", 1600),
    alt: "Design concept board for a refined home interior and layout",
  },
} satisfies Record<string, SiteImage>;

