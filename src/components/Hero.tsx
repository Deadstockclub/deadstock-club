"use client";

import { Playfair_Display, Montserrat } from "next/font/google";
import FadeIn from "./animations/FadeIn";

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
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* DEADSTOCK */}

      <FadeIn>
        <h1
          className={`
          ${playfair.className}
          text-[18vw]
          sm:text-[7rem]
          md:text-[8rem]
          leading-none
          tracking-tight
          text-center
          `}
        >
          DEADSTOCK
        </h1>
      </FadeIn>

      {/* CURATED HATS */}

      <FadeIn delay={0.3}>
        <p
          className={`
          ${montserrat.className}
          mt-8
          text-[13px]
          sm:text-sm
          uppercase
          tracking-[0.55em]
          text-neutral-400
          text-center
          `}
        >
          CURATED HATS
        </p>
      </FadeIn>

      {/* FRASE */}

      <FadeIn delay={0.55}>
        <p
          className={`
          ${playfair.className}
          mt-10
          text-xl
          italic
          text-neutral-300
          text-center
          `}
        >
          For those who know.
        </p>
      </FadeIn>

      {/* DESLIZA */}

      <FadeIn delay={0.85}>
        <div className="mt-28">
          <p
            className={`
            ${montserrat.className}
            uppercase
            tracking-[0.6em]
            text-[10px]
            text-neutral-500
            animate-pulse
            `}
          >
            DESLIZA
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
