import CurvedLoop from "./reactbits/curved-loop";

export default function Footer() {
  return (
    <footer className="mt-32 mb-32">
      <CurvedLoop
        marqueeText="Cre8xp ✦ Creating Experience ✦"
        speed={0.8}
        curveAmount={300}
        direction="right"
        interactive={true}
        className=""
      />
    </footer>
  );
}
