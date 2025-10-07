import { createLink } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { ThemeSelector } from "./theme-selector";

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
    <header className="w-full max-w-screen mb-12 md:mb-24 h-18 text-foreground flex items-center justify-end px-2 sm:px-6 lg:px-12">
      <nav className="w-full flex items-end justify-end ">
          {navLinks.map((link) => {
            return (
                <ButtonLink variant="ghost" to={link.to}>
                  {link.label}
                </ButtonLink>
            );
          })}
          <ThemeSelector />
      </nav>
    </header>
  );
}
