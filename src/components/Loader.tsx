"use client";

import { motion, AnimatePresence } from "framer-motion";
import useLoader from "@/hooks/useLoader";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const loading = useLoader();

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.8em] text-neutral-300`}
            >
              Preserved Pieces
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 90, opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="h-px bg-neutral-700 mx-auto my-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.8,
              }}
              className={`${montserrat.className} text-[10px] uppercase tracking-[0.55em] text-neutral-500`}
            >
              for those who know
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
