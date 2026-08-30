import { SPECIALIZATIONS } from "@/data/courses";
import { wa } from "@/data/site";

const SpecializationGrid = () => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {SPECIALIZATIONS.map((s) => (
      <article
        key={s.name}
        className="bg-card rounded-2xl border border-border p-6 flex flex-col hover:border-primary/30 transition-colors"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-primary mb-2">{s.duration}</span>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{s.outcome}</p>
        <ul className="space-y-1 mb-6">
          {s.skills.map((k) => (
            <li key={k} className="text-xs text-muted-foreground flex gap-2">
              <span className="text-gold">•</span> {k}
            </li>
          ))}
        </ul>
        <a
          href={wa(`Hi! I want to enquire about the ${s.name} course (${s.duration}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center border border-border text-foreground px-4 py-2.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase hover:border-primary/40 transition-colors"
        >
          Enquire Now
        </a>
      </article>
    ))}
  </div>
);

export default SpecializationGrid;
