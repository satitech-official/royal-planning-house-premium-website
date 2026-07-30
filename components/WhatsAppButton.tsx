import { MessageCircle } from "lucide-react";
import { getWhatsappHref } from "@/data/businessConfig";

export function WhatsAppButton() {
  const href = getWhatsappHref();
  const external = href.startsWith("https://");

  return (
    <a
      className="floating-whatsapp"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label="Chat with Royal Planning House on WhatsApp"
    >
      <MessageCircle size={23} aria-hidden="true" />
    </a>
  );
}

