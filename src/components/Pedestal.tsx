"use client";

import { motion } from "framer-motion";

export default function Pedestal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      className="relative flex justify-center"
    >
      {/* sombra */}

      <div
        className="
        absolute
        top-10
        h-10
        w-56
        rounded-full
        bg-black/70
        blur-2xl
      "
      />

      {/* pedestal */}

      <div
        className="
        relative

        h-10
        w-64

        rounded-full

        border

        border-neutral-800

        bg-gradient-to-b

        from-neutral-800

        via-neutral-900

        to-black
      "
      />

      {/* brillo */}

      <div
        className="
        absolute

        top-1

        h-px

        w-40

        bg-white/20
      "
      />
    </motion.div>
  );
}
