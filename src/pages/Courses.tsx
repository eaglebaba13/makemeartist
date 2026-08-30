import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import CourseCard from "@/components/site/CourseCard";
import SpecializationGrid from "@/components/site/SpecializationGrid";
import EnquiryForm from "@/components/site/EnquiryForm";
import CareerPath from "@/components/site/CareerPath";
import { PROGRAMS } from "@/data/courses";
import { useSeo } from "@/lib/seo";
import { coursesBanner } from "@/lib/images";

const Courses = () => {
  useSeo({
    title: "Beauty Courses in India | Makeup, Hair, Nail & Airbrush Programs",
    description:
      "Explore MakeMeArtist professional beauty courses: 6-month Professional Beauty Artist, 12-month Beauty Entrepreneur and specialization programs in bridal, airbrush, nail and hair.",
    path: "/courses",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="MakeMeArtist Courses"
        title="Professional Beauty Education Designed for Careers, Freelancing & Entrepreneurship"
        subtitle="Choose a complete career program or a focused specialization — every course ends with a portfolio, a service menu and a plan to earn."
        image={coursesBanner}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading eyebrow="Career Programs" title="Major Programs" />
          <div className="grid gap-6 lg:grid-cols-2">
            {PROGRAMS.map((p) => (
              <CourseCard key={p.slug} program={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading
            eyebrow="Specialization Courses"
            title="Focused Programs for Specialist Artists"
            subtitle="Each specialization is designed around a service you can price, market and sell."
          />
          <SpecializationGrid />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading eyebrow="Where It Leads" title="Career Path" />
          <CareerPath />
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container max-w-2xl">
          <EnquiryForm heading="Enquire About a Course" intro="Share your details and we'll help you choose the right program." />
        </div>
      </section>
    </SiteLayout>
  );
};

export default Courses;
