"use client";

import Image from "next/image";
import { Playfair_Display, DM_Sans } from "next/font/google";

import FadeIn from "./animations/FadeIn";
import Float from "./animations/Float";

import Pedestal from "./Pedestal";
import SpotLight from "./SpotLight";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const display = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function CuratedCollection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <SpotLight />

      <div className="relative z-10 flex flex-col items-center">
        <FadeIn>
          <p
            className={`${display.className} uppercase tracking-[0.45em] text-[11px] text-neutral-500`}
          >
            Curated Collection
          </p>

          <h1 className={`${playfair.className} mt-6 text-5xl md:text-7xl`}>
            DEADSTOCK
          </h1>
        </FadeIn>

        <div className="mt-20 relative">
          <Float>
            <Image
              src="/hats/dark-nebula.png"
              alt="Dark Nebula"
              width={520}
              height={520}
              priority
              className="select-none"
            />
          </Float>
        </div>

        <div className="-mt-6">
          <Pedestal />
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <p
              className={`${display.className} uppercase tracking-[0.45em] text-[11px] text-neutral-500`}
            >
              Collection 001
            </p>

            <h2 className={`${playfair.className} mt-3 text-3xl`}>
              Dark Nebula
            </h2>

            <p
              className={`${display.className} mt-5 text-neutral-400 tracking-[0.2em] uppercase`}
            >
              S/.149
            </p>
          </div>
        </FadeIn>

        <div className="mt-24 animate-bounce">
          <p
            className={`${display.className} uppercase tracking-[0.4em] text-[10px] text-neutral-600`}
          >
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}
