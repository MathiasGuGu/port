import ExperienceCard from "./education-card";
import { education } from "./education";
const EducationList = () => {
  return (
    <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start rounded-lg">
      <h3 className="text-start text-lg text-muted-foreground">Utdanning</h3>
      <div className="w-full h-auto flex flex-col border border-border py-2">
        {education.map((exp, index) => (
          <ExperienceCard key={index} education={exp} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
