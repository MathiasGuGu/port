import AboutMe from "@/components/about/about-me";
import { ProjectsList } from "@/components/projects/projects_list";
import { TechnologiesList } from "@/components/technologies/technologies_list";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="bg-background max-w-screen overflow-x-hidden flex flex-col items-center justify-start w-screen h-auto gap-y-24">
      <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start">
        <h1 className="text-center text-4xl font-bold font-mono">
          Fullstack utvikler
        </h1>
        <p className="text-muted-foreground max-w-3xl text-balance">
          Hei! Mitt navn er Mathias, jeg er 23 år gammel, er fra Stavanger og er fullstack utvikler.
        </p>
        <div className="flex flex-row gap-4 items-center justify-start w-full mt-6">
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto"
          >
            <a href="/cv-27_08_25.pdf" download="Mathias_Grytnes_CV.pdf">
              last ned CV
            </a>
          </Button>
          <Button size="lg" variant={"outline"} className="w-full sm:w-auto">
            Se mine prosjekter
          </Button>
        </div>
      </section>
      <TechnologiesList />
      <AboutMe />
      <ProjectsList />
      <footer className="w-full h-32"></footer>
    </div>
  );
}
