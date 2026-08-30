interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={align === "center" ? "text-center max-w-2xl mx-auto mb-12" : "max-w-2xl mb-12"}>
    {eyebrow && <p className="text-primary text-xs tracking-[0.25em] uppercase mb-3">{eyebrow}</p>}
    <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground leading-tight">{title}</h2>
    {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
  </div>
);

export default SectionHeading;
