import { Link } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import CurriculumAccordion from "@/components/site/CurriculumAccordion";
import EnquiryForm from "@/components/site/EnquiryForm";
import CareerPath from "@/components/site/CareerPath";
import { TWELVE_MONTH } from "@/data/curriculum";
import { wa } from "@/data/site";
import { useSeo } from "@/lib/seo";
import { partnerImage } from "@/lib/images";

const AdvancedBeautyEntrepreneurProgram = () => {
  useSeo({
    title: "12-Month Advanced Beauty Entrepreneur Program | Make Me Artist",
    description:
      "Twelve-month advanced beauty course covering advanced bridal, hair, nail specialisation, beauty content creation, salon business management and a full business launch project.",
    path: "/courses/advanced-beauty-entrepreneur",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Advanced Beauty Entrepreneur Program",
      description: "12-month advanced beauty entrepreneur program by Make Me Artist.",
      provider: { "@type": "EducationalOrganization", name: "Make Me Artist", url: "https://makemeartist.com/" },
    },
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="12 Months"
        title="Advanced Beauty Entrepreneur Program"
        subtitle="Professional Beauty Artist → Specialist → Beauty Entrepreneur"
        image={partnerImage}
      >
        <a
          href={wa("Hi! I want to enquire about the 12-Month Advanced Beauty Entrepreneur Program.")}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-rose text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-[0.14em] uppercase text-center shadow-glow hover:opacity-90 transition-opacity"
        >
          Enquire Now
        </a>
      </PageHero>

      <section className="py-16 bg-background">
        <div className="container max-w-3xl text-center">
          <p className="text-muted-foreground">
            The 12-month program takes the{" "}
            <Link to="/courses/professional-beauty-artist" className="text-primary underline underline-offset-4">
              6-month foundation
            </Link>{" "}
            and adds specialization plus entrepreneurship — months 7 to 12 build the specialist skills and the business
            behind them.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Curriculum" title="Months 7 – 12" />
          <CurriculumAccordion months={TWELVE_MONTH} />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading eyebrow="Career Ecosystem" title="Where This Program Takes You" />
          <CareerPath />
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container max-w-2xl">
          <EnquiryForm heading="Enquire About This Program" context="12-Month Advanced Beauty Entrepreneur Program" />
        </div>
      </section>
    </SiteLayout>
  );
};

export default AdvancedBeautyEntrepreneurProgram;
