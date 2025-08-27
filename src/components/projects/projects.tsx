export type projectImage = Array<{
  url: string;
  alt: string;
  description?: string;
}>;

export type ProjectType = {
  title: string;
  description: string;
  imageUrl: projectImage;
  projectUrl?: string;
  githubUrl?: string;
  tags: string[];
};

export const projects: ProjectType[] = [
  {
    title: "Kulien",
    description:
      "Fullstack forretningsnettside for lokalt gartneri. Økte Google synlighet og leverte dynamisk innholdsadministrasjon med moderne tech stack.",
    imageUrl: [{ url: "/kulien/kulien.webp", alt: "", description: "" }],
    tags: ["React", "TypeScript", "Sanity", "Vercel", "Next.js", "TailwindCss"],
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "Holidaze",
    description:
      "Skalerbar bookingtjeneste med søk, filtrering og reservasjonsfunksjonalitet. Fokus på ytelse og brukervennlighet med moderne state management og API-håndtering.",
    imageUrl: [
      { url: "/holidaze/holidaze.webp", alt: "", description: "" },
      { url: "/holidaze/holidaze-browse.webp", alt: "", description: "" },
    ],
    tags: ["React, Next.js", "Zustand", "Api", "TailwindCss", "Tanstack Query"],
    githubUrl: "",
    projectUrl: "https://bookatholidaze.netlify.app/",
  },
  {
    title: "PracAi",
    description:
      "AI-drevet intervjutrening med OpenAI GPT-integrasjon. Automatisk vurdering og tilbakemelding på tekniske og intervjuspørsmål.",
    imageUrl: [{ url: "", alt: "", description: "" }],
    tags: [
      "Tanstack Start",
      "Postgres",
      "Drizzle-orm",
      "TailwindCss",
      "React",
      "Docker",
    ],
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "Renote",
    description:
      "Høy-ytelse AI Notion-wrapper med automatisk synkronisering og spørsmålsgenerering. Bygget for skalerbarhet med avansert arkitektur og moderne teknologier.",
    imageUrl: [
      { url: "/renote/renote.webp", alt: "", description: "" },
      { url: "/renote/renote-integration.webp", alt: "", description: "" },
      { url: "/renote/renote-questions.webp", alt: "", description: "" },
    ],
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
    githubUrl: "",
    projectUrl: "",
  },
];

export const smallProjects: ProjectType[] = [
  {
    title: "Coolors",
    description:
      "Coolors er en fargepalett generator. Alle fargene generert er WCAG AAA godkjent og fargene bruker fargeteori til å lage fargepaletter som ser bra ut sammen.",
    imageUrl: [
      { url: "/coolors/coolors.webp", alt: "", description: "" },
      { url: "/coolors/coolors-select.webp", alt: "", description: "" },
    ],
    tags: ["Svelte", "TypeScript", "WCAG"],
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "Biddify",
    description:
      "Biddify er en fiktiv auksjonsplattform for studenter. Applikasjonen bruker ett API gitt av Noroff. Brukere kan legge ut ting for auksjon, by på ting og se sine aktive auksjoner.",
    imageUrl: [
      { url: "/biddify/biddify.webp", alt: "", description: "" },
      { url: "/biddify/biddify-bid.webp", alt: "", description: "" },
    ],
    tags: ["Javascript", "CSS", "HTML"],
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "Artgal",
    description:
      "Artgal er en enkel kunst blog som ble laget på første året på Noroff (3 år siden). Nettsiden er en super enkel Blog med innholdssider, søkefunksjonalitet og en kontakt side.",
    imageUrl: [{ url: "/artgal/artgal.webp", alt: "", description: "" }],
    tags: ["Javascript", "CSS", "HTML"],
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "frontinspo",
    description:
      "Frontinspo er en inspirasjons side for frontend utviklere. Siden innholder mange kilder til inspirasjon, eksempler og fargepaletter. Nettsiden har filtrering, søkefunksjonalitet og autentikasjon.",
    imageUrl: [
      { url: "/frontinspo/frontinspo.webp", alt: "", description: "" },
    ],
    tags: ["React", "TypeScript", "TailwindCss", "HTML"],
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "ella",
    description:
      "Ella er en samarbeids applikasjon for enkelt utviklere og kundene dere. Ella var en platform hvor brukerne lastet opp bilder og tekst dokumenter som de kunne dele med andre brukere på samme prosjekt.",
    imageUrl: [
      { url: "/ella/ella.webp", alt: "", description: "" },
      { url: "/ella/ella-upload.webp", alt: "", description: "" },
    ],
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
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "quill",
    description:
      "Quill er en AI drevet applikasjon som lar brukeren ha samtaler med PDF-dokumentene deres. Applikasjonen bruke pinecone til å lagre vektoriserte dokumenter og OpenAi til å svare på spørsmålene brukeren har om dokumentet.",
    imageUrl: [{ url: "/quill/quill.webp", alt: "", description: "" }],
    tags: [
      "Next.js",
      "TailwindCss",
      "PineconeDb",
      "OpenAi",
      "postgresql",
      "ClerkJs",
    ],
    githubUrl: "",
    projectUrl: "",
  },
  {
    title: "sushi",
    description:
      "Sushi er en kvitterings skanner applikasjon. Applikasjonen bruke OpenAi vision til å analysere tekst i bilder av kvitteringer og deretter lagre informasjonen i en database. Dataen ble kategorisert, analysert og visualisert for brukeren.",
    imageUrl: [
      { url: "/sushi/sushi.webp", alt: "", description: "" },
      { url: "/sushi/sushi-receipt.webp", alt: "", description: "" },
    ],
    tags: [""],
    githubUrl: "",
    projectUrl: "",
  },
];
