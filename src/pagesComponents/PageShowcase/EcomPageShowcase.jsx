"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Code,
  Copy,
  Check,
  ChevronDown,
  Zap,
  Layers,
  Palette,
  Monitor,
  Grid,
  ArrowRight,
  Star,
  Download,
  Eye,
  Sparkles,
  ShoppingBag,
  ShoppingCart,
  Package,
  Tag,
} from "lucide-react";

import ProductsPage from "../EcommercePage/ProducsPage";
import ModernProduct from "../EcommercePage/ModernProduct";
import BasicProductDesc from "../EcommercePage/BasicProductDesc";
import RetroDesc from "../EcommercePage/RetroDesc";

const componentCode = {
  ProductsPage: `
import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, X, Plus, Minus, Trash2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vintage Polaroid Camera",
    price: 129.99,
    image: "https://picsum.photos/id/301/300/200",
    description:
      "Capture moments in classic style with this refurbished Polaroid camera from the 1970s.",
  },
  {
    id: 2,
    name: "Retro Vinyl Record Player",
    price: 189.99,
    image: "https://picsum.photos/id/302/300/200",
    description:
      "Experience the warm sound of vinyl with this beautifully crafted record player, featuring modern connectivity.",
  },
  {
    id: 3,
    name: "Antique Brass Telescope",
    price: 79.99,
    image: "https://picsum.photos/id/303/300/200",
    description:
      "Gaze at the stars or use as a stunning decorative piece. This brass telescope is a true conversation starter.",
  },
  {
    id: 4,
    name: "Classic Leather-bound Journal",
    price: 39.99,
    image: "https://picsum.photos/id/304/300/200",
    description:
      "Write your thoughts in style with this handcrafted leather journal, featuring high-quality paper and a timeless design.",
  },
  {
    id: 5,
    name: "Vintage Typewriter",
    price: 249.99,
    image: "https://picsum.photos/id/305/300/200",
    description:
      "Create with a touch of nostalgia using this fully restored vintage typewriter. Perfect for writers and collectors alike.",
  },
  {
    id: 6,
    name: "Antique World Globe",
    price: 89.99,
    image: "https://picsum.photos/id/306/300/200",
    description:
      "Explore the world from your study with this beautifully detailed antique-style world globe on a wooden stand.",
  },
];

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const toggleLike = (productId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [productId]: !prevLikes[productId],
    }));
  };

  return (
    <div className="min-h-screen bg-[#f3e5ab] text-[#4a4e69] font-mono">
      <header className="bg-[#4a3f35] py-4 px-6  top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#c99700] tracking-wide">
            RetroShop
          </h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#f3e5ab] hover:text-[#c99700] transition-colors duration-300"
          >
            <ShoppingBag size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ef8354] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#4a4e69]">
          Timeless Retro Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#fff6e1] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 p-2 bg-[#f3e5ab] rounded-full shadow-md hover:bg-[#ef8354] transition-colors duration-300"
                >
                  <Heart
                    size={20}
                    className={\`\${
                      likes[product.id]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }\`}
                  />
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#4a4e69]">
                  {product.name}
                </h3>
                <p className="text-[#6d6875] mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#ef8354]">
                    \${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#c99700] text-white px-4 py-2 rounded-full hover:bg-[#e8ac2f] transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#4a4e69]">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#6d6875] hover:text-[#ef8354]"
              >
                <X size={24} />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-[#6d6875] text-center">Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center mb-4 pb-4 border-b border-[#e0e0e0]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-[#4a4e69]">
                        {item.name}
                      </h3>
                      <p className="text-[#6d6875]">\${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-[#6d6875] hover:text-[#c99700]"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-2 text-[#4a4e69]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-[#6d6875] hover:text-[#c99700]"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-[#6d6875] hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                <div className="mt-6 text-right">
                  <span className="text-xl font-bold text-[#ef8354]">
                    Total: \${cartTotal.toFixed(2)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

  `,
  ModernProduct: `
// ... existing code ...
`,
  BasicProductDesc: `
// ... existing code ...
`,
  RetroDesc: `
// ... existing code ...
`,
};

const EcomPageShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("ProductsPage");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [isGridView, setIsGridView] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const pageIcons = {
    ProductsPage: <ShoppingBag className="w-5 h-5" />,
    ModernProduct: <ShoppingCart className="w-5 h-5" />,
    BasicProductDesc: <Package className="w-5 h-5" />,
    RetroDesc: <Tag className="w-5 h-5" />,
  };

  const pageColors = {
    ProductsPage: "from-purple-400 to-indigo-500",
    ModernProduct: "from-indigo-400 to-blue-500",
    BasicProductDesc: "from-blue-400 to-cyan-500",
    RetroDesc: "from-cyan-400 to-teal-500",
  };

  const pageBgs = {
    ProductsPage: "bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/30",
    ModernProduct: "bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/30",
    BasicProductDesc: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/30",
    RetroDesc: "bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "ProductsPage":
        return <ProductsPage />;
      case "ModernProduct":
        return <ModernProduct />;
      case "BasicProductDesc":
        return <BasicProductDesc />;
      case "RetroDesc":
        return <RetroDesc />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300 bg-[url('/grid-pattern.svg')] bg-fixed">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-900/20 dark:to-indigo-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-purple-200/50 dark:border-purple-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Ecommerce</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 dark:bg-purple-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Pages</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Explore our collection of retro-themed ecommerce templates, designed
                for crafting dynamic online stores with a unique vintage
                aesthetic. Each page is fully customizable and ready to use.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => setIsGridView(!isGridView)}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors"
                >
                  <Grid className="w-4 h-4 mr-2" />
                  {isGridView ? "List View" : "Grid View"}
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-4 w-16 bg-indigo-200 dark:bg-indigo-700 rounded mb-2"></div>
                  <div className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="h-12 w-12 bg-purple-200 dark:bg-purple-700 rounded-full mx-auto mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-100 dark:bg-gray-700 rounded mx-auto"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-8 w-3/4 bg-indigo-200 dark:bg-indigo-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-12 w-full bg-purple-200 dark:bg-purple-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Component List - Left Side */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100">
                  Ecommerce Pages
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(componentCode).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${pageBgs[componentName]} border-l-4 border-purple-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${pageColors[componentName]} text-white`}
                    >
                      {pageIcons[componentName]}
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 block">
                        {componentName.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Component Display - Right Side */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComponent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Component Header */}
                <div
                  className={`p-4 border-b border-gray-200 dark:border-gray-700 ${pageBgs[activeComponent]}`}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${pageColors[activeComponent]} text-white mr-2`}
                      >
                        {pageIcons[activeComponent]}
                      </div>
                      <span>
                        {activeComponent.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveTab("preview")}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === "preview"
                            ? "bg-purple-500 text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveTab("code")}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === "code"
                            ? "bg-purple-500 text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        <Code className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Component Content */}
                <div className="p-6">
                  {activeTab === "preview" ? (
                    <div className="flex flex-col">
                      {/* Interactive Preview */}
                      <div
                        className={`flex flex-col items-center justify-center p-10 ${pageBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
                      >
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {renderComponent(activeComponent)}
                        </motion.div>
                      </div>

                      {/* Component Info */}
                      <div className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-lg border border-purple-200 dark:border-purple-800/30 overflow-hidden">
                        <button
                          onClick={() => setExpandedInfo(!expandedInfo)}
                          className="w-full p-4 flex justify-between items-center text-left"
                        >
                          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                            <Zap className="w-4 h-4 text-purple-500 mr-2" />
                            Page Details & Usage Tips
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              expandedInfo ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedInfo && (
                          <div className="p-4 pt-0 border-t border-purple-200 dark:border-purple-800/30">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                  Features
                                </h4>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                  <li>
                                    Retro-inspired design with pixel-perfect
                                    details
                                  </li>
                                  <li>Fully responsive layout</li>
                                  <li>Dark mode support</li>
                                  <li>Customizable components</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                  Customization
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                  This page can be easily customized by
                                  modifying the Tailwind classes. Try changing
                                  colors, layouts, or adding additional sections
                                  to match your project's design.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <SyntaxHighlighter
                        language="jsx"
                        style={atomDark}
                        className="rounded-lg"
                      >
                        {componentCode[activeComponent]}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => copyToClipboard(componentCode[activeComponent])}
                        className="absolute top-4 right-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                      >
                        {copySuccess ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcomPageShowcase;
