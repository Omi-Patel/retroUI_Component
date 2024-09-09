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
