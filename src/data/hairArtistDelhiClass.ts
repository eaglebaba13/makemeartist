// Single source of truth for the Hair Artist Delhi – Online Class landing page.
// All facts below come from the official product page:
// https://superprofile.bio/e/HairArtistDelhiOnlineClass
// Edit here to update the page — do not add unverified claims.

export const hairArtistDelhiClass = {
  slug: "hair-artist-delhi-online-class",
  eyebrow: "HAIR ARTIST DELHI",
  title: "Hair Artist Delhi – Online Class",
  subtitle:
    "Learn professional hair styling techniques with expert Hair Artist Nadeem in a focused 2-hour online masterclass.",
  price: 149,
  currency: "INR",
  // No verified original/MRP price is published for this offer — leave null.
  originalPrice: null as number | null,
  dateTimeLabel: "Tue, 1 Sep 2026 · 6:30 AM – 8:30 AM",
  format: "Live interactive online class",
  duration: "2 hours",
  // Official checkout / registration page (payments handled by SuperProfile).
  checkoutUrl: "https://superprofile.bio/e/HairArtistDelhiOnlineClass",
  supportWhatsApp: "919929720831",
  supportPhoneLabel: "+91 99297 20831",
  ctaLabel: "Join Now – ₹149",

  learn: [
    "Theory Knowledge",
    "Product Knowledge",
    "How to Convert Curls into Waves",
    "How to Use Hair Spray",
    "Method of Using Tong",
    "Proper Holding Technique",
    "Correct Angle",
    "Correct Degree",
  ],

  highlights: [
    "Live Interactive Online Class",
    "2 Hours Intensive Training",
    "Expert Guidance by Nadeem – Hair Artist Delhi",
    "Practical Hair Styling Techniques",
    "Professional Product & Tool Knowledge",
    "E-Certificate",
    "Limited Seats",
    "Online Learning from Anywhere",
  ],

  benefits: [
    "Build professional hair styling knowledge",
    "Understand tools, products and techniques",
    "Learn proper tong holding, angle and degree",
    "Master curl-to-wave conversion",
    "Improve finishing and styling techniques",
    "Learn directly from an experienced hair artist",
  ],

  // Derived from the product positioning (online hair styling class for
  // beginners and working professionals). No income/placement claims.
  audience: [
    {
      icon: "🌱",
      title: "Beginners",
      desc: "Starting out in hair styling and want the correct fundamentals.",
    },
    {
      icon: "💇",
      title: "Aspiring Hair Artists",
      desc: "Want practical tong, curl and finishing technique from an expert.",
    },
    {
      icon: "💼",
      title: "Salon & Beauty Professionals",
      desc: "Looking to sharpen product knowledge and styling technique.",
    },
    {
      icon: "🏠",
      title: "Learners Anywhere in India",
      desc: "Prefer learning live online without travelling to a class.",
    },
  ],

  trainer: {
    name: "Nadeem",
    role: "Hair Artist, Delhi",
    // Verified description from the product page only.
    bio: "Hair Artist Nadeem leads this focused 2-hour online masterclass on professional hair styling technique, tools and products.",
    image: null as string | null,
  },

  // Reused from existing Make Me Artist website content only.
  trust: [
    { value: "200+", label: "Partner Academies" },
    { value: "10,000+", label: "Students Trained" },
    { value: "Industry Experts", label: "as Trainers" },
    { value: "Online + Offline", label: "Learning Model" },
  ],

  // Real testimonials for this class are not published yet.
  testimonials: [] as { name: string; quote: string; context?: string }[],

  faqs: [
    {
      q: "Is this an online class?",
      a: "Yes. It is a live interactive online class, streamed online — you can join from anywhere.",
    },
    {
      q: "When does the class take place?",
      a: "Tuesday, 1 September 2026, from 6:30 AM to 8:30 AM.",
    },
    {
      q: "How long is the class?",
      a: "2 hours of intensive training.",
    },
    {
      q: "What will I learn?",
      a: "Theory and product knowledge, converting curls into waves, using hair spray, the method of using a tong, proper holding technique, correct angle and correct degree.",
    },
    {
      q: "Who is teaching?",
      a: "Nadeem – Hair Artist, Delhi.",
    },
    {
      q: "How much does it cost?",
      a: "₹149 only.",
    },
    {
      q: "Do I get a certificate?",
      a: "Yes, an E-Certificate is included as part of the class.",
    },
    {
      q: "How do I join after payment?",
      a: "Registration and payment are completed on our official registration page. Your joining details are sent to you after registration. If you need help, message us on WhatsApp at +91 99297 20831.",
    },
  ],

  instructions: [
    "This event will be streamed online.",
    "The ticket holder grants the organiser the right to use all or any part of the recording for promotional purposes.",
    "Any misbehaviour within the comments/chat section or use of profanity towards the artist, host or attendees will not be tolerated.",
    "We are committed to a respectful, safe environment free from harassment, violence, discrimination, bullying, abuse and solicitation.",
  ],
};

export type HairArtistDelhiClass = typeof hairArtistDelhiClass;
