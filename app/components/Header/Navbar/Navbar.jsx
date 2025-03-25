"use client";
import React from "react";
import Link from "next/link";
import { mobileNavItems } from "../../../lib/mobileNavItems";

export default function Navbar() {
  return (
    <nav className="hidden lg:flex lg:flex-grow lg:justify-center">
      <div className="flex items-center justify-center space-x-8 rounded-lg border border-slate-300/10 bg-gradient-to-b from-[rgba(17,17,32,0.88)] to-[rgb(0,2,8)] px-6 py-2">
        {mobileNavItems.map(({ id, path, label }) => (
          <div
            key={id}
            className="rounded-lg border border-transparent px-4 pb-[0.75em] pt-2 transition-all duration-[1.5s] ease-in-out hover:border-[#00b7ff27] hover:bg-[#0d0d34]"
          >
            <Link
              href={path}
              className="text-slate-300/70 transition-all duration-700 ease-in-out hover:text-gray-200"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
