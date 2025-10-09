import BlogList from "@/components/blog/blog-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-background px-4 max-w-screen flex flex-col items-center justify-start w-screen h-auto gap-y-24 overflow-x-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 -top-[600px] bg-white/5 duration-50 rounded-full z-100 w-[30vw] md:w-[50vw] aspect-square blur-3xl" />
      <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start">
        <h1 className="text-start uppercase text-6xl font-bold text-foreground">
          Blogg
        </h1>
        <p className="text-muted-foreground max-w-3xl text-balance">
          Av og til legger jeg ut innhold om teknologier, nyheter og prosjekter.
        </p>
      </section>
      <section className="max-w-4xl w-full flex  flex-col gap-4 items-start justify-start">
        <BlogList />
      </section>
      {/* <footer className="w-full h-32 flex flex-col items-center justify-center gap-4">
        <div className=" text-muted-foreground text-sm flex items-center justify-center">
          Takk!
        </div>
        <div className=" text-muted-foreground text-sm flex items-center justify-center">
          Sist Oppdatert{" "}
          {new Date().toLocaleDateString("no-NO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </footer> */}
    </div>
  );
}
