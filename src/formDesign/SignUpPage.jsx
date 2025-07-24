"use client";
import React, { useState } from "react";
import * as z from "zod";

const userSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      userSchema.parse({ firstName, lastName, email, password });

      // Handle successful form submission (e.g., API call)
      console.log("Form submitted successfully with data:", {
        firstName,
        lastName,
        email,
        password,
      });
      // Reset form fields and errors
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setPasswordError("");
      setIsSubmitting(false);
    } catch (error) {
      // Handle validation errors
      const errors = error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});

      setFirstNameError(errors.firstName || "");
      setLastNameError(errors.lastName || "");
      setEmailError(errors.email || "");
      setPasswordError(errors.password || "");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="w-full max-w-sm bg-zinc-800 shadow-2xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-pink-200 text-center mb-6">
          Sign Up
        </h2>

        <div>
          <label className="block text-sm font-medium text-pink-200">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
            className="my-2 block w-full bg-zinc-800 text-white p-2 border-zinc-600 rounded-lg focus:ring-2 focus:ring-pink-200 focus:outline-none"
          />
          {firstNameError && (
            <div className="text-red-500 text-sm">{firstNameError}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-200">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
            className="my-2 block w-full bg-zinc-800 text-white p-2 border-zinc-600 rounded-lg focus:ring-2 focus:ring-pink-200 focus:outline-none"
          />
          {lastNameError && (
            <div className="text-red-500 text-sm">{lastNameError}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="my-2 block w-full bg-zinc-800 text-white p-2 border-zinc-600 rounded-lg focus:ring-2 focus:ring-pink-200 focus:outline-none"
          />
          {emailError && (
            <div className="text-red-500 text-sm">{emailError}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-200">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="my-2 block w-full bg-zinc-800 text-white p-2 border-zinc-600 rounded-lg focus:ring-2 focus:ring-pink-200 focus:outline-none"
          />
          {passwordError && (
            <div className="text-red-500 text-sm">{passwordError}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-black font-extrabold bg-pink-200 py-2 rounded-md hover:bg-white disabled:opacity-50 mt-4"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpPage;
