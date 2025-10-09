import { Education } from "./education";

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div
      key={education.school}
      className="mb-4 border-b px-4 py-4 [&:last-child]:border-b-0"
    >
      <div className="w-full flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">{education.date}</p>
        <h3 className=" text-primary-light mb-2">{education.school}</h3>
      </div>
      <ul className="list-disc list-outside text-muted-foreground px-4">
        {education.points.map((point, idx) => (
          <li key={idx} className="mb-1">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
