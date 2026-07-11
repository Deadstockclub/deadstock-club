"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Loader() {
  const [exit, setExit] = useState(false);

  return (
    <motion.div
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={
        exit
          ? {
              scale: 2,
              opacity: 0,
            }
          : {}
      }
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {}}
      className="
fixed
inset-0
z-[100]
bg-black
overflow-hidden
flex
items-center
justify-center
"
    >
      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
absolute
inset-0
w-full
h-full
object-cover
opacity-40
"
      >
        <source src="/loader.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}

      <div
        className="
absolute
inset-0
bg-black/60
"
      />

      {/* FILM GRAIN */}

      <div
        className="
absolute
inset-0
opacity-[0.08]
bg-[url('/noise.png')]
"
      />

      {/* TEXT */}

      <div
        className="
relative
text-center
text-white
"
      >
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
text-xs
tracking-[0.7em]
mb-12
"
        >
          ARCHIVE Nº001
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.8,
          }}
          className="
text-7xl
md:text-[10rem]
font-light
tracking-[0.35em]
"
        >
          DEADSTOCK
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
mt-10
text-sm
tracking-[0.8em]
"
        >
          CURATED HATS
        </motion.p>
      </div>

      {/* SKIP / TRANSITION */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 3,
        }}
        className="
absolute
bottom-12
text-xs
tracking-[0.5em]
text-white/60
"
      >
        FOR THOSE WHO KNOW
      </motion.div>
    </motion.div>
  );
}
