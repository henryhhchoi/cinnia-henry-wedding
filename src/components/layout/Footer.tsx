import { WaveDivider } from "@/components/decorative";

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <WaveDivider size={120} className="mx-auto mb-6" />
      <p className="font-serif text-sage-light text-xs tracking-widest uppercase">
        Cinnia &amp; Henry · May 14, 2027 · Jeju, South Korea
      </p>
    </footer>
  );
}
