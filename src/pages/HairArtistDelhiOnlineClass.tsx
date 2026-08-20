import { useEffect, useState } from "react";
import logo from "@/assets/makemeartist-logo.png";
import heroImg from "@/assets/hair-artist-class.jpg";
import { hairArtistDelhiClass as data } from "@/data/hairArtistDelhiClass";
import {
  captureUtmParams,
  trackInitiateCheckout,
  trackViewContent,
  trackWhatsAppClick,
  withUtm,
} from "@/lib/tracking";

const PAGE_URL = `https://makemeartist.com/${data.slug}`;
const PAGE_TITLE = "Hair Artist Delhi Online Class | ₹149 | Make Me Artist";
const PAGE_DESC =
  "Join the live 2-hour Hair Artist Delhi online class with expert Nadeem for ₹149. Learn tong technique, curls to waves, hair spray, product knowledge. E-Certificate included.";

/** Sets page-level head tags for this route and restores them on unmount. */
function useHeadMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    const created: HTMLElement[] = [];
    const setTag = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector<HTMLElement>(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
        created.push(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
      return el;
    };

    const prev: { el: HTMLElement; attr: string; value: string | null }[] = [];
    const remember = (el: HTMLElement, attr: string) => {
      if (!created.includes(el)) prev.push({ el, attr, value: el.getAttribute(attr) });
    };

    const desc = setTag('meta[name="description"]', {});
    remember(desc, "content");
    desc.setAttribute("name", "description");
    desc.setAttribute("content", PAGE_DESC);

    const pairs: [string, Record<string, string>][] = [
      ['link[rel="canonical"]', { rel: "canonical", href: PAGE_URL }],
      ['meta[property="og:title"]', { property: "og:title", content: PAGE_TITLE }],
      ['meta[property="og:description"]', { property: "og:description", content: PAGE_DESC }],
      ['meta[property="og:url"]', { property: "og:url", content: PAGE_URL }],
      ['meta[property="og:type"]', { property: "og:type", content: "website" }],
      ['meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" }],
      ['meta[name="twitter:title"]', { name: "twitter:title", content: PAGE_TITLE }],
      ['meta[name="twitter:description"]', { name: "twitter:description", content: PAGE_DESC }],
    ];
    pairs.forEach(([sel, attrs]) => {
      const el = setTag(sel, {});
      Object.keys(attrs).forEach((a) => remember(el, a));
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    });

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: data.title,
      description: data.subtitle,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      startDate: "2026-09-01T06:30:00+05:30",
      endDate: "2026-09-01T08:30:00+05:30",
      organizer: { "@type": "Organization", name: "Make Me Artist", url: "https://makemeartist.com/" },
      offers: {
        "@type": "Offer",
        price: data.price,
        priceCurrency: "INR",
        url: data.checkoutUrl,
        availability: "https://schema.org/InStock",
      },
    });
    document.head.appendChild(ld);
    created.push(ld);

    return () => {
      document.title = prevTitle;
      prev.forEach(({ el, attr, value }) =>
        value === null ? el.removeAttribute(attr) : el.setAttribute(attr, value),
      );
      created.forEach((el) => el.remove());
    };
  }, []);
}

const CtaButton = ({
  location,
  className = "",
  label = data.ctaLabel,
}: {
  location: string;
  className?: string;
  label?: string;
}) => (
  <a
    href={withUtm(data.checkoutUrl)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackInitiateCheckout(data.price, data.title, location)}
    className={`inline-flex items-center justify-center gap-2 gradient-rose text-primary-foreground font-bold rounded-full px-8 py-4 text-base sm:text-lg shadow-glow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-opacity ${className}`}
  >
    {label}
  </a>
);

const SectionCta = ({ location }: { location: string }) => (
  <div className="text-center mt-10">
    <CtaButton location={location} />
  </div>
);

