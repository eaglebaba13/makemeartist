import { useState } from "react";
import { PRIMARY_PHONE, wa } from "@/data/site";
import { PROGRAMS, SPECIALIZATIONS } from "@/data/courses";

interface Props {
  heading?: string;
  intro?: string;
  submitLabel?: string;
  context?: string;
  variant?: "enquiry" | "partner" | "candidate" | "employer";
}

const learningModes = ["Online", "Offline / Classroom", "Hybrid", "Not sure yet"];

const courseOptions = [
  ...PROGRAMS.map((p) => `${p.name} (${p.duration})`),
  ...SPECIALIZATIONS.map((s) => `${s.name} (${s.duration})`),
];

const EnquiryForm = ({
  heading = "Submit Enquiry",
  intro,
  submitLabel = "Submit Enquiry",
  context = "Course Enquiry",
  variant = "enquiry",
}: Props) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    course: "",
    mode: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `MakeMeArtist — ${context}`,
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      form.email && `Email: ${form.email}`,
      `City: ${form.city}`,
      form.course && `Interest: ${form.course}`,
      form.mode && `Preferred Mode: ${form.mode}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    window.open(wa(lines.join("\n"), PRIMARY_PHONE), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  if (sent) {
    return (
      <div className="bg-card rounded-2xl p-10 border border-border text-center">
        <h3 className="font-heading text-xl font-bold text-foreground mb-2">Thank you</h3>
        <p className="text-muted-foreground text-sm">
          Your enquiry has been prepared on WhatsApp. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  const interestLabel =
    variant === "employer" ? "Role you want to hire for" : variant === "candidate" ? "Job category of interest" : "Course interested in";

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-4">
      <div>
        <h3 className="font-heading text-xl font-bold text-foreground">{heading}</h3>
        {intro && <p className="text-muted-foreground text-sm mt-1">{intro}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input required placeholder="Name" value={form.name} onChange={set("name")} className={inputClass} aria-label="Name" />
        <input required type="tel" placeholder="Mobile Number" value={form.mobile} onChange={set("mobile")} className={inputClass} aria-label="Mobile number" />
        <input type="email" placeholder="Email" value={form.email} onChange={set("email")} className={inputClass} aria-label="Email" />
        <input required placeholder="City" value={form.city} onChange={set("city")} className={inputClass} aria-label="City" />
      </div>

      {variant === "enquiry" || variant === "candidate" ? (
        <select required value={form.course} onChange={set("course")} className={inputClass} aria-label={interestLabel}>
          <option value="">{interestLabel}</option>
          {(variant === "candidate"
            ? ["Makeup Artist", "Bridal Makeup Artist", "Hair Stylist", "Nail Artist", "Beauty Therapist", "Beauty Consultant", "Salon Artist", "Beauty Trainer", "Beauty Content Creator", "Salon Manager"]
            : courseOptions
          ).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      ) : (
        <input placeholder={interestLabel} value={form.course} onChange={set("course")} className={inputClass} aria-label={interestLabel} />
      )}

      {variant === "enquiry" && (
        <select required value={form.mode} onChange={set("mode")} className={inputClass} aria-label="Preferred learning mode">
          <option value="">Preferred learning mode</option>
          {learningModes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      )}

      <textarea placeholder="Message" rows={4} value={form.message} onChange={set("message")} className={inputClass} aria-label="Message" />

      <button
        type="submit"
        className="w-full gradient-rose text-primary-foreground py-3.5 rounded-full font-semibold text-sm tracking-[0.12em] uppercase shadow-glow hover:opacity-90 transition-opacity"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default EnquiryForm;
