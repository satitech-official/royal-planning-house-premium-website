"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Loader2, Upload } from "lucide-react";

type ContactFormProps = {
  compact?: boolean;
  source?: string;
};

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  plotLocation: string;
  plotSize: string;
  projectType: string;
  requiredService: string;
  preferredStyle: string;
  vastuRequirement: string;
  timeline: string;
  message: string;
  consent: boolean;
  company: string;
};

const initialValues: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  plotLocation: "",
  plotSize: "",
  projectType: "",
  requiredService: "",
  preferredStyle: "",
  vastuRequirement: "",
  timeline: "",
  message: "",
  consent: false,
  company: "",
};

const projectTypes = [
  "Residential Home",
  "Villa",
  "Commercial Project",
  "Renovation",
  "2D Planning",
  "3D Elevation",
  "Vastu Consultation",
  "Other",
];

const serviceOptions = [
  "2D Floor Planning",
  "3D Elevation Design",
  "Vastu-Based Planning",
  "Dream Home Planning",
  "Luxury Villa Design",
  "Commercial Planning",
];

function validate(values: FormValues, file: File | null, compact: boolean) {
  const errors: Partial<Record<keyof FormValues | "file", string>> = {};
  if (values.fullName.trim().length < 2) errors.fullName = "Enter your full name.";
  if (!/^[0-9+\-\s()]{7,18}$/.test(values.phone.trim())) errors.phone = "Enter a valid phone number.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!compact && values.city.trim().length < 2) errors.city = "Enter your city.";
  if (!values.projectType) errors.projectType = "Select a project type.";
  if (!values.requiredService) errors.requiredService = "Select the service you need.";
  if (values.message.trim().length < 10) errors.message = "Share a few project details.";
  if (!values.consent) errors.consent = "Consent is required before submitting.";
  if (file) {
    const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
    if (!allowed.includes(file.type)) errors.file = "Upload a JPG, PNG, WebP or PDF file.";
    if (file.size > 5 * 1024 * 1024) errors.file = "File size must be 5MB or smaller.";
  }
  return errors;
}

