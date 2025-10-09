export interface Experience {
  company: string;
  date: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: "Kulien ANS",
    date: "2024 - 2025",
    points: [
      "Leverte produksjonsklar nettside fra planlegging til lansering, med gjennomsnittlig PageSpeed-score på 95+ og lastetider under 2 sekunder",
      "Økte Google-synlighet for Kulien ANS med 400% gjennom SEO-optimalisert landingsside, semantisk HTML og responsiv design med 98% mobilbrukbarhetsscore",
      "Implementerte brukervennlig CMS (Sanity) som reduserte oppdateringstid for innhold",
      "Bygget moderne teknologi-stack ved bruk av Next.js, TypeScript, Tailwind CSS og Vercel for optimal ytelse og skalerbarhet"
    ],
  },
  {
    company: "Norkart AS",
    date: "2024 - 2025",
    points: [
      "Utviklet MeldAvvik-plattform som gjør det mulig for innbyggere å rapportere infrastrukturproblemer til kommuner",
      "Bygget responsivt kommunedashboard med avansert filtrering, interaktive kart og sorterbare datavisninger",
      "Utviklet tilgjengelig innbyggerapplikasjon med bildeopplasting, smart kategorisering og GPS-geolokalisering",
      "Utviklet fullstack-løsning ved bruk av React/TypeScript-frontend, C\# .NET backend REST API og Azure AI-tjenester for automatisert problemklassifisering",
      "Samarbeidet med tverrfaglig team (designer, produkteier) i Agile-sprinter, bidro til arkitekturbeslutninger som forbedret API"
    ],
  },
];
