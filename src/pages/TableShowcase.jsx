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
  Grid,
  ArrowRight,
  Star,
  Eye,
  Sparkles,
  Table,
  LayoutGrid,
  ShoppingCart,
  FileText,
} from "lucide-react";

// Import table components
import BasicTable from "../components/Tables/BasicTable";
import EcommerceTable from "../components/Tables/EcommerceTable";
import StripedTable from "../components/Tables/StripedTable";
import AnimatedTable from "../components/Tables/AnimatedTable";
import BlogTable from "../components/Tables/BlogTable";

const tableComponents = {
  BasicTable: `
import React from "react";

// Dummy data
const data = [
  {
    id: 1,
    name: "John Michael",
    email: "john@creative-tim.com",
    function: "Manager",
    department: "Organization",
    employedDate: "23/04/18",
  },
  {
    id: 2,
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    function: "Designer",
    department: "Marketing",
    employedDate: "23/04/18",
  },
  {
    id: 3,
    name: "James Smith",
    email: "james@creative-tim.com",
    function: "Developer",
    department: "Engineering",
    employedDate: "15/05/19",
  },
];

const BasicTable = () => {
  return (
    <div className="relative w-full p-4 bg-gradient-to-br from-purple-600 to-blue-400 rounded-lg shadow-lg overflow-x-auto">
      <h2 className="text-3xl font-serif text-white text-center mb-4">
        Employees List
      </h2>

      <table className="min-w-full table-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-neon/35 text-black">
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Name
            </th>
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Email
            </th>
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Function
            </th>
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Department
            </th>
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Employed Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr
              key={employee.id}
              className="hover:bg-gray-200 transition-colors duration-300"
            >
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.name}
              </td>
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.email}
              </td>
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.function}
              </td>
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.department}
              </td>
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.employedDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
  `,
  EcommerceTable: `
import React from "react";

// Dummy data for products
const products = [
  {
    id: 1,
    name: "Retro Game Console",
    price: "$199.99",
    category: "Gaming",
    stock: 50,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Vintage Record Player",
    price: "$299.99",
    category: "Music",
    stock: 20,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Classic Leather Jacket",
    price: "$149.99",
    category: "Fashion",
    stock: 15,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Old-School Polaroid Camera",
    price: "$89.99",
    category: "Photography",
    stock: 10,
    rating: 4.7,
  },
];

const EcommerceTable = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-[#e3b1f8] to-[#f8c3b1] rounded-lg shadow-lg overflow-x-auto">
      <h2 className="text-4xl font-bold text-center text-[#3f3053] mb-4 font-sans tracking-wider">
        E-Commerce Products
      </h2>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-[#f3c736] border-4 border-black cursor-pointer select-none
      shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-out mb-4"
      >
        Add Product
      </button>
      <table className="min-w-full bg-white border-4 border-[#3f3053] shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-out">
        <thead className="bg-[#3f3053] text-white text-left">
          <tr>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Product Name
            </th>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Price
            </th>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Category
            </th>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Stock
            </th>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-[#f9e3b1] transition-all duration-300 ease-in-out transform hover:scale-102"
            >
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.name}
              </td>
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.price}
              </td>
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.category}
              </td>
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.stock}
              </td>
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.rating} ⭐
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EcommerceTable;
  `,
  StripedTable: `
import React from "react";

const StripedTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border-2 border-black bg-[#f3e8bc] text-left">
        <thead>
          <tr className="bg-[#57c9f6]">
            <th className="p-4 border-2 border-black">#</th>
            <th className="p-4 border-2 border-black">Name</th>
            <th className="p-4 border-2 border-black">Email</th>
            <th className="p-4 border-2 border-black">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#c8ebf1]">
            <td className="p-4 border-2 border-black">1</td>
            <td className="p-4 border-2 border-black">John Doe</td>
            <td className="p-4 border-2 border-black">johndoe@example.com</td>
            <td className="p-4 border-2 border-black">Admin</td>
          </tr>
          <tr className="bg-[#c8ebf1]">
            <td className="p-4 border-2 border-black">2</td>
            <td className="p-4 border-2 border-black">Jane Smith</td>
            <td className="p-4 border-2 border-black">janesmith@example.com</td>
            <td className="p-4 border-2 border-black">User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StripedTable;
  `,
  AnimatedTable: `
import React from "react";

const AnimatedTable = () => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full table-auto border-collapse border-2 border-black bg-[#f3e8bc] text-left">
        <thead>
          <tr className="bg-[#ffcc00]">
            <th className="p-4 border-2 border-black">#</th>
            <th className="p-4 border-2 border-black">Name</th>
            <th className="p-4 border-2 border-black">Email</th>
            <th className="p-4 border-2 border-black">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#ffeeba] hover:bg-[#ffdd99] transition-all duration-300">
            <td className="p-4 border-2 border-black">1</td>
            <td className="p-4 border-2 border-black">John Doe</td>
            <td className="p-4 border-2 border-black">johndoe@example.com</td>
            <td className="p-4 border-2 border-black">Admin</td>
          </tr>
          <tr className="bg-[#f3e8bc] hover:bg-[#ffdd99] transition-all duration-300">
            <td className="p-4 border-2 border-black">2</td>
            <td className="p-4 border-2 border-black">Jane Smith</td>
            <td className="p-4 border-2 border-black">janesmith@example.com</td>
            <td className="p-4 border-2 border-black">User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AnimatedTable;
  `,
  BlogTable: `
import React, { useState } from "react";

// Dummy data for blog posts
const initialBlogPosts = [
  {
    id: 1,
    title: "The Rise of Retro Gaming",
    author: "Jane Doe",
    date: "2024-09-01",
    category: "Gaming",
    excerpt:
      "A look back at the golden age of gaming and its impact on today's culture.",
  },
  {
    id: 2,
    title: "Vinyl Records: A Comeback Story",
    author: "John Smith",
    date: "2024-08-15",
    category: "Music",
    excerpt: "Exploring the resurgence of vinyl records in the digital age.",
  },
  {
    id: 3,
    title: "Fashion Trends from the 80s",
    author: "Emily Johnson",
    date: "2024-09-10",
    category: "Fashion",
    excerpt: "How 80s fashion is influencing modern styles.",
  },
  {
    id: 4,
    title: "Classic Movies to Rewatch",
    author: "Michael Brown",
    date: "2024-09-12",
    category: "Movies",
    excerpt: "A curated list of timeless films that deserve a rewatch.",
  },
];

const BlogTable = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-[#5B3F69] mb-4 font-sans">
        Blog Posts
      </h2>
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-[#5B3F69] text-white font-sans font-bold rounded shadow-md hover:shadow-lg transition-shadow duration-150 ease-in-out mr-2 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 inline-block mr-1"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Add Blog</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent border border-[#5B3F69] rounded-lg">
          <thead>
            <tr className="bg-[#D6C6E1]">
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Title
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Author
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Date
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Category
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Excerpt
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-[#E4D1F0] transition duration-150 ease-in-out"
              >
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.title}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.author}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.date}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.category}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.excerpt}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] text-[#5B3F69]">
                  <button className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 inline-block hover:text-blue-500"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 inline-block hover:text-red-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;
  `,
};

const TableShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("BasicTable");
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

  const tableIcons = {
    BasicTable: <Table className="w-5 h-5" />,
    EcommerceTable: <ShoppingCart className="w-5 h-5" />,
    StripedTable: <LayoutGrid className="w-5 h-5" />,
    AnimatedTable: <Zap className="w-5 h-5" />,
    BlogTable: <FileText className="w-5 h-5" />,
  };

  const tableColors = {
    BasicTable: "from-emerald-400 to-teal-500",
    EcommerceTable: "from-pink-400 to-rose-500",
    StripedTable: "from-yellow-400 to-amber-500",
    AnimatedTable: "from-sky-400 to-blue-500",
    BlogTable: "from-violet-400 to-purple-500",
  };

  const tableBgs = {
    BasicTable:
      "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30",
    EcommerceTable:
      "bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/30",
    StripedTable:
      "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30",
    AnimatedTable:
      "bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-900/20 dark:to-blue-900/30",
    BlogTable:
      "bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "BasicTable":
        return <BasicTable />;
      case "EcommerceTable":
        return <EcommerceTable />;
      case "StripedTable":
        return <StripedTable />;
      case "AnimatedTable":
        return <AnimatedTable />;
      case "BlogTable":
        return <BlogTable />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300 bg-[url('/grid-pattern.svg')] bg-fixed">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section - More Unique */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-900/20 dark:to-teal-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Table</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-200 dark:bg-emerald-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic data tables for your modern web
                applications. Bring the charm of retro aesthetics to your data
                presentation.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-md shadow-lg hover:shadow-emerald-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-md border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Documentation
                </motion.button>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl blur-xl -z-10"></div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-xl p-6">
                <div className="w-64 h-48 bg-white dark:bg-gray-700 rounded-lg shadow-md p-3 flex flex-col">
                  <div className="w-full h-6 bg-emerald-500 rounded-t-md mb-2"></div>
                  <div className="grid grid-cols-3 gap-1 flex-grow">
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                    <div className="bg-gray-200 dark:bg-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-emerald-500" />
            Table Collection
          </h2>

          
        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(tableComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${tableBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="scale-[0.6] transform origin-center w-full overflow-hidden">
                    {renderComponent(componentName)}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${tableColors[componentName]} text-white mr-2`}
                      >
                        {tableIcons[componentName]}
                      </div>
                      {componentName.replace(/([A-Z])/g, " $1").trim()}
                    </h3>

                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        4.9
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        setActiveComponent(componentName);
                        setIsGridView(false);
                      }}
                      className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(tableComponents[componentName])
                      }
                      className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Detail View
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            {/* Component Selector - Left Side */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-900/20 dark:to-teal-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-emerald-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(tableComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${tableBgs[componentName]} border-l-4 border-emerald-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${tableColors[componentName]} text-white`}
                    >
                      {tableIcons[componentName]}
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
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${tableBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${tableColors[activeComponent]} text-white mr-2`}
                        >
                          {tableIcons[activeComponent]}
                        </div>
                        <span>
                          {activeComponent.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                      </h2>

                      {/* Tabs */}
                      <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <button
                          onClick={() => setActiveTab("preview")}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTab === "preview"
                              ? `bg-gradient-to-r ${tableBgs[activeComponent]} text-emerald-700 dark:text-emerald-300`
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("code")}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTab === "code"
                              ? `bg-gradient-to-r ${tableBgs[activeComponent]} text-emerald-700 dark:text-emerald-300`
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <Code className="w-3.5 h-3.5" />
                          <span>Code</span>
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
                          className={`flex flex-col items-center justify-center p-6 ${tableBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto w-full`}
                        >
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                          >
                            {renderComponent(activeComponent)}
                          </motion.div>
                        </div>

                        {/* Component Info */}
                        <div className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-lg border border-emerald-200 dark:border-emerald-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Zap className="w-4 h-4 text-emerald-500 mr-2" />
                              Component Details & Usage Tips
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                expandedInfo ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedInfo && (
                            <div className="p-4 pt-0 border-t border-emerald-200 dark:border-emerald-800/30">
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
                                    <li>
                                      Responsive layout for all screen sizes
                                    </li>
                                    <li>
                                      Interactive hover states and animations
                                    </li>
                                    <li>Customizable colors and styling</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    This component can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    colors, borders, or adding additional
                                    effects to match your project's design.
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-emerald-200/50 dark:border-emerald-800/20">
                                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                  Installation
                                </h4>
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => {
                                      setActiveTab("code");
                                    }}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium flex items-center gap-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                  >
                                    <Code className="w-4 h-4" />
                                    View Code
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute top-0 left-0 w-full h-10 bg-gray-800 dark:bg-gray-700 rounded-t-md flex items-center px-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-xs text-gray-400 ml-4">
                            components/Tables/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {tableComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(tableComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
                        >
                          {copySuccess ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableShowcase;
