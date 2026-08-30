import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import EnquiryForm from "@/components/site/EnquiryForm";
import { ACADEMIES } from "@/data/site";
import { useSeo } from "@/lib/seo";
import { partnerImage } from "@/lib/images";

const partnerTypes = [
  "Beauty Academies",
  "Salons",
  "Professional Trainers",
  "Makeup Artists",
  "Hair Artists",
  "Nail Artists",
  "Beauty Entrepreneurs",
];

const benefits = [
  { title: "Professional Training Ecosystem", desc: "Plug into a structured, career-focused beauty curriculum." },
  { title: "Course Opportunities", desc: "Run MakeMeArtist programs and workshops with your own batches." },
  { title: "Brand Association", desc: "Associate with a recognised beauty education brand." },
  { title: "Student Opportunities", desc: "Access learners looking for practical, career-ready training." },
  { title: "Career Ecosystem", desc: "Connect students with freelance, salon and studio opportunities." },
  { title: "Industry Exposure", desc: "Collaborate with trainers and professionals across India." },
  { title: "Business Opportunities", desc: "Add new revenue lines through education and services." },
];

const PartnerAcademy = () => {
  useSeo({
    title: "Partner Academy | Collaborate with Make Me Artist",
    description:
      "Partner with Make Me Artist. Beauty academies, salons, studios and trainers can join a professional beauty education and career ecosystem across India.",
    path: "/partner-academy",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Partner Academy"
        title="Build With MakeMeArtist"
        subtitle="A partnership ecosystem for beauty academies, salons, studios, trainers and beauty professionals."
        image={partnerImage}
      />

      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Partner With Us"
              title="A Shared Beauty Education Ecosystem"
              subtitle="MakeMeArtist works with academies, salons and professionals to deliver career-focused beauty education and connect trained artists with real opportunities."
            />
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Who Can Become a Partner</h3>
            <div className="flex flex-wrap gap-2">
              {partnerTypes.map((p) => (
                <span key={p} className="text-sm bg-card border border-border px-4 py-2 rounded-full text-foreground">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <EnquiryForm
            heading="Become a Partner Academy"
            intro="Tell us about your academy, salon or studio and our partnership team will connect with you."
            submitLabel="Become a Partner Academy"
            context="Partner Academy Enquiry"
            variant="partner"
          />
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading eyebrow="Partnership Benefits" title="What Partners Gain" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading eyebrow="Our Network" title="Existing Partner Academies" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {ACADEMIES.map((a) => (
              <div key={a.name} className="bg-card border border-border rounded-xl p-5">
                <p className="text-sm font-medium text-foreground">{a.name}</p>
                <p className="text-xs text-muted-foreground mt-1">📍 {a.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default PartnerAcademy;
