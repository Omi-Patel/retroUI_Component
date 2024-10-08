import React from "react";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Vinyl Revival",
    excerpt:
      "Explore the resurgence of vinyl records in the digital age and why music enthusiasts are returning to this classic format.",
    date: "October 5, 2023",
    author: "Melody Spinner",
    image:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Retro Gaming Nights",
    excerpt:
      "Dive into the world of retro gaming and discover why old-school video games continue to captivate players of all ages.",
    date: "October 12, 2023",
    author: "Pixel Pusher",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Analog Photography",
    excerpt:
      "Uncover the charm and craftsmanship behind analog photography and why it's still relevant in today's digital landscape.",
    date: "October 19, 2023",
    author: "Shutter Bug",
    image:
      "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
];

export default function RetroBlog() {
  return (
    <div className="min-h-screen bg-yellow-100 p-2 sm:p-8 font-mono">
      <div className=" mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
            Retro Rewind
          </h1>
          <p className="text-xl text-blue-600">
            Exploring the timeless charm of yesteryear
          </p>
        </header>

        <div className="bg-blue-200 border-4 border-blue-800 rounded-lg p-6 mb-12 ">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Welcome to Retro Rewind!
          </h2>
          <p className="text-blue-700">
            Step back in time with us as we explore the enduring appeal of retro
            culture. From vinyl records to vintage fashion, we're here to
            celebrate the classics and show how they continue to influence our
            modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border-4 border-blue-800 rounded-lg shadow-[5px_5px_0px_0px_rgba(30,64,175,1)] hover:shadow-[7px_7px_0px_0px_rgba(30,64,175,1)] transition-shadow duration-150 ease-in-out"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover border-b-4 border-blue-800"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-800">
                  {post.title}
                </h3>
                <p className="text-blue-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-blue-600">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <button className="mt-4 w-full px-4 py-2 font-bold text-white bg-blue-500 border-2 border-blue-800 shadow-[4px_4px_0px_0px_rgba(30,64,175,1)] hover:shadow-[6px_6px_0px_0px_rgba(30,64,175,1)] transition-all duration-150 ease-in-out">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
