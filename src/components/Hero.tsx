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
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-10 md:pt-0">
      {/* DEADSTOCK */}

      <FadeIn>
        <h1
          className={`
            ${playfair.className}
            text-center
            leading-[0.88]
            tracking-tight
            select-none
          `}
        >
          {/* MÓVIL */}

          <span className="block md:hidden text-[4.8rem]">DEAD</span>

          <span className="block md:hidden text-[4.8rem]">STOCK</span>

          {/* DESKTOP */}

          <span className="hidden md:block text-[8rem] lg:text-[9.5rem] xl:text-[10.5rem]">
            DEADSTOCK
          </span>
        </h1>
      </FadeIn>

      {/* CURATED HATS */}

      <FadeIn delay={0.25}>
        <p
          className={`
            ${montserrat.className}
            mt-7
            uppercase
            text-center
            tracking-[0.55em]
            text-neutral-400
            text-[11px]
            md:text-[13px]
          `}
        >
          CURATED HATS
        </p>
      </FadeIn>

      {/* INDICADOR */}

      <FadeIn delay={0.55}>
        <div className="mt-20 md:mt-24 flex flex-col items-center">
          <p
            className={`
              ${montserrat.className}
              uppercase
              tracking-[0.5em]
              text-[10px]
              text-neutral-500
            `}
          >
            DESLIZA
          </p>

          <svg
            className="mt-5 animate-bounce"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 6V18M12 18L7.5 13.5M12 18L16.5 13.5"
              stroke="#737373"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </FadeIn>
    </section>
  );
}
