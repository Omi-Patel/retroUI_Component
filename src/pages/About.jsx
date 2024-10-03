import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Layers, Zap, Palette, Gift, Moon, Sun } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 sm:py-10">
        {/* Hero Section */}
        <section className="sm:text-center mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl  font-bold mb-6  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 ">
            About RetroUI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            RetroUI is a carefully crafted UI component library built with
            Tailwind CSS, designed to help developers create unique and
            nostalgic retro-themed interfaces. Create responsive and beautifully
            designed components effortlessly.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12 sm:mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12  sm:px-8">
          <FeatureCard
            icon={
              <Layers className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            }
            title="Why RetroUI?"
            description="RetroUI brings the best of nostalgic design with a modern twist.
                 With minimalistic styles and pixel-art aesthetics, RetroUI
                 offers developers a wide range of customizable components that
                 perfectly fit into projects aiming for a vintage look."
          />
          <FeatureCard
            icon={
              <Zap className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
            }
            title="Fully Customizable"
            description="Tailored to your project’s needs, every component of RetroUI is
                 highly customizable. Modify the colors, fonts, and layouts to
                 match your desired retro vibe without compromising on the
                 flexibility of modern UI standards."
          />
          <FeatureCard
            icon={
              <Palette className="w-8 h-8 text-green-500 dark:text-green-400" />
            }
            title="Easy Integration"
            description="RetroUI is built with ease of integration in mind. It seamlessly
                 fits into existing projects, allowing you to enhance your
                 application’s user interface with a retro theme in no time. Just
                 copy and paste, and you're good to go."
          />
          <FeatureCard
            icon={
              <Gift className="w-8 h-8 text-purple-500 dark:text-purple-400" />
            }
            title="Free & Open Source"
            description="RetroUI is completely free to use. You can quickly spin up
                 beautiful, retro-styled websites without paying a cent. Plus,
                 it’s open source, so you can contribute to the library and make
                 it even better."
          />
        </section>

        {/* How to Use Section */}
        <section className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:text-center text-gray-800 dark:text-gray-100">
            How to Use retroUI Library
          </h2>
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-3 py-6 sm:p-8 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
              Using RetroUI is simple. RetroUI components are built with
              Tailwind CSS, making it quick to customize and integrate into any
              project. To use RetroUI, all you need is Tailwind CSS!
            </p>

            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                Using Tailwind in an HTML Page
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                To add Tailwind CSS to your HTML page, you can use a CDN. Just
                add the following script to your head tag:
              </p>
            </div>

            <div className="mt-4">
              <pre className="bg-gray-800 dark:bg-gray-600 text-gray-100 dark:text-white p-4 rounded-md overflow-x-auto text-sm sm:text-base">
                {`<script src="https://cdn.tailwindcss.com"></script>`}
              </pre>
            </div>

            <div className="text-left mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                Using Tailwind in a React Project
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
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
        <section className="sm:text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8  text-gray-800 dark:text-gray-100">
            Elevate Your Development Workflow
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

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl sm:text-2xl font-semibold ml-4 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
