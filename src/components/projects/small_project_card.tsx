import { useState } from "react";
import { Card } from "../ui/card";
import { ProjectType } from "./projects";
import { ProjectModal } from "./project_modal";

export const SmallProjectCard = ({ project }: { project: ProjectType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="aspect-square shadow-none p-0 border relative isolate cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full aspect-square rounded-xl bg-accent relative">
          <img
            src={project.imageUrl[0].url}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </Card>
      
      <ProjectModal 
        project={project}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};
