import React from "react";

const SignUpPageVariant2 = () => {
  return (
    <div className=" flex flex-col  bg-[#1d1d1d] rounded-lg p-3 sm:p-6 lg:p-8">
      <div className="w-full max-w-md p-6 sm:p-8 bg-[#333333] shadow-[4px_4px_0px_0px_white] border-4 border-white rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wider text-[#9dec80] font-mono">
          Sign Up
        </h1>

        <form className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-semibold mb-2 font-mono text-[#9dec80]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 bg-[#4d4d4d] border-2 border-white rounded-md shadow-[4px_4px_0px_0px_white] text-lg text-[#ffea00] font-mono"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 font-mono text-[#9dec80]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#4d4d4d] border-2 border-white rounded-md shadow-[4px_4px_0px_0px_white] text-lg text-[#ffea00] font-mono"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2 font-mono text-[#9dec80]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-[#4d4d4d] border-2 border-white rounded-md shadow-[4px_4px_0px_0px_white] text-lg text-[#ffea00] font-mono"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 text-[#1d1d1d] font-bold bg-[#9dec80] border-4 border-white rounded-md shadow-[4px_4px_0px_0px_white] hover:bg-[#58e823] transition-all duration-150 font-mono hover:shadow-[8px_8px_0px_0px_black] transform hover:-translate-y-1"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 flex gap-2 text-sm font-mono text-[#9dec80]">
          <p>Already have an account?</p>
          <a href="#" className="hover:underline font-bold text-white">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageVariant2;
