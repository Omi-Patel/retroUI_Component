import { Table, ShoppingCart, LayoutGrid, Zap, FileText } from 'lucide-react';

// Component imports
import BasicTable from '../../components/Tables/BasicTable';
import EcommerceTable from '../../components/Tables/EcommerceTable';
import StripedTable from '../../components/Tables/StripedTable';
import AnimatedTable from '../../components/Tables/AnimatedTable';
import BlogTable from '../../components/Tables/BlogTable';

export const tableComponents = [
  {
    name: 'NewsprintTable',
    component: BasicTable,
    icon: Table,
    code: `import React from "react";

const data = [
  { id: 1, name: "John Michael", email: "john@retro.dev", role: "Manager", dept: "Org", date: "23/04/18" },
  { id: 2, name: "Alexa Liras", email: "alexa@retro.dev", role: "Designer", dept: "Marketing", date: "23/04/18" },
  { id: 3, name: "James Smith", email: "james@retro.dev", role: "Developer", dept: "Engineering", date: "15/05/19" },
];

const NewsprintTable = () => {
  return (
    <div className="w-full font-mono bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5">
      <div className="text-center border-b-4 border-double border-black pb-2 mb-4">
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">VOL. 27 · STAFF DIRECTORY · Q2</p>
        <h2 className="text-3xl font-black uppercase tracking-tighter">The Personnel Gazette</h2>
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">★ ALL HANDS ON DECK ★</p>
      </div>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-y-4 border-double border-black">
            {["Name", "Email", "Role", "Dept", "Joined"].map((h) => (
              <th key={h} className="p-3 text-left text-[10px] font-black uppercase tracking-widest">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.id} className={\`border-b border-dashed border-black/40 hover:bg-yellow-100 \${i % 2 ? "bg-black/[0.025]" : ""}\`}>
              <td className="p-3 font-bold">{row.name}</td>
              <td className="p-3 opacity-80">{row.email}</td>
              <td className="p-3">
                <span className="inline-block bg-black text-[#f5f1e6] text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5">{row.role}</span>
              </td>
              <td className="p-3 opacity-80">{row.dept}</td>
              <td className="p-3 opacity-60">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-center text-[10px] tracking-[0.3em] uppercase opacity-50">— End of issue —</p>
    </div>
  );
};

export default NewsprintTable;`,
  },
  {
    name: 'EcommerceTable',
    component: EcommerceTable,
    icon: ShoppingCart,
    code: `
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
  },
  {
    name: 'StripedTable',
    component: StripedTable,
    icon: LayoutGrid,
    code: `
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
  },
  {
    name: 'AnimatedTable',
    component: AnimatedTable,
    icon: Zap,
    code: `
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
  },
  {
    name: 'BlogTable',
    component: BlogTable,
    icon: FileText,
    code: `
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
  },
];

export default tableComponents;
