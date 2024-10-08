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
