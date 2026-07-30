export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "2D Planning", href: "/2d-planning" },
      { label: "3D Elevations", href: "/3d-elevations" },
      { label: "Vastu Design", href: "/vastu-design" },
      { label: "Commercial Planning", href: "/services/commercial-planning" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Residential", href: "/residential-projects" },
      { label: "Commercial", href: "/commercial-projects" },
    ],
  },
  { label: "Vastu Design", href: "/vastu-design" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Process", href: "/process" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

