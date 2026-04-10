import heroImg from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Beauty artist at work" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Offer badge */}
          <div className="inline-flex items-center gap-2 gradient-gold text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse-glow">
            🎁 Flat 50% Launch Offer
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Become a Certified <span className="text-gradient-gold">Beauty Artist</span> in Just 3 Hours
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body">
            Learn from India's Leading Beauty Gurus. Start your beauty career today and earn tomorrow.
          </p>

          {/* Checkmarks */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {["Live 3 Hour Workshop", "Industry Expert Trainers", "Beginner Friendly", "Certificate from Make Me Artist"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90 text-sm">
                <span className="text-gold">✔</span> {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#book" className="gradient-rose text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-glow hover:opacity-90 transition-all text-center">
              👉 Book My Seat Now
            </a>
            <a
              href="https://wa.me/919929720831"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground/20 transition-all text-center"
            >
              👉 Join on WhatsApp
            </a>
          </div>

          {/* Price */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 inline-block border border-primary-foreground/10">
            <p className="text-primary-foreground text-sm">🔥 Today's Offer</p>
            <p className="text-primary-foreground font-heading text-2xl font-bold">
              <span className="line-through opacity-50 mr-2">₹999</span>
              <span className="text-gradient-gold">Now Only ₹499</span>
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">⏳ Offer Valid For Limited Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
