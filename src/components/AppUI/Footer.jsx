import React from "react";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <section className="relative overflow-hidden bg-slate-200 p-4 sm:p-0  sm:px-6 lg:px-12">
      <div className="container relative z-10 mx-auto ">
        <div className=" flex gap-4 flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="w-auto ">
            <NavLink to="/">
              <div className="flex items-center">
                <svg
                  width="40"
                  height="46"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    fill="black"
                  />
                </svg>
                <span className="ml-4 text-xl font-bold">retroUI</span>
              </div>
            </NavLink>
          </div>
          <div className="w-auto ">
            <ul className=" flex gap-2 flex-col sm:flex-row ">
              <li className="sm:p-5">
                <NavLink
                  className="font-medium text-gray-600 hover:text-gray-700"
                  to={"/privacy-policy"}
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li className="sm:p-5">
                <NavLink
                  className="font-medium text-gray-600 hover:text-gray-700"
                  to={"/terms-conditions"}
                >
                  Terms & Conditions
                </NavLink>
              </li>

              <li className="sm:p-5">
                <NavLink
                  className="font-medium text-gray-600 hover:text-gray-700"
                  to={'/contact-us'}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-auto ">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <a
                  href="https://www.instagram.com/omipatel_7113/"
                  target="_blank"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <InstagramIcon />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="https://x.com/om_patel07" target="_blank">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <TwitterIcon />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a
                  href="https://www.linkedin.com/in/ompatel7113/"
                  target="_blank"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <LinkedinIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
