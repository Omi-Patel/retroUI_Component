import React from "react";

const BarsLoader = () => {
  return (
    <>
      <div className="flex space-x-2">
        <div
          className="w-2 h-8 bg-[#fbbf24] border-2 border-black shadow-[4px_4px_16px_0px_yellow] animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-8 bg-[#ec4899] border-2 border-black shadow-[4px_4px_16px_0px_pink] animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-8 bg-[#3b82f6] border-2 border-black shadow-[4px_4px_16px_0px_blue] animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </>
  );
};

export default BarsLoader;
