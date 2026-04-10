const courses = [
  { icon: "💄", title: "Makeup Artist Workshop", desc: "Learn bridal makeup, base techniques, product knowledge." },
  { icon: "💇", title: "Hair Styling Workshop", desc: "Hair curls, buns, bridal hair styles, salon techniques." },
  { icon: "✨", title: "Beauty & Skin Workshop", desc: "Skin preparation, facial basics, beauty treatment knowledge." },
  { icon: "💅", title: "Nail Art Workshop", desc: "Trending nail art designs and nail extension basics." },
  { icon: "🧴", title: "Cosmetology Introduction", desc: "Learn skin science and professional cosmetology basics." },
  { icon: "📜", title: "Certificate Provided", desc: "Get a recognized certificate after completing any workshop." },
];

const CoursesSection = () => {
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
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:animate-float">{c.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
