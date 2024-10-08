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
