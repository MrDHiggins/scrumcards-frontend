export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative  min-h-screen h-full page-padding-desktop bg-[#1a2936]">
      <div className="w-full h-full">{children}</div>
    </section>
  );
}
