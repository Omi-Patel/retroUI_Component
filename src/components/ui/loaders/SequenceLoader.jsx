import React from "react";

const SequenceLoader = () => {
  return (
    <div className="flex space-x-2">
      <div
        className="w-8 h-8 bg-[#fcd34d] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-8 h-8 bg-[#f472b6] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="w-8 h-8 bg-[#60a5fa] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
};

export default SequenceLoader;
