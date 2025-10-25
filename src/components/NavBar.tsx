"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthButton from "@/components/AuthButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/free-albums", label: "Free Albums" },
  { href: "/dashboard", label: "Albums (Protected)" },
  { href: "/users", label: "Users (Protected)" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active =
    pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={[
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100",
        active
          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40"
          : "text-gray-700 dark:text-gray-300",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-gray-950/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
              Next + Gin Demo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} />
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center">
            <AuthButton />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-3">
            <nav className="flex flex-col gap-1 pt-2">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href} label={l.label} />
              ))}
              <div className="pt-2">
                <AuthButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
