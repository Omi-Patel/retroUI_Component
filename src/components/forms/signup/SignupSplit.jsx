import { Mail, Lock, ArrowRight } from "lucide-react";

const SignupSplit = () => {
  return (
    <div className="w-full max-w-4xl flex flex-col md:flex-row border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out overflow-hidden">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-600 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-mono font-bold text-white mb-4">
          Join Our Community
        </h2>
        <p className="text-white/90 mb-6">
          Create an account and get access to all features for 30 days. No
          credit card required.
        </p>
        <ul className="space-y-2">
          {[
            "Premium Content Access",
            "Member-only Resources",
            "Community Support",
            "Regular Updates",
          ].map((feature, i) => (
            <li key={i} className="flex items-center text-white">
              <div className="mr-2 w-5 h-5 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-1/2 bg-white p-8">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-mono font-bold mb-6 text-gray-800">
            Create Your Account
          </h3>

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
                  className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_purple-500] focus:shadow-[6px_6px_0px_0px_purple-500] transition-all"
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
                  className="pl-10 w-full py-2 border-2 border-black font-mono shadow-[4px_4px_0px_0px_purple-500] focus:shadow-[6px_6px_0px_0px_purple-500] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 border-2 border-black"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-600"
              >
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-600 text-white font-mono font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-1"
              >
                <span>Sign Up</span>
                <ArrowRight className="h-4 w-4" />
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
      </div>
    </div>
  );
};

export default SignupSplit;
