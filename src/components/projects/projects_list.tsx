import { Card, CardContent, CardFooter } from "../ui/card";
import { ProjectCard, projects } from "./components";
import forge from "../../../public/forge_image.png";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

export const ProjectsList = () => {
  return (
    <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start overflow-x-hidden">
      <p className="text-lg text-muted-foreground">Prosjekter</p>
      <div className="mb-12">
        <Card className="p-0 py-0 overflow-hidden">
          <CardContent className="p-0 overflow-hidden">
            <img
              src={forge}
              alt="Forge frontpage"
              className=" zoom-out-90 object-cover"
            />
          </CardContent>
        </Card>
        <div className="flex flex-col gap-2 px-8 py-8 ">
          <p className="text-4xl font-bold font-serif">Forge</p>
          <p className="text-muted-foreground text-sm">A smart task manager</p>
          <p className="text-muted-foreground">
            Forge er en smart task-manager med fillagring i skyen, smart søk med
            typesense + tags og smarte løsninger for en bedre brukeropplevelse.
            Nysgjerrig? Prøv den:
          </p>
          <Button asChild variant={"link"} className="w-fit border mt-4">
            <a
              className="flex items-center px-0 gap-2 text-primary-light"
              href="https://forge.mathiasgumpen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              forge.mathiasgumpen.com <ExternalLink />
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 gap-4 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
