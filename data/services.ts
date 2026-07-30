import { images } from "./images";

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  icon: string;
  href: string;
  image: typeof images.heroVilla;
  deliverables: string[];
  inputs: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "2d-floor-planning",
    title: "2D Floor Planning",
    eyebrow: "Accurate layouts",
    shortDescription:
      "Functional, build-ready layouts designed around plot size, privacy, ventilation, circulation and daily life.",
    description:
      "2D planning translates your site, family needs and construction intent into a clear architectural layout with room placement, circulation, dimensions and practical service zones.",
    icon: "drafting",
    href: "/2d-planning",
    image: images.blueprint,
    deliverables: ["Room layout options", "Dimensioned plan", "Furniture placement", "Parking and circulation study"],
    inputs: ["Plot size and facing", "Family requirements", "Road position", "Budget and future expansion needs"],
    benefits: ["Efficient space use", "Better privacy", "Clear construction direction", "Reduced rework before elevation design"],
    faqs: [
      {
        question: "Can a plan be revised after review?",
        answer:
          "Yes. The planning process includes client review and refinement before final delivery.",
      },
      {
        question: "Can Vastu be included in a 2D plan?",
        answer:
          "Yes. Direction-based planning preferences can be integrated while keeping the layout practical.",
      },
    ],
  },
  {
    slug: "3d-elevation-design",
    title: "3D Elevation Design",
    eyebrow: "Visual clarity",
    shortDescription:
      "Realistic front elevation concepts that help you understand form, materials and facade style before construction.",
    description:
      "3D elevations help clients visualize the building exterior with proportion, balcony treatment, material tone, lighting mood and facade depth.",
    icon: "building",
    href: "/3d-elevations",
    image: images.facade,
    deliverables: ["Exterior view concepts", "Material palette direction", "Day and night mood options", "Revision-ready visualization"],
    inputs: ["Final or draft floor plan", "Preferred style", "Plot frontage", "Budget and material preferences"],
    benefits: ["Confident decisions", "Better facade coordination", "Clear material direction", "Premium first impression"],
    faqs: [
      {
        question: "Do you provide royal and modern elevation styles?",
        answer:
          "Yes. Elevation direction can be minimal, contemporary, royal, traditional or a balanced blend.",
      },
      {
        question: "Is the elevation based on the actual plan?",
        answer:
          "The strongest elevation work starts from an accurate plan and frontage dimensions.",
      },
    ],
  },
  {
    slug: "vastu-based-planning",
    title: "Vastu-Based Planning",
    eyebrow: "Shahi Vastu Kala",
    shortDescription:
      "Direction-conscious planning that balances traditional Vastu preferences with modern architectural practicality.",
    description:
      "Vastu-based planning studies entrance, room zoning, kitchen placement, bedroom orientation, light and ventilation as design preferences within a functional plan.",
    icon: "compass",
    href: "/vastu-design",
    image: images.vastu,
    deliverables: ["Direction study", "Room zoning guidance", "Entrance and kitchen review", "Practical Vastu planning notes"],
    inputs: ["Plot facing", "Road direction", "Existing plan if any", "Family preferences"],
    benefits: ["Balanced planning", "Better natural light", "Clear room positioning", "Traditional and modern harmony"],
    faqs: [
      {
        question: "Are Vastu outcomes guaranteed?",
        answer:
          "No. Vastu guidance is provided as a design preference and consultation service. Outcomes may vary.",
      },
      {
        question: "Can Vastu work with modern design?",
        answer:
          "Yes. The aim is to align preferences without compromising usability, structure or aesthetics.",
      },
    ],
  },
  {
    slug: "dream-home-planning",
    title: "Dream Home Planning",
    eyebrow: "Family-first layouts",
    shortDescription:
      "Personalized home planning shaped by lifestyle, future expansion, family privacy, budget and plot conditions.",
    description:
      "Dream home planning brings site study, family requirements, lifestyle aspirations and long-term flexibility into one clear design journey.",
    icon: "home",
    href: "/services/dream-home-planning",
    image: images.dreamHome,
    deliverables: ["Requirement brief", "Concept layouts", "Space planning suggestions", "Design direction board"],
    inputs: ["Family size", "Lifestyle priorities", "Plot details", "Preferred design style"],
    benefits: ["Personalized planning", "Future-ready layout", "Better family comfort", "Focused design decisions"],
    faqs: [
      {
        question: "Can the plan include future floors?",
        answer:
          "Yes. Future expansion can be considered during the initial planning stage.",
      },
    ],
  },
  {
    slug: "luxury-villa-design",
    title: "Luxury Villa Design",
    eyebrow: "Premium residences",
    shortDescription:
      "Exclusive villa concepts with spacious layouts, landscaped edges, refined elevations and luxury lifestyle zones.",
    description:
      "Villa planning focuses on arrival experience, indoor-outdoor flow, privacy, landscape views, premium facade composition and flexible family spaces.",
    icon: "landmark",
    href: "/services/luxury-villa-design",
    image: images.luxuryVilla,
    deliverables: ["Villa zoning", "Luxury room program", "Elevation concept", "Landscape and arrival ideas"],
    inputs: ["Plot dimensions", "Lifestyle brief", "Luxury features needed", "Preferred architectural style"],
    benefits: ["Stronger visual identity", "Better privacy", "Premium entry sequence", "Refined living experience"],
    faqs: [
      {
        question: "Can the villa include landscape planning?",
        answer:
          "Conceptual landscape zones can be planned with the building layout for a stronger overall experience.",
      },
    ],
  },
  {
    slug: "commercial-planning",
    title: "Commercial Planning",
    eyebrow: "Efficient business spaces",
    shortDescription:
      "Planning for offices, shops, showrooms, institutions and mixed-use spaces with efficient access and visibility.",
    description:
      "Commercial planning balances customer movement, service access, frontage, circulation, utility zones and professional architectural presence.",
    icon: "briefcase",
    href: "/services/commercial-planning",
    image: images.commercial,
    deliverables: ["Space zoning", "Customer circulation study", "Frontage concept", "Utility and access planning"],
    inputs: ["Business type", "Site dimensions", "Footfall goals", "Display and back-of-house needs"],
    benefits: ["Efficient operations", "Better visibility", "Professional appearance", "Clearer customer movement"],
    faqs: [
      {
        question: "Can commercial plans include multiple floors?",
        answer:
          "Yes. Multi-floor layouts can be developed based on site rules, requirements and circulation needs.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

