"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Playfair_Display, Montserrat, DM_Sans } from "next/font/google";

import FadeIn from "./animations/FadeIn";
import Float from "./animations/Float";
import ArchiveModal from "./ArchiveModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const display = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

interface Hat {
  id: string;
  name: string;
  brand: string;
  archive: string;
  image: string;
}

export default function HatDetail({ hat }: { hat: Hat }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <FadeIn>
            <Link
              href="/"
              className={`${display.className} inline-flex items-center gap-2 uppercase tracking-[0.35em] text-[11px] text-neutral-500 hover:text-white transition`}
            >
              ← Volver al Archivo
            </Link>
          </FadeIn>

          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center mt-10">
            <Float>
              <div className="relative aspect-square w-full max-w-2xl mx-auto">
                <Image
                  src={hat.image}
                  alt={hat.name}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Float>

            <FadeIn delay={0.15}>
              <p
                className={`${display.className} uppercase tracking-[0.45em] text-[11px] text-neutral-500`}
              >
                Archive {hat.archive}
              </p>

              <h1
                className={`${playfair.className} mt-6 text-5xl md:text-7xl leading-none`}
              >
                {hat.name}
              </h1>

              <p
                className={`${montserrat.className} mt-5 uppercase tracking-[0.35em] text-sm text-neutral-400`}
              >
                {hat.brand}
              </p>

              <div className="w-20 h-px bg-neutral-700 my-10" />

              <p
                className={`${montserrat.className} max-w-md text-[15px] leading-8 text-neutral-400`}
              >
                Seleccionada para el Archivo DEADSTOCK.
                <br />
                <br />
                Cada pieza forma parte de una colección especial para quienes
                valoran la exclusividad por encima de la cantidad.
              </p>

              <div className="mt-14 max-w-md">
                <div className="border-t border-neutral-800 pt-8">
                  <div className="flex justify-between py-4 border-b border-neutral-900">
                    <span
                      className={`${display.className} uppercase tracking-[0.35em] text-[11px] text-neutral-500`}
                    >
                      Precio Preventa
                    </span>

                    <span className="text-lg text-neutral-400">S/.139</span>
                  </div>

                  <div className="flex justify-between py-4 border-b border-neutral-900">
                    <span
                      className={`${display.className} uppercase tracking-[0.35em] text-[11px] text-neutral-500`}
                    >
                      Precio de Lanzamiento
                    </span>

                    <span className="text-lg text-neutral-400">S/.169</span>
                  </div>
                </div>

                <div className="mt-12">
                  <p
                    className={`${display.className} uppercase tracking-[0.45em] text-[11px] text-neutral-500`}
                  >
                    PRE-ORDER BENEFITS
                  </p>

                  <div
                    className={`${display.className} mt-5 space-y-3 leading-7 text-neutral-400`}
                  >
                    <p>• Precio exclusivo de preventa</p>

                    <p>• Tarjeta numerada Archive Member</p>

                    <p>• Acceso anticipado a futuros drops</p>

                    <p>• Secret Gift</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      <ArchiveModal open={open} onClose={() => setOpen(false)} hat={hat} />
    </>
  );
}
