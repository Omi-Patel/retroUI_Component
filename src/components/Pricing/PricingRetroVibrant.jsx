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
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-start px-4 font-sans text-xl">
          <div className="flex items-center">
            <input type="radio" name="plan" className="mr-2" defaultChecked />
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
