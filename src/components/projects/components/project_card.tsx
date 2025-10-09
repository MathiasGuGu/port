import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProjectType } from "./projects";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useRef, RefObject } from "react";

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { x, y } = useMousePosition(cardRef as RefObject<HTMLElement> | null);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-tr relative isolate from-card-dark to-background-light overflow-hidden p-[4px] rounded-xl"
    >
      <div
        className="absolute left-0 top-0 bg-white/2 duration-50 rounded-full z-100 size-96 blur-3xl will-change-transform"
        style={{ transform: `translate(${x - 192}px, ${y - 192}px)` }}
      />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-48 bg-white/5 duration-50 rounded-full z-100 size-96 blur-3xl" />
      <Card className="w-full h-auto shadow-inner bg-gradient-to-tr from-card-dark from-50% to-background/40 border border-border">
        <CardHeader className="px-6 ml-1 flex items-center justify-between">
          <h3 className="text-3xl font-serif font-bold">{project.title}</h3>
          <p className="text-muted-foreground text-sm inline-block">
            {project.date}
          </p>
        </CardHeader>
        <CardContent className="px-6">
          <p className="text-muted-foreground text-base ml-1 mb-2 text-balance">
            {project.description}
          </p>
          <div className="flex gap-2 mb-2 flex-wrap mt-4">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant={"outline"}
                className="text-xs text-muted-foreground bg-background"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2 ml-1 z-100">
          {project.isGithub && (
            <div className="bg-gradient-to-tr dark:from-primary/50 from-primary to-primary-light dark:to-primary-light p-[2px] rounded-lg">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-tr from-primary to-primary/40 border border-primary shadow-inner"
              >
                <a href={project.githubUrl}>Github repo</a>
              </Button>
            </div>
          )}
          {project.isLive && (
            <div className="bg-gradient-to-tr from-card-dark to-background-light p-[2px] rounded-lg">
              <Button
                asChild
                size="lg"
                variant={"secondary"}
                className="w-full shadow-inner sm:w-auto bg-gradient-to-tr from-card-dark to-background-light/20 border border-border"
              >
                <a href={project.projectUrl}>Live nettside</a>
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
