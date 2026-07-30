export type FAQ = {
  question: string;
  answer: string;
  category: "Planning" | "Elevation" | "Vastu" | "Commercial" | "Process";
};

export const faqs: FAQ[] = [
  {
    question: "What details are needed to start a 2D floor plan?",
    answer:
      "Share the plot size, road direction, family requirements, number of floors, parking needs, preferred rooms and any Vastu preferences.",
    category: "Planning",
  },
  {
    question: "Can Royal Planning House design both 2D plans and 3D elevations?",
    answer:
      "Yes. The studio can support the journey from requirement collection and 2D layouts to elevation visualization and final design delivery.",
    category: "Process",
  },
  {
    question: "Is Vastu guidance guaranteed to create specific outcomes?",
    answer:
      "No. Vastu guidance is provided as a design preference and consultation service. Outcomes may vary and no result is guaranteed.",
    category: "Vastu",
  },
  {
    question: "Can commercial spaces be planned for customer movement?",
    answer:
      "Yes. Commercial planning can consider entry, visibility, display zones, service access, circulation and practical operations.",
    category: "Commercial",
  },
  {
    question: "Do you support revisions?",
    answer:
      "Yes. Revisions are handled through a structured review stage so the design can be refined before final delivery.",
    category: "Process",
  },
  {
    question: "Can a 3D elevation be prepared from an existing plan?",
    answer:
      "Yes. A clear existing plan, frontage dimensions and preferred style help create a more accurate elevation concept.",
    category: "Elevation",
  },
];

