import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/AppUI/Form";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 ">
      {/* First Part */}
      <div className="mb- ">
        <div className="bg-gray-100 dark:bg-zinc-900">
          <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-10 ">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl ">
              <div>
                <a
                  href="https://github.com/Omi-Patel/retroUI_Component"
                  target="_blank"
                  className="inline-block px-6 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 bg-teal-100 "
                >
                  Give it a Star ⭐ on GitHub.
                </a>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold   text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
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
                  <span className="relative text-5xl ">
                    Introducing{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 ">
                      RetroUI
                    </span>
                  </span>
                </span>
                <span className="text-gray-600">Component Library</span>
              </h2>
              <p className="text-base tracking-wide text-gray-700 dark:text-gray-200 md:text-lg">
                Bring your projects to life with a unique retro aesthetic. Our
                component library offers versatile, customizable components that
                evoke a vintage feel while maintaining modern functionality.
              </p>
            </div>
            <div className="flex items-center gap-6 sm:justify-center ">
              <NavLink to={"/components"}>
                <button className="px-4 py-2 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black font-bold shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transform hover:-translate-y-1 transition-all">
                  Get Started
                </button>
              </NavLink>
              <NavLink
                to="/about"
                className="inline-flex items-center font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-900 transition-colors duration-200 dark:hover:text-teal-600"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
        <div className="relative dark:bg-zinc-900 sm:px-0">
          <div className="mb-">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full py-6 px-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center  md:grid-cols-3 gap-x-12 py-8 px-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    1{" "}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-black dark:text-gray-200 md:mt-3">
                  Browse Components
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Explore a wide range of retro-themed components that you can
                  easily integrate into your project. Find buttons, forms,
                  cards, and more.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    2{" "}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-black dark:text-gray-200 md:mt-3">
                  Copy the Code
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Simply copy the code snippet for any component and paste it
                  into your project. Each component is designed to be easy to
                  integrate and fully responsive.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    3{" "}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-black dark:text-gray-200 md:mt-3">
                  Customize & Use
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Tailor the components to your needs. Modify colors, sizes, and
                  layouts to match your brand’s identity. Launch your site with
                  stunning retro-themed UI components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Part */}
      <section className="py-24 bg-white dark:bg-black sm:pb-16 lg:pb-20 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-12">
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="sm:text-lg text-sm font-normal tracking-widest dark:text-gray-300 text-gray-800 uppercase">
                A Hub for Designers, Developers & Marketers
              </p>
              <h1 className="mt-6 text-4xl font-normal dark:text-white text-black sm:mt-6 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Unlimited Design
                </span>{" "}
                Inspiration
              </h1>
              <p className="max-w-lg mt-4 text-base sm:text-xl font-normal text-gray-700 dark:text-gray-200 sm:mt-8">
                Discover our latest retro-themed UI components designed to
                enhance your web applications. Our SaaS product offers a range
                of customizable, stylish components that are easy to integrate
                and perfect for creating a unique and engaging user interface.
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <NavLink to={"/components"}>
                  <button className="px-4 py-2 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black font-bold shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_#212121] transform hover:-translate-y-1 transition-all">
                    Start Exploring Components
                  </button>
                </NavLink>
              </div>

              <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-teal-500 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="ml-2 text-base font-normal text-zinc-800 dark:text-white">
                    {" "}
                    18 new design inspiration was added last week{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img
                className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Part */}
      <div className=" relative bg-gray-900 dark:bg-black/40">
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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Have a Request or Inquiry?
              <br className="hidden md:block" />
              We're here to help with{" "}
              <span className="relative inline-block">
                any needs{" "}
                <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />
              </span>
            </h2>
            <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
              Fill out the form below to submit your request or inquiry. Our
              team will get back to you as soon as possible to assist with your
              needs or answer any questions you may have.
            </p>

            <Form />
            <p className="max-w-md mt-4 mb-4 text-xs font-thin tracking-wide text-gray-400 dark:text-gray-400 sm:text-sm sm:mx-auto md:mb-8">
              Your request will be reviewed by our team, and we will get back to
              you as soon as possible. Thank you for reaching out!
            </p>
            <div
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              aria-label="Scroll top"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 rotate-180 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
