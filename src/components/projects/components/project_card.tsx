import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProjectType } from "./projects";
import { createLink } from "@tanstack/react-router";

const LinkButton = createLink(Button);

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
  <div className="bg-gradient-to-tr from-card-dark to-background-light p-[4px] rounded-xl">
    <Card className="w-full h-auto shadow-inner bg-gradient-to-tr from-card-dark from-50% to-background/40 border border-border">
      <CardHeader className="px-6 ml-1 flex items-center justify-between">
        <h3 className="text-2xl font-mono font-bold">{project.title}</h3>
        <p className="text-muted-foreground text-sm inline-block">{project.date}</p>
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
        {project.isGithub && (
           <div className="bg-gradient-to-tr dark:from-primary/50 from-primary to-primary-light dark:to-primary-light p-[2px] rounded-lg">
           <LinkButton
              to="/"
             size="lg"
             className="w-full sm:w-auto bg-gradient-to-tr from-primary to-primary/40 border border-primary shadow-inner"
           >
               Se Github repo
           </LinkButton>
           </div>
        )}
        {project.isLive && (
          <div className="bg-gradient-to-tr from-card-dark to-background-light p-[2px] rounded-lg">
          <LinkButton to="/" size="lg" variant={"secondary"} className="w-full shadow-inner sm:w-auto bg-gradient-to-tr from-card-dark to-background-light/20 border border-border">
            Se live nettside
          </LinkButton>
        </div>
        )}
      </CardFooter>
    </Card>
  </div>
  );
};
