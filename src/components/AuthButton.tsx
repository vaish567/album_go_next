"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm">Hi, {session.user.name}</span>
        <button
          onClick={() => signOut()}
          className="rounded bg-black text-white px-3 py-1 text-sm"
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="rounded bg-black text-white px-3 py-1 text-sm"
    >
      Login
    </button>
  );
}
