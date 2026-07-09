interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="uppercase tracking-[0.7em] text-neutral-500 text-xs">
      {children}
    </h2>
  );
}
