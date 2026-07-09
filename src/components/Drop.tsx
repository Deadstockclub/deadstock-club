import Image from "next/image";
import Link from "next/link";
import { Montserrat, DM_Sans } from "next/font/google";
import { hats } from "@/data/hats";
import FadeIn from "./animations/FadeIn";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const display = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Drop() {
  return (
    <section className="relative overflow-hidden bg-black text-white px-6 md:px-12 py-28">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

      <div className="relative z-10">
        {/* Encabezado */}

        <FadeIn>
          <div className="mb-28 max-w-sm">
            <div className="w-0 h-px bg-neutral-600 animate-[grow_.9s_ease-out_forwards]" />

            <h2
              className={`${display.className} mt-10 text-3xl md:text-5xl tracking-[0.08em]`}
            >
              DROP 01
            </h2>

            <div className="w-24 h-px bg-neutral-700 mt-6" />

            <p
              className={`${display.className} mt-6 text-neutral-500 text-sm tracking-[0.35em] uppercase`}
            >
              The Archive
            </p>
          </div>
        </FadeIn>

        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-24">
          {hats.map((hat, index) => {
            const archive = String(index + 1).padStart(3, "0");

            const last = index === hats.length - 1;

            return (
              <FadeIn
                key={hat.id}
                delay={Math.floor(index / 3) * 0.18}
                className={last ? "md:col-span-3 flex justify-center" : ""}
              >
                <Link
                  href={`/drop/${hat.id}`}
                  className={last ? "group block w-[320px]" : "group block"}
                >
                  {/* Imagen */}

                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={hat.image}
                      alt={hat.name}
                      fill
                      priority={index < 3}
                      sizes="(max-width:768px) 50vw, 33vw"
                      className="object-contain transition-transform duration-700 ease-out group-hover:-translate-y-2"
                    />
                  </div>

                  {/* Texto */}

                  <div className="mt-6">
                    <div className="h-px w-8 bg-neutral-700 transition-all duration-500 group-hover:w-14 group-hover:bg-white" />

                    <h3
                      className={`${montserrat.className} mt-5 text-xs uppercase tracking-[0.28em]`}
                    >
                      {hat.name}
                    </h3>

                    <div
                      className={`${display.className} mt-3 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-neutral-500`}
                    >
                      <span>Archive {archive}</span>

                      <span className="translate-x-[-8px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
