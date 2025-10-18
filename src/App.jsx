import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { DocsLayout, Footer, Navbar } from "@/components/layout";
import { appRoutes, homeRoutes } from "@/config/routes";
import "@/styles/App.css";

/**
 * Loading Component
 */
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

/**
 * Layout Wrapper - Determines which layout to use
 */
function LayoutWrapper({ children, useDocsLayout }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (useDocsLayout) {
    return <DocsLayout>{children}</DocsLayout>;
  }

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

/**
 * Main Application Component
 * Handles routing and layout for the entire application
 */
function App() {
  // Initialize theme on mount
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Home routes without docs layout */}
          {homeRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <LayoutWrapper useDocsLayout={false}>
                  <route.element />
                </LayoutWrapper>
              }
            />
          ))}

          {/* All other routes with docs layout */}
          {appRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <LayoutWrapper useDocsLayout={true}>
                  <route.element />
                </LayoutWrapper>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
