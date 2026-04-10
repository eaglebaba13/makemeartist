import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-heading font-bold text-primary">
          ✨ MAKE ME ARTIST
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#courses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Courses</a>
          <a href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          <a href="#book" className="gradient-rose text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Book Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          <a href="#courses" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Courses</a>
          <a href="#why-us" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Why Us</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Reviews</a>
          <a href="#book" onClick={() => setOpen(false)} className="block gradient-rose text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold text-center">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
