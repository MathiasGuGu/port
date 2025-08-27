import { createLink, Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { ThemeSelector } from "./theme-selector";

export const ButtonLink = createLink(Button);

export const navLinks = [
  {
    to: "/#dashboard",
    label: "Om meg",
    iconColor: "text-blue-500",
  },

  {
    to: "/#practice",
    label: "Teknologi",
    iconColor: "text-green-500",
  },
  {
    to: "/#about",
    label: "Egenskaper",
    iconColor: "text-yellow-500",
  },
];

export default function Header() {
  return (
    <header className="w-full h-18 bg-background text-foreground flex items-center justify-end px-2 sm:px-6 lg:px-8">
      <nav className="w-full max-w-6xl flex items-end justify-end sm:justify-center">
        <ul className="flex gap-4 items-center justify-center">
          {navLinks.map((link) => {
            return (
              <li key={link.to} className="hidden sm:block">
                <ButtonLink variant="ghost" to={link.to}>
                  {link.label}
                </ButtonLink>
              </li>
            );
          })}
          <ThemeSelector />
        </ul>
      </nav>
    </header>
  );
}
