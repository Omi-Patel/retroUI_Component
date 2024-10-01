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
