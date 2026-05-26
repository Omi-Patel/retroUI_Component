import { DollarSign, Award, Gem } from 'lucide-react';

// Component imports
import BasicPricing from '../../components/Pricing/Pricing';
import PricingRetro3D from '../../components/Pricing/PricingRetro3D';
import PricingRetroVibrant from '../../components/Pricing/PricingRetroVibrant';

export const pricingComponents = [
  {
    name: 'BasicPricing',
    component: BasicPricing,
    icon: DollarSign,
    code: `
import React, { useState } from "react";

const BasicPricing = () => {
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
              className={\`py-2 px-4 \${
                plan === "monthly"
                  ? "bg-[#ff003f] text-white"
                  : "bg-[#f5f3e8] text-[#ff003f]"
              }\`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={\`py-2 px-4 \${
                plan === "annually"
                  ? "bg-[#ff003f] text-white"
                  : "bg-[#f5f3e8] text-[#ff003f]"
              }\`}
              onClick={() => setPlan("annually")}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
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

          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
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

          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
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

export default BasicPricing;
  `,
  },
  {
    name: 'PricingRetro3D',
    component: PricingRetro3D,
    icon: Award,
    code: `
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
              className={\`py-2 px-6 transition-colors duration-300 ease-in-out \${
                plan === "monthly"
                  ? "bg-[#F78E69] text-white"
                  : "bg-[#fef9f3] text-[#F78E69]"
              }\`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={\`py-2 px-6 transition-colors duration-300 ease-in-out \${
                plan === "annually"
                  ? "bg-[#F78E69] text-white"
                  : "bg-[#fef9f3] text-[#F78E69]"
              }\`}
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
  `,
  },
  {
    name: 'PricingRetroVibrant',
    component: PricingRetroVibrant,
    icon: Gem,
    code: `
import React from "react";

const PricingRetroVibrant = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-12 font-mono">
        <h2 className="text-xl md:text-6xl font-bold ">
          Plans that scale with business
        </h2>
        <p className="text-sm md:text-lg w-full sm:w-1/2 mx-auto text-gray-600 mt-2 px-4 font-sans">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page, or admin panel for your SaaS.
        </p>

        {/* Monthly and Yearly Toggle */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-start px-4">
          <div className="flex items-center">
            <input type="radio" name="plan" className="mr-2" checked />
            <span className=" text-gray-600 mr-3">Monthly Plan</span>
          </div>
          <div className="flex items-center">
            <input type="radio" name="plan" className="mr-2" />
            <span className="">
              Yearly Plan <span className="text-blue-500">(Save 20%)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-2 sm:p-8">
        {/* Basic Plan */}
        <div className="w-full md:w-1/3 bg-gray-100 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-8 rounded-xl">
          <h3 className="text-2xl  flex items-center mb-4">
            <span className="mr-2">👋</span> Basic
          </h3>
          <p className="text-gray-500  mb-6">
            Lorem ipsum dolor sit amet, consectur adipiscing elit.
          </p>
          <p className="text-4xl ">
            $0<span className="text-lg">/mo/user</span>
          </p>
          <button className="bg-blue-500 text-white  p-3 w-full mt-6 rounded-lg hover:bg-blue-600">
            Get 14 days free trial
          </button>

          <div className="mt-8">
            <p className="text-gray-600 font-semibold mb-4">BEST FOR FREE</p>
            <ul className="text-gray-700 ">
              <li className="mb-2">Full Access to Landingfolio</li>
              <li className="mb-2">100 GB Free Storage</li>
              <li className="mb-2">Unlimited Visitors</li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="w-full md:w-1/3 bg-white border-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-8 rounded-xl relative">
          <div className="absolute top-0 right-0 bg-blue-500 text-white p-2  text-sm rounded-bl-lg">
            Most Popular
          </div>
          <h3 className="text-2xl  flex items-center mb-4">
            <span className="mr-2">💪</span> Pro
          </h3>
          <p className="text-gray-500  mb-6">
            Lorem ipsum dolor sit amet, consectur adipiscing elit.
          </p>
          <p className="text-4xl ">
            $49<span className="text-lg">/mo/user</span>
          </p>
          <button className="bg-blue-500 text-white  p-3 w-full mt-6 rounded-lg hover:bg-blue-600">
            Get 14 days free trial
          </button>

          <div className="mt-8">
            <p className="text-gray-600 font-semibold mb-4">BEST FOR GROWTH</p>
            <ul className="text-gray-700 ">
              <li className="mb-2">Full Access to Landingfolio</li>
              <li className="mb-2">200 GB Free Storage</li>
              <li className="mb-2">Unlimited Visitors</li>
            </ul>
          </div>
        </div>

        {/* Exclusive Plan */}
        <div className="w-full md:w-1/3 bg-gray-100 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-8 rounded-xl">
          <h3 className="text-2xl  flex items-center mb-4">
            <span className="mr-2">🚀</span> Exclusive
          </h3>
          <p className="text-gray-500  mb-6">
            Lorem ipsum dolor sit amet, consectur adipiscing elit.
          </p>
          <p className="text-4xl ">
            $99<span className="text-lg">/mo/user</span>
          </p>
          <button className="bg-blue-500 text-white  p-3 w-full mt-6 rounded-lg hover:bg-blue-600">
            Get 14 days free trial
          </button>

          <div className="mt-8">
            <p className="text-gray-600 font-semibold mb-4">
              BEST FOR ENTERPRISES
            </p>
            <ul className="text-gray-700 ">
              <li className="mb-2">Full Access to Landingfolio</li>
              <li className="mb-2">500 GB Free Storage</li>
              <li className="mb-2">Unlimited Visitors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingRetroVibrant;
  `,
  },
];

export default pricingComponents;
