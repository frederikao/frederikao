export const siteContent = {
  name: "Frederika Onofrejová",
  statement: "A life built with intention.",
  description:
    "The personal website of Frederika Onofrejová—finance leader, founder of HFF, and thoughtful observer of work, style, and intentional living.",
  siteUrl: "https://frederikaonofrejova.netlify.app",
  email: "frederikao@gmail.com",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "HFF", href: "/hff" },
    { label: "Notes", href: "/notes" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/frederikaonofrejova/",
    hffInstagram: "https://www.instagram.com/hautefroufrou",
  },
  professionalFocus: [
    "Finance leadership",
    "Financial planning and analysis",
    "Controllership",
    "International operations",
    "Forecasting and budgeting",
    "Executive reporting",
    "Business partnership",
    "Process improvement",
    "Governance and compliance",
  ],
  dimensions: [
    {
      number: "01",
      title: "Work",
      description:
        "Finance leadership where strategy, operations, planning, and accountability meet.",
      link: "/work",
      linkLabel: "View professional profile",
    },
    {
      number: "02",
      title: "HFF",
      description:
        "An editorial perspective on what is worth buying—and why.",
      link: "/hff",
      linkLabel: "Discover HFF",
    },
    {
      number: "03",
      title: "Life",
      description:
        "Homes, travel, family, and the quieter decisions that shape a well-considered life.",
      link: "/about",
      linkLabel: "Read my story",
    },
  ],
  locations: [
    { name: "Slovakia", description: "Where my story began." },
    {
      name: "Seattle",
      description: "Where work and everyday life currently meet.",
    },
    {
      name: "Malta",
      description: "A place tied to family, future, and another version of home.",
    },
  ],
  hffTopics: [
    "The psychology of a good find",
    "Intentional outfit building",
    "Luxury market intelligence",
  ],
} as const;

export type Note = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  paragraphs: string[];
};

// Development entries establish the notes architecture. Replace with final copy
// and verified publication dates before treating these as published articles.
export const notes: Note[] = [
  {
    slug: "finance-and-a-good-purchase",
    category: "Decisions",
    title: "What finance taught me about a good purchase",
    description:
      "A future note about value, trade-offs, and looking beyond the first number.",
    date: "Date forthcoming",
    readingTime: "Reading time forthcoming",
    paragraphs: [],
  },
  {
    slug: "three-places-called-home",
    category: "Places",
    title: "Three places, different meanings of home",
    description:
      "A future reflection on Slovakia, Seattle, Malta, and the meaning a place gathers over time.",
    date: "Date forthcoming",
    readingTime: "Reading time forthcoming",
    paragraphs: [],
  },
  {
    slug: "behind-the-visible-result",
    category: "Perspective",
    title: "The decisions behind the visible result",
    description:
      "A future note on the quiet work, judgment, and choices that precede a finished outcome.",
    date: "Date forthcoming",
    readingTime: "Reading time forthcoming",
    paragraphs: [],
  },
];
