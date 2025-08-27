import { technologiesList } from "./technologies";

export const TechnologiesList = () => {
  return (
    <section className="max-w-6xl flex flex-col gap-4 items-start justify-start text-start w-full pt-12 sm:pt-16 lg:pt-24 px-2 sm:px-6 lg:px-8">
      <h2 className="text-sm text-muted-foreground">
        Teknologiene jeg jobber med:
      </h2>
      <div className="w-full flex gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4 items-center justify-start flex-wrap">
        {
          /* Technologies I work with */
          technologiesList.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 h-auto border px-3 py-2 sm:px-4 rounded-lg"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 [&>svg]:w-full [&>svg]:h-full">
                {tech.icon}
              </div>
              <span className="text-muted-foreground text-sm sm:text-base">{tech.name}</span>
            </div>
          ))
        }
      </div>
    </section>
  );
};
