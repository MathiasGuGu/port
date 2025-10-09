export interface Experience {
  company: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: "Kulien",
    points: [
      "Utviklet en fullstack forretningsnettside for et lokalt gartneri, som økte deres synlighet på Google betydelig.",
      "Implementerte dynamisk innholdsadministrasjon ved hjelp av Sanity, noe som gjorde det enkelt for klienten å oppdatere nettsiden selv.",
      "Brukte en moderne tech stack inkludert React, TypeScript, Next.js, TailwindCSS og Vercel for å sikre en rask og responsiv brukeropplevelse.",
    ],
  },
  {
    company: "Norkart AS",
    points: [
      "Bidro til utviklingen av en skalerbar bookingtjeneste med avanserte søke- og filtreringsfunksjoner, samt reservasjonsfunksjonalitet.",
      "Fokuserte på ytelse og brukervennlighet ved å implementere moderne state management med Zustand og effektiv API-håndtering med Tanstack Query.",
      "Brukte teknologier som React, Next.js og TailwindCSS for å bygge en intuitiv og responsiv brukergrensesnitt.",
    ],
  },
  {
    company: "Freelance",
    points: [
      "Bidro til utviklingen av en skalerbar bookingtjeneste med avanserte søke- og filtreringsfunksjoner, samt reservasjonsfunksjonalitet.",
      "Fokuserte på ytelse og brukervennlighet ved å implementere moderne state management med Zustand og effektiv API-håndtering med Tanstack Query.",
      "Brukte teknologier som React, Next.js og TailwindCSS for å bygge en intuitiv og responsiv brukergrensesnitt.",
    ],
  },
];
