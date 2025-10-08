const Tech = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-block underline text-primary-light">{children}</div>
  );
};

export default function AboutMe() {
  return (
    <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start text-muted-foreground">
      <h2 className="text-2xl text-foreground">Om meg</h2>
      <p className="">
        Mitt navn er Mathias, jeg er 23 år gammel og kommer fra Stavanger. Jeg
        begynte å lage hobby applikasjoner og nettsider da jeg var 18 år gammel.
        Dette førte meg videre til en høyere vitenskaplig utdanning i frontend
        utvikling. Jeg har siden utdanningen brukt mye av tiden min på å fordype
        meg i <Tech>web- utvikling</Tech>, <Tech>infrastruktur</Tech>,
        <Tech>distribuerte systemer</Tech> og <Tech>backend utvikling</Tech>.
      </p>
      <p>
        Jeg er en Typescript utvikler by heart, men eksperimenterer mye med
        andre teknologier som <Tech>go</Tech>, <Tech>c#</Tech>, <Tech>c++</Tech>
      </p>
      <p>
        Jeg har erfaring med en rekke rammeverk, biblioteker og verktøy som{" "}
        <Tech>React</Tech>, <Tech>Svelte</Tech>, <Tech>Vue</Tech>,{" "}
        <Tech>Remix</Tech>, <Tech>Astro</Tech> og <Tech>Next.js</Tech> for
        frontend utvikling. Jeg er absolutt ikke ekspert på alle. Det jeg har
        jobbet mest med og er utrolig komfortabel med er React + Next.js.
      </p>
    </section>
  );
}
