export default function Pedestal() {
  return (
    <div className="relative">
      <div
        className="
        absolute

        left-1/2
        -translate-x-1/2

        -bottom-10

        w-72
        h-10

        rounded-full

        bg-black/80

        blur-xl
        "
      />

      <div
        className="
        relative

        w-[360px]
        h-[110px]

        rounded-t-2xl

        border
        border-neutral-700

        bg-gradient-to-b

        from-neutral-700

        via-neutral-900

        to-black

        shadow-[0_30px_90px_rgba(0,0,0,.85)]
        "
      >
        <div className="absolute inset-x-6 top-3 h-px bg-white/20" />
      </div>
    </div>
  );
}
