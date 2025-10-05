import React from "react";

const SignInPage = () => {
  return (
    <div className=" flex flex-col bg-yellow-100 rounded-lg p-3 sm:p-6 lg:p-8">
      {/* Sign-in Box */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-6 sm:p-8 bg-white shadow-[8px_8px_0px_0px_black] border-4 border-black rounded-lg">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black text-center mb-6 sm:mb-8 tracking-wider">
          Sign In
        </h1>

        {/* Sign-in Form */}
        <form className="space-y-4 sm:space-y-6 font-mono">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-md sm:text-lg text-zinc-800 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 sm:p-3 bg-gray-100 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-md sm:text-lg"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-md sm:text-lg text-zinc-800 font-semibold mb-2"
              >
                Password
              </label>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm sm:text-base"
              >
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 sm:p-3 bg-gray-100 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-md sm:text-lg"
            />
          </div>

          {/* Sign-In Button */}
          <div>
            <button
              type="submit"
              className="w-full p-2 sm:p-3 text-white bg-blue-500 border-4 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-blue-600 transition-all duration-150"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-4 sm:mt-6 flex justify-center gap-2 text-zinc-800 text-sm sm:text-base">
          <p>Don't have an account?</p>
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
