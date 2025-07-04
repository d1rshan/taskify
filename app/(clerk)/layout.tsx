export default function ClerkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full justify-center items-center">{children}</div>
  );
}
