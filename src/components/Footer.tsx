"use client";

import { DM_Sans } from "next/font/google";
import FadeIn from "./animations/FadeIn";

const display = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 mt-32">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="w-full h-px bg-neutral-900 mb-14" />

          <div className="flex flex-col items-center text-center">
            <p
              className={`
                ${display.className}
                uppercase
                tracking-[0.45em]
                text-[11px]
                text-neutral-600
              `}
            >
              END OF ARCHIVE
            </p>

            <h3
              className="
                mt-8
                text-5xl
                md:text-6xl
                font-light
              "
            >
              DROP 01
            </h3>

            <p
              className={`
                ${display.className}
                mt-8
                uppercase
                tracking-[0.35em]
                text-neutral-500
                text-sm
              `}
            >
              10 CURATED PIECES
            </p>

            <div className="w-16 h-px bg-neutral-800 my-10" />

            <p
              className={`
                ${display.className}
                uppercase
                tracking-[0.35em]
                text-[11px]
                text-neutral-600
              `}
            >
              NEXT ARCHIVE COMING SOON
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
