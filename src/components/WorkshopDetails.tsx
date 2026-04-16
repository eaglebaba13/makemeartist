const details = [
  { icon: "⏰", title: "Duration", desc: "3 Hours Live Workshop" },
  { icon: "📍", title: "Mode", desc: "Online / Offline (City Based)" },
  { icon: "🎓", title: "Certificate", desc: "Provided After Completion" },
  { icon: "👩‍🎓", title: "Eligibility", desc: "Beginners & Beauty Enthusiasts" },
];

const forYou = [
  "Start career in beauty industry",
  "Open your own salon",
  "Work as freelance makeup artist",
  "Learn professional beauty skills",
];

const WorkshopDetails = () => {
  const whatsappLink = "https://wa.me/919929720831?text=Hi!%20I%20want%20to%20reserve%20my%20seat.";

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          Workshop Details
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {details.map((d) => (
            <div key={d.title} className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/20 transition-colors">
              <div className="text-3xl mb-3">{d.icon}</div>
              <div className="font-semibold text-foreground text-sm mb-1">{d.title}</div>
              <div className="text-xs text-muted-foreground">{d.desc}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-primary font-semibold text-sm mb-16">
          ⚠️ Only 100 Seats Available Per Batch
        </p>

        <div className="max-w-xl mx-auto bg-rose-light/30 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-xl font-heading font-bold text-foreground text-center mb-6">
            This Workshop Is For You If You Want To:
          </h3>
          <div className="space-y-3 mb-6">
            {forYou.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-primary">✔</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block gradient-rose text-primary-foreground px-8 py-3 rounded-full font-bold shadow-glow hover:opacity-90 transition-all">
              👉 Reserve My Seat Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
