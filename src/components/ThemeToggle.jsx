import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;

    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true;
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10",
        "bg-background/80 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
        "text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary",
        "focus:outline-hidden focus:ring-2 focus:ring-primary/40",
        className
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-sky-400" />
      )}
    </button>
  );
};
