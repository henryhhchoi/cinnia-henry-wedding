import Image from "next/image";
import Button from "@/components/ui/Button";
import { WaveDivider } from "@/components/decorative";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6">
      {/* Hero */}
      <section className="text-center pt-20 pb-24 md:pt-28 md:pb-32 max-w-2xl mx-auto">
        <h1 className="font-script text-sage leading-none" style={{ fontSize: "clamp(4rem, 12vw, 7.5rem)" }}>
          Cinnia Lee
        </h1>
        <p className="font-serif italic text-sage-deep text-xl md:text-2xl mt-8 mb-8">and</p>
        <h1 className="font-script text-sage leading-none" style={{ fontSize: "clamp(4rem, 12vw, 7.5rem)" }}>
          Henry Choi
        </h1>

        <div className="mt-12 mb-4">
          <p className="font-serif text-sage-deep text-lg tracking-wide">
            Friday, May 14, 2027
          </p>
          <p className="font-serif italic text-sage text-base mt-1">
            Jeju, South Korea
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="w-full max-w-2xl mb-16 rounded-lg overflow-hidden relative aspect-[4/3]">
        <Image
          src="/images/hero.jpeg"
          alt="Cinnia and Henry"
          fill
          className="object-cover"
          priority
        />
      </div>

      <WaveDivider size={180} className="mb-16" />

      {/* CTA */}
      <div className="mb-32">
        <Button as="a" href="/rsvp">
          RSVP
        </Button>
      </div>
    </div>
  );
}
