export const LOOK_CATEGORIES = [
  "All",
  "Makeup",
  "Bridal",
  "Hair",
  "Nail Art",
  "Airbrush",
  "Skin Preparation",
  "Beauty Business",
  "Social Media",
  "Career Tips",
] as const;

export type LookCategory = (typeof LOOK_CATEGORIES)[number];

export interface LookItem {
  title: string;
  category: Exclude<LookCategory, "All">;
  description: string;
  image: string;
}

export const LOOKS: LookItem[] = [
  {
    title: "Soft Glam Party Look",
    category: "Makeup",
    description: "Dewy base, soft shimmer eyes and blurred blush for evening events.",
    image: "trainer-3",
  },
  {
    title: "Everyday Natural Base",
    category: "Makeup",
    description: "Lightweight base routine that lasts through an Indian summer day.",
    image: "trainer-6",
  },
  {
    title: "Traditional Indian Bridal",
    category: "Bridal",
    description: "Classic red-and-gold bridal look with long-wear HD base.",
    image: "hero",
  },
  {
    title: "Contemporary Reception Look",
    category: "Bridal",
    description: "Modern glossy bridal finish styled for reception photography.",
    image: "trainer-4",
  },
  {
    title: "Bridal Bun with Accessories",
    category: "Hair",
    description: "Structured bridal bun with padding, jewellery and dupatta setting.",
    image: "trainer-1",
  },
  {
    title: "Glam Curls & Beach Waves",
    category: "Hair",
    description: "Tong angle, section control and hold products for lasting curls.",
    image: "trainer-5",
  },
  {
    title: "Chrome & French Nail Set",
    category: "Nail Art",
    description: "Chrome finish over gel with clean French tips and cuticle work.",
    image: "trainer-2",
  },
  {
    title: "Gel Extension Basics",
    category: "Nail Art",
    description: "Form placement, apex building, shaping, refill and safe removal.",
    image: "trainer-8",
  },
  {
    title: "Airbrush Bridal Finish",
    category: "Airbrush",
    description: "Pressure, distance and layering for a photography-ready finish.",
    image: "courses",
  },
  {
    title: "Pre-Makeup Skin Prep",
    category: "Skin Preparation",
    description: "Cleanse, hydrate and prime by skin type for makeup longevity.",
    image: "trainer-7",
  },
  {
    title: "Build Your Service Menu",
    category: "Beauty Business",
    description: "Structure services, packages and pricing that protect your margin.",
    image: "trainer-10",
  },
  {
    title: "Salon & Studio Costing",
    category: "Beauty Business",
    description: "Product cost, staff cost, break-even and monthly target basics.",
    image: "jobs",
  },
  {
    title: "Reels That Get Bookings",
    category: "Social Media",
    description: "Before/after structure, hooks and posting rhythm for artists.",
    image: "trainer-9",
  },
  {
    title: "WhatsApp Business Setup",
    category: "Social Media",
    description: "Catalogue, quick replies and follow-up flow for beauty leads.",
    image: "partner",
  },
  {
    title: "From Student to Freelancer",
    category: "Career Tips",
    description: "Kit planning, first clients and pricing your first bookings.",
    image: "trainer-4",
  },
  {
    title: "Working in a Salon or Studio",
    category: "Career Tips",
    description: "What employers look for and how to grow inside a salon team.",
    image: "trainer-6",
  },
];
