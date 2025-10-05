import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Enduring Appeal of Mid-Century Modern Design",
    excerpt:
      "Discover why the clean lines and organic forms of mid-century modern design continue to captivate interior enthusiasts.",
    date: "July 5, 2023",
    author: "Lisa Wong",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Vintage Fashion: From Throwback to Trendsetter",
    excerpt:
      "Explore how vintage fashion pieces are making their way back into modern wardrobes and influencing today's designers.",
    date: "July 12, 2023",
    author: "Mark Thompson",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "The Resurgence of Drive-In Theaters in the Modern Era",
    excerpt:
      "Learn about the unexpected comeback of drive-in theaters and their newfound popularity in today's entertainment landscape.",
    date: "July 19, 2023",
    author: "Rachel Green",
    image:
      "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ModernBlog() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900 font-sans">
      <header className="bg-yellow-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Retro Rewind
          </h1>
          <nav>
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <a href="#" className="hover:text-blue-700 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 transition-colors">
                  Archive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 transition-colors">
                  Subscribe
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <p className="text-blue-700 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-blue-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
                <User className="w-4 h-4 ml-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center bg-yellow-200 text-blue-800 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors"
              >
                Read full article
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </article>
        ))}
      </main>

      <footer className="bg-yellow-100 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 Retro Rewind. All rights reserved.</p>
          <p className="mt-2 text-blue-700">
            Bringing the past into the present, one story at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
