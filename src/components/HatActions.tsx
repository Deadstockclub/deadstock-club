"use client";

import { useState } from "react";
import ArchiveModal from "./ArchiveModal";

interface Hat {
  id: string;
  archive: string;
  name: string;
  brand: string;
  image: string;
}

export default function HatActions({ hat }: { hat: Hat }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-14 max-w-md">
        <button
          onClick={() => setOpen(true)}
          className="
            group
            w-full
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
            Reservar mi pieza
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>

        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Preventa • Entrega estimada 7–10 días
        </p>
      </div>

      <ArchiveModal
        open={open}
        onClose={() => setOpen(false)}
        hat={{
          name: hat.name,
          archive: hat.archive,
          image: hat.image,
        }}
      />
    </>
  );
}
