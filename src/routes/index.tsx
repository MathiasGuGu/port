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
          Fullstack utvikler | Systemutvikler
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-2 [&:not(:last-child)]:mb-2 text-muted-foreground max-w-3xl text-balance text-sm sm:text-base">
          Mitt navn er Mathias, jeg er en 23 år gammel systemutvikler fra
          Stavanger. Jeg er en fullstack utvikler som fokuserer på frontend
          teknologier som react, nextjs og typescript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-start w-full sm:w-auto">
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
      <ProjectsList />
    </div>
  );
}
