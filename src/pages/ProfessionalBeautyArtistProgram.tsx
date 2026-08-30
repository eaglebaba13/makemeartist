import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import CurriculumAccordion from "@/components/site/CurriculumAccordion";
import EnquiryForm from "@/components/site/EnquiryForm";
import {
  SIX_MONTH,
  SIX_MONTH_OUTCOMES,
  CAREER_CHALLENGE,
  FINAL_EXAM,
  CERTIFICATION_ROLES,
} from "@/data/curriculum";
import { wa } from "@/data/site";
import { useSeo } from "@/lib/seo";
import { heroMain } from "@/lib/images";

const ProfessionalBeautyArtistProgram = () => {
  useSeo({
    title: "6-Month Professional Beauty Artist Program | Make Me Artist",
    description:
      "Six-month professional makeup artist course covering bridal makeup, hairstyling, airbrush, skin preparation, nail art, portfolio building and beauty business launch.",
    path: "/courses/professional-beauty-artist",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Professional Beauty Artist Program",
      description: "6-month professional beauty artist program by Make Me Artist.",
      provider: { "@type": "EducationalOrganization", name: "Make Me Artist", url: "https://makemeartist.com/" },
    },
  });

  const enquire = wa("Hi! I want to enquire about the 6-Month Professional Beauty Artist Program.");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="6 Months"
        title="Professional Beauty Artist Program"
        subtitle="From Beginner → Professional Beauty Artist → Freelance/Salon-Ready Professional"
        image={heroMain}
      >
        <a
          href={enquire}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-rose text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-[0.14em] uppercase text-center shadow-glow hover:opacity-90 transition-opacity"
        >
          Enquire Now
        </a>
      </PageHero>

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Course Outcome"
            title="What You Can Do After 6 Months"
            subtitle="Every outcome is trained, practised and assessed inside the program."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {SIX_MONTH_OUTCOMES.map((o) => (
              <div key={o} className="flex gap-3 bg-card border border-border rounded-xl px-4 py-3">
                <span className="text-gold">✔</span>
                <span className="text-sm text-foreground">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Curriculum" title="Month-by-Month Curriculum" />
          <CurriculumAccordion months={SIX_MONTH} />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Final 30-Day Career Challenge"
            title="Your Launch Checklist"
            subtitle="Every student completes this before graduating."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto">
            {CAREER_CHALLENGE.map((c, i) => (
              <div key={c} className="bg-card border border-border rounded-2xl p-5 text-center">
                <div className="text-xs text-primary tracking-[0.2em] mb-2">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-sm font-medium text-foreground">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading align="left" eyebrow="Final Exam" title="Assessment Breakdown" />
            <div className="space-y-5">
              {FINAL_EXAM.map((e) => (
                <div key={e.label}>
                  <div className="flex justify-between text-sm text-foreground mb-2">
                    <span>{e.label}</span>
                    <span className="font-semibold text-primary">{e.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-border overflow-hidden">
                    <div className="h-full gradient-rose" style={{ width: `${e.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Certification"
              title="MakeMeArtist × Aveda Professional Beauty Artist Certificate"
              subtitle="Students successfully completing the course become eligible for:"
            />
            <div className="flex flex-wrap gap-2">
              {CERTIFICATION_ROLES.map((r) => (
                <span key={r} className="text-sm bg-card border border-border px-4 py-2 rounded-full text-foreground">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-2xl">
          <EnquiryForm heading="Enquire About This Program" context="6-Month Professional Beauty Artist Program" />
        </div>
      </section>
    </SiteLayout>
  );
};

export default ProfessionalBeautyArtistProgram;
