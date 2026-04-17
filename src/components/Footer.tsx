import logo from "@/assets/makemeartist-logo.png";
import mallOfSalonLogo from "@/assets/mallofsalon-logo.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

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
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Make Me Artist" className="h-10 mb-3 brightness-0 invert" width={180} height={40} />
            <p className="text-primary-foreground/60 text-sm">India's Leading Beauty Learning Platform</p>
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/makemeartistIndia" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/makemeartistofficial" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact Us</h4>
            <div className="space-y-2 text-primary-foreground/60 text-sm">
              <a href="https://wa.me/919929720831" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                📞 +91 9929720831
              </a>
              <a href="https://wa.me/919167796813" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                📞 +91 9167796813
              </a>
              <a href="https://wa.me/919911619699" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                📞 +91 9911619699
              </a>
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

          {/* Download App */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">📱 Download Our App</h4>
            <a
              href="https://play.google.com/store/apps/details?id=com.maartist.learning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
              aria-label="Get it on Google Play"
            >
              <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12 w-auto" width={160} height={48} />
            </a>
          </div>

          {/* Mall of Salon */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">🛒 Book Your Kits</h4>
            <a href="https://www.mallofsalon.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src={mallOfSalonLogo} alt="Mall of Salon" className="h-16 rounded-lg mb-2" loading="lazy" width={160} height={64} />
              <p className="text-primary-foreground/60 text-xs">Cosmetic Ki Wholesale Dukan</p>
              <p className="text-primary-foreground/80 text-xs mt-1 hover:text-primary-foreground transition-colors">🌐 mallofsalon.com →</p>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-primary-foreground/40 text-xs">
          © 2026 Make Me Artist. Designed by{" "}
          <a
            href="https://wa.me/919911619699"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground transition-colors underline"
          >
            LWILL
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
