import { createLink } from "@tanstack/react-router";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ProjectType } from "./projects";

const LinkButton = createLink(Button);

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="w-full h-auto min-h-80 sm:min-h-96 pt-0">
      <div className="w-full aspect-video bg-accent rounded-xl relative overflow-hidden">
        <Carousel opts={{ loop: true }} className="w-full h-full isolate">
          <CarouselContent className="h-full -ml-0">
            {project.imageUrl.map((image, index) => (
              <CarouselItem key={index} className="pl-0 h-full">
                <img
                  src={image.url}
                  alt={image.alt || project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="right-12 sm:right-16 bottom-4 z-100 top-auto translate-y-0 left-auto w-8 h-8 sm:w-10 sm:h-10" />
          <CarouselNext className="right-2 sm:right-4 bottom-4 top-auto translate-y-0 left-auto w-8 h-8 sm:w-10 sm:h-10" />
        </Carousel>
      </div>
      <CardHeader className="p-2 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <Badge key={tag} variant={"outline"} className="text-xs sm:text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
      </CardContent>
      <CardFooter className="gap-2 p-2 sm:p-6 flex-col sm:flex-row">
        <LinkButton to="/" className="w-full sm:w-auto">View Github</LinkButton>
        <LinkButton to="/" variant={"outline"} className="w-full sm:w-auto">
          See live project
        </LinkButton>
      </CardFooter>
    </Card>
  );
};
