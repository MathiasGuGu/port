export interface Education {
  school: string;
  date: string;
  points: string[];
}

export const education: Education[] = [
    {
      school: "Noroff School of Technology, Kristiansand",
      date: "2022 - 2024",
      points: [
        "Høyere vitenskaplig grad i Frontend Utvikling",
        "Gikk gjennom studiet med høye karakterer og utmerkelser",
        "Relevante fag: Frontend rammeverk, Versjonskontroll, Javascript & Typescript, CI/CD, Testing",
      ],
    }
];
