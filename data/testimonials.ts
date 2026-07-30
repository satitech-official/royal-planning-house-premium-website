export type Testimonial = {
  quote: string;
  name: string;
  projectType: string;
  location: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The planning process was clear from the first discussion. The layout made better use of the plot and the elevation preview helped our family decide with confidence.",
    name: "Editable Client Initials",
    projectType: "Residential planning",
    location: "Location editable",
    rating: 5,
  },
  {
    quote:
      "The Vastu suggestions were explained practically. We did not feel forced into awkward changes, and the final plan still felt modern.",
    name: "Editable Client Initials",
    projectType: "Vastu consultation",
    location: "Location editable",
    rating: 5,
  },
  {
    quote:
      "The 3D elevation made the front look premium while staying realistic for construction. The review and revision flow was professional.",
    name: "Editable Client Initials",
    projectType: "3D elevation",
    location: "Location editable",
    rating: 5,
  },
];

