const academies = [
  { name: "Kamna Joshi International School of Beauty", city: "Indore" },
  { name: "Shades Beauty Academy", city: "Jaipur" },
  { name: "Aveda Nail Academy", city: "Jaipur" },
  { name: "Up2Date Hair Academy", city: "Ahmedabad" },
  { name: "MMM Academy", city: "Raipur" },
  { name: "Kalpana Jeelani Academy", city: "Lucknow" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">✨ MAKE ME ARTIST</h3>
            <p className="text-primary-foreground/60 text-sm">India's Leading Beauty Learning Platform</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact Us</h4>
            <div className="space-y-1 text-primary-foreground/60 text-sm">
              <p>📞 91677968139</p>
              <p>📞 9929720831</p>
            </div>
          </div>

          {/* Academies */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">🏫 Our Partner Academies</h4>
            <div className="space-y-2">
              {academies.map((a) => (
                <div key={a.name} className="text-sm">
                  <span className="text-primary-foreground/80">{a.name}</span>
                  <span className="text-primary-foreground/40 ml-1">📍 {a.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-primary-foreground/40 text-xs">
          © 2026 Make Me Artist. Built with love using caffeine.ai
        </div>
      </div>
    </footer>
  );
};

export default Footer;
