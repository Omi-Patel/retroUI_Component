import React, { useState } from "react";

// Dummy data for blog posts
const initialBlogPosts = [
  {
    id: 1,
    title: "The Rise of Retro Gaming",
    author: "Jane Doe",
    date: "2024-09-01",
    category: "Gaming",
    excerpt:
      "A look back at the golden age of gaming and its impact on today’s culture.",
  },
  {
    id: 2,
    title: "Vinyl Records: A Comeback Story",
    author: "John Smith",
    date: "2024-08-15",
    category: "Music",
    excerpt: "Exploring the resurgence of vinyl records in the digital age.",
  },
  {
    id: 3,
    title: "Fashion Trends from the 80s",
    author: "Emily Johnson",
    date: "2024-09-10",
    category: "Fashion",
    excerpt: "How 80s fashion is influencing modern styles.",
  },
  {
    id: 4,
    title: "Classic Movies to Rewatch",
    author: "Michael Brown",
    date: "2024-09-12",
    category: "Movies",
    excerpt: "A curated list of timeless films that deserve a rewatch.",
  },
];

const BlogTable = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-[#5B3F69] mb-4 font-sans">
        Blog Posts
      </h2>
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-[#5B3F69] text-white font-sans font-bold rounded shadow-md hover:shadow-lg transition-shadow duration-150 ease-in-out mr-2 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 inline-block mr-1"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Add Blog</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent border border-[#5B3F69] rounded-lg">
          <thead>
            <tr className="bg-[#D6C6E1]">
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Title
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Author
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Date
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Category
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Excerpt
              </th>
              <th className="px-4 py-2 border-b border-[#5B3F69] text-left font-bold text-[#5B3F69]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-[#E4D1F0] transition duration-150 ease-in-out"
              >
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.title}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.author}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.date}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.category}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] font-sans text-lg text-[#3B2B4D]">
                  {post.excerpt}
                </td>
                <td className="px-4 py-2 border-b border-[#5B3F69] text-[#5B3F69]">
                  <button className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 inline-block hover:text-blue-500"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 inline-block hover:text-red-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;
