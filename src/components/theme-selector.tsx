import { Moon, Sun } from "lucide-react";
import { type UserTheme, useTheme } from "@/hooks/useTheme";
import { Button } from "./ui/button";

const themes: UserTheme[] = ["light", "dark"];

export function ThemeSelector() {
  const { userTheme, setTheme } = useTheme();

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t === userTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (userTheme) {
      case "light":
        return <Sun />;
      case "dark":
        return <Moon />;
      default:
        return <Moon />
    }
  };

  return (
    <Button
      variant="ghost"
      size={"icon"}
      onClick={(event) => {
        cycleTheme();
      }}
    >
      {getThemeIcon()}
    </Button>
  );
}
