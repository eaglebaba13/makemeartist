import { Link } from "react-router-dom";
import type { Program } from "@/data/courses";
import { wa } from "@/data/site";

const CourseCard = ({ program }: { program: Program }) => (
  <article className="bg-card rounded-2xl border border-border p-7 flex flex-col hover:border-primary/30 hover:shadow-glow transition-all duration-300">
    <span className="text-xs tracking-[0.2em] uppercase text-primary mb-3">{program.duration}</span>
    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">{program.name}</h3>
    <p className="text-sm text-muted-foreground mb-4">{program.positioning}</p>
    <p className="text-sm text-foreground/80 mb-5">{program.description}</p>

    <div className="mb-5">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Skills</h4>
      <ul className="space-y-1">
        {program.skills.map((s) => (
          <li key={s} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-gold">✔</span> {s}
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-6">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Career Outcomes</h4>
      <div className="flex flex-wrap gap-2">
        {program.outcomes.map((o) => (
          <span key={o} className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
            {o}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-auto flex flex-wrap gap-3">
      {program.to && (
        <Link
          to={program.to}
          className="gradient-rose text-primary-foreground px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
        >
          View Course
        </Link>
      )}
      <a
        href={wa(`Hi! I want to enquire about the ${program.name} (${program.duration}).`)}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-border text-foreground px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase hover:border-primary/40 transition-colors"
      >
        Enquire Now
      </a>
    </div>
  </article>
);

export default CourseCard;
