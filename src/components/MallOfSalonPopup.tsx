import { useState, useEffect } from "react";
import mallOfSalonLogo from "@/assets/mallofsalon-logo.png";
import { X } from "lucide-react";

const MallOfSalonPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/50 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShow(false)}>
      <div className="relative bg-card rounded-2xl p-8 border border-border shadow-2xl max-w-sm mx-4 text-center" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShow(false)} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
          <X size={20} />
        </button>
        <a href="https://www.mallofsalon.com/" target="_blank" rel="noopener noreferrer">
          <img src={mallOfSalonLogo} alt="Mall of Salon" className="h-24 mx-auto mb-4 rounded-lg" loading="lazy" width={200} height={96} />
        </a>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">Book Your Beauty Kits</h3>
        <p className="text-muted-foreground text-sm mb-5">Get professional cosmetics at wholesale prices from Mall of Salon!</p>
        <a
          href="https://www.mallofsalon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gradient-rose text-primary-foreground px-8 py-3 rounded-full font-bold shadow-glow hover:opacity-90 transition-all"
        >
          🛒 Shop Now
        </a>
      </div>
    </div>
  );
};

export default MallOfSalonPopup;
