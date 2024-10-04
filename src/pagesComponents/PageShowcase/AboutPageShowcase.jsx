import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import AboutPage from "../AboutPage/AboutPage";
import RetroAbout from "../AboutPage/RetroAbout";

const componentCode = {
  AboutPage: `
import { useState } from "react";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fcf6e3] text-[#2b3a67] font-sans m-1 sm:m-8">
      <div className="bg-[#f7b32b] h-2"></div>
      <div className="bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]">
        <main className="container mx-auto ">
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

          <div className=" px-2 sm:px-4">
            <h1 className="text-5xl font-bold mb-12 text-center text-[#2b3a67] tracking-tight">
              About RetroSaaS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f26419] transform -rotate-6 rounded-lg"></div>
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Retro computer"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
              <div>
                <p className="text-lg mb-6 text-[#2b3a67] leading-relaxed">
                  RetroSaaS is a passion project born out of our love for
                  vintage aesthetics and modern web technologies. We believe
                  that the charm of yesteryear can be seamlessly blended with
                  the functionality of today's web applications.
                </p>
                <p className="text-lg mb-6 text-[#2b3a67] leading-relaxed">
                  Our mission is to provide developers and designers with a
                  comprehensive library of retro-themed components that are easy
                  to use, fully responsive, and built with the latest web
                  standards in mind.
                </p>
                <p className="text-lg text-[#2b3a67] leading-relaxed">
                  Whether you're building a nostalgic personal blog or a
                  full-fledged SaaS application with a vintage twist, RetroSaaS
                  has got you covered.
                </p>
              </div>
            </div>
            <div className="bg-[#2b3a67] p-8 rounded-lg shadow-lg text-[#fcf6e3] relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7b32b%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40zm0-40h2l-2%202V0zm0%204l4-4h2l-6%206V4zm0%204l8-8h2L40%2010V8zm0%204L52%200h2L40%2014v-2zm0%204L56%200h2L40%2018v-2zm0%204L60%200h2L40%2022v-2zm0%204L64%200h2L40%2026v-2zm0%204L68%200h2L40%2030v-2zm0%204L72%200h2L40%2034v-2zm0%204L76%200h2L40%2038v-2zm0%204L80%200v2L42%2040h-2zm4%200L80%204v2L46%2040h-2zm4%200L80%208v2L50%2040h-2zm4%200l28-28v2L54%2040h-2zm4%200l24-24v2L58%2040h-2zm4%200l20-20v2L62%2040h-2zm4%200l16-16v2L66%2040h-2zm4%200l12-12v2L70%2040h-2zm4%200l8-8v2l-6%206h-2zm4%200l4-4v2l-2%202h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#f7b32b]">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Nostalgia",
                      desc: "We cherish the aesthetics of the past and bring them to life in the digital age.",
                    },
                    {
                      title: "Innovation",
                      desc: "While we love retro design, we use cutting-edge technology to deliver the best experience.",
                    },
                    {
                      title: "Community",
                      desc: "We believe in fostering a community of developers who appreciate vintage design.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="text-center bg-[#fcf6e3] p-6 rounded-lg shadow-inner text-[#2b3a67] transform hover:scale-105 transition-transform duration-200"
                    >
                      <h3 className="text-xl font-bold mb-4 text-[#f26419]">
                        {item.title}
                      </h3>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
  RetroAbout: `
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function RetroAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 font-mono">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-amber-100">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded in the digital age with a love for the analog past, we
              blend modern technology with vintage aesthetics. Our journey began
              in a small garage, much like the tech giants of yesteryear, fueled
              by a passion for creating experiences that resonate with both the
              young and the young at heart.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We strive to bridge the gap between the nostalgia of the past and
              the innovations of the future. Our goal is to create products and
              experiences that not only function flawlessly but also tell a
              story, evoking memories while pushing boundaries.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Jane Retro", "John Vintage", "Alice Analog"].map(
                (name, index) => (
                  <motion.div
                    key={name}
                    className="bg-amber-100 p-4 rounded-lg text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={\`https://via.placeholder.com/300x200?text=\${name.charAt(
                        0
                      )}\`}
                      alt={name}
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-amber-700">Retro Enthusiast</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="#"
                className="text-amber-900 hover:text-amber-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-amber-900 hover:text-amber-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-amber-900 hover:text-amber-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <motion.footer
        className="py-6 px-4 sm:px-6 lg:px-8 bg-amber-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>
          &copy; {new Date().getFullYear()} Retro Innovations. All rights
          reserved.
        </p>
      </motion.footer>
    </div>
  );
}

  `,
};

const AboutPageShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    AboutPage: "preview",
    RetroAbout: "preview",
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
                {componentName === "AboutPage" && <AboutPage />}
                {componentName === "RetroAbout" && <RetroAbout />}
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

export default AboutPageShowcase;
