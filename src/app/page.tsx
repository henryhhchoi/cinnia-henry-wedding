import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6">
      {/* Hero */}
      <section className="text-center pt-20 pb-24 md:pt-28 md:pb-32 max-w-2xl mx-auto">
        <h1 className="font-script text-sage leading-none" style={{ fontSize: "clamp(4rem, 12vw, 7.5rem)" }}>
          Cinnia Lee
        </h1>
        <p className="font-serif italic text-sage-deep text-xl md:text-2xl mt-8 mb-8">
          and
        </p>
        <h1 className="font-script text-sage leading-none" style={{ fontSize: "clamp(4rem, 12vw, 7.5rem)" }}>
          Henry Choi
        </h1>

        <div className="mt-12 mb-4">
          <p className="font-serif text-sage-deep text-lg tracking-wide">
            Friday, May 14, 2026
          </p>
          <p className="font-serif italic text-sage text-base mt-1">
            Jeju, South Korea
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-24 h-px bg-sage-light mb-16" />

      {/* Short intro */}
      <section className="max-w-xl text-center mb-16 px-4">
        <p className="font-serif text-sage-deep">
          We&rsquo;re so glad you&rsquo;re here. This site has everything you need to know
          about our wedding weekend in Jeju. More details to come soon — in the
          meantime, don&rsquo;t forget to RSVP!
        </p>
      </section>

      {/* CTA */}
      <div className="mb-32">
        <Button as="a" href="/rsvp">
          RSVP
        </Button>
      </div>
    </div>
  );
}
