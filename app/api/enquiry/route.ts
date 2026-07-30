import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);
const maxFileSize = 5 * 1024 * 1024;

const sanitize = (value: FormDataEntryValue | null) =>
  String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);

function validateEmail(email: string) {
  return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^[0-9+\-\s()]{7,18}$/.test(phone);
}

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for") || "local";
  const ip = forwarded.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const current = rateLimit.get(ip);
  if (current && current.resetAt > now && current.count >= 5) {
    return NextResponse.json({ message: "Too many enquiries. Please try again later." }, { status: 429 });
  }
  rateLimit.set(ip, current && current.resetAt > now ? { count: current.count + 1, resetAt: current.resetAt } : { count: 1, resetAt: now + 60_000 });

  try {
    const formData = await request.formData();
    if (sanitize(formData.get("company"))) {
      return NextResponse.json({ message: "Enquiry received." });
    }

    const fullName = sanitize(formData.get("fullName"));
    const phone = sanitize(formData.get("phone"));
    const email = sanitize(formData.get("email"));
    const city = sanitize(formData.get("city"));
    const projectType = sanitize(formData.get("projectType"));
    const requiredService = sanitize(formData.get("requiredService"));
    const message = sanitize(formData.get("message"));
    const consent = sanitize(formData.get("consent")) === "true";
    const file = formData.get("referenceFile");

    if (fullName.length < 2 || !validatePhone(phone) || !validateEmail(email) || !projectType || !requiredService || message.length < 10 || !consent) {
      return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
    }

    if (file instanceof File && file.size > 0) {
      if (!allowedTypes.has(file.type) || file.size > maxFileSize) {
        return NextResponse.json({ message: "Upload must be JPG, PNG, WebP or PDF and 5MB or smaller." }, { status: 400 });
      }
    }

    const payload = {
      fullName,
      phone,
      email,
      city,
      plotLocation: sanitize(formData.get("plotLocation")),
      plotSize: sanitize(formData.get("plotSize")),
      projectType,
      requiredService,
      preferredStyle: sanitize(formData.get("preferredStyle")),
      vastuRequirement: sanitize(formData.get("vastuRequirement")),
      timeline: sanitize(formData.get("timeline")),
      message,
      source: sanitize(formData.get("source")),
      uploadedFile: file instanceof File && file.size > 0 ? { name: file.name, type: file.type, size: file.size } : null,
      submittedAt: new Date().toISOString(),
    };

    const webhookUrl = process.env.ENQUIRY_EMAIL_WEBHOOK_URL;
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(process.env.ENQUIRY_EMAIL_WEBHOOK_TOKEN
            ? { authorization: `Bearer ${process.env.ENQUIRY_EMAIL_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        return NextResponse.json({ message: "The enquiry was validated, but email delivery failed. Please try again." }, { status: 502 });
      }
    }

    return NextResponse.json({
      message: webhookUrl
        ? "Thank you. Your enquiry has been submitted successfully."
        : "Thank you. Your enquiry was validated successfully. Email delivery will activate after the official email service is configured.",
    });
  } catch {
    return NextResponse.json({ message: "Unable to process this enquiry right now." }, { status: 500 });
  }
}

