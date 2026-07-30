<p align="center">
  <img src="./public/og.png" alt="Royal Planning House premium architecture website preview" width="100%" />
</p>

<h1 align="center">Royal Planning House Premium Website</h1>

<p align="center">
  Premium architecture, 2D planning, 3D elevation and Shahi Vastu Kala website built with Next.js, React, Tailwind CSS, Framer Motion, GSAP, Lenis and Swiper.
</p>

<p align="center">
  <a href="https://royal-planning-house.nikhilbaraskar551.chatgpt.site" target="_blank">
    <img src="https://img.shields.io/badge/Owner%20Preview-Open%20Website-c89d43?style=for-the-badge&logo=google-chrome&logoColor=102641" alt="Open owner preview" />
  </a>
  <a href="https://github.com/satitech-official/royal-planning-house-premium-website" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Repository-102641?style=for-the-badge&logo=github&logoColor=ffffff" alt="GitHub repository" />
  </a>
  <a href="https://www.instagram.com/royal_planning_house?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-royal__planning__house-a65336?style=for-the-badge&logo=instagram&logoColor=ffffff" alt="Royal Planning House Instagram" />
  </a>
</p>

## Website Preview

**Owner-preview URL:** [https://royal-planning-house.nikhilbaraskar551.chatgpt.site](https://royal-planning-house.nikhilbaraskar551.chatgpt.site)

Public internet publishing is currently disabled for this Sites workspace, so the preview URL may require allowed-owner access. The project is build-ready for public hosting on a platform such as Cloudflare Workers, Vercel, Netlify or another Next.js-compatible host after public hosting access is enabled.

## Highlights

- Premium royal architecture design system with navy, ivory, champagne gold and brass accents
- Fully responsive multi-page website for mobile, tablet, laptop and desktop
- Sticky navigation with dropdowns, mobile menu, consultation modal and active states
- Home, About, Services, Projects, Project Details, Gallery, FAQs, Contact, Privacy and Terms pages
- 2D Planning, 3D Elevations, Vastu Design, Residential Projects and Commercial Projects pages
- Filterable project showcase and masonry gallery with lightbox previews
- Before-and-after comparison slider for planning/elevation visuals
- Animated counters, testimonial slider, Vastu compass and blueprint-inspired layouts
- Contact form with client-side and server-side validation, file checks, spam trap and rate limiting
- Central data files for business details, services, projects, gallery, FAQs and testimonials
- SEO metadata, Open Graph image, Twitter preview, sitemap, robots and schema markup

## Pages Included

- `/`
- `/about`
- `/services`
- `/services/[slug]`
- `/projects`
- `/projects/[slug]`
- `/2d-planning`
- `/3d-elevations`
- `/vastu-design`
- `/residential-projects`
- `/commercial-projects`
- `/process`
- `/gallery`
- `/testimonials`
- `/faqs`
- `/contact`
- `/privacy-policy`
- `/terms-and-conditions`

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- GSAP
- Lenis smooth scroll
- Swiper
- Lucide React icons
- Vinext / Cloudflare-compatible Sites build

## Run Locally

```bash
npm install
npm run dev
```

Local development URL:

```bash
http://localhost:5173
```

Use a custom port if needed:

```bash
npm run dev -- --port 3107
```

## Production Build

```bash
npm run build
```

## Quality Checks

```bash
npm run lint
```

## Editable Content

Update business and website content from these files:

| File | Purpose |
| --- | --- |
| `data/businessConfig.ts` | Business name, contact placeholders, Instagram link, WhatsApp message and stats |
| `data/services.ts` | Service details, deliverables, FAQs and links |
| `data/projects.ts` | Project cards, project-detail content and galleries |
| `data/gallery.ts` | Gallery filters and gallery images |
| `data/faqs.ts` | FAQ accordion and FAQ schema content |
| `data/testimonials.ts` | Editable testimonial placeholders |
| `data/navigation.ts` | Header and footer links |
| `data/images.ts` | Centralized image URLs and alt text |

## Contact Details Notice

Official phone number, WhatsApp number, email address and office location are intentionally kept as editable placeholders. Add verified details in `data/businessConfig.ts` before using the site for public business enquiries.

## Environment Variables

Create a local `.env` file from `.env.example` when needed:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
ENQUIRY_EMAIL_WEBHOOK_URL=
ENQUIRY_EMAIL_WEBHOOK_TOKEN=
```

`ENQUIRY_EMAIL_WEBHOOK_URL` is optional. Without it, the enquiry API validates the form and returns a success message explaining that email delivery will activate after configuration.

## Deployment

The website is deployed with Sites as an owner-preview deployment:

[https://royal-planning-house.nikhilbaraskar551.chatgpt.site](https://royal-planning-house.nikhilbaraskar551.chatgpt.site)

## License

This project is created for Royal Planning House. Review usage rights for images, content and business materials before public commercial use.
