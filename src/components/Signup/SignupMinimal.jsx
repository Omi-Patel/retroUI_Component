const SignupMinimal = () => {
  return (
    <div className="w-full max-w-md p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <h2 className="text-2xl font-mono font-bold mb-6 text-black">Join Us</h2>

      <form className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-mono font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full py-2 px-3 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-mono font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full py-2 px-3 border-2 border-black font-mono shadow-[4px_4px_0px_0px_black] focus:shadow-[6px_6px_0px_0px_black] transition-all"
            placeholder="••••••••"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black text-white font-mono font-bold border-2 border-black hover:bg-gray-800 transition-colors"
          >
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">Already have an account?</span>
        <a href="#" className="ml-1 font-medium text-black hover:underline">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default SignupMinimal;
