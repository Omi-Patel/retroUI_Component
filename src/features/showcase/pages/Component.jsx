"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Package,
  Layers,
  Grid3X3,
  Sparkles,
  MousePointer,
  Type,
  User,
  LogIn,
  UserPlus,
  Loader,
  Menu as MenuIcon,
  ToggleLeft,
  Table,
  DollarSign,
  Layout as LayoutIcon,
  PanelBottom,
} from "lucide-react";
import { DocsContent, DocsSection } from "@/components/layout";

// List of components with enhanced metadata
const componentsList = [
  {
    name: "Buttons",
    path: "buttons",
    category: "UI Elements",
    description:
      "Interactive button components with retro styling and hover effects",
    icon: MousePointer,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Cards",
    path: "cards",
    category: "UI Elements",
    description: "Content container components for organizing information",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Inputs",
    path: "inputs",
    category: "Forms",
    description: "Text input fields with various styles and states",
    icon: Type,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Avatars",
    path: "avatars",
    category: "Display",
    description: "User profile image components with different sizes",
    icon: User,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Sign In",
    path: "signin",
    category: "Forms",
    description: "User authentication sign-in form templates",
    icon: LogIn,
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Sign Up",
    path: "signup",
    category: "Forms",
    description: "User registration and sign-up form variations",
    icon: UserPlus,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Loaders",
    path: "loaders",
    category: "Feedback",
    description: "Loading states and spinner components",
    icon: Loader,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Navbars",
    path: "navbars",
    category: "Layout",
    description: "Navigation header components for your application",
    icon: MenuIcon,
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Footers",
    path: "footers",
    category: "Layout",
    description: "Page footer components with various styles",
    icon: PanelBottom,
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Switches",
    path: "switch",
    category: "Forms",
    description: "Toggle switch components for binary choices",
    icon: ToggleLeft,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Tables",
    path: "tables",
    category: "Display",
    description: "Data table components for structured information",
    icon: Table,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Pricing",
    path: "pricing",
    category: "Display",
    description: "Pricing table components for product displays",
    icon: DollarSign,
    color: "from-amber-500 to-yellow-500",
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

    setFilteredComponents(result);
  }, [searchTerm, selectedCategory]);

  return (
    <DocsContent
      title="Components"
      description="Explore our collection of retro-themed UI components. Each component is fully customizable and ready to integrate into your project."
      badge="Component Library"
    >
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Total Components
              </p>
              <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                {componentsList.length}
              </p>
            </div>
            <Package className="w-10 h-10 text-teal-500 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Categories
              </p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {categories.length - 1}
              </p>
            </div>
            <Layers className="w-10 h-10 text-purple-500 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Variants
              </p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                50+
              </p>
            </div>
            <Grid3X3 className="w-10 h-10 text-green-500 opacity-50" />
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <DocsSection id="search-filter">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-teal-500 text-white dark:bg-teal-600 shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </DocsSection>

      {/* Components Grid */}
      <DocsSection
        title="Available Components"
        description={`Showing ${filteredComponents.length} component${
          filteredComponents.length !== 1 ? "s" : ""
        }`}
        id="components-grid"
      >
        {filteredComponents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <motion.div
                  key={component.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={`/components/${component.path}`}
                    className="group block h-full"
                  >
                    <div className="h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Icon Header */}
                      <div
                        className={`p-6 bg-gradient-to-r ${component.color} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-black/10"></div>
                        <Icon className="w-12 h-12 text-white relative z-10" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                            {component.name}
                          </h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                            {component.category}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {component.description}
                        </p>

                        <div className="flex items-center text-teal-600 dark:text-teal-400 text-sm font-medium group-hover:gap-2 transition-all">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
            <Layers className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              No components found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </DocsSection>

      {/* Implementation Guide */}
      <DocsSection
        title="Quick Start Guide"
        description="Get started with retroUI components in four simple steps"
        id="quick-start"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Browse & Select",
              description:
                "Explore components and find the perfect one for your project",
              icon: Search,
            },
            {
              step: "2",
              title: "Copy Code",
              description: "Click the copy button to grab the component code",
              icon: Package,
            },
            {
              step: "3",
              title: "Customize",
              description: "Modify styles and props to match your design",
              icon: Sparkles,
            },
            {
              step: "4",
              title: "Integrate",
              description: "Import and use in your React application",
              icon: Grid3X3,
            },
          ].map((item) => {
            const StepIcon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-bold text-sm">
                    {item.step}
                  </div>
                  <StepIcon className="w-5 h-5 text-teal-500" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </DocsSection>

      {/* Help Section */}
      <div className="mt-12 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-8 border border-teal-200 dark:border-teal-800/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Need a Custom Component?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Can't find what you're looking for? Request a custom component and
              we'll add it to our library.
            </p>
          </div>
          <Link to="/contact-us">
            <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg">
              Request Component
            </button>
          </Link>
        </div>
      </div>
    </DocsContent>
  );
};

export default Component;
