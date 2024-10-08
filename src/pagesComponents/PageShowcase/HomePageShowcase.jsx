import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import HomePage from "../HomePage/HomePage";
import RetroHomePage from "../HomePage/RetroHomePage";
import SimpleHomePage from "../HomePage/SimpleHomePage";

const componentCode = {
  HomePage: `
import { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fcf6e3] text-[#2b3a67] font-sans m-1 sm:m-8">
      <div className="bg-[#f7b32b] h-2"></div>
      <div className="bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]">
        <main className="container mx-auto px-2 sm:px-4 py-8">
          {/* Navbar   */}
          <div>
            <header className="bg-[#2b3a67] text-[#fcf6e3] p-4">
              <div className="container mx-auto flex justify-between items-center">
                <a
                  href="#"
                  className="text-2xl sm:text-3xl font-bold tracking-wider"
                >
                  <span className="text-[#f7b32b]">Retro</span>
                  <span className="text-[#f26419]">SaaS</span>
                </a>
                <nav className="hidden md:block">
                  <ul className="flex space-x-6">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="hover:text-[#f7b32b] transition-colors text-lg relative group"
                        >
                          {item}
                          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#f7b32b] transition-all group-hover:w-full"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-[#f7b32b]"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </header>
            {isMenuOpen && (
              <nav className="bg-[#2b3a67] text-[#fcf6e3] p-4 md:hidden">
                <ul className="space-y-2">
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block hover:text-[#f7b32b] transition-colors text-lg"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div className=" ">
            <section className="text-center mb-16 relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2252%22%20height%3D%2226%22%20viewBox%3D%220%200%2052%2026%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7b32b%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M10%2010c0-2.21-1.79-4-4-4-3.314%200-6-2.686-6-6h2c0%202.21%201.79%204%204%204%203.314%200%206%202.686%206%206%200%202.21%201.79%204%204%204%203.314%200%206%202.686%206%206%200%202.21%201.79%204%204%204v2c-3.314%200-6-2.686-6-6%200-2.21-1.79-4-4-4-3.314%200-6-2.686-6-6zm25.464-1.95l8.486%208.486-1.414%201.414-8.486-8.486%201.414-1.414z%22%20%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-[#2b3a67] tracking-tight leading-none">
                  Welcome to <span className="text-[#f26419]">RetroSaaS</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#2b3a67] max-w-3xl mx-auto mb-8">
                  Experience the charm of yesteryear with modern functionality
                </p>
                <a
                  href="/#"
                  className="inline-block bg-[#f26419] text-[#fcf6e3] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#f7b32b] transition- shadow-lg transform hover:scale-105 transition-transform duration-200"
                >
                  Explore Our Services
                </a>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Vintage Design",
                  desc: "Embrace the nostalgia with our carefully crafted retro components.",
                },
                {
                  title: "Modern Tech",
                  desc: "Built with React and Tailwind CSS for a smooth, responsive experience.",
                },
                {
                  title: "Easy Integration",
                  desc: "Seamlessly integrate our components into your existing projects.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#fcf6e3] p-6 rounded-lg shadow-lg border-4 border-[#f26419] transform hover:scale-105 transition-transform duration-200 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#f7b32b] transform rotate-45 translate-x-8 -translate-y-8"></div>
                  <h2 className="text-2xl font-bold mb-4 text-[#2b3a67]">
                    {item.title}
                  </h2>
                  <p className="text-[#2b3a67]">{item.desc}</p>
                </div>
              ))}
            </section>
            <section className="bg-[#2b3a67] text-[#fcf6e3] p-8 rounded-lg shadow-lg mb-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244%22%20height%3D%2212%22%20viewBox%3D%220%200%2044%2012%22%3E%3Cpath%20fill%3D%22%23f7b32b%22%20fill-opacity%3D%220.1%22%20d%3D%22M20%2012v-2L0%200v10l4%202h16zm18%200l4-2V0L22%2010v2h16zM20%200v8L4%200h16zm18%200L22%208V0h16z%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Featured Component
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <img
                      src="https://via.placeholder.com/400x300"
                      alt="Retro component preview"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md border-4 border-[#f7b32b]"
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-2xl font-bold mb-4 text-[#f7b32b]">
                      Retro Button Component
                    </h3>
                    <p className="mb-4">
                      Our Retro Button component brings the charm of vintage
                      design to your modern web applications. With customizable
                      colors and styles, it's perfect for any retro-themed
                      project.
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-[#f7b32b] text-[#2b3a67] px-6 py-2 rounded-full font-bold hover:bg-[#f26419] transition-colors"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer  */}
          <footer className="bg-[#2b3a67] text-[#fcf6e3] p-3 mt-8">
            <div className="container mx-auto text-center">
              <p className="mb-3">
                &copy; 2023 RetroSaaS. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center gap-2">
                {["Privacy Policy", "Terms of Service", "Contact Us"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-[#f7b32b] transition-colors "
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

  `,
  RetroHomePage: `
import React from "react";
import { ChevronRight, Star, Music, Tv, Coffee } from "lucide-react";

export default function RetroHomePage() {
  return (
    <div className="min-h-screen bg-blue-900 text-blue-100 font-mono">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-blue-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1
            className="text-3xl sm:text-4xl font-bold text-yellow-400"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            RetroWave
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden text-yellow-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <h2
            className="text-5xl sm:text-6xl font-bold mb-4 text-pink-500"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              textShadow: "3px 3px 0px #4A148C",
            }}
          >
            Welcome to the 80s
          </h2>
          <p className="text-xl mb-8">
            Experience the neon-soaked nostalgia of the 1980s
          </p>
          <a
            href="#"
            className="inline-block bg-pink-500 text-blue-900 px-6 py-3 rounded hover:bg-pink-600 transition-colors"
          >
            Start Your Retro Journey
          </a>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Music,
              title: "Synthwave Sounds",
              description:
                "Immerse yourself in the electronic beats of the 80s",
            },
            {
              icon: Tv,
              title: "Retro Gaming",
              description: "Relive the golden age of arcade and console gaming",
            },
            {
              icon: Coffee,
              title: "Vintage Lifestyle",
              description: "Embrace the fashion and culture of a bygone era",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-800 p-6 rounded text-center border-2 border-pink-500"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2 text-pink-500">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section className="bg-gradient-to-r from-blue-800 to-purple-900 p-8 rounded mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            {[...Array(20)].map((_, i) => (
              <Star
                key={i}
                className="absolute text-yellow-400"
                style={{
                  top: \`${Math.random() * 100}%\`,
                  left: \`${Math.random() * 100}%\`,
                  fontSize: \`${Math.random() * 20 + 10}px\`,
                }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">
              Featured Collection
            </h2>
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Retro Boombox"
                  className="w-full rounded shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-2xl font-bold mb-2 text-pink-500">
                  80s Boombox Collection
                </h3>
                <p className="mb-4">
                  Take your music anywhere with our collection of restored 80s
                  boomboxes. Featuring cassette players, AM/FM radio, and that
                  iconic 80s sound.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  Explore Collection <ChevronRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-pink-500">
            Join the Retro Revolution
          </h2>
          <p className="mb-4">
            Sign up for exclusive deals and retro-inspired content
          </p>
          <form className="max-w-md mx-auto flex flex-wrap sm:flex-nowrap gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l bg-blue-800 border-2 border-pink-500 focus:outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              className="bg-pink-500 w-full sm:w-auto text-blue-900 px-6 py-2 rounded-r hover:bg-pink-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-blue-800 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 RetroWave. All rights reserved.</p>
          <p className="mt-2 text-pink-500">
            Riding the waves of nostalgia into the future.
          </p>
        </div>
      </footer>
    </div>
  );
}

  `,
  SimpleHomePage: `
import React from "react";
import { ChevronRight, Sun, Moon } from "lucide-react";

export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-mono">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-300">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Minimal Retro</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simplicity is Timeless
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rediscover the beauty of minimalism with our curated collection of
            retro-inspired essentials.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-gray-800 text-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-gray-100 transition-colors"
          >
            Explore Collection
          </a>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border border-gray-300 p-6">
            <Sun className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Daytime Essentials</h3>
            <p className="mb-4">
              Simplify your daily routine with our carefully selected daytime
              products.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-gray-800 hover:underline"
            >
              Discover More <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="border border-gray-300 p-6">
            <Moon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Nighttime Classics</h3>
            <p className="mb-4">
              Unwind with our collection of timeless evening and nighttime
              essentials.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-gray-800 hover:underline"
            >
              Explore Collection <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Featured Product
          </h2>
          <div className="md:flex items-center border border-gray-300">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Minimalist Clock"
                className="w-full"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-bold mb-2">
                The Timeless Timekeeper
              </h3>
              <p className="mb-4">
                Our signature minimalist clock combines retro charm with modern
                simplicity. Perfect for any space that values both form and
                function.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-gray-800 hover:underline"
              >
                Learn More <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-4">
            Join our newsletter for minimalist living tips and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex flex-wrap sm:flex-nowrap gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button
              type="submit"
              className="bg-gray-800 w-full sm:w-auto text-gray-100 px-6 py-2 hover:bg-gray-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-gray-300 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <p>&copy; 2023 Minimal Retro. All rights reserved.</p>
          <p className="mt-2">Embracing simplicity, honoring the past.</p>
        </div>
      </footer>
    </div>
  );
}

  `,
};

const HomePageShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    HomePage: "preview",
    RetroHomePage: "preview",
    SimpleHomePage: "preview",
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
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Home Page Components
      </h1>

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

          <div className="p-2 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="">
                {componentName === "HomePage" && <HomePage />}
                {componentName === "RetroHomePage" && <RetroHomePage />}
                {componentName === "SimpleHomePage" && <SimpleHomePage />}
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

export default HomePageShowcase;
