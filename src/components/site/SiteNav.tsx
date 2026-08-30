import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/makemeartist-logo.png";
import { NAV_LINKS, wa } from "@/data/site";
import { cn } from "@/lib/utils";

const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const enquireLink = wa("Hi! I'd like to enquire about MakeMeArtist courses.");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container flex items-center justify-between h-16" aria-label="Main">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="Make Me Artist" className="h-9 w-auto" width={180} height={36} />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  isActive || (l.to !== "/" && pathname.startsWith(l.to))
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={enquireLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-rose text-primary-foreground px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
          >
            Enquire Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-5 pt-2 space-y-1">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block py-3 text-base border-b border-border/60",
                  isActive ? "text-primary font-semibold" : "text-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={enquireLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block mt-4 gradient-rose text-primary-foreground py-3 rounded-full text-sm font-semibold text-center tracking-[0.12em] uppercase"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
