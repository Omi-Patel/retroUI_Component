import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Add or remove the 'dark' class on the body based on the current theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="">
      <div className="flex items-center space-x-4">
        {/* <span className="font-bold">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span> */}

        {/* Switch Container */}
        <div
          onClick={toggleTheme}
          className={`relative w-14 h-8 p-1 bg-gray-200 dark:bg-gray-700 border-2 border-black rounded-full cursor-pointer
        shadow-[2px_2px_0px_0px_black] transition-all duration-300 ease-in-out`}
        >
          {/* Switch Knob */}
          <div
            className={`w-6 h-6 bg-white dark:bg-yellow-500 border-2 border-black rounded-full 
          absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
