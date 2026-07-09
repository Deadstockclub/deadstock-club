"use client";

import { Playfair_Display, Montserrat } from "next/font/google";
import Reveal from "./animations/Reveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="text-center px-6">
        <Reveal>
          <h1
            className={`${playfair.className} text-[84px] md:text-[145px] tracking-[0.12em] leading-none`}
          >
            DEADSTOCK
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p
            className={`${montserrat.className} mt-16 text-[10px] md:text-sm uppercase tracking-[2.5em] text-neutral-300 ml-[2.5em] whitespace-nowrap`}
          >
            curated hats
          </p>
        </Reveal>

        <Reveal delay={0.9}>
          <div className="mt-36 flex flex-col items-center">
            <span
              className={`${montserrat.className} text-[9px] uppercase tracking-[1em] text-neutral-500`}
            >
              desliza
            </span>

            <div className="mt-5 text-neutral-400 text-xl animate-bounce">
              ↓
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
