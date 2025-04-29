"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ArrowRight,
  Package,
  Layers,
  Grid3X3,
} from "lucide-react";

// List of components with images and categories
const componentsList = [
  {
    name: "Button",
    path: "buttons",
    image: "https://via.placeholder.com/300x200?text=Button",
    category: "Basic",
    description: "Interactive elements for user actions",
  },
  {
    name: "Card",
    path: "cards",
    image: "https://via.placeholder.com/300x200?text=Card",
    category: "Layout",
    description: "Containers for organizing content",
  },
  {
    name: "Input",
    path: "inputs",
    image: "https://via.placeholder.com/300x200?text=Input",
    category: "Form",
    description: "Fields for user data entry",
  },
  {
    name: "Avatar",
    path: "avatars",
    image: "https://via.placeholder.com/300x200?text=Avatar",
    category: "Display",
    description: "User profile representations",
  },
  {
    name: "Signin",
    path: "signin",
    image: "https://via.placeholder.com/300x200?text=SignIn",
    category: "Auth",
    description: "Authentication entry points",
  },
  {
    name: "Signup",
    path: "signup",
    image: "https://via.placeholder.com/300x200?text=SignUp",
    category: "Auth",
    description: "User registration interfaces",
  },
  {
    name: "Loader",
    path: "loaders",
    image: "https://via.placeholder.com/300x200?text=Loader",
    category: "Feedback",
    description: "Loading state indicators",
  },
  {
    name: "Navbar",
    path: "navbars",
    image: "https://via.placeholder.com/300x200?text=Navbar",
    category: "Navigation",
    description: "Site navigation headers",
  },
  {
    name: "Footer",
    path: "footers",
    image: "https://via.placeholder.com/300x200?text=Footer",
    category: "Layout",
    description: "Page footer sections",
  },
  {
    name: "Switch",
    path: "switch",
    image: "https://via.placeholder.com/300x200?text=Switch",
    category: "Form",
    description: "Toggle controls for binary options",
  },
  {
    name: "Table",
    path: "tables",
    image: "https://via.placeholder.com/300x200?text=Table",
    category: "Data",
    description: "Structured data displays",
  },
  {
    name: "Pricing",
    path: "pricing",
    image: "https://via.placeholder.com/300x200?text=Pricing",
    category: "Display",
    description: "Product pricing displays",
  },
];

// Get unique categories
const categories = [
  "All",
  ...new Set(componentsList.map((component) => component.category)),
];

const Component = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredComponents, setFilteredComponents] = useState(componentsList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = componentsList;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (component) =>
          component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          component.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(
        (component) => component.category === selectedCategory
      );
    }

    // Sort alphabetically
    result = result.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredComponents(result);
  }, [searchTerm, selectedCategory]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      Basic: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      Layout:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      Form: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      Display:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
      Auth: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
      Feedback:
        "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      Navigation:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
      Data: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
    };
    return (
      colors[category] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 dark:from-cyan-900/20 dark:to-teal-900/20 p-8 sm:p-12">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6 px-4 py-1 bg-white/80 dark:bg-black/30 backdrop-blur-sm rounded-full shadow-sm"
                >
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {componentsList.length} Components Available
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  RetroUI{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                    Components
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg"
                >
                  Explore our collection of retro-themed UI components, designed
                  for crafting dynamic web applications with a unique vintage
                  aesthetic. Each component is fully customizable and ready to
                  use.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search components..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 w-full sm:w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:w-1/2 flex justify-center"
              >
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="h-4 w-16 bg-teal-200 dark:bg-teal-700 rounded mb-2"></div>
                      <div className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                      <div className="h-12 w-12 bg-cyan-200 dark:bg-cyan-700 rounded-full mx-auto mb-2"></div>
                      <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 w-1/2 bg-gray-100 dark:bg-gray-700 rounded mx-auto"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-8 w-3/4 bg-purple-200 dark:bg-purple-700 rounded mb-2"></div>
                      <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <div className="flex justify-between mb-2">
                        <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                      </div>
                      <div className="h-12 w-full bg-yellow-200 dark:bg-yellow-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <Filter className="mr-2 text-gray-700 dark:text-gray-300" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Filter by Category
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-teal-500 text-white dark:bg-teal-600 shadow-md transform -translate-y-1"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Components Grid */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          {filteredComponents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredComponents.map((component) => (
                <motion.div key={component.path} variants={cardVariants}>
                  <Link
                    to={`/components/${component.path}`}
                    className="group block h-full"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-black dark:border-gray-700 h-full transform hover:-translate-y-2 hover:border-teal-500 dark:hover:border-teal-400">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold font-mono text-gray-900 dark:text-white">
                            {component.name}
                          </h3>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(
                              component.category
                            )}`}
                          >
                            {component.category}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          {component.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 rounded group-hover:w-24 transition-all duration-300"></div>
                          <ArrowRight className="text-gray-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transform group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Layers className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                No components found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </motion.section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <Grid3X3 className="w-12 h-12 mx-auto text-teal-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6">
              We're constantly adding new components to our library. If you have
              a specific component in mind, let us know!
            </p>
            <Link to="/contact-us">
              <button className="px-6 py-3 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black dark:border-zinc-700 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-all duration-300 rounded-sm">
                Request a Component
              </button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Component;
