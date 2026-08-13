import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ compact = false }) => {
  const [theme, setTheme] = useState(
    () => (typeof window !== "undefined" && localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme !== "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";
  const size = compact ? "h-8 w-8" : "h-9 w-9";

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      className={`inline-flex items-center justify-center rounded-lg transition-colors hover:bg-[var(--surface-2)] ${size}`}
      style={{ color: "var(--fg)" }}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
