import { useState } from "react";

export default function HomePage() {
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
