"use client";

export default function DeadstockWall() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Wall Structure */}
      <div className="relative">
        {/* Wall Background */}
        <div
          className="
            w-[1200px] 
            h-[800px] 
            bg-gradient-to-br 
            from-neutral-900 
            via-neutral-800 
            to-neutral-950
            border 
            border-neutral-700/30
            rounded-xl
            shadow-2xl
            shadow-black/50
            backdrop-blur-sm
          "
        />

        {/* DEADSTOCK Text - Dominant and centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="
              text-[180px] 
              font-light 
              tracking-tight
              bg-gradient-to-b 
              from-white 
              to-neutral-300
              bg-clip-text 
              text-transparent
              drop-shadow-2xl
            "
          >
            DEADSTOCK
          </h1>
        </div>

        {/* Architectural Details */}
        <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />

        {/* Subtle Glow */}
        <div
          className="
            absolute 
            -inset-16 
            bg-white/5 
            blur-3xl 
            rounded-2xl 
            pointer-events-none
          "
        />

        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-3 h-3 border-r-2 border-b-2 border-white/20" />
        <div className="absolute top-4 right-4 w-3 h-3 border-l-2 border-b-2 border-white/20" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-r-2 border-t-2 border-white/20" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-l-2 border-t-2 border-white/20" />
      </div>

      {/* Ambient Occlusion */}
      <div
        className="
          absolute 
          -inset-32 
          bg-radial-gradient(circle_at_center, transparent_70%, black_100%) 
          pointer-events-none
        "
      />
    </div>
  );
}
