import { Mail, Lock, Github, Twitter } from "lucide-react";

const SignupSocial = () => {
  return (
    <div className="w-full max-w-md p-6 bg-gradient-to-br from-teal-50 to-cyan-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <h2 className="text-2xl font-mono font-bold mb-6 text-black">
        Join Our Community
      </h2>

      <div className="space-y-3 mb-6">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-mono border-2 border-black shadow-[4px_4px_0px_0px_teal-500] hover:shadow-[6px_6px_0px_0px_teal-500] hover:translate-y-[-2px] transition-all">
          <Github className="h-5 w-5" />
          <span>Sign up with GitHub</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-400 text-white font-mono border-2 border-black shadow-[4px_4px_0px_0px_teal-500] hover:shadow-[6px_6px_0px_0px_teal-500] hover:translate-y-[-2px] transition-all">
          <Twitter className="h-5 w-5" />
          <span>Sign up with Twitter</span>
        </button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-black"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gradient-to-br from-teal-50 to-cyan-100 text-gray-800 font-mono">
            Or continue with
          </span>
        </div>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-mono font-medium text-gray-700"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_teal-500] focus:shadow-[6px_6px_0px_0px_teal-500] transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-mono font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              id="password"
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_teal-500] focus:shadow-[6px_6px_0px_0px_teal-500] transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-500 text-white font-mono font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all"
          >
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">By signing up, you agree to our</span>
        <a href="#" className="ml-1 font-medium text-teal-600 hover:underline">
          Terms & Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default SignupSocial;
