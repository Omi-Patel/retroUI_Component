"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Code,
  Copy,
  Check,
  Eye,
  Sparkles,
  Info,
  CreditCard,
  User,
  Briefcase,
  MessageSquare,
  FileText,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import card components
import ProductCard from "@/components/ui/cards/ProductCard";
import ProfileCard from "@/components/ui/cards/ProfileCard";
import SeviceCard from "@/components/ui/cards/SeviceCard";
import TestimonialCard from "@/components/ui/cards/TestimonialCard";
import BlogCard from "@/components/ui/cards/BlogCard";

const cardComponents = {
  ProductCard: {
    component: ProductCard,
    icon: CreditCard,
    title: "Product Card",
    description: "E-commerce product display with pricing and CTA",
    code: `import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm p-4 bg-slate-400 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <img
        src="https://picsum.photos/id/660/150"
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

export default ProductCard;`,
  },
  ProfileCard: {
    component: ProfileCard,
    icon: User,
    title: "Profile Card",
    description: "User profile display with avatar and action button",
    code: `import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm p-4 bg-cyan-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <img
        src="https://picsum.photos/id/1084/150"
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

export default ProfileCard;`,
  },
  ServiceCard: {
    component: SeviceCard,
    icon: Briefcase,
    title: "Service Card",
    description: "Service offering display with icon and description",
    code: `import React from "react";

const SeviceCard = () => {
  return (
    <div className="bg-yellow-200 border-4 border-black p-6 rounded-md shadow-[8px_8px_0px_0px_black] max-w-xs transform hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-200 ease-in-out">
      <h3 className="text-3xl font-mono font-bold mb-4 text-black">
        Service Title
      </h3>
      <p className="text-lg text-black mb-6">
        This service card is designed with a retro aesthetic, featuring bold
        borders and vibrant colors.
      </p>
      <button className="w-full py-2 font-mono text-white bg-red-500 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-in-out">
        Learn More
      </button>
    </div>
  );
};

export default SeviceCard;`,
  },
  TestimonialCard: {
    component: TestimonialCard,
    icon: MessageSquare,
    title: "Testimonial Card",
    description: "Customer testimonial with quote and author",
    code: `import React from "react";

const TestimonialCard = () => {
  return (
    <div className="max-w-sm p-6 bg-pink-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <p className="text-xl font-mono italic text-black mb-4">
        "This is a fantastic retro-themed testimonial card. The design is bold
        and memorable!"
      </p>
      <div className="flex items-center">
        <img
          src="https://picsum.photos/id/1025/100"
          alt="Customer Avatar"
          className="w-12 h-12 rounded-full border-2 border-black mr-4"
        />
        <div>
          <h4 className="text-lg font-mono font-bold text-black">Jane Smith</h4>
          <p className="text-sm text-black">Happy Customer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;`,
  },
  BlogCard: {
    component: BlogCard,
    icon: FileText,
    title: "Blog Card",
    description: "Blog post preview with image and metadata",
    code: `import React from "react";

const BlogCard = () => {
  return (
    <div className="max-w-sm p-4 bg-green-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <img
        src="https://picsum.photos/id/1015/150"
        alt="Blog Post Image"
        className="w-full h-48 object-cover border-b-4 border-black mb-4"
      />
      <div className="p-4">
        <h3 className="text-2xl font-mono font-bold mb-2 text-black">
          Blog Post Title
        </h3>
        <p className="text-black mb-4">
          A short description of the blog post goes here. It's designed with a
          retro style for a unique look.
        </p>
        <button className="px-4 py-2 font-mono text-white bg-purple-500 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-in-out">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;`,
  },
};

const CardShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("ProductCard");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = cardComponents[activeComponent];

  return (
    <DocsContent
      title="Card Components"
      description="Versatile card components for displaying various types of content. Perfect for product showcases, user profiles, blog posts, and more."
      badge="UI Components"
    >
      {/* Installation Guide */}
      <InfoBox type="info" title="Installation">
        <p className="mb-2">
          These card components use Tailwind CSS for styling. Images are sourced
          from Lorem Picsum for demonstration purposes.
        </p>
        <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
          npm install tailwindcss
        </code>
      </InfoBox>

      {/* Component Selector */}
      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.keys(cardComponents).map((key) => {
            const Icon = cardComponents[key].icon;
            return (
              <button
                key={key}
                onClick={() => setActiveComponent(key)}
                className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all flex flex-col items-center gap-2 ${
                  activeComponent === key
                    ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">
                  {cardComponents[key].title.replace(" Card", "")}
                </span>
              </button>
            );
          })}
        </div>
      </DocsSection>

      {/* Active Component Display */}
      <DocsSection id="preview">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Component Info */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {activeData.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {activeData.description}
              </p>
            </div>

            {/* Tab Selector */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                  activeTab === "preview"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </div>
                {activeTab === "preview" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                  activeTab === "code"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Code
                </div>
                {activeTab === "code" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
            </div>

            {/* Content Area */}
            {activeTab === "preview" ? (
              <ComponentPreview>
                <activeData.component />
              </ComponentPreview>
            ) : (
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Code Header */}
                  <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-gray-400 ml-2">
                        {activeComponent}.jsx
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(activeData.code)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-md transition-colors"
                    >
                      {copySuccess ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Code
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code Content */}
                  <SyntaxHighlighter
                    language="jsx"
                    style={atomDark}
                    showLineNumbers={true}
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                    }}
                  >
                    {activeData.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </DocsSection>

      {/* Usage Guide */}
      <DocsSection title="Usage" id="usage">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Basic Usage
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Copy the component code and customize the content to match your
              needs:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                {`import ${activeComponent} from './components/${activeComponent}';

function MyComponent() {
  return (
    <div>
      <${activeComponent} />
    </div>
  );
}`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Customization Tips
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Replace placeholder images with your own assets</li>
              <li>Modify colors by changing the Tailwind color classes</li>
              <li>Adjust shadow depths for different visual effects</li>
              <li>Add custom content and interactive elements as needed</li>
            </ul>
          </div>

          <InfoBox type="success" title="Pro Tip">
            Cards can be easily combined with layout grids to create beautiful
            gallery and showcase pages. Try using CSS Grid or Flexbox for
            responsive layouts.
          </InfoBox>
        </div>
      </DocsSection>

      {/* Features */}
      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Sparkles,
              title: "Retro Styling",
              description:
                "Bold borders and vibrant colors for authentic vintage look",
            },
            {
              icon: Code,
              title: "Fully Responsive",
              description: "Adapts beautifully to all screen sizes",
            },
            {
              icon: Info,
              title: "Easy Customization",
              description: "Simple Tailwind classes for quick modifications",
            },
            {
              icon: Eye,
              title: "Multiple Variants",
              description: "Different card types for various use cases",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {feature.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>
    </DocsContent>
  );
};

export default CardShowcase;
