import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Compass,
  Home,
  Landmark,
  Ruler,
} from "lucide-react";
import type { Service } from "@/data/services";

const iconMap = {
  drafting: Ruler,
  building: Building2,
  compass: Compass,
  home: Home,
  landmark: Landmark,
  briefcase: BriefcaseBusiness,
};

export function ServiceMosaic({ services }: { services: Service[] }) {
  return (
    <div className="service-mosaic">
      {services.map((service, index) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap] || Ruler;
        return (
          <article className={`service-tile tile-${index % 3}`} key={service.slug}>
            <div className="service-image">
              <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
            </div>
            <div className="service-content">
              <span className="service-icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <p className="eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <Link href={service.href} className="text-link">
                Learn More <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

