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
    <div className="max-w-sm font-mono bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] overflow-hidden">
      <div className="relative aspect-square bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 border-b-4 border-black flex items-center justify-center">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.4) 1.2px, transparent 1.5px)",
          backgroundSize: "8px 8px",
        }} />
        <span className="text-7xl">✦</span>
        <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black uppercase px-2 py-1 border-2 border-black rotate-[-4deg]">NEW</span>
      </div>
      <div className="p-5">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-1">CAT № 047 · LP</p>
        <h3 className="text-2xl font-black uppercase tracking-tight mb-1">Sunset Cassette</h3>
        <p className="text-xs opacity-70 mb-4">Twelve hand-pressed tracks for late-night drives.</p>
        <div className="flex items-center justify-between border-t-2 border-dashed border-black/40 pt-3">
          <span className="text-xl font-black">$29.99</span>
          <button className="px-4 py-1.5 bg-black text-yellow-300 border-2 border-black font-black uppercase text-xs">
            Add to crate
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
    <article className="max-w-md font-mono bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] overflow-hidden">
      <div className="relative h-40 bg-black text-yellow-300 flex flex-col items-center justify-center p-4"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 8px)" }}>
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-70">THE WEEKLY · ISSUE 27</p>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-center leading-none mt-1">
          Retro Design <br />
          <span className="italic font-light text-pink-300">never died.</span>
        </h2>
        <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black uppercase px-2 py-0.5 border-2 border-black rotate-[-3deg]">ESSAY</span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase opacity-60 mb-2">
          <span>★ AUG 15, 2024</span><span>·</span><span>BY J. DOE</span><span>·</span><span>5 MIN READ</span>
        </div>
        <p className="text-sm mb-4">
          Discover the secrets behind eye-catching retro designs that stand out in modern projects.
        </p>
        <button className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-300 text-black border-4 border-black shadow-[3px_3px_0px_0px_black] text-xs font-black uppercase">
          Read on →
        </button>
      </div>
    </article>
  );
};

export default BlogCard;`,
  },
];

export default cardComponents;

