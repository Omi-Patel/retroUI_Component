import React from "react";

const SignUpPageVariant1 = () => {
  return (
    <div className="flex flex-col bg-[#fdf4e3] rounded-lg p-3 sm:p-6 lg:p-8">
      <div className="w-full max-w-md p-6 sm:p-8 bg-[#f3e1c1] shadow-[4px_4px_0px_0px_black] border-4 border-black rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wider text-[#ff6f61] font-mono">
          Sign Up
        </h1>

        <form className="space-y-6 text-black">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-semibold mb-2 font-mono"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full font-mono px-4 py-2 text-lg bg-gray-100 text-gray-800 border-4 border-black shadow-[3px_3px_0px_0px_black] focus:outline-none focus:shadow-[6px_6px_0px_0px_orange] transition-all duration-150 ease-out"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 font-mono"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full font-mono px-4 py-2 text-lg bg-gray-100 text-gray-800 border-4 border-black shadow-[3px_3px_0px_0px_black] focus:outline-none focus:shadow-[6px_6px_0px_0px_orange] transition-all duration-150 ease-out"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2 font-mono"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full font-mono px-4 py-2 text-lg bg-gray-100 text-gray-800 border-4 border-black shadow-[3px_3px_0px_0px_black] focus:outline-none focus:shadow-[6px_6px_0px_0px_orange] transition-all duration-150 ease-out"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 text-white bg-[#ff6f61] border-4 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-[#e0554f] transition-all duration-150 font-mono"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 flex gap-2 text-sm font-mono text-black">
          <p>Already have an account?</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageVariant1;
