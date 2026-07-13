"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Props {
  onFinish: () => void;
}

export default function Loader({ onFinish }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [fadeOut, setFadeOut] = useState(false);

  function finish() {
    if (fadeOut) return;

    setFadeOut(true);

    setTimeout(() => {
      onFinish();
    }, 1200);
  }

  return (
    <motion.div
      animate={{
        opacity: fadeOut ? 0 : 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
    >
      {/* Glow detrás */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[65vw] w-[65vw] rounded-full bg-white/[0.035] blur-[180px]" />
      </div>

      {/* Grano muy sutil */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "7px 7px",
        }}
      />

      {/* Video */}
      <div className="relative flex h-full w-full items-center justify-center px-8">
        <video
          ref={videoRef}
          src="/videos/loader.mp4"
          autoPlay
          muted
          playsInline
          onEnded={finish}
          onError={finish}
          className="
            w-auto
            h-[92vh]
            max-w-none
            object-contain
            select-none
          "
        />
      </div>

      {/* Fade inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </motion.div>
  );
}
