import React, { useEffect, useState } from "react";
import ProductCard from "../components/Cards/ProductCard";
import ProfileCard from "../components/Cards/ProfileCard";
import SeviceCard from "../components/Cards/SeviceCard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import TestimonialCard from "../components/Cards/TestimonialCard";
import BlogCard from "../components/Cards/BlogCard";

const cardComponents = {
  ProductCard: `
import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm p-4 bg-slate-400 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Product Name"
        className="w-full h-48 object-cover border-b-4 border-black mb-4"
      />
      <div className="p-4">
        <h3 className="text-2xl font-mono font-bold mb-2 text-black">
          Retro Product
        </h3>
        <p className="text-black mb-6">
          This is a retro-themed product card. It features bold colors, solid
          borders, and a vintage aesthetic for a classic feel.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-black">$29.99</span>
          <button className="px-4 py-2 font-mono text-white bg-blue-500 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

  `,
  ProfileCard: `
import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm p-4 bg-cyan-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile Avatar"
        className="w-24 h-24 rounded-full mx-auto border-4 border-black mb-4"
      />
      <div className="p-4 text-center">
        <h3 className="text-2xl font-mono font-bold mb-2 text-black">
          John Doe
        </h3>
        <p className="text-black mb-4">
          A passionate developer with a love for all things retro.
        </p>
        <button className="px-4 py-2 font-mono text-white bg-green-500 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-in-out">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

  `,
  ServiceCard: `
import React from "react";

const SeviceCard = () => {
  return (
    <div className="bg-yellow-200 border-4 border-black p-6 rounded-md shadow-[8px_8px_0px_0px_black] max-w-xs transform hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-200 ease-in-out">
      <h3 className="text-3xl font-mono font-bold mb-4 text-black">
        Web Development
      </h3>
      <p className="text-black mb-6">
        Offering cutting-edge web development services with a retro twist!
      </p>
      <button className="px-4 py-2 bg-black text-yellow-200 border-2 border-black font-bold shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transform hover:-translate-y-1 transition-all">
        Learn More
      </button>
    </div>
  );
};

export default SeviceCard;

  `,
  TestimonialCard: `
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="max-w-xs p-6 bg-gradient-to-r from-teal-400 to-pink-400 border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <div className="bg-black text-white p-4 rounded-t-lg -mt-10 relative z-10 border-2 border-white shadow-inner shadow-black">
        <h3 className="text-2xl font-mono font-bold uppercase">John Doe</h3>
      </div>
      <div className="p-4 bg-gray-200 border-t-4 border-black -mt-6 relative z-0">
        <p className="italic text-black text-lg">
          "This service is amazing, brought back the nostalgia of the retro
          era!"
        </p>
        <span className="block mt-4 text-red-600 font-bold text-xl">★★★★★</span>
      </div>
    </div>
  );
};

export default TestimonialCard;

  `,
  BlogCard: `
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

  `,
};

const CardShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    ProductCard: "preview",
    ProfileCard: "preview",
    ServiceCard: "preview",
    TestimonialCard: "preview",
    BlogCard: "preview",
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Card Components</h1>

      {/* Card Variants Display */}
      {Object.keys(cardComponents).map((componentName) => (
        <div key={componentName} className="mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4">
            {componentName.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          {/* Tabs for Preview and Code */}
          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() =>
                setActiveTabs((prev) => ({
                  ...prev,
                  [componentName]: "preview",
                }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "preview"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() =>
                setActiveTabs((prev) => ({ ...prev, [componentName]: "code" }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "code"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Code
            </button>
          </div>

          {/* Tab Content for Each Variant */}
          <div className="p-4 sm:p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "ProductCard" && <ProductCard />}
                {componentName === "ProfileCard" && <ProfileCard />}
                {componentName === "ServiceCard" && <SeviceCard />}
                {componentName === "TestimonialCard" && <TestimonialCard />}
                {componentName === "BlogCard" && <BlogCard />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md border border-gray-600"
                >
                  {cardComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyToClipboard(cardComponents[componentName])}
                  className="absolute top-4 right-4 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-150"
                >
                  {copySuccess ? "Copied!" : "Copy Code"}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardShowcase;
