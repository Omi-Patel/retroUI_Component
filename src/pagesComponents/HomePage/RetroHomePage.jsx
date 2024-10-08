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
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 20 + 10}px`,
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
