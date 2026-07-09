interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="uppercase tracking-[0.35em] text-sm text-neutral-400">
      {children}
    </span>
  );
}
