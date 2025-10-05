import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm p-4 bg-slate-400 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <img
        src="https://picsum.photos/id/1084/150"
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
