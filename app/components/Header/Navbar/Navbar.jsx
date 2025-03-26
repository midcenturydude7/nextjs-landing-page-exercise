"use client";
import React from "react";
import Link from "next/link";
import { mobileNavItems } from "../../../lib/mobileNavItems";

export default function Navbar() {
  return (
    <nav className="hidden lg:flex lg:flex-grow lg:justify-center">
      <div className="flex items-center justify-center rounded-lg border border-slate-300/10 bg-gradient-to-b from-[rgba(17,17,32,0.88)] to-[rgb(0,2,8)] px-6 py-2">
        <ul className="flex items-center space-x-6 divide-x divide-slate-300/10 [&>*+*]:pl-6">
          {mobileNavItems.map(({ id, path, label }) => (
            <li key={id}>
              <Link
                href={path}
                className="text-slate-300/70 transition-all duration-300 ease-in-out hover:text-gray-200"
              >
                <button className="rounded-lg border border-transparent px-4 pb-[0.75em] pt-2 transition-all duration-[1s] ease-in-out hover:border-[#00b7ff27] hover:bg-gradient-to-b hover:from-[#000208] hover:to-[#141449]">
                  {label}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
