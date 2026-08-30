import { Link } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import JourneyStrip from "@/components/site/JourneyStrip";
import CareerPath from "@/components/site/CareerPath";
import CourseCard from "@/components/site/CourseCard";
import SpecializationGrid from "@/components/site/SpecializationGrid";
import EnquiryForm from "@/components/site/EnquiryForm";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MallOfSalonPopup from "@/components/MallOfSalonPopup";
import { PROGRAMS } from "@/data/courses";
import { BUILD_PILLARS, wa } from "@/data/site";
import { useSeo } from "@/lib/seo";
import { heroMain } from "@/lib/images";

const Index = () => {
  useSeo({
    title: "Make Me Artist | Professional Beauty Academy & Career Platform",
    description:
      "Learn beauty, build your brand and start earning. Professional makeup, hair, nail art and beauty entrepreneur courses with portfolio, branding and career support.",
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Make Me Artist",
      url: "https://makemeartist.com/",
      description:
        "Professional beauty education platform offering makeup, hair, nail art, airbrush and beauty entrepreneurship programs in India.",
    },
  });

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroMain} alt="Professional beauty artist applying makeup in a studio" className="w-full h-full object-cover" width={1600} height={1000} />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="container relative z-10 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-xs tracking-[0.3em] uppercase mb-5">
              Learn → Practice → Create → Market → Earn
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-[1.08]">
              Learn Beauty. Build Your Brand. <span className="text-gradient-gold">Start Earning.</span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-primary-foreground/85 max-w-2xl">
              Professional beauty education for the next generation of beauty artists & entrepreneurs.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                to="/courses"
                className="gradient-rose text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-[0.14em] uppercase text-center shadow-glow hover:opacity-90 transition-opacity"
              >
                Explore Courses
              </Link>
              <Link
                to="/find-jobs"
                className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-[0.14em] uppercase text-center hover:bg-primary-foreground/20 transition-colors"
              >
                Find Your Career Path
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-primary-foreground/80 text-sm">
              {["Makeup", "Hair", "Nail Art", "Airbrush", "Beauty Business"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="text-gold">✔</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Why MakeMeArtist"
            title="More Than Beauty Training"
            subtitle="We don't just teach beauty skills. We help students develop the skills, portfolio, personal brand and business systems required to build a professional beauty career."
          />
          <JourneyStrip />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 mt-14">
            {BUILD_PILLARS.map((p) => (
              <div key={p.title} className="border-t-2 border-primary/30 pt-5">
                <h3 className="font-heading text-base font-bold text-foreground uppercase tracking-wide mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container">
          <SectionHeading
            eyebrow="MakeMeArtist Courses"
            title="Professional Beauty Education Designed for Careers"
            subtitle="Structured programs built for freelancing, salon careers and beauty entrepreneurship."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {PROGRAMS.map((p) => (
              <CourseCard key={p.slug} program={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="text-primary text-sm font-semibold tracking-[0.12em] uppercase hover:underline">
              View all courses →
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Specialization"
            title="Go Deep in Your Chosen Craft"
            subtitle="Short, focused programs that turn a skill into a service you can sell."
          />
          <SpecializationGrid />
        </div>
      </section>

      {/* CAREER PATH */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container">
          <SectionHeading
            eyebrow="Career Ecosystem"
            title="Your Career Path with MakeMeArtist"
            subtitle="From your first brush stroke to running your own beauty business."
          />
          <CareerPath />
        </div>
      </section>

      <TrainersSection />
      <TestimonialsSection />

      {/* ENQUIRY */}
      <section id="enquire" className="py-20 md:py-24 bg-secondary">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Enquire Now"
              title="Start Your Beauty Career Today"
              subtitle="Tell us what you want to learn and our team will guide you to the right program, batch and learning mode."
            />
            <a
              href={wa("Hi! I'd like to speak to a MakeMeArtist counsellor.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-full text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
            >
              💬 Chat with a counsellor
            </a>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <MallOfSalonPopup />
    </SiteLayout>
  );
};

export default Index;
