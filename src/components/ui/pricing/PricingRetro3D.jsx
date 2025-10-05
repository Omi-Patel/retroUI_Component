import React, { useState } from "react";

const PricingRetro3D = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <section className="bg-[#fef9f3] text-[#333] body-font overflow-hidden py-16">
      <div className="container px-5 mx-auto">
        {/* Title and Switch */}
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-4xl font-bold text-[#F78E69] mb-4 font-vintage">
            Vintage Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto text-base text-[#565656] italic">
            Bring a vintage touch to modern-day pricing.
          </p>
          <div className="flex mx-auto border-4 border-[#F78E69] rounded-full overflow-hidden mt-6 shadow-lg">
            <button
              className={`py-2 px-6 transition-colors duration-300 ease-in-out ${
                plan === "monthly"
                  ? "bg-[#F78E69] text-white"
                  : "bg-[#fef9f3] text-[#F78E69]"
              }`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-6 transition-colors duration-300 ease-in-out ${
                plan === "annually"
                  ? "bg-[#F78E69] text-white"
                  : "bg-[#fef9f3] text-[#F78E69]"
              }`}
              onClick={() => setPlan("annually")}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap -m-4">
          {/* Pricing Card 1 */}
          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg bg-[#fff8ec] flex flex-col relative shadow-lg border-4 border-[#F78E69] border-t-[8px] border-l-[8px] hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
              <h2 className="text-sm tracking-widest text-[#F78E69] mb-1 font-semibold font-vintage">
                STARTER
              </h2>
              <h1 className="text-5xl font-bold text-[#333] mb-4 font-vintage">
                {plan === "monthly" ? "$15" : "$150"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#333]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Unlimited Designs
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Free Updates
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Email Support
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#F78E69] hover:bg-[#f57254] py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg bg-[#fff8ec] flex flex-col relative shadow-lg border-4 border-[#F78E69] border-t-[8px] border-l-[8px] hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
              <span className="bg-[#F78E69] text-white text-xs absolute top-0 right-0 px-3 py-1 rounded-bl-md font-vintage">
                RECOMMENDED
              </span>
              <h2 className="text-sm tracking-widest text-[#F78E69] mb-1 font-semibold font-vintage">
                PROFESSIONAL
              </h2>
              <h1 className="text-5xl font-bold text-[#333] mb-4 font-vintage">
                {plan === "monthly" ? "$35" : "$350"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#333]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Custom Branding
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Priority Support
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Access to All Designs
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#F78E69] hover:bg-[#f57254] py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg bg-[#fff8ec] flex flex-col relative shadow-lg border-4 border-[#F78E69] border-t-[8px] border-l-[8px] hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
              <h2 className="text-sm tracking-widest text-[#F78E69] mb-1 font-semibold font-vintage">
                ENTERPRISE
              </h2>
              <h1 className="text-5xl font-bold text-[#333] mb-4 font-vintage">
                {plan === "monthly" ? "$55" : "$550"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#333]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Unlimited Designs
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Custom Designs
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Dedicated Support
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#F78E69] hover:bg-[#f57254] py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingRetro3D;
