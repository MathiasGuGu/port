import { ProjectCard } from "./project_card";
import { projects, smallProjects } from "./projects";
import { SmallProjectCard } from "./small_project_card";

export const ProjectsList = () => {
  return (
    <section className="max-w-6xl flex flex-col gap-4 items-start justify-start text-start w-full pt-12 sm:pt-16 lg:pt-24 mb-12 sm:mb-16 lg:mb-24 px-2 sm:px-6 lg:px-8">
      <p className="text-base sm:text-lg">Prosjekter</p>
      <p className="text-muted-foreground text-sm sm:text-base">
        Dessverre er ikke alle prosjektene lenger tilgjengelig
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <p className="text-sm text-muted-foreground pt-4 sm:pt-6">
        Andre prosjekter
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {smallProjects.map((project) => (
          <SmallProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
