import { useMemo, useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import EnquiryForm from "@/components/site/EnquiryForm";
import CareerPath from "@/components/site/CareerPath";
import { EMPLOYMENT_TYPES, EXPERIENCE_LEVELS, JOBS, JOB_CATEGORIES } from "@/data/jobs";
import { wa } from "@/data/site";
import { useSeo } from "@/lib/seo";
import { jobsImage } from "@/lib/images";

const FindJobs = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");
  const [type, setType] = useState("");

  useSeo({
    title: "Beauty Jobs in India | Makeup Artist & Salon Careers",
    description:
      "Find beauty jobs with salons, studios and academies — makeup artist, bridal artist, hair stylist, nail artist, beauty trainer and salon manager roles. Employers can post a job.",
    path: "/find-jobs",
  });

  const locations = useMemo(() => Array.from(new Set(JOBS.map((j) => j.location))), []);

  const filtered = JOBS.filter(
    (j) =>
      (!location || j.location === location) &&
      (!category || j.title === category) &&
      (!experience || j.experience === experience) &&
      (!type || j.type === type),
  );

  const selectClass =
    "w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Find Jobs"
        title="Find Your Next Beauty Career"
        subtitle="Connect with salons, studios, academies and beauty businesses looking for skilled professionals."
        image={jobsImage}
      >
        <a
          href="#jobs"
          className="gradient-rose text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-[0.14em] uppercase text-center shadow-glow hover:opacity-90 transition-opacity"
        >
          Find a Job
        </a>
        <a
          href="#post-a-job"
          className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-[0.14em] uppercase text-center hover:bg-primary-foreground/20 transition-colors"
        >
          Post a Job
        </a>
      </PageHero>

      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeading eyebrow="Job Categories" title="Roles Across the Beauty Industry" />
          <div className="flex flex-wrap gap-2 justify-center">
            {JOB_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(category === c ? "" : c)}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  category === c
                    ? "gradient-rose text-primary-foreground border-transparent"
                    : "bg-card border-border text-foreground hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="py-16 bg-secondary">
        <div className="container">
          <SectionHeading eyebrow="Browse Jobs" title="Open Positions" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass} aria-label="Filter by location">
              <option value="">All locations</option>
              {locations.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass} aria-label="Filter by job category">
              <option value="">All categories</option>
              {JOB_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select value={experience} onChange={(e) => setExperience(e.target.value)} className={selectClass} aria-label="Filter by experience">
              <option value="">Any experience</option>
              {EXPERIENCE_LEVELS.map((x) => (
                <option key={x} value={x}>{x}</option>
              ))}
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass} aria-label="Filter by employment type">
              <option value="">All types</option>
              {EMPLOYMENT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((j) => (
              <article key={j.id} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-heading text-lg font-bold text-foreground">{j.title}</h3>
                  <span className="text-[11px] text-muted-foreground whitespace-nowrap">{j.posted}</span>
                </div>
                <p className="text-sm text-foreground/80">{j.company}</p>
                <p className="text-sm text-muted-foreground mt-1">📍 {j.location}</p>
                <p className="text-sm text-muted-foreground mt-3">{j.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-secondary px-3 py-1.5 rounded-full text-secondary-foreground">{j.experience}</span>
                  <span className="text-xs bg-secondary px-3 py-1.5 rounded-full text-secondary-foreground">{j.type}</span>
                </div>
                <a
                  href={wa(`Hi! I want to apply for the ${j.title} role at ${j.company} (${j.location}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 gradient-rose text-primary-foreground px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
                >
                  Apply Now
                </a>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="text-muted-foreground text-sm">No roles match these filters right now — register below and we'll notify you.</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-2 gap-10 items-start">
          <div id="candidate">
            <EnquiryForm
              heading="Candidate Registration"
              intro="Register as a beauty professional and we'll match you with openings."
              submitLabel="Find a Job"
              context="Candidate Registration"
              variant="candidate"
            />
          </div>
          <div id="post-a-job">
            <EnquiryForm
              heading="Employer — Post a Job"
              intro="Hiring beauty professionals? Share the role and we'll circulate it in our network."
              submitLabel="Post a Job"
              context="Employer Job Posting"
              variant="employer"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading eyebrow="Career Path" title="Grow Step by Step" />
          <CareerPath />
        </div>
      </section>
    </SiteLayout>
  );
};

export default FindJobs;
