const courses = [
  { icon: "💄", title: "Makeup Artist Workshop", desc: "Learn bridal makeup, base techniques, product knowledge.", price: 199 },
  { icon: "💇", title: "Hair Styling Workshop", desc: "Hair curls, buns, bridal hair styles, salon techniques.", price: 199 },
  { icon: "✨", title: "Beauty & Skin Workshop", desc: "Skin preparation, facial basics, beauty treatment knowledge.", price: 199 },
  { icon: "💅", title: "Nail Art Workshop", desc: "Trending nail art designs and nail extension basics.", price: 199 },
  { icon: "🧴", title: "Cosmetology Introduction", desc: "Learn skin science and professional cosmetology basics.", price: 199 },
];

const CoursesSection = () => {
  const buildWhatsAppLink = (title: string, price: number) => {
    const msg = `Hi! I want to book the ${title} (₹${price}). Please share details.`;
    return `https://wa.me/919929720831?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Courses You Can Learn
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Choose your skill and start earning from beauty industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-light/60 flex items-center justify-center text-2xl mb-4 group-hover:animate-float">
                {c.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">{c.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-baseline gap-1">
                  <span className="text-primary font-heading font-bold text-2xl">₹{c.price}</span>
                </div>
                <a
                  href={buildWhatsAppLink(c.title, c.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gradient-rose text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold shadow-glow hover:opacity-90 transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
