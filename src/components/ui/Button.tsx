interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
      mt-16
      border
      border-white
      px-10
      py-4
      uppercase
      tracking-[0.35em]
      transition-all
      duration-500
      hover:bg-white
      hover:text-black
      "
    >
      {children}
    </button>
  );
}
