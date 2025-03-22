"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { mobileNavItems } from "../../lib/mobileNavItems";

export default function MobileNav() {
  const pathname = usePathname();
  const [mobileNavbar, toggleMobileNavbar] = useCycle(false, true);

  return (
    <div className="flex items-center justify-center space-x-8">
      {mobileNavItems.map(({ id, label }) => (
        <div key={id}>{label}</div>
      ))}
    </div>
  );
}
