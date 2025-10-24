import AboutMe from "@/components/about/about-me";
import GithubLinkButton from "@/components/buttons/github-link-button";
import LinkedinLinkButton from "@/components/buttons/linkedin-link-button";
import Contact from "@/components/contact/Contact";
import EducationList from "@/components/education/education-list";
import ExperienceList from "@/components/experience/experience-list";
import { ProjectsList } from "@/components/projects/projects_list";
import { TechnologiesList } from "@/components/technologies/technologies_list";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className=" px-4 max-w-screen flex flex-col items-center justify-start w-screen h-auto gap-y-24 overflow-x-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 -z-10  -top-[600px] bg-white/5 duration-50 rounded-full w-[30vw] md:w-[50vw] aspect-square blur-3xl" />
      <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start">
        <h1 className="text-start uppercase text-6xl font-bold text-foreground">
          Fullstack utvikler
        </h1>
        <p className="text-muted-foreground max-w-3xl text-balance">
          React og Typescript utvikler med stor interesse for systemer og
          systemutvikling.
        </p>
        <div className="flex flex-row gap-2 items-center justify-start w-full mt-6">
          <div className="bg-gradient-to-tr dark:from-primary/50 from-primary to-primary-light dark:to-primary-light p-[2px] rounded-lg">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-gradient-to-tr from-primary to-primary/40 border border-primary shadow-inner"
            >
              <a href="/Resume2.pdf" download="CV_mathias_gumpen.pdf">
                Last ned CV
              </a>
            </Button>
          </div>
          <GithubLinkButton />
          <LinkedinLinkButton />
        </div>
      </section>
      <TechnologiesList />
      <AboutMe />
      <ProjectsList />
      <EducationList />
      <ExperienceList />
      <Contact />
      <footer className="w-full h-auto min-h-32 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-4">
          <GithubLinkButton />
          <LinkedinLinkButton />
        </div>
        <div className=" text-muted-foreground text-sm flex items-center justify-center">
          Sist Oppdatert{" "}
          {new Date().toLocaleDateString("no-NO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className=" text-muted-foreground text-sm flex items-center justify-center">
          Color theme er Supabase fra
          <Button
            asChild
            variant={"link"}
            className="text-primary-light inline-flex items-center justify-center"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tweakcn.com/editor/theme"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link-icon lucide-external-link"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
              Tweakcn.com
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
}
