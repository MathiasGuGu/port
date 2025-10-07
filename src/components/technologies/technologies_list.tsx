import { technologiesList } from "./components/technologies";

export const TechnologiesList = () => {
  return (
    <section className="max-w-4xl flex  flex-col gap-4 items-start justify-start w-full">
      <h2 className="text-muted-foreground">
        Teknologiene jeg jobber med:
      </h2>
      <div className="w-full items-start  grid grid-cols-5 gap-2 ">
        {
          technologiesList.map((tech) => (
            <div
              key={tech.name}
              className="flex bg-gradient-to-tr from-card to-card-light items-center justify-center gap-2  h-auto border px-3 py-2 rounded-lg"
            >
              <span className="text-muted-foreground text-sm">{tech.name}</span>
            </div>
          ))
        }
      </div>
    </section>
  );
};


