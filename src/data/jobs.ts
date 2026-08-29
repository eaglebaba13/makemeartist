export const JOB_CATEGORIES = [
  "Makeup Artist",
  "Bridal Makeup Artist",
  "Hair Stylist",
  "Nail Artist",
  "Beauty Therapist",
  "Beauty Consultant",
  "Salon Artist",
  "Beauty Trainer",
  "Beauty Content Creator",
  "Salon Manager",
] as const;

export const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Freelance"] as const;
export const EXPERIENCE_LEVELS = ["Fresher", "1-3 Years", "3-5 Years", "5+ Years"] as const;

export interface Job {
  id: string;
  title: (typeof JOB_CATEGORIES)[number];
  company: string;
  location: string;
  experience: (typeof EXPERIENCE_LEVELS)[number];
  type: (typeof EMPLOYMENT_TYPES)[number];
  posted: string;
  summary: string;
}

export const JOBS: Job[] = [
  {
    id: "j1",
    title: "Makeup Artist",
    company: "Shades Beauty Academy",
    location: "Jaipur",
    experience: "1-3 Years",
    type: "Full-time",
    posted: "2 days ago",
    summary: "Party and occasion makeup for walk-in and appointment clients.",
  },
  {
    id: "j2",
    title: "Bridal Makeup Artist",
    company: "Kamna Joshi International School of Beauty",
    location: "Indore",
    experience: "3-5 Years",
    type: "Freelance",
    posted: "4 days ago",
    summary: "Bridal trials and wedding-day assignments across the season.",
  },
  {
    id: "j3",
    title: "Hair Stylist",
    company: "Up2Date Hair Academy",
    location: "Ahmedabad",
    experience: "1-3 Years",
    type: "Full-time",
    posted: "1 week ago",
    summary: "Blow dry, curls, braids and bridal styling for studio clients.",
  },
  {
    id: "j4",
    title: "Nail Artist",
    company: "Aveda Nail Academy",
    location: "Jaipur",
    experience: "Fresher",
    type: "Part-time",
    posted: "3 days ago",
    summary: "Gel polish, nail art and extension assistance under a senior artist.",
  },
  {
    id: "j5",
    title: "Beauty Trainer",
    company: "MMM Academy",
    location: "Raipur",
    experience: "5+ Years",
    type: "Full-time",
    posted: "5 days ago",
    summary: "Deliver makeup and hair batches, assessments and student mentoring.",
  },
  {
    id: "j6",
    title: "Beauty Content Creator",
    company: "Make Me Artist",
    location: "Remote / India",
    experience: "1-3 Years",
    type: "Freelance",
    posted: "1 day ago",
    summary: "Shoot and edit beauty reels, tutorials and before/after content.",
  },
  {
    id: "j7",
    title: "Salon Manager",
    company: "Kalpana Jeelani Academy",
    location: "Lucknow",
    experience: "3-5 Years",
    type: "Full-time",
    posted: "1 week ago",
    summary: "Manage daily operations, staff scheduling and client retention.",
  },
  {
    id: "j8",
    title: "Beauty Therapist",
    company: "Partner Salon Network",
    location: "Delhi NCR",
    experience: "1-3 Years",
    type: "Full-time",
    posted: "6 days ago",
    summary: "Facials, clean-ups and skin preparation services for salon clients.",
  },
];
