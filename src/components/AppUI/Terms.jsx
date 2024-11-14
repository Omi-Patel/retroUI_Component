import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Terms and Conditions
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              1. Acceptance
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              By using RetroUI, you agree to these Terms. If you disagree,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              2. Use License
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              You may use RetroUI for personal and commercial projects. You may
              not distribute the RetroUI source code without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              3. Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              RetroUI is provided "as is" without warranties. Your use of
              RetroUI is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              4. Limitations
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              RetroUI and its suppliers are not liable for any damages arising
              from the use or inability to use RetroUI.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              5. Contributions
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              By contributing to RetroUI, you agree to license your contribution
              under RetroUI's license.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              6. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              We may modify these terms at any time. Continued use of RetroUI
              constitutes acceptance of changes.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <NavLink
            to="/"
            className="text-base font-medium text-indigo-600 hover:text-indigo-500"
          >
            &larr; Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Terms;
