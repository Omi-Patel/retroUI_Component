"use client";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/AppUI/Form";
import { motion } from "framer-motion";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800"
      >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://github.com/Omi-Patel/retroUI_Component"
                target="_blank"
                className="inline-block px-6 py-2 mb-6 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-100 hover:bg-teal-200 transition-colors duration-300 shadow-sm"
                rel="noreferrer"
              >
                Give it a Star ⭐ on GitHub
              </a>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="max-w-lg mb-8 font-sans text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl md:mx-auto"
            >
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-5xl lg:text-6xl">
                  Introducing{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 font-extrabold">
                    RetroUI
                  </span>
                </span>
              </span>
              <span className="block mt-2 text-3xl text-gray-600 dark:text-gray-400">
                Component Library
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg tracking-wide text-gray-700 dark:text-gray-300 md:text-xl"
            >
              Bring your projects to life with a unique retro aesthetic. Our
              component library offers versatile, customizable components that
              evoke a vintage feel while maintaining modern functionality.
            </motion.p>
          </div>
          <motion.div
            variants={staggerChildren}
            className="flex items-center gap-6 sm:justify-center"
          >
            <motion.div variants={fadeIn}>
              <NavLink to={"/components"}>
                <button className="px-6 py-3 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-all duration-300 rounded-sm">
                  Get Started
                </button>
              </NavLink>
            </motion.div>
            <motion.div variants={fadeIn}>
              <NavLink
                to="/about"
                className="inline-flex items-center font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-900 transition-colors duration-200 dark:hover:text-teal-600 underline-offset-4 hover:underline"
              >
                Learn More
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Steps Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative dark:bg-zinc-900 py-12"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full py-6 px-12"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Dotted line connecting steps"
            />
          </div>

          <div className="relative grid grid-cols-1 text-center md:grid-cols-3 gap-8 py-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-800 rounded-full shadow">
                <span className="text-xl font-semibold text-teal-700 dark:text-teal-400">
                  1
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-black dark:text-gray-200">
                Browse Components
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Explore a wide range of retro-themed components that you can
                easily integrate into your project. Find buttons, forms, cards,
                and more.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-800 rounded-full shadow">
                <span className="text-xl font-semibold text-teal-700 dark:text-teal-400">
                  2
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-black dark:text-gray-200">
                Copy the Code
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Simply copy the code snippet for any component and paste it into
                your project. Each component is designed to be easy to integrate
                and fully responsive.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-800 rounded-full shadow">
                <span className="text-xl font-semibold text-teal-700 dark:text-teal-400">
                  3
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-black dark:text-gray-200">
                Customize & Use
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Tailor the components to your needs. Modify colors, sizes, and
                layouts to match your brand's identity. Launch your site with
                stunning retro-themed UI components.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white dark:bg-black sm:pb-16 lg:pb-20 overflow-hidden"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sm:text-lg text-sm font-normal tracking-widest dark:text-gray-300 text-gray-800 uppercase bg-gray-100 dark:bg-gray-800 inline-block px-4 py-1 rounded-full"
              >
                A Hub for Designers, Developers & Marketers
              </motion.p>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-4xl font-normal dark:text-white text-black sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-bold">
                  Unlimited Design
                </span>{" "}
                Inspiration
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-lg mt-6 text-base sm:text-xl font-normal text-gray-700 dark:text-gray-200 sm:mt-8"
              >
                Discover our latest retro-themed UI components designed to
                enhance your web applications. Our SaaS product offers a range
                of customizable, stylish components that are easy to integrate
                and perfect for creating a unique and engaging user interface.
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group"
              >
                <NavLink to={"/components"}>
                  <button className="px-6 py-3 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black dark:border-zinc-700 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-all duration-300 rounded-sm">
                    Start Exploring Components
                  </button>
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-300 dark:border-gray-700 sm:pt-10 sm:mt-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-teal-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="ml-2 text-base font-normal text-zinc-800 dark:text-white">
                    18 new design inspiration was added last week
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0"
            >
              <img
                className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl filter drop-shadow-2xl"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                alt="3D illustration"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-b from-gray-900 to-gray-800 dark:from-black/80 dark:to-black/40"
      >
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-gray-100 dark:text-gray-900"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
              Have a Request or Inquiry?
              <br className="hidden md:block" />
              <span className="mt-2 block">
                We're here to help with{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  any needs
                </span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-base font-normal tracking-wide text-gray-300 md:text-lg"
            >
              Fill out the form below to submit your request or inquiry. Our
              team will get back to you as soon as possible to assist with your
              needs or answer any questions you may have.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-700"
            >
              <Form />
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-md mt-6 mb-6 text-xs font-normal tracking-wide text-gray-400 dark:text-gray-400 sm:text-sm sm:mx-auto md:mb-8"
            >
              Your request will be reviewed by our team, and we will get back to
              you as soon as possible. Thank you for reaching out!
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              aria-label="Scroll top"
              className="flex items-center justify-center w-12 h-12 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-400 hover:border-teal-400 hover:shadow hover:scale-110 rotate-180 cursor-pointer bg-black/20 backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
