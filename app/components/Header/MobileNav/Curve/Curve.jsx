"use client";
import { motion } from "framer-motion";
import { curve } from "../../../../lib/anim";

export default function Curve() {
  return (
    <svg className="absolute -left-[99px] top-0 h-full w-[100px]">
      <defs>
        <linearGradient id="curveGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="rgb(12, 12, 39)" />
          <stop offset="100%" stopColor="rgb(0,2,8)" />
        </linearGradient>
      </defs>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
        fill="url(#curveGradient)"
      />
    </svg>
  );
}
