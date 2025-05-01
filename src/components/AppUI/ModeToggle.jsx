"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Zap } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isHovering, setIsHovering] = useState(false);

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
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className="relative"
    >
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center w-12 h-7 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out overflow-hidden"
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {/* Track */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 dark:from-cyan-700 dark:to-teal-900 opacity-20"></div>

        {/* Knob */}
        <motion.div
          className="absolute top-1/2 w-5 h-5 rounded-full border-2 border-black dark:border-white bg-white dark:bg-gray-800 flex items-center justify-center z-10"
          initial={false}
          animate={{
            x: theme === "dark" ? 10 : -10,
            y: "-50%",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {theme === "dark" ? (
            <Moon className="w-3 h-3 text-cyan-200" />
          ) : (
            <Sun className="w-3 h-3 text-teal-500" />
          )}
        </motion.div>

        {/* Lightning effect on toggle */}
        <AnimatedLightning isVisible={isHovering} />
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs font-medium bg-black dark:bg-white text-white dark:text-black rounded shadow-lg z-20 whitespace-nowrap"
          >
            {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Lightning animation component
const AnimatedLightning = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Zap className="w-4 h-4 text-teal-400 dark:text-cyan-400" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeToggle;
