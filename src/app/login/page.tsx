"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") ?? "/";
  const [email, setEmail] = useState("ada@example.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });
    if (res?.error) setError("Invalid credentials");
    else window.location.href = callbackUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-4 transition-all"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Welcome Back
        </h2>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Password
          </label>
          <input
            className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <button className="w-full rounded-md bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition">
          Sign In
        </button>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          Demo credentials: <code>ada@example.com / password</code>
        </p>
      </form>
    </div>
  );
}
