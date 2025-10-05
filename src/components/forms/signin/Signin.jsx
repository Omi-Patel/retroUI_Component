// src/SignIn.js
import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Retro Sign In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="bg-gray-700 border border-gray-600 rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="bg-gray-700 border border-gray-600 rounded w-full py-2 px-3 text-white focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-400 text-xs mt-4">
            &copy; 2024 Retro App. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Sign In
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-400 mb-4 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="border-b border-gray-400 mb-4 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Retro Sign In
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="bg-gray-100 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="bg-gray-100 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="bg-white rounded-full shadow-lg p-8 max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Retro Sign In
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 border-4 border-blue-500 rounded-lg p-8 max-w-xs w-full">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-4 font-mono">
            Retro Sign In
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="bg-gray-700 border border-blue-500 rounded w-full py-2 px-3 text-white font-mono focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="bg-gray-700 border border-blue-500 rounded w-full py-2 px-3 text-white font-mono focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full font-mono"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-400 text-xs mt-4 font-mono">
            &copy; 2024 Retro App. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="bg-gray-900 border-4 border-pink-500 rounded-lg p-8 max-w-xs w-full">
          <h2 className="text-3xl font-bold text-center text-pink-500 mb-4 font-mono">
            Sign In
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="bg-gray-800 border border-pink-500 rounded w-full py-2 px-3 text-white font-mono focus:outline-none focus:ring focus:ring-pink-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="bg-gray-800 border border-pink-500 rounded w-full py-2 px-3 text-white font-mono focus:outline-none focus:ring focus:ring-pink-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full font-mono"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-400 text-xs mt-4 font-mono">
            &copy; 2024 Retro App. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="bg-gray-800 border-2 border-green-500 rounded-lg p-8 max-w-xs w-full">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-4 font-mono">
            Sign In
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-green-400 text-sm font-bold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="bg-gray-700 border border-green-500 rounded w-full py-2 px-3 text-green-200 font-mono focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-green-400 text-sm font-bold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="bg-gray-700 border border-green-500 rounded w-full py-2 px-3 text-green-200 font-mono focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full font-mono"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-400 text-xs mt-4 font-mono">
            &copy; 2024 Retro App. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
