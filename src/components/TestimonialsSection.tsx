const testimonials = [
  {
    quote: "I started taking bridal makeup clients after this workshop. It completely transformed my career!",
    name: "Priya S.",
    city: "Mumbai",
  },
  {
    quote: "Best beauty learning platform with real experts. The 3-hour workshop was incredibly practical!",
    name: "Anita K.",
    city: "Delhi",
  },
  {
    quote: "Very easy to understand for beginners. Got my certificate and started earning within a month.",
    name: "Sneha R.",
    city: "Pune",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          What Our Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-6 border border-border">
              <p className="text-muted-foreground text-sm mb-4 italic">💬 "{t.quote}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
