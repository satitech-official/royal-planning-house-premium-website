import { images } from "./images";

export type ProjectCategory =
  | "Residential"
  | "Villas"
  | "Commercial"
  | "2D Plans"
  | "3D Elevations"
  | "Vastu Projects";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  plotSize: string;
  builtUpArea: string;
  status: string;
  designStyle: string;
  summary: string;
  challenge: string;
  solution: string;
  vastu: string;
  image: typeof images.heroVilla;
  gallery: (typeof images.heroVilla)[];
};

export const projects: Project[] = [
  {
    slug: "royal-villa-elevation-concept",
    title: "Royal Villa Elevation Concept",
    category: "Villas",
    location: "Editable client location",
    plotSize: "Editable plot size",
    builtUpArea: "Editable built-up area",
    status: "Design concept",
    designStyle: "Royal contemporary",
    summary:
      "A premium villa facade concept focused on grand arrival, balanced symmetry, shaded balconies and warm stone finishes.",
    challenge:
      "Create a regal frontage without making the elevation heavy or difficult to maintain.",
    solution:
      "Layered projections, vertical rhythm, brass-toned accents and deep balcony shadows create a rich but practical facade.",
    vastu:
      "Directional preferences can be coordinated with entrance placement and internal zoning once the final plot facing is confirmed.",
    image: images.luxuryVilla,
    gallery: [images.luxuryVilla, images.nightElevation, images.materialStudy],
  },
  {
    slug: "compact-urban-home-plan",
    title: "Compact Urban Home Plan",
    category: "2D Plans",
    location: "Editable city",
    plotSize: "Narrow urban plot",
    builtUpArea: "Editable",
    status: "Planning showcase",
    designStyle: "Efficient modern",
    summary:
      "A compact plan study that prioritizes privacy, ventilation and efficient movement on a constrained plot.",
    challenge:
      "Balance family privacy with natural light on a narrow frontage and limited side setbacks.",
    solution:
      "A clear service spine, flexible living area and careful stair placement improve daily flow without wasting area.",
    vastu:
      "Room zoning can be adjusted against plot direction during the Vastu review stage.",
    image: images.compactHome,
    gallery: [images.compactHome, images.blueprint, images.sketches],
  },
  {
    slug: "commercial-showroom-frontage",
    title: "Commercial Showroom Frontage",
    category: "Commercial",
    location: "Editable business location",
    plotSize: "Editable frontage",
    builtUpArea: "Editable",
    status: "Concept visualization",
    designStyle: "Sharp commercial",
    summary:
      "A business-facing elevation concept designed for visibility, clear access and a professional first impression.",
    challenge:
      "Make the frontage stand out while preserving signage clarity, entry movement and service access.",
    solution:
      "A clean vertical frame, transparent display zone and practical entrance axis improve both identity and usability.",
    vastu:
      "Entrance and cashier or reception zones can be reviewed based on business preferences and site direction.",
    image: images.showroom,
    gallery: [images.showroom, images.commercial, images.officePlanning],
  },
  {
    slug: "vastu-aligned-family-residence",
    title: "Vastu-Aligned Family Residence",
    category: "Vastu Projects",
    location: "Editable residential location",
    plotSize: "Editable",
    builtUpArea: "Editable",
    status: "Planning concept",
    designStyle: "Modern with traditional balance",
    summary:
      "A family residence planning study that aligns practical room needs with direction-conscious zoning.",
    challenge:
      "Respect Vastu preferences while keeping the kitchen, bedrooms, living spaces and ventilation practical.",
    solution:
      "The layout separates public and private zones, protects circulation and leaves room for future adjustment.",
    vastu:
      "Vastu guidance is treated as a design preference and consultation input. Outcomes are not guaranteed.",
    image: images.vastu,
    gallery: [images.vastu, images.residential, images.blueprint],
  },
  {
    slug: "premium-residential-elevation",
    title: "Premium Residential Elevation",
    category: "3D Elevations",
    location: "Editable location",
    plotSize: "Editable frontage",
    builtUpArea: "Editable",
    status: "3D elevation study",
    designStyle: "Contemporary luxury",
    summary:
      "A refined residential elevation concept with balanced glazing, stone textures and warm lighting.",
    challenge:
      "Create a premium look that remains realistic for local construction methods and budget control.",
    solution:
      "The facade uses simple geometry, layered surfaces and durable material zones for a polished result.",
    vastu:
      "Vastu-related entrance preferences can be coordinated before final exterior refinement.",
    image: images.facade,
    gallery: [images.facade, images.nightElevation, images.materialStudy],
  },
  {
    slug: "farmhouse-retreat-planning",
    title: "Farmhouse Retreat Planning",
    category: "Residential",
    location: "Editable outskirts location",
    plotSize: "Large plot",
    builtUpArea: "Editable",
    status: "Residential concept",
    designStyle: "Open landscape living",
    summary:
      "A relaxed residence concept planned around open views, landscape edges, shaded outdoor seating and privacy.",
    challenge:
      "Use a larger plot thoughtfully without spreading the home into inefficient disconnected zones.",
    solution:
      "A clear central living spine connects bedrooms, outdoor areas and service access with calm movement.",
    vastu:
      "Outdoor and indoor zones can be tuned to plot direction during the planning stage.",
    image: images.farmhouse,
    gallery: [images.farmhouse, images.siteVisit, images.interiorPlan],
  },
];

export const projectCategories: ("All Projects" | ProjectCategory)[] = [
  "All Projects",
  "Residential",
  "Villas",
  "Commercial",
  "2D Plans",
  "3D Elevations",
  "Vastu Projects",
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

