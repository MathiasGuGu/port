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
            <div className="bg-gradient-to-tr from-card-dark to-background-light p-[2px] rounded-lg">
              <div className="w-full p-2 rounded-lg sm:w-auto shadow-inner bg-gradient-to-tr from-card-dark to-background-light/20 border border-border">
                <span className="text-muted-foreground text-sm">{tech.name}</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};


