export interface Program {
  slug: string;
  name: string;
  duration: string;
  positioning: string;
  description: string;
  skills: string[];
  outcomes: string[];
  to?: string;
}

export const PROGRAMS: Program[] = [
  {
    slug: "professional-beauty-artist",
    name: "Professional Beauty Artist Program",
    duration: "6 Months",
    positioning: "Beginner → Professional Beauty Artist → Freelance/Salon-Ready Professional",
    description:
      "A complete foundation-to-professional program covering makeup, hairstyling, airbrush, skin preparation, nail art, client handling, portfolio building and beauty business launch.",
    skills: [
      "Professional & bridal makeup",
      "Hairstyling and bridal buns",
      "Airbrush makeup",
      "Skin preparation & nail services",
      "Portfolio, pricing & social media",
    ],
    outcomes: [
      "Freelance Makeup Artist",
      "Bridal Makeup Artist",
      "Salon Artist",
      "Nail Artist",
      "Beauty Consultant",
    ],
    to: "/courses/professional-beauty-artist",
  },
  {
    slug: "advanced-beauty-entrepreneur",
    name: "Advanced Beauty Entrepreneur Program",
    duration: "12 Months",
    positioning: "Professional Beauty Artist → Specialist → Beauty Entrepreneur",
    description:
      "Builds on the 6-month foundation with advanced bridal, hair, nail specialisation, content creation and a complete beauty entrepreneurship and business launch track.",
    skills: [
      "Advanced bridal & HD/airbrush artistry",
      "Advanced hair, draping & styling",
      "Advanced nail systems & 3D art",
      "Beauty content creation & UGC",
      "Studio/salon business operations",
    ],
    outcomes: [
      "Beauty Entrepreneur",
      "Studio / Salon Owner",
      "Beauty Educator",
      "Beauty Content Creator",
      "Specialist Artist",
    ],
    to: "/courses/advanced-beauty-entrepreneur",
  },
];

export interface Specialization {
  name: string;
  duration: string;
  outcome: string;
  skills: string[];
}

export const SPECIALIZATIONS: Specialization[] = [
  {
    name: "Bridal Makeup Specialist",
    duration: "3 Months",
    outcome: "Take on bridal bookings end-to-end, from trial to reception look.",
    skills: ["Bridal consultation", "HD & traditional bridal base", "Bridal eye looks", "Package design"],
  },
  {
    name: "Airbrush Makeup Specialist",
    duration: "2 Months",
    outcome: "Deliver flawless photography-ready airbrush finishes.",
    skills: ["Machine & compressor control", "Airbrush base", "Contour & highlight", "Bridal airbrush"],
  },
  {
    name: "Nail Artist & Nail Extension Specialist",
    duration: "3 Months",
    outcome: "Run a complete professional nail service menu.",
    skills: ["Nail prep & hygiene", "Gel polish & art", "Gel extensions", "Refill, removal & aftercare"],
  },
  {
    name: "Professional Hairstylist",
    duration: "3 Months",
    outcome: "Style clients for parties, shoots and weddings with confidence.",
    skills: ["Blow dry & curls", "Braids", "Bridal buns", "Extensions & accessories"],
  },
  {
    name: "Beauty Content Creator",
    duration: "2 Months",
    outcome: "Turn your work into content that attracts clients and brands.",
    skills: ["Reels & editing", "Lighting", "Beauty tutorials", "Brand collaboration"],
  },
  {
    name: "Salon Business Entrepreneur",
    duration: "2 Months",
    outcome: "Plan, launch and manage a profitable salon or studio.",
    skills: ["Investment planning", "Staff & SOPs", "Service costing", "Customer retention"],
  },
  {
    name: "Makeup Educator Program",
    duration: "3 Months",
    outcome: "Teach professionally and build your own training batches.",
    skills: ["Curriculum design", "Demonstration skills", "Batch management", "Assessment methods"],
  },
  {
    name: "Beauty Freelancer Mastery",
    duration: "2 Months",
    outcome: "Build a consistent freelance income with your own client system.",
    skills: ["Kit & studio setup", "Pricing & packages", "Lead generation", "Client follow-up"],
  },
];
