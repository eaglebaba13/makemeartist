export interface Module {
  title: string;
  points: string[];
}

export interface CurriculumMonth {
  month: string;
  theme: string;
  modules: Module[];
  practicals?: string[];
  assessment?: string[];
  note?: string;
}

export const SIX_MONTH_OUTCOMES = [
  "Perform professional makeup services",
  "Create bridal, party and occasion looks",
  "Perform basic-to-advanced hairstyling",
  "Understand skin preparation and skincare basics",
  "Perform professional nail services",
  "Create a professional portfolio",
  "Price beauty services",
  "Handle clients professionally",
  "Promote services through Instagram and WhatsApp",
  "Start freelancing or work in a salon/studio",
  "Understand basic beauty-business operations",
];

export const SIX_MONTH: CurriculumMonth[] = [
  {
    month: "Month 1",
    theme: "Foundation of Beauty & Makeup",
    modules: [
      {
        title: "Module 1: Introduction to Professional Beauty",
        points: [
          "Beauty industry overview",
          "Career options in beauty",
          "Makeup artist vs beautician vs beauty entrepreneur",
          "Professional ethics",
          "Client consultation",
          "Personal grooming",
          "Hygiene and sanitation",
          "Professional workstation setup",
        ],
      },
      {
        title: "Module 2: Makeup Fundamentals",
        points: [
          "Makeup tools & brushes",
          "Product knowledge",
          "Skin types",
          "Face shapes",
          "Colour theory",
          "Undertones",
          "Foundation selection",
          "Concealer selection",
          "Colour correction",
          "Contouring",
          "Highlighting",
          "Blush placement",
          "Setting techniques",
        ],
      },
      {
        title: "Module 3: Eye Makeup Fundamentals",
        points: [
          "Eye shapes",
          "Brow mapping",
          "Basic eyeshadow",
          "Blending techniques",
          "Eyeliner",
          "Kajal",
          "Mascara",
          "False lashes",
          "Basic cut crease",
          "Glitter application",
        ],
      },
    ],
    practicals: ["Natural Makeup", "Office Makeup", "Soft Glam", "Party Makeup", "Basic Indian Makeup"],
    assessment: ["Practical makeup test", "Face chart assignment", "Product knowledge test"],
  },
  {
    month: "Month 2",
    theme: "Professional Makeup Artistry",
    modules: [
      {
        title: "Module 4: Advanced Makeup Techniques",
        points: [
          "HD makeup",
          "Long-lasting base",
          "Dewy makeup",
          "Matte makeup",
          "Full glam",
          "Soft glam",
          "Indian bridal base",
          "Mature skin makeup",
          "Oily skin makeup",
          "Dry skin makeup",
          "Acne/texture correction",
          "Photography-ready makeup",
        ],
      },
      {
        title: "Module 5: Indian & Bridal Makeup",
        points: [
          "Bridal consultation",
          "Bridal skin preparation",
          "Traditional bridal looks",
          "Contemporary bridal looks",
          "Engagement makeup",
          "Reception makeup",
          "Haldi makeup",
          "Mehendi makeup",
        ],
      },
      {
        title: "Module 6: Advanced Eye Looks",
        points: [
          "Smokey eyes",
          "Cut crease",
          "Halo eyes",
          "Shimmer eyes",
          "Glitter eyes",
          "Bridal eyes",
          "Colourful eyes",
          "Mature eyes",
        ],
      },
    ],
    practicals: [
      "HD Party Makeup",
      "Soft Bridal Makeup",
      "Traditional Bridal Makeup",
      "Reception Makeup",
      "Smokey Eye Glam",
    ],
    assessment: ["Complete one full professional bridal look from consultation to final finish"],
  },
  {
    month: "Month 3",
    theme: "Hairstyling + Airbrush",
    modules: [
      {
        title: "Module 7: Hair Fundamentals",
        points: [
          "Hair types",
          "Hair texture",
          "Hair preparation",
          "Hair tools",
          "Heat protection",
          "Hair products",
          "Blow drying",
          "Straightening",
          "Curling",
          "Crimping",
        ],
      },
      {
        title: "Module 8: Hairstyling",
        points: [
          "Basic curls",
          "Beach waves",
          "Open hairstyles",
          "Ponytails",
          "Braids",
          "French braid",
          "Dutch braid",
          "Bun techniques",
          "Messy bun",
          "Sleek bun",
          "Bridal bun",
          "Hair accessories",
          "Hair extensions",
        ],
      },
      {
        title: "Module 9: Airbrush Fundamentals",
        points: [
          "Airbrush machine",
          "Compressor",
          "Airbrush products",
          "Machine cleaning",
          "Nozzle control",
          "Air pressure",
          "Spray distance",
          "Product consistency",
        ],
      },
      {
        title: "Module 10: Airbrush Application",
        points: [
          "Skin preparation",
          "Airbrush foundation",
          "Airbrush blush",
          "Airbrush contour",
          "Airbrush highlighting",
          "Layering",
          "Setting",
          "HD photography finish",
          "Bridal airbrush makeup",
        ],
      },
    ],
    practicals: [
      "Basic Blow Dry",
      "Beach Waves",
      "Glam Curls",
      "Braided Hairstyle",
      "Bridal Bun",
      "Reception Hairstyle",
      "Airbrush Party Look",
      "Airbrush Bridal Look",
    ],
  },
  {
    month: "Month 4",
    theme: "Skin + Nail Art",
    modules: [
      {
        title: "Module 11: Skin Science",
        points: [
          "Skin types",
          "Skin concerns",
          "Basic skin anatomy",
          "Skin assessment",
          "Cleansing",
          "Exfoliation",
          "Moisturisation",
          "Sun protection",
          "Pre-makeup skin preparation",
        ],
      },
      {
        title: "Module 12: Professional Skin Preparation",
        points: [
          "Bridal skin preparation",
          "Dry skin preparation",
          "Oily skin preparation",
          "Sensitive skin considerations",
          "Hydration",
          "Makeup longevity",
          "Product selection",
        ],
      },
      {
        title: "Module 13: Nail Fundamentals",
        points: [
          "Nail anatomy",
          "Nail hygiene",
          "Nail tools",
          "Nail products",
          "Cuticle care",
          "Nail preparation",
          "Safety & sanitation",
        ],
      },
      {
        title: "Module 14: Nail Art",
        points: [
          "Basic nail art",
          "French tips",
          "Ombre",
          "Glitter",
          "Chrome",
          "Marble",
          "Floral art",
          "Abstract art",
          "Stone/embellishment art",
          "Gel polish basics",
        ],
      },
      {
        title: "Module 15: Nail Extensions",
        points: [
          "Extension fundamentals",
          "Tips",
          "Forms",
          "Gel extensions",
          "Basic shaping",
          "Refill concepts",
          "Removal",
          "Aftercare",
        ],
      },
    ],
    practicals: ["Students create a minimum of 5 nail-art sets"],
    note: "This module teaches beauty professionals to recognize when a client needs a dermatologist rather than attempting medical treatment.",
  },
  {
    month: "Month 5",
    theme: "Client Services + Professional Portfolio",
    modules: [
      {
        title: "Module 16: Client Management",
        points: [
          "Client consultation",
          "Requirement analysis",
          "Look selection",
          "Budget discussion",
          "Appointment management",
          "Client communication",
          "Upselling",
          "Cross-selling",
          "Handling complaints",
          "Repeat-client strategy",
        ],
      },
      {
        title: "Module 17: Professional Portfolio",
        points: [
          "Makeup portfolio — 5 professional makeup looks",
          "Hair portfolio — 3 professional hairstyles",
          "Nail portfolio — 5 nail-art designs",
          "Before & after portfolio — minimum 5 transformations",
          "Content portfolio — 10 Instagram-ready photos, 5 Reels, 5 educational posts",
        ],
      },
    ],
  },
  {
    month: "Month 6",
    theme: "Beauty Business & Career Launch",
    modules: [
      {
        title: "Module 18: Start Your Freelance Career",
        points: [
          "How to start freelancing",
          "Home studio setup",
          "Freelance kit",
          "Investment planning",
          "Service menu",
          "Pricing strategy",
          "Package creation",
          "Bridal packages",
          "Party makeup packages",
          "Nail packages",
          "Hair packages",
        ],
      },
      {
        title: "Module 19: Social Media Marketing",
        points: [
          "Instagram profile creation & bio optimisation",
          "Content pillars",
          "Reels",
          "Before/after content",
          "Educational content",
          "Client testimonials",
          "Personal branding",
          "WhatsApp Business catalogue",
          "Quick replies & broadcast",
          "Follow-up and lead management",
        ],
      },
      {
        title: "Module 20: Lead Generation",
        points: [
          "Instagram leads",
          "WhatsApp leads",
          "Referral marketing",
          "Local marketing",
          "Google Business Profile",
          "Collaboration with photographers",
          "Collaboration with salons",
          "Collaboration with boutiques",
          "Influencer collaboration",
        ],
      },
      {
        title: "Module 21: Beauty Business Finance",
        points: [
          "Cost calculation",
          "Gross margin",
          "Service profitability",
          "Monthly target",
          "Break-even",
          "Staff costing",
          "Product costing",
          "Daily sales tracking",
          "Monthly P&L basics",
        ],
      },
    ],
  },
];

