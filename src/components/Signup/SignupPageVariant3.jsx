import React from "react";

const SignUpPageVariant3 = () => {
  return (
    <div className=" flex flex-col  bg-[#f1ebe1] rounded-lg p-3 sm:p-6 lg:p-8">
      <div className="w-full max-w-md p-6 sm:p-8 bg-[#e7d8c2] shadow-[4px_4px_0px_0px_black] border-4 border-black rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wider text-[#333] font-mono">
          Sign Up
        </h1>

        <form className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-semibold mb-2 font-mono text-[#333]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 bg-[#d4c0a8] border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-lg font-mono focus:bg-[#d9bfa0] transition-all duration-150 ease-in"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 font-mono text-[#333]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#d4c0a8] border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-lg font-mono focus:bg-[#d9bfa0] transition-all duration-150 ease-in"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2 font-mono text-[#333]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-[#d4c0a8] border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-lg font-mono focus:bg-[#d9bfa0] transition-all duration-150 ease-in"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button className="px-6 py-2 bg-black text-yellow-200 border-2 border-black font-bold shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transform hover:-translate-y-1 transition-all">
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 flex gap-2 text-sm font-mono text-[#333]">
          <p>Already have an account?</p>
          <a
            href="#"
            className="text-[#007acc] font-bold hover:underline hover:text-[#005f99] transition-colors duration-150"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageVariant3;
