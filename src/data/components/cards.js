import { CreditCard, User, Briefcase, MessageSquare, FileText } from 'lucide-react';

// Component imports
import ProductCard from '../../components/Cards/ProductCard';
import ProfileCard from '../../components/Cards/ProfileCard';
import ServiceCard from '../../components/Cards/ServiceCard';
import TestimonialCard from '../../components/Cards/TestimonialCard';
import BlogCard from '../../components/Cards/BlogCard';

export const cardComponents = [
  {
    name: 'ProductCard',
    component: ProductCard,
    icon: CreditCard,
    colors: {
      gradient: 'from-blue-400 to-blue-500',
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30',
    },
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
  {
    name: 'ProfileCard',
    component: ProfileCard,
    icon: User,
    colors: {
      gradient: 'from-cyan-500 to-teal-600',
      bg: 'bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/30',
    },
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
  {
    name: 'ServiceCard',
    component: ServiceCard,
    icon: Briefcase,
    colors: {
      gradient: 'from-yellow-400 to-amber-500',
      bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30',
    },
    code: `import React from "react";

const ServiceCard = () => {
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

export default ServiceCard;`,
  },
  {
    name: 'TestimonialCard',
    component: TestimonialCard,
    icon: MessageSquare,
    colors: {
      gradient: 'from-teal-400 to-pink-600',
      bg: 'bg-gradient-to-br from-teal-50 to-pink-100 dark:from-teal-900/20 dark:to-pink-900/30',
    },
    code: `import React from "react";

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

export default TestimonialCard;`,
  },
  {
    name: 'BlogCard',
    component: BlogCard,
    icon: FileText,
    colors: {
      gradient: 'from-gray-500 to-gray-600',
      bg: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30',
    },
    code: `import React from "react";

const BlogCard = () => {
  return (
    <div className="font-mono border-4 border-black p-6 rounded-lg shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out max-w-md mx-auto">
      <img
        src="https://picsum.photos/id/1025/150"
        alt="Blog Cover"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-3xl font-bold mb-2 text-white bg-black p-2 rounded-lg shadow-lg">
        Retro Design Tips
      </h3>
      <div className="flex items-center mb-4 text-white text-sm">
        <span className="mr-2">📅 August 15, 2024</span>
        <span className="mr-2">✍️ John Doe</span>
      </div>
      <p className="text-white mb-4 text-sm font-mono">
        Discover the secrets to creating eye-catching retro designs that stand
        out in modern projects. Learn tips and tricks to give your designs a
        nostalgic feel with a modern twist.
      </p>
      <button className="px-5 py-2 bg-black text-white border-2 border-gray-800 rounded-md shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-shadow duration-150">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;`,
  },
];

export default cardComponents;