export function ContactForm({ compact = false, source = "contact-page" }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [file, setFile] = useState<File | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const errors = useMemo(() => validate(values, file, compact), [values, file, compact]);
  const showError = (name: keyof FormValues | "file") => touched[name] && errors[name];

  const updateValue = (name: keyof FormValues, value: string | boolean) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
    setTouched((current) => ({ ...current, file: true }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextTouched = Object.keys(values).reduce<Record<string, boolean>>((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    nextTouched.file = true;
    setTouched(nextTouched);

    if (Object.keys(errors).length > 0) return;

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, String(value)));
    formData.append("source", source);
    if (file) formData.append("referenceFile", file);

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to submit enquiry.");
      setStatus("success");
      setServerMessage(result.message || "Your enquiry has been received.");
      setValues(initialValues);
      setFile(null);
      setTouched({});
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setServerMessage(error instanceof Error ? error.message : "Unable to submit enquiry right now.");
    }
  };

  return (
    <form className={`contact-form ${compact ? "compact" : ""}`} onSubmit={handleSubmit} noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => updateValue("company", event.target.value)}
        />
      </div>

      <div className="form-grid">
        <label>
          Full Name
          <input
            name="fullName"
            value={values.fullName}
            onBlur={() => setTouched((current) => ({ ...current, fullName: true }))}
            onChange={(event) => updateValue("fullName", event.target.value)}
            autoComplete="name"
            required
          />
          {showError("fullName") ? <span className="form-error">{errors.fullName}</span> : null}
        </label>

        <label>
          Phone Number
          <input
            name="phone"
            value={values.phone}
            onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
            onChange={(event) => updateValue("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            required
          />
          {showError("phone") ? <span className="form-error">{errors.phone}</span> : null}
        </label>

        {!compact ? (
          <>
            <label>
              Email Address
              <input
                name="email"
                type="email"
                value={values.email}
                onBlur={() => setTouched((current) => ({ ...current, email: true }))}
                onChange={(event) => updateValue("email", event.target.value)}
                autoComplete="email"
              />
              {showError("email") ? <span className="form-error">{errors.email}</span> : null}
            </label>

            <label>
              City
              <input
                name="city"
                value={values.city}
                onBlur={() => setTouched((current) => ({ ...current, city: true }))}
                onChange={(event) => updateValue("city", event.target.value)}
                autoComplete="address-level2"
                required
              />
              {showError("city") ? <span className="form-error">{errors.city}</span> : null}
            </label>

            <label>
              Plot Location
              <input
                name="plotLocation"
                value={values.plotLocation}
                onChange={(event) => updateValue("plotLocation", event.target.value)}
              />
            </label>

            <label>
              Plot Size
              <input
                name="plotSize"
                value={values.plotSize}
                onChange={(event) => updateValue("plotSize", event.target.value)}
                placeholder="Example: 30 x 50 ft"
              />
            </label>
          </>
        ) : null}

        <label>
          Project Type
          <select
            name="projectType"
            value={values.projectType}
            onBlur={() => setTouched((current) => ({ ...current, projectType: true }))}
            onChange={(event) => updateValue("projectType", event.target.value)}
            required
          >
            <option value="">Select project type</option>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          {showError("projectType") ? <span className="form-error">{errors.projectType}</span> : null}
        </label>

        <label>
          Required Service
          <select
            name="requiredService"
            value={values.requiredService}
            onBlur={() => setTouched((current) => ({ ...current, requiredService: true }))}
            onChange={(event) => updateValue("requiredService", event.target.value)}
            required
          >
            <option value="">Select service</option>
            {serviceOptions.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          {showError("requiredService") ? <span className="form-error">{errors.requiredService}</span> : null}
        </label>

        {!compact ? (
          <>
            <label>
              Preferred Design Style
              <select
                name="preferredStyle"
                value={values.preferredStyle}
                onChange={(event) => updateValue("preferredStyle", event.target.value)}
              >
                <option value="">Select style</option>
                <option>Royal Indian</option>
                <option>Modern Contemporary</option>
                <option>Minimal</option>
                <option>Luxury Villa</option>
                <option>Commercial Professional</option>
                <option>Not Sure</option>
              </select>
            </label>

            <label>
              Vastu Requirement
              <select
                name="vastuRequirement"
                value={values.vastuRequirement}
                onChange={(event) => updateValue("vastuRequirement", event.target.value)}
              >
                <option value="">Select preference</option>
                <option>Vastu required</option>
                <option>Vastu review only</option>
                <option>No Vastu preference</option>
                <option>Need guidance</option>
              </select>
            </label>

            <label>
              Estimated Project Timeline
              <select
                name="timeline"
                value={values.timeline}
                onChange={(event) => updateValue("timeline", event.target.value)}
              >
                <option value="">Select timeline</option>
                <option>Immediately</option>
                <option>Within 1 month</option>
                <option>1 to 3 months</option>
                <option>More than 3 months</option>
              </select>
            </label>

            <label className="file-field">
              Drawing or Reference Image Upload
              <span>
                <Upload size={18} aria-hidden="true" />
                {file ? file.name : "Upload JPG, PNG, WebP or PDF up to 5MB"}
              </span>
              <input type="file" name="referenceFile" accept=".jpg,.jpeg,.png,.webp,.pdf" onChange={handleFile} />
              {showError("file") ? <span className="form-error">{errors.file}</span> : null}
            </label>
          </>
        ) : null}
      </div>

      <label className="full-field">
        Message
        <textarea
          name="message"
          rows={compact ? 4 : 5}
          value={values.message}
          onBlur={() => setTouched((current) => ({ ...current, message: true }))}
          onChange={(event) => updateValue("message", event.target.value)}
          required
        />
        {showError("message") ? <span className="form-error">{errors.message}</span> : null}
      </label>

      <label className="consent-field">
        <input
          type="checkbox"
          checked={values.consent}
          onBlur={() => setTouched((current) => ({ ...current, consent: true }))}
          onChange={(event) => updateValue("consent", event.target.checked)}
          required
        />
        <span>
          I consent to Royal Planning House using these details to respond to my enquiry.
        </span>
      </label>
      {showError("consent") ? <span className="form-error block">{errors.consent}</span> : null}

      <button className="gold-button form-submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? <Loader2 className="spin" size={18} aria-hidden="true" /> : null}
        Submit Enquiry
      </button>

      {status === "success" ? (
        <p className="form-status success">
          <CheckCircle2 size={18} aria-hidden="true" />
          {serverMessage}
        </p>
      ) : null}
      {status === "error" ? <p className="form-status error">{serverMessage}</p> : null}
    </form>
  );
}