export const CAREER_CHALLENGE = [
  "10 Makeup Looks",
  "5 Hairstyles",
  "5 Nail Sets",
  "5 Client Consultations",
  "10 Social Media Posts",
  "5 Reels",
  "1 Professional Portfolio",
  "1 Service Menu",
  "1 Pricing Sheet",
  "1 Business Plan",
];

export const FINAL_EXAM = [
  { label: "Theory", value: 30 },
  { label: "Practical", value: 50 },
  { label: "Portfolio & Business Project", value: 20 },
];

export const CERTIFICATION_ROLES = [
  "Freelance Makeup Artist",
  "Bridal Makeup Artist",
  "Beauty Artist",
  "Hair Stylist",
  "Nail Artist",
  "Beauty Consultant",
  "Salon Artist",
  "Beauty Content Creator",
  "Beauty Entrepreneur",
];

export const TWELVE_MONTH: CurriculumMonth[] = [
  {
    month: "Month 7",
    theme: "Advanced Bridal Makeup",
    modules: [
      {
        title: "Advanced Bridal Artistry",
        points: [
          "Advanced bridal base",
          "HD bridal",
          "Airbrush bridal",
          "Long-wear techniques",
          "Bridal eye looks",
          "Mature bridal",
          "Different Indian bridal aesthetics",
          "Bridal trial",
          "Bridal consultation",
          "Bridal package design",
        ],
      },
    ],
  },
  {
    month: "Month 8",
    theme: "Advanced Hair & Bridal Styling",
    modules: [
      {
        title: "Advanced Styling",
        points: [
          "Advanced bridal buns",
          "Hair extensions",
          "Hair padding",
          "Saree draping basics",
          "Dupatta setting",
          "Jewellery placement",
          "Contemporary bridal hairstyles",
          "Celebrity-inspired styling",
        ],
      },
    ],
  },
  {
    month: "Month 9",
    theme: "Advanced Nail & Beauty Services",
    modules: [
      {
        title: "Advanced Nail Systems",
        points: [
          "Advanced nail extensions",
          "Gel systems",
          "Advanced nail art",
          "Chrome",
          "3D art",
          "Salon nail menu",
          "Nail pricing",
          "Nail service operations",
        ],
      },
    ],
  },
  {
    month: "Month 10",
    theme: "Beauty Content Creator",
    modules: [
      {
        title: "Content & Personal Brand",
        points: [
          "Personal branding",
          "Camera confidence",
          "Reels",
          "Video editing",
          "Lighting",
          "Product photography",
          "Beauty tutorials",
          "UGC",
          "Influencer collaboration",
          "Brand collaboration",
          "YouTube/Instagram strategy",
        ],
      },
    ],
  },
  {
    month: "Month 11",
    theme: "Beauty Entrepreneurship",
    modules: [
      {
        title: "Build Your Business",
        points: [
          "Home studio",
          "Freelance studio",
          "Makeup studio",
          "Nail studio",
          "Beauty salon",
          "Academy model",
        ],
      },
      {
        title: "Business Management",
        points: [
          "Location selection",
          "Investment planning",
          "Vendor management",
          "Product sourcing",
          "Staff hiring",
          "Staff training",
          "Incentive structures",
          "SOP creation",
          "Customer retention",
          "Membership programs",
        ],
      },
    ],
  },
  {
    month: "Month 12",
    theme: "Business Launch",
    modules: [
      {
        title: "Each Student Creates",
        points: [
          "Beauty brand name",
          "Logo",
          "Instagram page",
          "Service menu",
          "Pricing",
          "Portfolio",
          "Marketing plan",
          "Client acquisition plan",
          "90-day revenue target",
          "Business plan",
        ],
      },
    ],
    assessment: [
      "Final project: students conduct a live/virtual client project and present their complete beauty business plan",
    ],
  },
];
