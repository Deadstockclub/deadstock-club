export default function MuseumBackground() {
  return (
    <>
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />

      {/* Premium Museum Ambient Light */}
      <div
        className="
          absolute 
          inset-0 
          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]
          opacity-60
        "
      />

      {/* Architectural Grid - Very Subtle */}
      <div
        className="
          absolute 
          inset-0 
          opacity-[0.03] 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] 
          bg-[size:120px_120px]
          pointer-events-none
        "
      />

      {/* Depth Fog Effect */}
      <div
        className="
          absolute 
          inset-0 
          bg-gradient-to-b 
          from-transparent 
          via-black/30 
          to-black/80
          pointer-events-none
        "
      />

      {/* Premium Texture Overlay */}
      <div
        className="
          absolute 
          inset-0 
          opacity-[0.01] 
          mix-blend-overlay
          bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]
          pointer-events-none
        "
      />
    </>
  );
}
