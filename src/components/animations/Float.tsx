"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatProps {
  children: ReactNode;
}

export default function Float({ children }: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
