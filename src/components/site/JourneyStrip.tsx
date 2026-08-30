import { JOURNEY } from "@/data/site";

const JourneyStrip = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
    {JOURNEY.map((j, i) => (
      <div
        key={j.step}
        className="relative bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors"
      >
        <span className="text-xs font-semibold text-primary tracking-[0.2em]">0{i + 1}</span>
        <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-1 uppercase tracking-wide">{j.step}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
      </div>
    ))}
  </div>
);

export default JourneyStrip;
