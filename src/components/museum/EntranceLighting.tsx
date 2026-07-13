"use client";

import { motion } from "framer-motion";

interface Props {
  isOn: boolean;
}

export default function EntranceLighting({ isOn }: Props) {
  return (
    <>
      {/* Main Museum Lighting */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOn ? 0.6 : 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="
          absolute 
          inset-0 
          bg-gradient-to-b 
          from-neutral-900/30 
          via-transparent 
          to-black/80
          pointer-events-none
        "
      />

      {/* Wall Spotlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isOn ? 0.4 : 0,
          scale: isOn ? 1 : 0.8,
        }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="
          absolute 
          left-1/2 
          top-1/2 
          -translate-x-1/2 
          -translate-y-1/2
          w-[1000px] 
          h-[1000px] 
          bg-white/10 
          blur-[120px] 
          rounded-full
          pointer-events-none
        "
      />

      {/* Architectural Lighting Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOn ? 0.15 : 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="
          absolute 
          inset-0 
          bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]
          pointer-events-none
        "
      />

      {/* Subtle Glow from Floor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOn ? 0.3 : 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="
          absolute 
          bottom-0 
          left-1/2 
          -translate-x-1/2
          w-[800px] 
          h-[400px] 
          bg-white/5 
          blur-[100px] 
          rounded-t-full
          pointer-events-none
        "
      />

      {/* Cinematic Light Rays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOn ? 0.08 : 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="
          absolute 
          inset-0 
          bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.03)_50%,transparent_60%)]
          pointer-events-none
        "
      />

      {/* Premium Atmosphere Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOn ? 0.02 : 0 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="
          absolute 
          inset-0 
          bg-white/5 
          mix-blend-overlay
          pointer-events-none
        "
      />
    </>
  );
}
