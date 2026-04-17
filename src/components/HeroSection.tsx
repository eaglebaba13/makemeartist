import heroImg from "@/assets/hero-beauty.jpg";
import googlePlayBadge from "@/assets/google-play-badge.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/919929720831?text=Hi!%20I%20want%20to%20book%20a%20seat.";

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Beauty artist at work" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 gradient-gold text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse-glow">
            🎁 Flat 50% Launch Offer
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Become a Certified <span className="text-gradient-gold">Beauty Artist</span> in Just 3 Hours
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body">
            Learn from India's Leading Beauty Gurus. Start your beauty career today and earn tomorrow.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {["Live 3 Hour Workshop", "Industry Expert Trainers", "Beginner Friendly", "Certificate from Make Me Artist"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90 text-sm">
                <span className="text-gold">✔</span> {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="gradient-rose text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-glow hover:opacity-90 transition-all text-center">
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

          {/* Google Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.maartist.learning"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black/80 hover:bg-black border border-white/20 text-white px-5 py-3 rounded-xl transition-all mb-8"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.18-.425.29-.703.29-.55 0-.996-.445-.996-.996V2.52c0-.55.446-.996.996-.996.278 0 .523.11.702.29zM13.792 12l8.574 8.574c.393.393.393 1.03 0 1.423l-.025.025c-.393.393-1.03.393-1.423 0L14.2 13.15 13.792 12zM14.2 10.85l7.718-8.872c.393-.393 1.03-.393 1.423 0l.025.025c.393.393.393 1.03 0 1.423L13.792 12l.408-1.15zM4.5 2.52v18.96l9.282-9.48L4.5 2.52z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] leading-none opacity-80">GET IT ON</p>
              <p className="text-base font-semibold leading-tight">Google Play</p>
            </div>
          </a>

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
