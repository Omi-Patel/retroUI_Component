import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import BasicBlog from "../BlogPage/BasicBlog";
import ModernBlog from "../BlogPage/ModernBlog";
import RetroBlog from "../BlogPage/RetroBlog";

const componentCode = {
  BasicBlog: `
import React from "react";
import { Calendar, User, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Revival of Vinyl: Why Records Are Making a Comeback",
    excerpt:
      "Explore the resurgence of vinyl records in the digital age and why music enthusiasts are returning to this classic format.",
    date: "June 15, 2023",
    author: "Alex Johnson",
    image:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Retro Gaming: Nostalgia or Genuine Appreciation?",
    excerpt:
      "Dive into the world of retro gaming and discover why old-school video games continue to captivate players of all ages.",
    date: "June 22, 2023",
    author: "Sam Lee",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "The Art of Analog Photography in a Digital World",
    excerpt:
      "Uncover the charm and craftsmanship behind analog photography and why it's still relevant in today's digital landscape.",
    date: "June 29, 2023",
    author: "Emily Chen",
    image:
      "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BasicBlog() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 font-serif">
      <header className="bg-amber-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            Retro Reflections
          </h1>
          <nav>
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <a href="#" className="hover:text-amber-700 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-700 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-700 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-amber-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-amber-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-amber-800 hover:text-amber-600 transition-colors"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-amber-100 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 Retro Reflections. All rights reserved.</p>
          <p className="mt-2 text-amber-700">
            Celebrating the timeless charm of yesteryears.
          </p>
        </div>
      </footer>
    </div>
  );
}

  `,
  ModernBlog: `
import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Enduring Appeal of Mid-Century Modern Design",
    excerpt:
      "Discover why the clean lines and organic forms of mid-century modern design continue to captivate interior enthusiasts.",
    date: "July 5, 2023",
    author: "Lisa Wong",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Vintage Fashion: From Throwback to Trendsetter",
    excerpt:
      "Explore how vintage fashion pieces are making their way back into modern wardrobes and influencing today's designers.",
    date: "July 12, 2023",
    author: "Mark Thompson",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "The Resurgence of Drive-In Theaters in the Modern Era",
    excerpt:
      "Learn about the unexpected comeback of drive-in theaters and their newfound popularity in today's entertainment landscape.",
    date: "July 19, 2023",
    author: "Rachel Green",
    image:
      "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ModernBlog() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900 font-sans">
      <header className="bg-yellow-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Retro Rewind
          </h1>
          <nav>
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <a href="#" className="hover:text-blue-700 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 transition-colors">
                  Archive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 transition-colors">
                  Subscribe
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            className={\`flex flex-col md:flex-row items-center mb-12 \${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }\`}
          >
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div
              className={\`md:w-1/2 \${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }\`}
            >
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <p className="text-blue-700 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-blue-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
                <User className="w-4 h-4 ml-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center bg-yellow-200 text-blue-800 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors"
              >
                Read full article
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </article>
        ))}
      </main>

      <footer className="bg-yellow-100 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 Retro Rewind. All rights reserved.</p>
          <p className="mt-2 text-blue-700">
            Bringing the past into the present, one story at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

  `,
  RetroBlog: `
import React from "react";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Vinyl Revival",
    excerpt:
      "Explore the resurgence of vinyl records in the digital age and why music enthusiasts are returning to this classic format.",
    date: "October 5, 2023",
    author: "Melody Spinner",
    image:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Retro Gaming Nights",
    excerpt:
      "Dive into the world of retro gaming and discover why old-school video games continue to captivate players of all ages.",
    date: "October 12, 2023",
    author: "Pixel Pusher",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Analog Photography",
    excerpt:
      "Uncover the charm and craftsmanship behind analog photography and why it's still relevant in today's digital landscape.",
    date: "October 19, 2023",
    author: "Shutter Bug",
    image:
      "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
];

export default function RetroBlog() {
  return (
    <div className="min-h-screen bg-yellow-100 p-2 sm:p-8 font-mono">
      <div className=" mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
            Retro Rewind
          </h1>
          <p className="text-xl text-blue-600">
            Exploring the timeless charm of yesteryear
          </p>
        </header>

        <div className="bg-blue-200 border-4 border-blue-800 rounded-lg p-6 mb-12 ">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Welcome to Retro Rewind!
          </h2>
          <p className="text-blue-700">
            Step back in time with us as we explore the enduring appeal of retro
            culture. From vinyl records to vintage fashion, we're here to
            celebrate the classics and show how they continue to influence our
            modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border-4 border-blue-800 rounded-lg shadow-[5px_5px_0px_0px_rgba(30,64,175,1)] hover:shadow-[7px_7px_0px_0px_rgba(30,64,175,1)] transition-shadow duration-150 ease-in-out"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover border-b-4 border-blue-800"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-800">
                  {post.title}
                </h3>
                <p className="text-blue-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-blue-600">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <button className="mt-4 w-full px-4 py-2 font-bold text-white bg-blue-500 border-2 border-blue-800 shadow-[4px_4px_0px_0px_rgba(30,64,175,1)] hover:shadow-[6px_6px_0px_0px_rgba(30,64,175,1)] transition-all duration-150 ease-in-out">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

  `,
};

const BlogPageShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    BasicBlog: "preview",
    ModernBlog: "preview",
    RetroBlog: "preview",
  });
  const [copySuccess, setCopySuccess] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const installationCopyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setInstallSuccess(true);
    setTimeout(() => setInstallSuccess(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        About Page Components
      </h1>

      {/* Installation Guide  */}
      <h1 className="text-2xl my-2 font-medium tracking-wide">
        # Installation
      </h1>
      <div className="flex justify-between p-2 mb-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
        <SyntaxHighlighter
          language="jsx"
          style={atomDark}
          className="rounded-md w-full"
        >
          npm install framer-motion lucide-react
        </SyntaxHighlighter>
        <button
          onClick={() =>
            installationCopyToClipboard(
              "npm install framer-motion lucide-react"
            )
          }
          className="text-white p-1 sm:p-4"
        >
          {installSuccess ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-green-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          )}
        </button>
      </div>

      {Object.keys(componentCode).map((componentName) => (
        <div key={componentName} className="mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4">
            {componentName.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() =>
                setActiveTabs((prev) => ({
                  ...prev,
                  [componentName]: "preview",
                }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "preview"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() =>
                setActiveTabs((prev) => ({ ...prev, [componentName]: "code" }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "code"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Code
            </button>
          </div>

          <div className="p-2 sm:p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="">
                {componentName === "BasicBlog" && <BasicBlog />}
                {componentName === "ModernBlog" && <ModernBlog />}
                {componentName === "RetroBlog" && <RetroBlog />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto h-[600px]">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md"
                >
                  {componentCode[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyToClipboard(componentCode[componentName])}
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

export default BlogPageShowcase;
