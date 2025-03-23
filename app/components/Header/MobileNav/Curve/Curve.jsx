"use client";
import { motion } from "framer-motion";
import { curve } from "../../../../lib/anim";

export default function Curve() {
  return (
    <svg className="absolute -left-[99px] top-0 h-full w-[100px] fill-slate-100 stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}
