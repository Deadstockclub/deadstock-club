"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  hat: {
    name: string;
    archive: string;
    image: string;
  };
}

export default function ArchiveModal({ open, onClose, hat }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md border border-neutral-800 bg-neutral-950 p-10"
          >
            <img src={hat.image} className="w-44 mx-auto" />

            <p className="mt-8 uppercase tracking-[0.45em] text-[10px] text-neutral-500 text-center">
              Archive #{hat.archive}
            </p>

            <h2 className="text-4xl text-center mt-3">{hat.name}</h2>

            <div className="border-t border-neutral-800 mt-10">
              <div className="flex justify-between py-4">
                <span className="uppercase tracking-[0.3em] text-neutral-500 text-xs">
                  Archive Access
                </span>

                <span>S/.139</span>
              </div>
            </div>

            <div className="mt-8 text-sm text-neutral-400 space-y-2">
              <p>• Numbered Archive Member Card</p>

              <p>• Priority access to Archive 02</p>
            </div>

            <button className="mt-10 w-full border border-white py-4 uppercase tracking-[0.35em] hover:bg-white hover:text-black transition">
              Continue to WhatsApp
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
