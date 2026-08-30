import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import EnquiryForm from "@/components/site/EnquiryForm";
import { PHONES, wa } from "@/data/site";
import { useSeo } from "@/lib/seo";
import { jobsImage } from "@/lib/images";

const Contact = () => {
  useSeo({
    title: "Contact Make Me Artist | Beauty Course Enquiry",
    description:
      "Contact Make Me Artist for beauty course admissions, partner academy enquiries and career support. Call or WhatsApp our counsellors, or submit an enquiry online.",
    path: "/contact",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Talk to a Beauty Career Counsellor"
        subtitle="Course guidance, batch details, partnerships and career support — we're one message away."
        image={jobsImage}
      />

      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading align="left" eyebrow="Reach Us" title="Contact Details" />
            <div className="space-y-3 mb-8">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={wa("Hi! I'd like to know more about MakeMeArtist courses.", p)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                >
                  <span className="text-lg">💬</span>
                  <span className="text-foreground font-medium">+{p.slice(0, 2)} {p.slice(2)}</span>
                  <span className="ml-auto text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</span>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/makemeartistIndia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border px-5 py-3 rounded-full text-sm text-foreground hover:border-primary/40 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/makemeartistofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border px-5 py-3 rounded-full text-sm text-foreground hover:border-primary/40 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          <EnquiryForm heading="Submit Enquiry" intro="We usually respond the same day." />
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
