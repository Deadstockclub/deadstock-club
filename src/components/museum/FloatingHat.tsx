"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
}

export default function FloatingHat({ image }: Props) {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotateZ: [-1, 1, -1],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
      }}
      className="relative w-[620px] h-[620px]"
    >
      <Image
        src={image}
        alt="Hat"
        fill
        priority
        className="object-contain drop-shadow-[0_40px_90px_rgba(0,0,0,.9)]"
      />
      <div
        className="
  absolute

  left-1/2
  bottom-10

  -translate-x-1/2

  w-64
  h-8

  rounded-full

  bg-black/80

  blur-xl
  "
      />
    </motion.div>
  );
}
