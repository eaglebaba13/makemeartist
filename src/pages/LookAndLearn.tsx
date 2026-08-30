import { useMemo, useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { LOOK_CATEGORIES, LOOKS, type LookCategory } from "@/data/lookLearn";
import { IMAGES, coursesBanner } from "@/lib/images";
import { wa } from "@/data/site";
import { useSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

const LookAndLearn = () => {
  const [active, setActive] = useState<LookCategory>("All");

  useSeo({
    title: "Look & Learn | Beauty Looks, Tutorials & Career Tips",
    description:
      "Explore the MakeMeArtist Look & Learn hub: makeup, bridal, hair, nail art, airbrush, skin preparation, beauty business, social media and career guidance for beauty artists.",
    path: "/look-and-learn",
  });

  const items = useMemo(
    () => (active === "All" ? LOOKS : LOOKS.filter((l) => l.category === active)),
    [active],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Look & Learn"
        title="Beauty Portfolio, Learning Hub & Inspiration Gallery"
        subtitle="Browse looks and lessons by category — from bridal artistry to the business behind it."
        image={coursesBanner}
      />

      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Look & Learn categories">
            {LOOK_CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold tracking-[0.1em] uppercase border transition-colors",
                  active === c
                    ? "gradient-rose text-primary-foreground border-transparent"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.title}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-glow transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES[item.image] ?? IMAGES.hero}
                    alt={`${item.title} — ${item.category}`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-primary">{item.category}</span>
                  <h2 className="font-heading text-lg font-bold text-foreground mt-2 mb-2">{item.title}</h2>
                  <p className="text-sm text-muted-foreground mb-5">{item.description}</p>
                  <a
                    href={wa(`Hi! I'd like to learn more about "${item.title}" (${item.category}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-[0.12em] uppercase text-primary hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LookAndLearn;
