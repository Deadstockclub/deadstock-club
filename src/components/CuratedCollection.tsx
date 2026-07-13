"use client";
import Floor from "./museum/Floor";
import { Playfair_Display, DM_Sans } from "next/font/google";

import MuseumBackground from "./museum/MuseumBackground";
import Spotlight from "./museum/Spotlight";
import FloatingHat from "./museum/FloatingHat";
import Pedestal from "./museum/Pedestal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const display = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function CuratedCollection() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <MuseumBackground />

      <Spotlight />
      <Floor />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <p
          className={`${display.className} uppercase tracking-[0.55em] text-[11px] text-neutral-500`}
        >
          Curated Collection
        </p>

        <h1
          className={`${playfair.className} mt-6 text-7xl md:text-[120px] leading-none`}
        >
          DEADSTOCK
        </h1>

        <div className="relative mt-6">
          <FloatingHat image="/hats/dark-nebula.png" />

          <div className="-mt-20 flex justify-center">
            <Pedestal />
          </div>
        </div>

        <div className="mt-10 text-center">
          <p
            className={`${display.className} uppercase tracking-[0.45em] text-[11px] text-neutral-500`}
          >
            Collection 001
          </p>

          <h2 className={`${playfair.className} mt-4 text-5xl`}>Dark Nebula</h2>

          <p className="mt-4 text-xl text-neutral-300">S/.149</p>
        </div>
      </section>
    </main>
  );
}
