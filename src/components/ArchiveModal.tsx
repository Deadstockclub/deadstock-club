"use client";

import Image from "next/image";
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
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-lg flex items-center justify-center px-6"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md border border-neutral-800 bg-neutral-950 p-10"
          >
            {/* ARCHIVE */}

            <p className="text-center uppercase tracking-[0.55em] text-[10px] text-neutral-500">
              Archive Access
            </p>

            <h2 className="text-center text-5xl mt-5 font-light">
              {hat.archive}
            </h2>

            {/* Imagen */}

            <div className="relative w-56 h-56 mx-auto mt-8">
              <Image
                src={hat.image}
                alt={hat.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Nombre */}

            <h3 className="text-center text-3xl mt-8">{hat.name}</h3>

            <p className="text-center text-sm text-neutral-500 mt-3">
              La preventa asegura tu pieza.
            </p>

            {/* Precio */}

            <div className="border-t border-neutral-800 mt-10 pt-6 flex justify-between items-center">
              <span className="uppercase tracking-[0.35em] text-[11px] text-neutral-500">
                Precio Preventa
              </span>

              <span className="text-lg">S/.139</span>
            </div>

            {/* Beneficios */}

            <div className="mt-8 space-y-3">
              <p className="uppercase tracking-[0.35em] text-[11px] text-neutral-500">
                Incluye
              </p>

              <div className="space-y-2 text-sm text-neutral-400">
                <p>• Precio exclusivo de preventa</p>

                <p>• Tarjeta numerada Archive Member</p>

                <p>• Acceso anticipado a futuros drops</p>

                <p>• Secret Gift</p>
              </div>
            </div>

            {/* Botón */}

            <button
              className="
                group
                w-full
                mt-10
                border
                border-neutral-700
                bg-neutral-950
                py-4

                uppercase
                tracking-[0.35em]
                text-sm

                transition-all
                duration-150

                hover:bg-neutral-900
                hover:border-neutral-500

                active:translate-y-[2px]
                active:scale-[0.985]
                active:bg-neutral-800
              "
            >
              <span className="flex items-center justify-center gap-3">
                Continuar
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>

            <button
              onClick={onClose}
              className="w-full mt-4 text-neutral-500 text-xs uppercase tracking-[0.35em] hover:text-white transition"
            >
              Cancelar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
