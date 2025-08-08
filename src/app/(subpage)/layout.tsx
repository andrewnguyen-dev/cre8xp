export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#eee" }}>Side Navbar</aside>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}