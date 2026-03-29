import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
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
        "fixed bottom-5 right-5 sm:top-5 sm:bottom-auto z-50",
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/10",
        "bg-background/80 px-3 py-3 sm:px-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
        "text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:text-primary",
        "focus:outline-hidden focus:ring-2 focus:ring-primary/40"
      )}
    >
      {isDarkMode ? (
        <>
          <Sun className="h-5 w-5 text-yellow-300" />
          <span className="hidden sm:inline text-sm font-medium">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-5 w-5 text-sky-400" />
          <span className="hidden sm:inline text-sm font-medium">Dark</span>
        </>
      )}
    </button>
  );
};
