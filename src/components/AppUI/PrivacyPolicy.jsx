import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              1. Information Collection
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              RetroUI does not collect personal information. For open-source
              contributions, we may store provided names and email addresses.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              2. Information Usage
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Collected information is used solely for improving RetroUI and
              communicating with contributors. We do not sell or transfer your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              3. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              We implement security measures to protect your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              4. Third-party Links
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              We are not responsible for the content or privacy practices of any
              third-party sites we may link to.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              5. Policy Changes
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              Changes to this policy will be posted on this page. Last modified:{" "}
              {new Date().toLocaleDateString()}.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              6. Contact
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              For questions about this policy, contact privacy@retroui.com.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <NavLink
            to="/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Return to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
