import { technologiesList } from "./components/technologies";

export const TechnologiesList = () => {
  return (
    <section className="max-w-4xl flex  flex-col gap-4 items-start justify-start ">
      <h2 className="text-sm text-muted-foreground">
        Teknologiene jeg jobber med:
      </h2>
      <div className="w-full flex gap-x-3 gap-y-2 flex-wrap">
        {
          technologiesList.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center gap-2  h-auto border px-3 py-2 rounded-lg"
            >
              <span className="text-muted-foreground text-sm">{tech.name}</span>
            </div>
          ))
        }
      </div>
    </section>
  );
};
