"use client";

import { useState } from "react";
import ArchiveModal from "./ArchiveModal";

interface Hat {
  name: string;
  archive: string;
  image: string;
}

export default function HatActions({ hat }: { hat: Hat }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleContinue() {
    setLoading(true);

    const text = encodeURIComponent(`Hola 👋

Quiero reservar una pieza del Archivo DEADSTOCK.

━━━━━━━━━━━━━━

Archive ${hat.archive}

${hat.name}

Precio Preventa
S/.139

━━━━━━━━━━━━━━

Quedo atento.`);

    setTimeout(() => {
      window.open(`https://wa.me/913734687?text=${text}`, "_blank");

      setLoading(false);
      setOpen(false);
    }, 800);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          group
          mt-14
          border
          border-neutral-700
          bg-neutral-950
          px-10
          py-4
          uppercase
          tracking-[0.35em]
          transition-all
          duration-150

          hover:bg-neutral-900
          hover:border-neutral-500

          active:translate-y-[2px]
          active:scale-[0.985]
        "
      >
        <span className="flex items-center gap-3">
          Reservar mi pieza
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </button>

      <ArchiveModal
        open={open}
        onClose={() => setOpen(false)}
        onContinue={handleContinue}
        loading={loading}
        hat={hat}
      />
    </>
  );
}
