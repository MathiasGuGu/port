import { ProjectCard, projects } from "./components";
export const ProjectsList = () => {
  return (
    <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start ">
      <p className="text-base sm:text-lg text-muted-foreground">Prosjekter</p>
      <div className="w-full grid grid-cols-1 gap-4 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );

};
