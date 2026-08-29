export const PHONES = ["919929720831", "919167796813", "919911619699"];
export const PRIMARY_PHONE = PHONES[0];

export const wa = (message: string, phone: string = PRIMARY_PHONE) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Course", to: "/courses" },
  { label: "Look & Learn", to: "/look-and-learn" },
  { label: "Partner Academy", to: "/partner-academy" },
  { label: "Find Jobs", to: "/find-jobs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const JOURNEY = [
  { step: "Learn", desc: "Beauty knowledge and professional techniques" },
  { step: "Practice", desc: "Hands-on practical training" },
  { step: "Create", desc: "Build professional work and portfolio" },
  { step: "Market", desc: "Build your personal brand and generate leads" },
  { step: "Earn", desc: "Freelance, join a salon/studio or build a beauty business" },
];

export const BUILD_PILLARS = [
  { title: "Skill", desc: "Professional beauty skills" },
  { title: "Portfolio", desc: "Professional photos and videos of your work" },
  { title: "Personal Brand", desc: "Instagram + WhatsApp Business presence" },
  { title: "Business Model", desc: "Services, pricing and packages" },
  { title: "Client System", desc: "A practical system to generate and convert leads" },
];

export const CAREER_PATH = [
  "Beginner",
  "Beauty Artist",
  "Specialist",
  "Freelancer / Salon Professional",
  "Beauty Entrepreneur",
  "Educator / Business Owner",
];

export const ACADEMIES = [
  { name: "Kamna Joshi International School of Beauty", city: "Indore" },
  { name: "Shades Beauty Academy", city: "Jaipur" },
  { name: "Aveda Nail Academy", city: "Jaipur" },
  { name: "Up2Date Hair Academy", city: "Ahmedabad" },
  { name: "MMM Academy", city: "Raipur" },
  { name: "Kalpana Jeelani Academy", city: "Lucknow" },
];
