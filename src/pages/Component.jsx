import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hero2 from "/Images/hero2.jpg";

// List of components with images
const componentsList = [
  {
    name: "Button",
    path: "buttons",
    image: "https://via.placeholder.com/300x200?text=Button",
  },
  {
    name: "Card",
    path: "cards",
    image: "https://via.placeholder.com/300x200?text=Card",
  },
  {
    name: "Input",
    path: "inputs",
    image: "https://via.placeholder.com/300x200?text=Input",
  },
  {
    name: "Avatar",
    path: "avatars",
    image: "https://via.placeholder.com/300x200?text=Avatar",
  },
  {
    name: "Signin",
    path: "signin",
    image: "https://via.placeholder.com/300x200?text=SignIn",
  },
  {
    name: "Signup",
    path: "signup",
    image: "https://via.placeholder.com/300x200?text=SignUp",
  },
  {
    name: "Loader",
    path: "loaders",
    image: "https://via.placeholder.com/300x200?text=Loader",
  },
  {
    name: "Navbar",
    path: "navbars",
    image: "https://via.placeholder.com/300x200?text=Navbar",
  },
  {
    name: "Footer",
    path: "footers",
    image: "https://via.placeholder.com/300x200?text=Footer",
  },
  {
    name: "Switch",
    path: "switch",
    image: "https://via.placeholder.com/300x200?text=Switch",
  },
  {
    name: "Table",
    path: "tables",
    image: "https://via.placeholder.com/300x200?text=Table",
  },
];

const Component = () => {
  // Sort componentsList alphabetically by name
  const sortedComponents = componentsList.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-10">
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Left Section - Illustration */}
        <div className="flex flex-col items-center lg:items-start gap-6 mb-8 sm:mt-4 lg:mb-0">
          <img
            src={hero2}
            alt="Illustration"
            className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg"
          />

          <div className="  w-full max-w-4xl mx-auto rounded-lg ">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                Application UI Components
              </h1>
              <p className="text-lg py-4 mx-auto lg:mx-0 max-w-96">
                Explore our Application UI components, designed for crafting
                dynamic web applications with versatile interface elements.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Components List */}
        <div className="flex-1 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {sortedComponents.map((component) => (
              <Link
                key={component.path}
                to={`/components/${component.path}`}
                className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border-2 border-black hover:border-gray-700 dark:hover:border-white transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={component.image}
                    alt={`${component.name} preview`}
                    className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-xl font-mono font-bold text-black dark:text-white">
                    {component.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
