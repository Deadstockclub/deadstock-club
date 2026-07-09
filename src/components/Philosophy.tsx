import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Philosophy() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <p
        className={`${montserrat.className} text-xs md:text-sm uppercase tracking-[0.8em] text-neutral-400`}
      >
        &quot;for those who know&quot;
      </p>
    </section>
  );
}
