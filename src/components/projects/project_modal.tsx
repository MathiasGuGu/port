import { createLink } from "@tanstack/react-router";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ProjectType } from "./projects";

const LinkButton = createLink(Button);

interface ProjectModalProps {
  project: ProjectType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectModal = ({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto p-2 sm:p-6 lg:p-8 w-[95vw] sm:w-full">
        <DialogHeader className="space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="w-full aspect-video bg-accent rounded-xl relative overflow-hidden shadow-lg">
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

          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-left px-0 sm:px-2">
            <DialogTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight capitalize">
              {project.title}
            </DialogTitle>

            <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-wrap">
              {project.tags
                .filter((tag) => tag)
                .map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>

            {project.description && (
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl">
                {project.description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6">
              {project.githubUrl && (
                <LinkButton to="/" size="lg" className="px-6 py-2 sm:px-8 sm:py-3 w-full sm:w-auto">
                  View Github
                </LinkButton>
              )}
              {project.projectUrl && (
                <LinkButton
                  to="/"
                  variant="outline"
                  size="lg"
                  className="px-6 py-2 sm:px-8 sm:py-3 w-full sm:w-auto"
                >
                  See live project
                </LinkButton>
              )}
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
