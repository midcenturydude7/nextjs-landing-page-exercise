"use client";
import React from "react";
import Link from "next/link";
import { mobileNavItems } from "../../../lib/mobileNavItems";

export default function Navbar() {
  return (
    <nav className="hidden space-x-8 lg:block">
      {mobileNavItems.map(({ id, path, label }) => (
        <Link
          key={id}
          href={path}
          className="text-slate-300/70 hover:text-gray-900"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
