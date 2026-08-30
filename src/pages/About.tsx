import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import JourneyStrip from "@/components/site/JourneyStrip";
import TrainersSection from "@/components/TrainersSection";
import { ACADEMIES } from "@/data/site";
import { useSeo } from "@/lib/seo";
import { heroMain } from "@/lib/images";

const About = () => {
  useSeo({
    title: "About Make Me Artist | India's Look & Learn Beauty Platform",
    description:
      "Make Me Artist is a beauty education platform helping students learn professional beauty skills, build a portfolio and personal brand, and start earning as beauty professionals.",
    path: "/about",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="Learn Beauty. Build Your Brand. Start Earning."
        subtitle="India's Look & Learn beauty platform — professional education built around real beauty careers."
        image={heroMain}
      />

      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading align="left" eyebrow="Brand Introduction" title="Who We Are" />
            <p className="text-muted-foreground mb-4">
              Make Me Artist is a beauty learning platform that connects students, trainers, academies and salons across
              India. Learning happens both online and offline through partner academies and industry professionals.
            </p>
            <p className="text-muted-foreground">
              Our trainers are working beauty professionals — makeup artists, hair experts, nail artists, PMU artists and
              salon business specialists — who teach the way the industry actually works.
            </p>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Mission" title="More Than a Certificate" />
            <p className="text-muted-foreground mb-4">
              Our mission is to make beauty education practical and commercial. A student should finish a course with
              skills, a portfolio, a personal brand, a service menu and a way to find clients — not just a certificate.
            </p>
            <p className="text-muted-foreground">
              We teach beauty as a profession: skill first, then practice, portfolio, brand and business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Learn → Practice → Create → Market → Earn"
            subtitle="Every program follows the same five-step learning philosophy."
          />
          <JourneyStrip />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Industry Ecosystem"
            title="An Ecosystem, Not Just an Institute"
            subtitle="Education, partner academies and career opportunities in one place."
          />
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { t: "Education", d: "Career programs, specialization courses and the Look & Learn hub." },
              { t: "Ecosystem", d: "Partner academies, trainers and industry collaboration across India." },
              { t: "Career", d: "Jobs, freelancing pathways and beauty entrepreneurship support." },
            ].map((c) => (
              <div key={c.t} className="bg-card border border-border rounded-2xl p-7">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-4xl mx-auto">
            <h3 className="font-heading text-lg font-bold text-foreground text-center mb-5">Our Partner Academies</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ACADEMIES.map((a) => (
                <div key={a.name} className="bg-card border border-border rounded-xl p-4">
                  <p className="text-sm text-foreground">{a.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">📍 {a.city}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrainersSection />
    </SiteLayout>
  );
};

export default About;
