import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProjectType } from "./projects";
import { createLink } from "@tanstack/react-router";

const LinkButton = createLink(Button);

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="w-full h-auto shadow-none bg-gradient-to-tr from-card to-card-light">
      <CardHeader className="px-6 ml-1">
        <h3 className="text-2xl font-mono font-bold">{project.title}</h3>
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-muted-foreground text-base ml-1 mb-2 text-balance">{project.description}</p>
        <div className="flex gap-2 mb-2 flex-wrap mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant={"outline"} className="text-xs text-muted-foreground bg-background">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2 ml-1">
        <LinkButton to="/" className="w-full sm:w-auto">Gå til Github repo</LinkButton>
        <LinkButton to="/" variant={"outline"} className="w-full sm:w-auto">
          Se live nettside
        </LinkButton>
      </CardFooter>
    </Card>
  );
};
