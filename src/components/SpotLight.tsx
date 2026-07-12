"use client";

export default function SpotLight() {
  return (
    <>
      <div
        className="
        absolute

        top-0

        left-1/2

        -translate-x-1/2

        h-[650px]

        w-[650px]

        rounded-full

        bg-white/[0.03]

        blur-[180px]
      "
      />

      <div
        className="
        absolute

        top-24

        left-1/2

        -translate-x-1/2

        h-80

        w-1

        bg-gradient-to-b

        from-white/40

        to-transparent
      "
      />
    </>
  );
}
