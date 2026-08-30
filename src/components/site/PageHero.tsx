interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: React.ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, image, children }: PageHeroProps) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 gradient-hero" />
    </div>
    <div className="container relative z-10 py-20 md:py-28">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-primary-foreground/70 text-xs tracking-[0.25em] uppercase mb-4">{eyebrow}</p>
        )}
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-5 text-base md:text-lg text-primary-foreground/80 max-w-2xl">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-col sm:flex-row gap-4">{children}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
