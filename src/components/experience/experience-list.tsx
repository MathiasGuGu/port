import ExperienceCard from "./experience-card";
import { experience } from "./experiences";

const ExperienceList = () => {
  return (
    <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start rounded-lg">
      <h1 className="text-start text-xl text-foreground">Erfaring</h1>
      <div className="w-full h-auto flex flex-col border border-border py-2">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
