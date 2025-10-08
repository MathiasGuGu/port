export type projectImage = Array<{
  url: string;
  alt: string;
  description?: string;
}>;

export type ProjectType = {
  title: string;
  description: string;
  projectUrl?: string;
  githubUrl?: string;
  isLive: boolean;
  isGithub: boolean;
  tags: string[];
  date: string;
};

export const projects: ProjectType[] = [
  {
    title: "Kulien",
    description:
      "Fullstack forretningsnettside for lokalt gartneri. Økte Google synlighet og leverte dynamisk innholdsadministrasjon med moderne tech stack.",
    tags: ["React", "TypeScript", "Sanity", "Vercel", "Next.js", "TailwindCss"],
    githubUrl: "",
    projectUrl: "https://kulien.no/",
    isLive: true,
    isGithub: false,
    date: "1. Januar 2025",
  },
  {
    title: "Holidaze",
    description:
      "Skalerbar bookingtjeneste med søk, filtrering og reservasjonsfunksjonalitet. Fokus på ytelse og brukervennlighet med moderne state management og API-håndtering.",

    tags: [
      "React",
      "Next.js",
      "Zustand",
      "Api",
      "TailwindCss",
      "Tanstack Query",
    ],
    githubUrl: "https://github.com/MathiasGuGu/Holidaze",
    projectUrl: "https://bookatholidaze.netlify.app/",
    isLive: true,
    isGithub: true,
    date: "10. April 2024",
  },
  {
    title: "Renote",
    description:
      "Høy-ytelse AI Notion-wrapper med automatisk synkronisering og spørsmålsgenerering. Bygget for skalerbarhet med avansert arkitektur og moderne teknologier.",

    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCss",
      "OpenAi",
      "BullMQ",
      "Sqlite",
      "Cloudflare Workers",
      "Redis",
      "Zustand",
      "Tanstack Query",
      "OAuth",
    ],
    githubUrl: "https://github.com/MathiasGuGu/renote",
    projectUrl: "",
    isLive: false,
    isGithub: true,
    date: "4. April 2025",
  },
  {
    title: "Coolors",
    description:
      "Coolors er en fargepalett generator. Alle fargene generert er WCAG AAA godkjent og fargene bruker fargeteori til å lage fargepaletter som ser bra ut sammen.",

    tags: ["Svelte", "TypeScript", "WCAG"],
    githubUrl: "https://github.com/MathiasGuGu/colors",
    projectUrl: "",
    isLive: false,
    isGithub: true,
    date: "2. Februar 2024",
  },
  {
    title: "Biddify",
    description:
      "Biddify er en fiktiv auksjonsplattform for studenter. Applikasjonen bruker ett API gitt av Noroff. Brukere kan legge ut ting for auksjon, by på ting og se sine aktive auksjoner.",

    tags: ["Javascript", "CSS", "HTML"],
    githubUrl: "https://github.com/MathiasGuGu/exam-winter-2024",
    projectUrl: "funny-hotteok-1ffc10.netlify.app",
    isLive: true,
    isGithub: true,
    date: "12. Desember 2023",
  },

  {
    title: "Ella",
    description:
      "Ella er en samarbeids applikasjon for enkelt utviklere og kundene dere. Ella var en platform hvor brukerne lastet opp bilder og tekst dokumenter som de kunne dele med andre brukere på samme prosjekt.",

    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCss",
      "PostgreSQL",
      "AWS S3",
      "OpenAi",
      "Trpc",
      "Zustand",
    ],
    githubUrl: "https://github.com/MathiasGuGu/Ella",
    projectUrl: "",
    isLive: false,
    isGithub: true,
    date: "1. Mars 2025",
  },
  {
    title: "Quill",
    description:
      "Quill er en AI drevet applikasjon som lar brukeren ha samtaler med PDF-dokumentene deres. Applikasjonen bruke pinecone til å lagre vektoriserte dokumenter og OpenAi til å svare på spørsmålene brukeren har om dokumentet.",
    tags: [
      "Next.js",
      "TailwindCss",
      "PineconeDb",
      "OpenAi",
      "postgresql",
      "ClerkJs",
    ],
    githubUrl: "https://github.com/MathiasGuGu/pdfreader",
    projectUrl: "",
    isLive: false,
    isGithub: true,
    date: "10. Oktober 2024",
  },
];
