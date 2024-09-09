import React from "react";
import { Link } from "react-router-dom";

const componentsList = [
  { name: "Button", path: "buttons" },
  { name: "Card", path: "cards" },
  { name: "Input", path: "inputs" },
  { name: "Avtar", path: "avtars" },
  { name: "Signin", path: "signin" },
  { name: "Signup", path: "signup" },
];

const Component = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Components</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {componentsList.map((component) => (
          <Link
            key={component.path}
            to={`/components/${component.path}`}
            className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold">{component.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Component;
