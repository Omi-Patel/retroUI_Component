import { UserPlus, Mail, Lock } from "lucide-react";

const SignupBasic = () => {
  return (
    <div className="w-full max-w-sm p-6 bg-white border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <h2 className="text-2xl font-mono font-bold mb-6 text-black">
        Create Account
      </h2>

      <form className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-mono font-medium text-gray-700"
          >
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserPlus className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
              placeholder="John Doe"
            />
          </div>
        </div>

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
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
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
              className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 text-white font-mono font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">Already have an account?</span>
        <a
          href="#"
          className="ml-1 font-medium text-purple-600 hover:underline"
        >
          Sign in
        </a>
      </div>
    </div>
  );
};

export default SignupBasic;
