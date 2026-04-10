const stats = [
  { value: "200+", label: "Partner Academies" },
  { value: "10,000+", label: "Students Trained" },
  { value: "Online + Offline", label: "Learning Model" },
  { value: "Industry Experts", label: "as Trainers" },
];

const learnings = [
  "Professional Makeup Techniques",
  "Bridal Hair Styling Basics",
  "Product Knowledge & Tools",
  "Client Handling Skills",
  "How to Start Your Beauty Career",
  "How to Earn as a Freelance Artist",
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Why Learn With Make Me Artist
          </h2>
          <p className="text-muted-foreground">India's Leading Look & Learn Platform</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-6 text-center border border-border">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* What you will learn */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-2">
            What You Will Learn in 3 Hours
          </h3>
          <p className="text-muted-foreground text-center mb-8">Step by step practical learning.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {learnings.map((l) => (
              <div key={l} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-border">
                <span className="text-gold text-lg">✔</span>
                <span className="text-sm text-foreground">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
