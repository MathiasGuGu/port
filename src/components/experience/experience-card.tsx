import { Experience } from "./experiences";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div
      key={experience.company}
      className="mb-4 border-b px-4 py-4 [&:last-child]:border-b-0"
    >
      <div className="w-full flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">{experience.date}</p>

        <h4 className="text-primary-light mb-2">{experience.company}</h4>
      </div>
      <ul className="list-disc list-outside text-muted-foreground px-4">
        {experience.points.map((point, idx) => (
          <li key={idx} className="mb-1">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
