import React, { useState } from "react";

const Pricing = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <section className="bg-[#f5f3e8] text-[#3c3b28] body-font overflow-hidden py-16">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-4xl font-bold text-[#ff003f] mb-4">Pricing</h1>
          <p className="lg:w-2/3 mx-auto text-base text-[#918c72]">
            Unlock retro vibes and timeless design.
          </p>
          <div className="flex mx-auto border-2 border-[#ff003f] rounded overflow-hidden mt-6">
            <button
              className={`py-2 px-4 ${
                plan === "monthly"
                  ? "bg-[#ff003f] text-white"
                  : "bg-[#f5f3e8] text-[#ff003f]"
              }`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-4 ${
                plan === "annually"
                  ? "bg-[#ff003f] text-white"
                  : "bg-[#f5f3e8] text-[#ff003f]"
              }`}
              onClick={() => setPlan("annually")}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-4 border-[#918c72] bg-[#fffaf0] flex flex-col relative">
              <h2 className="text-sm tracking-widest text-[#ff003f] mb-2 font-semibold">
                BASIC
              </h2>
              <h1 className="text-5xl text-[#3c3b28] font-extrabold leading-none mb-4">
                {plan === "monthly" ? "$10" : "$100"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#3c3b28]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  5 Projects
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Retro UI Kit
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Vintage Icons
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#ff003f] hover:bg-[#e00036] py-2 px-4 rounded-md">
                Get Started
              </button>
            </div>
          </div>

          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-4 border-[#918c72] bg-[#fffaf0] flex flex-col relative">
              <span className="bg-[#ff003f] text-white text-xs absolute top-0 right-0 px-3 py-1 rounded-bl-lg">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest text-[#ff003f] mb-2 font-semibold">
                PRO
              </h2>
              <h1 className="text-5xl text-[#3c3b28] font-extrabold leading-none mb-4">
                {plan === "monthly" ? "$30" : "$300"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#3c3b28]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Unlimited Projects
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Retro UI Kit + Templates
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Vintage Icons & Illustrations
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#ff003f] hover:bg-[#e00036] py-2 px-4 rounded-md">
                Get Started
              </button>
            </div>
          </div>

          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-4 border-[#918c72] bg-[#fffaf0] flex flex-col relative">
              <h2 className="text-sm tracking-widest text-[#ff003f] mb-2 font-semibold">
                ENTERPRISE
              </h2>
              <h1 className="text-5xl text-[#3c3b28] font-extrabold leading-none mb-4">
                {plan === "monthly" ? "$50" : "$500"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#3c3b28]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Unlimited Projects
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Full Retro UI Kit
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Custom Vintage Designs
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#ff003f] hover:bg-[#e00036] py-2 px-4 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
