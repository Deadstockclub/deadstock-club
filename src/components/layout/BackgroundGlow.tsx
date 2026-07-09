"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Glow central animado */}
      <motion.div
        animate={{
          opacity: [0.04, 0.08, 0.04],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]"
      />

      {/* Glow superior */}
      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-44 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-white blur-3xl"
        style={{
          opacity: 0.04,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
