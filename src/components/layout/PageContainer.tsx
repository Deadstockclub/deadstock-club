export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-7xl mx-auto px-6 md:px-12">{children}</div>;
}
