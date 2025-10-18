"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Code,
  Copy,
  Check,
  Eye,
  Sparkles,
  Info,
  Table as TableIcon,
  LayoutGrid,
  ShoppingCart,
  FileText,
  Zap,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import table components
import BasicTable from "@/components/ui/tables/BasicTable";
import EcommerceTable from "@/components/ui/tables/EcommerceTable";
import StripedTable from "@/components/ui/tables/StripedTable";
import AnimatedTable from "@/components/ui/tables/AnimatedTable";
import BlogTable from "@/components/ui/tables/BlogTable";

const tableComponents = {
  Basic: {
    component: BasicTable,
    title: "Basic Table",
    description: "Clean and simple table design with retro styling",
    code: `import React from "react";

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

export default BasicTable;`,
  },
  Ecommerce: {
    component: EcommerceTable,
    title: "E-commerce Table",
    description: "Product table with vibrant colors and action buttons",
    code: `import React from "react";

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

export default EcommerceTable;`,
  },
  Striped: {
    component: StripedTable,
    title: "Striped Table",
    description: "Alternating row colors with bold borders",
    code: `import React from "react";

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

export default StripedTable;`,
  },
  Animated: {
    component: AnimatedTable,
    title: "Animated Table",
    description: "Interactive table with smooth hover animations",
    code: `import React from "react";

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

export default AnimatedTable;`,
  },
  Blog: {
    component: BlogTable,
    title: "Blog Table",
    description: "Content management table with action buttons",
    code: `import React, { useState } from "react";

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

export default BlogTable;`,
  },
};

const TableShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("Basic");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const code = tableComponents[activeComponent].code;
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = tableComponents[activeComponent];

  const features = [
    {
      icon: TableIcon,
      title: "Data Organization",
      description:
        "Display structured data in an organized and readable format",
    },
    {
      icon: LayoutGrid,
      title: "Responsive Design",
      description:
        "Tables adapt to different screen sizes with horizontal scroll",
    },
    {
      icon: Sparkles,
      title: "Retro Styling",
      description: "Nostalgic designs with bold borders and vibrant colors",
    },
    {
      icon: Zap,
      title: "Interactive States",
      description: "Hover effects and animations for better user experience",
    },
  ];

  return (
    <DocsContent
      title="Table Components"
      description="Pixel-perfect data tables with retro aesthetics for modern web applications"
      badge="UI Components"
    >
      {/* Installation */}
      <InfoBox type="info" title="Installation">
        <p className="text-sm">
          Copy the component code and paste it into your project. Tables are
          designed to be responsive and customizable with Tailwind CSS.
        </p>
      </InfoBox>

      {/* Variant Selector */}
      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.keys(tableComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {tableComponents[key].title}
            </button>
          ))}
        </div>
      </DocsSection>

      {/* Preview/Code Section */}
      <DocsSection id="preview">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Component Info */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {activeData.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {activeData.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("preview")}
                className={`relative px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === "preview"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </div>
                {activeTab === "preview" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`relative px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === "code"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Code
                </div>
                {activeTab === "code" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
            </div>

            {/* Content */}
            {activeTab === "preview" ? (
              <ComponentPreview>
                <activeData.component />
              </ComponentPreview>
            ) : (
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                {/* Window Controls */}
                <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">
                      {activeData.title}.jsx
                    </span>
                  </div>

                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-md transition-colors"
                  >
                    {copySuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>

                {/* Code Block */}
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  showLineNumbers={true}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  {activeData.code}
                </SyntaxHighlighter>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </DocsSection>

      {/* Usage */}
      <DocsSection title="Usage" id="usage">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            Import and use the table component in your React application. All
            tables are built with Tailwind CSS and include responsive horizontal
            scrolling:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mt-4">
            <code className="text-teal-600 dark:text-teal-400">
              import {activeData.title.replace(" ", "")} from
              "@/components/ui/tables/{activeData.title.replace(" ", "")}";
            </code>
          </div>
        </div>
      </DocsSection>

      {/* Features */}
      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {feature.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      {/* Customization Tips */}
      <InfoBox type="success" title="Customization Tips">
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Modify colors by changing Tailwind classes</li>
          <li>Adjust borders and shadows for different retro styles</li>
          <li>Add sortable columns with click handlers</li>
          <li>Implement pagination for large datasets</li>
        </ul>
      </InfoBox>
    </DocsContent>
  );
};

export default TableShowcase;
