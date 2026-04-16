import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/makemeartist-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Make Me Artist" className="h-10" width={180} height={40} />
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#courses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Courses</a>
          <a href="#trainers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Trainers</a>
          <a href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          <a href="https://wa.me/919929720831?text=Hi!%20I%20want%20to%20book%20a%20seat." target="_blank" rel="noopener noreferrer" className="gradient-rose text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
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
          <a href="#trainers" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Trainers</a>
          <a href="#why-us" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Why Us</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Reviews</a>
          <a href="https://wa.me/919929720831?text=Hi!%20I%20want%20to%20book%20a%20seat." target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block gradient-rose text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold text-center">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
