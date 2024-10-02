import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import BasicTable from "../components/Tables/BasicTable";
import StripedTable from "../components/Tables/StripedTable";
import AnimatedTable from "../components/Tables/AnimatedTable";
import EcommerceTable from "../components/Tables/EcommerceTable";
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
      "A look back at the golden age of gaming and its impact on today’s culture.",
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
  const [activeTabs, setActiveTabs] = useState({
    BasicTable: "preview",
    EcommerceTable: "preview",
    StripedTable: "preview",
    AnimatedTable: "preview",
    BlogTable: "preview",
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100  sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Table Components</h1>

      {Object.keys(tableComponents).map((componentName) => (
        <div key={componentName} className="mb-12">
          <h2 className="text-2xl sm:text-3xl mb-4">
            {componentName.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          {/* Tabs for Preview and Code */}
          <div className="flex border-b border-gray-300 mb-4">
            <button
              onClick={() =>
                setActiveTabs((prev) => ({
                  ...prev,
                  [componentName]: "preview",
                }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "preview"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() =>
                setActiveTabs((prev) => ({
                  ...prev,
                  [componentName]: "code",
                }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "code"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Code
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-2 sm:p-6 bg-gray-800 text-black rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "BasicTable" && <BasicTable />}
                {componentName === "EcommerceTable" && <EcommerceTable />}
                {componentName === "StripedTable" && <StripedTable />}
                {componentName === "AnimatedTable" && <AnimatedTable />}
                {componentName === "BlogTable" && <BlogTable />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto h-[600px]">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md"
                >
                  {tableComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() =>
                    copyToClipboard(tableComponents[componentName])
                  }
                  className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {copySuccess ? "Copied!" : "Copy Code"}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableShowcase;
