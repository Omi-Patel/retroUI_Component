import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100  sm:p-10">
      <div className="container mx-auto p-3 sm:p-4">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-6 sm:mt-0">
            About RetroUI
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            RetroUI is a carefully crafted UI component library built with
            Tailwind CSS, designed to help developers create unique and
            nostalgic retro-themed interfaces. Create responsive and beautifully
            designed components effortlessly.
          </p>
        </section>

        {/* Features Section  */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-green-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#304245] dark:border-[#304245]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why RetroUI?
              </h2>
              <p className="text-gray-700">
                RetroUI brings the best of nostalgic design with a modern twist.
                With minimalistic styles and pixel-art aesthetics, RetroUI
                offers developers a wide range of customizable components that
                perfectly fit into projects aiming for a vintage look.
              </p>
            </div>
            <div className="bg-blue-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#304245] dark:border-[#304245]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fully Customizable
              </h2>
              <p className="text-gray-700">
                Tailored to your project’s needs, every component of RetroUI is
                highly customizable. Modify the colors, fonts, and layouts to
                match your desired retro vibe without compromising on the
                flexibility of modern UI standards.
              </p>
            </div>
            <div className="bg-yellow-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#304245] dark:border-[#304245]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Easy Integration
              </h2>
              <p className="text-gray-700">
                RetroUI is built with ease of integration in mind. It seamlessly
                fits into existing projects, allowing you to enhance your
                application’s user interface with a retro theme in no time. Just
                copy and paste, and you're good to go.
              </p>
            </div>
            <div className="bg-pink-100 border-4 border-black  p-6 shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#304245] dark:border-[#304245]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Free & Open Source
              </h2>
              <p className="text-gray-700">
                RetroUI is completely free to use. You can quickly spin up
                beautiful, retro-styled websites without paying a cent. Plus,
                it’s open source, so you can contribute to the library and make
                it even better.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Section  */}
        <section className="text-center mb-16 tracking-wide">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            How to Use RetroUI
          </h2>
          <div className="bg-white border-4 border-black p-6 max-w-4xl mx-auto shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#304245] dark:border-[#304245]">
            <p className="text-lg text-gray-700 mb-4">
              Using RetroUI is simple. RetroUI components are built with
              Tailwind CSS, making it quick to customize and integrate into any
              project. To use RetroUI, all you need is Tailwind CSS!
            </p>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Using Tailwind in an HTML Page
              </h3>
              <p className="text-gray-700 mb-4">
                To add Tailwind CSS to your HTML page, you can use a CDN. Just
                add the following script to your head tag:
              </p>
              <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-md border border-gray-300 text-sm overflow-auto">
                &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
              </pre>
            </div>
            <div className="text-left mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Using Tailwind in a React Project
              </h3>
              <p className="text-gray-700">
                Tailwind CSS can be easily integrated into React projects. Check
                out the official{" "}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="text-blue-500 font-semibold"
                >
                  Tailwind CSS
                </a>{" "}
                documentation for detailed instructions on how to set up
                Tailwind with frameworks like React, Next.js, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Boost Your Workflow with RetroUI
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            RetroUI is designed to help developers save time and create stunning
            retro-style interfaces with ease. Why wait? Give it a try and see
            how it can improve your workflow.
          </p>

          <NavLink to={"/components"}>
            <button className="px-4 py-2 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black font-bold shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transform hover:-translate-y-1 transition-all mt-6">
              Get Started with RetroUI
            </button>
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default About;
