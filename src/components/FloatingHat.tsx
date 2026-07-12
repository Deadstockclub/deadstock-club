"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
}

export default function FloatingHat({ src, alt }: Props) {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotateZ: [-1, 1, -1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="relative"
    >
      <Image
        src={src}
        alt={alt}
        width={700}
        height={700}
        priority
        className="object-contain select-none"
      />
    </motion.div>
  );
}