const HairArtistDelhiOnlineClass = () => {
  useHeadMeta();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    captureUtmParams();
    trackViewContent(data.price, data.title);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      {/* Minimal header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-14">
          <img src={logo} alt="Make Me Artist" className="h-8 w-auto" width={144} height={32} />
          <span className="hidden sm:inline text-xs text-muted-foreground">
            India's Leading Beauty Learning Platform
          </span>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="container py-10 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-block gradient-gold text-foreground text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">
                {data.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-4">
                Hair Artist Delhi – <span className="text-primary">Online Class</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl">
                {data.subtitle}
              </p>

              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground mb-6">
                <li>🔴 {data.format}</li>
                <li>⏱ {data.duration}</li>
                <li>🎓 E-Certificate</li>
              </ul>

              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-heading text-4xl md:text-5xl font-bold text-primary">₹149</span>
                <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">only</span>
              </div>

              <CtaButton location="hero" className="w-full sm:w-auto" />
              <p className="text-sm text-muted-foreground mt-3">
                📅 {data.dateTimeLabel} · Limited seats
              </p>
            </div>

            <div className="relative">
              <img
                src={heroImg}
                alt="Hair artist styling hair with a curling tong in a salon"
                className="w-full rounded-3xl object-cover aspect-[4/3] shadow-glow"
                width={1200}
                height={900}
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* VALUE / HIGHLIGHTS */}
        <section className="py-14 bg-secondary" aria-labelledby="highlights-heading">
          <div className="container">
            <h2
              id="highlights-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-3"
            >
              What You Get for ₹149
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              A focused, practical class you can join from anywhere.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.highlights.map((h) => (
                <div key={h} className="bg-card rounded-2xl p-5 border border-border">
                  <span className="text-primary text-lg" aria-hidden="true">✔</span>
                  <p className="text-sm font-medium text-foreground mt-2">{h}</p>
                </div>
              ))}
            </div>
            <SectionCta location="highlights" />
          </div>
        </section>

        {/* WHAT YOU WILL LEARN */}
        <section className="py-14" aria-labelledby="learn-heading">
          <div className="container">
            <h2
              id="learn-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-3"
            >
              What You Will Learn
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Exactly what is covered in the 2-hour class.
            </p>
            <ol className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {data.learn.map((l, i) => (
                <li
                  key={l}
                  className="flex items-start gap-3 bg-card rounded-2xl p-4 border border-border"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-rose-light/60 text-primary font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground font-medium pt-1.5">{l}</span>
                </li>
              ))}
            </ol>

            <div className="max-w-3xl mx-auto mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-4 text-center">
                Course Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="text-gold" aria-hidden="true">✔</span>
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <SectionCta location="learn" />
          </div>
        </section>

        {/* WHO IS THIS FOR */}
        <section className="py-14 bg-secondary" aria-labelledby="audience-heading">
          <div className="container">
            <h2
              id="audience-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10"
            >
              Who Is This Class For?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.audience.map((a) => (
                <div key={a.title} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-2xl mb-3" aria-hidden="true">{a.icon}</div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAINER */}
        <section className="py-14" aria-labelledby="trainer-heading">
          <div className="container max-w-3xl">
            <h2
              id="trainer-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8"
            >
              Your Trainer
            </h2>
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border text-center">
              {data.trainer.image ? (
                <img
                  src={data.trainer.image}
                  alt={data.trainer.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  loading="lazy"
                  width={96}
                  height={96}
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-rose-light/60 flex items-center justify-center text-3xl mx-auto mb-4" aria-hidden="true">
                  💇
                </div>
              )}
              <h3 className="font-heading text-xl font-bold text-foreground">{data.trainer.name}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{data.trainer.role}</p>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">{data.trainer.bio}</p>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-14 bg-secondary" aria-labelledby="trust-heading">
          <div className="container">
            <h2
              id="trust-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8"
            >
              Learn With Make Me Artist
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.trust.map((t) => (
                <div key={t.label} className="bg-card rounded-2xl p-5 text-center border border-border">
                  <div className="text-xl md:text-2xl font-heading font-bold text-primary mb-1">{t.value}</div>
                  <div className="text-xs text-muted-foreground">{t.label}</div>
                </div>
              ))}
            </div>

            {data.testimonials.length > 0 && (
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {data.testimonials.map((t) => (
                  <blockquote key={t.name} className="bg-card rounded-2xl p-5 border border-border">
                    <p className="text-sm text-muted-foreground italic mb-3">"{t.quote}"</p>
                    <footer className="text-sm font-semibold text-foreground">
                      {t.name}
                      {t.context ? <span className="text-muted-foreground font-normal"> · {t.context}</span> : null}
                    </footer>
                  </blockquote>
                ))}
              </div>
            )}

            <SectionCta location="trust" />
          </div>
        </section>

        {/* PRICING */}
        <section className="py-14" aria-labelledby="pricing-heading">
          <div className="container max-w-xl">
            <div className="bg-card rounded-3xl border border-primary/20 p-8 text-center shadow-glow">
              <h2 id="pricing-heading" className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                {data.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                {data.dateTimeLabel} · {data.duration} live online
              </p>
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="font-heading text-5xl font-bold text-primary">₹149</span>
                <span className="text-muted-foreground text-sm font-semibold uppercase">only</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">One-time payment · Limited seats</p>
              <CtaButton location="pricing" className="w-full" />
              <ul className="text-sm text-muted-foreground mt-5 space-y-1">
                <li>✔ Live interactive online class</li>
                <li>✔ E-Certificate</li>
                <li>✔ Join from anywhere</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-secondary" aria-labelledby="faq-heading">
          <div className="container max-w-3xl">
            <h2
              id="faq-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {data.faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="bg-card rounded-2xl border border-border overflow-hidden">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-foreground text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {f.q}
                        <span aria-hidden="true" className="text-primary text-lg leading-none">
                          {open ? "−" : "+"}
                        </span>
                      </button>
                    </h3>
                    {open && <p className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</p>}
                  </div>
                );
              })}
            </div>

            <details className="mt-6 bg-card rounded-2xl border border-border px-5 py-4">
              <summary className="cursor-pointer text-sm font-semibold text-foreground">
                Class instructions
              </summary>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                {data.instructions.map((i) => (
                  <li key={i} className="text-sm text-muted-foreground">{i}</li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 gradient-rose" aria-labelledby="final-cta-heading">
          <div className="container text-center">
            <h2
              id="final-cta-heading"
              className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground mb-3"
            >
              Ready to Start Your Hair Artist Journey?
            </h2>
            <p className="text-primary-foreground/80 mb-1">{data.title}</p>
            <p className="text-primary-foreground font-heading text-4xl font-bold mb-6">₹149 only</p>
            <a
              href={withUtm(data.checkoutUrl)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout(data.price, data.title, "final")}
              className="inline-flex items-center justify-center bg-card text-primary font-bold rounded-full px-10 py-4 text-lg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 transition-opacity"
            >
              {data.ctaLabel}
            </a>
            <p className="text-primary-foreground/70 text-sm mt-4">📅 {data.dateTimeLabel}</p>
          </div>
        </section>
      </main>

      {/* Support + legal */}
      <footer className="py-10 bg-foreground text-primary-foreground">
        <div className="container text-center">
          <p className="text-sm font-semibold mb-2">Need help joining?</p>
          <a
            href={`https://wa.me/${data.supportWhatsApp}?text=${encodeURIComponent(
              "Hi! I need help joining the Hair Artist Delhi – Online Class (₹149).",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("footer")}
            className="inline-flex items-center gap-2 border border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
          >
            💬 Chat with us on WhatsApp · {data.supportPhoneLabel}
          </a>
          <p className="text-primary-foreground/40 text-xs mt-6">
            © 2026 Make Me Artist. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex items-center gap-3">
        <div className="leading-tight">
          <div className="font-heading text-xl font-bold text-primary">₹149</div>
          <div className="text-[11px] text-muted-foreground">only</div>
        </div>
        <CtaButton location="sticky_mobile" className="flex-1 py-3 text-base" />
      </div>
    </div>
  );
};

export default HairArtistDelhiOnlineClass;
