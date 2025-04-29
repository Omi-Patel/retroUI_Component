"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import hero2 from "/Images/hero2.jpg";
import { motion } from "framer-motion";
import { Layers, ArrowRight, ChevronRight, Package } from "lucide-react";

// List of components with images
const pagesList = [
  {
    name: "Home Page",
    path: "home",
    image: "https://via.placeholder.com/300x200?text=Home",
  },
  {
    name: "About Page",
    path: "about",
    image: "https://via.placeholder.com/300x200?text=About",
  },
  {
    name: "Service Page",
    path: "service",
    image: "https://via.placeholder.com/300x200?text=Service",
  },
  {
    name: "Contact Page",
    path: "contact",
    image: "https://via.placeholder.com/300x200?text=Contact",
  },
  {
    name: "Dashboard Page",
    path: "dashboard",
    image: "https://via.placeholder.com/300x200?text=Dashboard",
  },
  {
    name: "Error Page",
    path: "error",
    image: "https://via.placeholder.com/300x200?text=404",
  },
  {
    name: "Ecommerce Page",
    path: "ecommerce",
    image: "https://via.placeholder.com/300x200?text=Ecommerce",
  },
  {
    name: "Blog Page",
    path: "blog",
    image: "https://via.placeholder.com/300x200?text=Blog",
  },
];

const Pages = () => {
  // Sort componentsList alphabetically by name
  const sortedComponents = pagesList.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
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
    hover: {
      y: -12,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "#4fd1c5",
      transition: { duration: 0.3 },
    },
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
                      {pagesList.length} Page Templates Available
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  Application{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                    UI Pages
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg"
                >
                  Explore our collection of Application UI pages, designed for
                  crafting dynamic web applications with versatile interface
                  elements. Each page template is fully responsive and ready to
                  use in your projects.
                </motion.p>
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

        {/* Pages Grid Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Layers
              className="mr-3 text-teal-500 dark:text-teal-400"
              size={24}
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Browse Page Templates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedComponents.map((component, index) => (
              <motion.div
                key={component.path}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <Link to={`/pages/${component.path}`} className="block h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full border-2 border-black hover:border-teal-500 dark:border-gray-700 dark:hover:border-teal-400 transition-all duration-300">
                    <div className="relative overflow-hidden group">
                      <div className="h-32 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 dark:from-cyan-900/30 dark:to-teal-900/30 flex items-center justify-center">
                        <span className="text-3xl font-bold font-mono text-gray-800 dark:text-gray-200">
                          {component.name.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white flex items-center">
                          View Template{" "}
                          <ArrowRight className="ml-2" size={16} />
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-bold font-mono text-gray-900 dark:text-white mb-2">
                        {component.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <div className="w-12 h-1 bg-teal-500 dark:bg-teal-400 rounded group-hover:w-24 transition-all duration-300"></div>
                        <ChevronRight className="text-gray-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bottom CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <Package className="w-12 h-12 mx-auto text-teal-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Ready to build your next project?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6">
              Our page templates provide a solid foundation for your web
              applications. Combine them with our components for a complete UI
              solution.
            </p>
            <Link to="/components">
              <button className="px-6 py-3 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black dark:border-zinc-700 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-all duration-300 rounded-sm">
                Explore Components
              </button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Pages;
