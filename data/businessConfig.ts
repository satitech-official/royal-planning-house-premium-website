export const businessConfig = {
  name: "Royal Planning House",
  monogram: "RPH",
  instagramName: "@royal_planning_house",
  profileName: "Royal_Planning_House07",
  tagline: "Planning | Shahi Vastu Kala & Design",
  description:
    "Customized 2D planning, realistic 3D elevations, Vastu-based design, luxury villa planning and commercial architectural solutions.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://royal-planning-house.example.com",
  contact: {
    phone: "",
    phoneDisplay: "Official phone number pending",
    email: "",
    emailDisplay: "Official email pending",
    address: "Official office address pending. Add the verified address here before launch.",
    city: "Service area editable",
    whatsappNumber: "",
    whatsappDisplay: "Official WhatsApp number pending",
    whatsappMessage:
      "Hello Royal Planning House, I would like to discuss an architectural planning project. Please share the consultation details.",
    mapsEmbedUrl: "",
  },
  socials: {
    instagram:
      "https://www.instagram.com/royal_planning_house?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  stats: [
    {
      label: "Design Concepts",
      value: 24,
      suffix: "+",
      note: "Editable after official project figures are confirmed",
    },
    { label: "Planning Categories", value: 8, suffix: "+", note: "Residential, villa and commercial categories" },
    { label: "Core Services", value: 6, suffix: "", note: "2D plans, elevations, Vastu and more" },
    { label: "Design Stages", value: 10, suffix: "", note: "Structured journey from brief to delivery" },
  ],
};

export const getWhatsappHref = () => {
  const message = encodeURIComponent(businessConfig.contact.whatsappMessage);
  const number = businessConfig.contact.whatsappNumber.replace(/\D/g, "");
  if (!number) return `/contact?prefill=${message}#consultation-form`;
  return `https://wa.me/${number}?text=${message}`;
};

export const getMailHref = () =>
  businessConfig.contact.email
    ? `mailto:${businessConfig.contact.email}`
    : "/contact#consultation-form";

export const getPhoneHref = () =>
  businessConfig.contact.phone
    ? `tel:${businessConfig.contact.phone.replace(/\s/g, "")}`
    : "/contact#consultation-form";

