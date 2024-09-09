import React from "react";

const RetroLoader = () => {
  return (
    <div className=" flex flex-col gap-20">
      {/* First Row */}
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-yellow-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-pink-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-blue-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
      </div>

      {/* Second Row */}
      <div className="flex space-x-2">
        <div
          className="w-8 h-8 bg-[#eab308] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite]"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#10b981] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite] delay-300"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#3b82f6] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite] delay-500"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      {/* Third Row */}
      <div className="flex space-x-2">
        <div
          className="w-8 h-8 bg-[#fcd34d] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite]"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#60a5fa] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-100"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#f472b6] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-200"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default RetroLoader;
