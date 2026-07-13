"use client";

export default function ShowcaseReveal() {
  return (
    <>
      {/* Subtle Showcase 1 - Left Side */}
      <div
        className="
          absolute 
          left-[-200px] 
          top-1/2 
          -translate-y-1/2
          opacity-40
          blur-sm
          pointer-events-none
        "
      >
        <div className="relative">
          {/* Showcase Glow */}
          <div
            className="
              w-48 
              h-64 
              bg-white/5 
              blur-xl 
              rounded-lg
            "
          />

          {/* Showcase Outline */}
          <div
            className="
              absolute 
              inset-0 
              w-48 
              h-64 
              border 
              border-white/10 
              rounded-lg
              shadow-lg
              shadow-black/30
            "
          />

          {/* Subtle Content Hint */}
          <div
            className="
              absolute 
              inset-0 
              flex 
              items-center 
              justify-center
              opacity-30
            "
          >
            <div className="w-32 h-32 bg-white/5 rounded-full" />
          </div>
        </div>
      </div>

      {/* Subtle Showcase 2 - Right Side */}
      <div
        className="
          absolute 
          right-[-200px] 
          top-1/2 
          -translate-y-1/2
          opacity-40
          blur-sm
          pointer-events-none
        "
      >
        <div className="relative">
          {/* Showcase Glow */}
          <div
            className="
              w-48 
              h-64 
              bg-white/5 
              blur-xl 
              rounded-lg
            "
          />

          {/* Showcase Outline */}
          <div
            className="
              absolute 
              inset-0 
              w-48 
              h-64 
              border 
              border-white/10 
              rounded-lg
              shadow-lg
              shadow-black/30
            "
          />

          {/* Subtle Content Hint */}
          <div
            className="
              absolute 
              inset-0 
              flex 
              items-center 
              justify-center
              opacity-30
            "
          >
            <div className="w-32 h-32 bg-white/5 rounded-full" />
          </div>
        </div>
      </div>

      {/* Depth and Atmosphere */}
      <div
        className="
          absolute 
          inset-0 
          bg-gradient-to-r 
          from-transparent 
          via-black/40 
          to-transparent
          pointer-events-none
        "
      />

      {/* Museum Space Extension */}
      <div
        className="
          absolute 
          -inset-x-64 
          top-1/2 
          -translate-y-1/2
          h-96 
          bg-black/30 
          blur-2xl
          pointer-events-none
        "
      />
    </>
  );
}
