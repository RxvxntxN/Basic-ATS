"use client";
import React from "react";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };

  return (
    <>
      <div className="w-full max-w-sm bg-zinc-800 shadow-2xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-pink-200 text-center mb-6">
          Log In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-pink-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full bg-zinc-800 text-white p-2 border-zinc-600 rounded-lg focus:ring-2 focus:ring-pink-200 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-pink-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full bg-zinc-800 text-white p-2 border-zinc-600 rounded-lg focus:ring-2 focus:ring-pink-200 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-pink-200 text-black font-extrabold rounded-lg shadow hover:bg-white transition"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password and Sign Up */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Forgot your password?{" "}
            <a
              href="#"
              className="text-pink-200 hover:underline focus:outline-none"
            >
              Reset
            </a>
          </p>
          <p className="mt-2">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-pink-200 hover:underline focus:outline-none"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
