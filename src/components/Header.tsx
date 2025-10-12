import { createLink } from "@tanstack/react-router";
import { Button } from "./ui/button";
// import { ThemeSelector } from "./theme-selector";

export const ButtonLink = createLink(Button);

export const navLinks = [
  {
    to: "/",
    label: "Forside",
  },
  {
    to: "/blogg",
    label: "Blogg",
  },
];

export default function Header() {
  return (
    <header className="w-full max-w-screen mb-12 md:mb-24 z-100 h-18 z-10 text-foreground flex items-center justify-center">
      <nav className="w-full flex items-end justify-end max-w-4xl z-20">
        {/* {navLinks.map((link) => {
          return (
            <ButtonLink variant="ghost" to={link.to}>
              {link.label}
            </ButtonLink>
          );
        })} */}
        {/* <ThemeSelector /> */}
      </nav>
    </header>
  );
}
