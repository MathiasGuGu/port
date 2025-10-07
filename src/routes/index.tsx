import AboutMe from "@/components/about/about-me";
import { ProjectsList } from "@/components/projects/projects_list";
import { TechnologiesList } from "@/components/technologies/technologies_list";
import { Button } from "@/components/ui/button";
import { createFileRoute, createLink } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

const ButtonLink = createLink(Button);

function App() {
  return (
    <div className="bg-background px-4 max-w-screen overflow-x-hidden flex flex-col items-center justify-start w-screen h-auto gap-y-24">
      <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start">
        <h1 className="text-start text-6xl font-bold font-serif">
          Fullstack utvikler
        </h1>
        <p className="text-muted-foreground max-w-3xl text-balance">
          Hei! Mitt navn er Mathias, jeg er 23 år gammel, er fra Stavanger og er
          fullstack utvikler.
        </p>
        <div className="flex flex-row gap-2 items-center justify-start w-full mt-6">
          <div className="bg-gradient-to-tr dark:from-primary/50 from-primary to-primary-light dark:to-primary-light p-[2px] rounded-lg">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-gradient-to-tr from-primary to-primary/40 border border-primary shadow-inner"
            >
              <a href="/cv-27_08_25.pdf" download="Mathias_Grytnes_CV.pdf">
                Last ned CV
              </a>
            </Button>
          </div>
          <div className="bg-gradient-to-tr from-card-dark to-background-light p-[2px] rounded-lg">
            <ButtonLink
              to="/"
              size="lg"
              variant={"secondary"}
              className="w-full shadow-inner sm:w-auto bg-gradient-to-tr from-card-dark to-background-light/20 border border-border"
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
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </ButtonLink>
          </div>
          <div className="bg-gradient-to-tr from-card-dark to-background-light p-[2px] rounded-lg">
            <ButtonLink
              to="/"
              size="lg"
              variant={"secondary"}
              className="w-full sm:w-auto shadow-inner bg-gradient-to-tr from-card-dark to-background-light/20 border border-border"
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
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </ButtonLink>
          </div>
        </div>
      </section>
      <TechnologiesList />
      {/* <AboutMe /> */}
      <ProjectsList />
      <footer className="w-full h-32 flex flex-col items-center justify-center gap-4">
        <div className=" text-muted-foreground text-sm flex items-center justify-center">
          Color theme is Supabase from
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
        <div className=" text-muted-foreground text-sm flex items-center justify-center">
          Last updated{" "}
          {new Date().toLocaleDateString("no-NO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </footer>
    </div>
  );
}
