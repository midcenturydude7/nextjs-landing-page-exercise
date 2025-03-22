"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { mobileNavItems } from "../../../lib/mobileNavItems";
import { menuSlide, slide } from "../../../lib/anim";

export default function MobileNav() {
  const pathname = usePathname();
  const [mobileNavbar, toggleMobileNavbar] = useCycle(false, true);

  return (
    <nav className="px-8">
      <div className="relative z-10">
        <motion.button
          animate={mobileNavbar ? "open" : "closed"}
          onClick={() => toggleMobileNavbar()}
          className="flex flex-col space-y-2"
        >
          <motion.span className="block h-[0.125rem] w-8 bg-slate-400/75" />
          <motion.span className="block h-[0.125rem] w-8 bg-slate-400/75" />
          <motion.span className="block h-[0.125rem] w-8 bg-slate-400/75" />
        </motion.button>
      </div>
    </nav>
  );
}
