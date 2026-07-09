export default function CornerFrame() {
  return (
    <>
      <div className="fixed top-8 left-8 w-8 h-8 border-l border-t border-neutral-700 pointer-events-none" />

      <div className="fixed top-8 right-8 w-8 h-8 border-r border-t border-neutral-700 pointer-events-none" />

      <div className="fixed bottom-8 left-8 w-8 h-8 border-l border-b border-neutral-700 pointer-events-none" />

      <div className="fixed bottom-8 right-8 w-8 h-8 border-r border-b border-neutral-700 pointer-events-none" />
    </>
  );
}
