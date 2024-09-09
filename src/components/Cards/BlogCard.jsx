import React from "react";

const BlogCard = () => {
  return (
    <div className="font-mono border-4 border-black p-6 rounded-lg shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out max-w-md mx-auto">
      {/* Image */}
      <img
        src="https://via.placeholder.com/400x200"
        alt="Blog Cover"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Title */}
      <h3 className="text-3xl font-bold mb-2 text-white bg-black p-2 rounded-lg shadow-lg">
        Retro Design Tips
      </h3>

      {/* Metadata */}
      <div className="flex items-center mb-4 text-white text-sm">
        <span className="mr-2">📅 August 15, 2024</span>
        <span className="mr-2">✍️ John Doe</span>
      </div>

      {/* Description */}
      <p className="text-white mb-4 text-sm font-mono">
        Discover the secrets to creating eye-catching retro designs that stand
        out in modern projects. Learn tips and tricks to give your designs a
        nostalgic feel with a modern twist.
      </p>

      {/* Button */}
      <button className="px-5 py-2 bg-black text-white border-2 border-gray-800 rounded-md shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-shadow duration-150">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
