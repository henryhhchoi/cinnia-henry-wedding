# V1 Snapshot — Pre-Design-Review State

*Captured before executing structural design recommendations (Recs 1–3).*
*To revert: copy the source blocks below back into the corresponding files.*

---

## src/app/page.tsx

```tsx
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

      <WaveDivider size={120} className="mb-16" />

      {/* CTA */}
      <div className="mb-32">
        <Button as="a" href="/rsvp">
          RSVP
        </Button>
      </div>
    </div>
  );
}
```

---

## src/components/things-to-do/AttractionCard.tsx

```tsx
import Button from "@/components/ui/Button";

interface AttractionCardProps {
  name: string;
  location: string;
  description: string;
  mapsUrl: string;
}

export default function AttractionCard({
  name,
  location,
  description,
  mapsUrl,
}: AttractionCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto py-8">
      <div
        className="rounded-full bg-sage-light mb-6 flex-shrink-0"
        style={{ width: 240, height: 240 }}
        role="img"
        aria-label={name}
      />
      <h3
        className="font-script text-sage mb-1"
        style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
      >
        {name}
      </h3>
      <p className="font-serif italic text-sage text-sm mb-3">{location}</p>
      <p className="font-serif text-sage-deep mb-6">{description}</p>
      <Button
        as="a"
        href={mapsUrl}
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </Button>
    </div>
  );
}
```

---

## src/app/things-to-do/page.tsx

```tsx
import PageHeader from "@/components/layout/PageHeader";
import AttractionCard from "@/components/things-to-do/AttractionCard";
import { WaveDivider } from "@/components/decorative";

function CategoryDivider({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 my-12 md:my-16">
      <span className="font-serif text-sage-deep text-xs tracking-widest uppercase">
        {label}
      </span>
      <WaveDivider size={120} />
    </div>
  );
}

const scenic = [
  {
    name: "Jeongbang Waterfall",
    location: "Seogwipo, Jeju",
    description:
      "One of the only waterfalls in Asia that drops directly into the ocean — and well worth the walk down to the rocks.",
    mapsUrl: "https://maps.app.goo.gl/jeongbang",
  },
  {
    name: "Seongsan Ilchulbong",
    location: "Seongsan, Jeju",
    description:
      "A UNESCO-listed volcanic crater that rises dramatically from the sea — catch sunrise here if you can manage the early wake-up.",
    mapsUrl: "https://maps.app.goo.gl/ilchulbong",
  },
  {
    name: "Hallasan National Park",
    location: "Central Jeju",
    description:
      "Jeju's dormant volcano and South Korea's highest peak. Even a partial hike through its forested trails is stunning.",
    mapsUrl: "https://maps.app.goo.gl/hallasan",
  },
];

const food = [
  {
    name: "Dongmun Traditional Market",
    location: "Jeju City",
    description:
      "The best place to try Jeju's famous black pork, hallabong tangerines, and haenyeo-caught seafood all under one roof.",
    mapsUrl: "https://maps.app.goo.gl/dongmun",
  },
  {
    name: "Maeil Olle Market",
    location: "Seogwipo, Jeju",
    description:
      "A lively covered market with street food stalls — great for a quick bite and some local color before exploring Seogwipo.",
    mapsUrl: "https://maps.app.goo.gl/ollemarkt",
  },
];

const beaches = [
  {
    name: "Hyeopjae Beach",
    location: "Hallim, Jeju",
    description:
      "Calm turquoise water and white sand backed by a pine forest — one of Jeju's most beautiful beaches.",
    mapsUrl: "https://maps.app.goo.gl/hyeopjae",
  },
];

const cultural = [
  {
    name: "Manjanggul Lava Tube",
    location: "Gujwa, Jeju",
    description:
      "A UNESCO-listed lava tunnel stretching nearly 8 km underground — cool, eerie, and unlike anything else on the island.",
    mapsUrl: "https://maps.app.goo.gl/manjanggul",
  },
  {
    name: "Jeju Folk Village Museum",
    location: "Seongup, Jeju",
    description:
      "A well-preserved outdoor village with restored stone houses and costumed guides that brings traditional Jeju life to life.",
    mapsUrl: "https://maps.app.goo.gl/folkvillage",
  },
];

export default function ThingsToDoPage() {
  return (
    <div className="flex flex-col items-center px-6">
      <PageHeader
        title="Things To Do"
        tagline="Eat, see, eat again. Our favourite restaurants, sights and more."
      />

      <div className="w-full max-w-2xl pb-24 md:pb-32">
        <CategoryDivider label="Scenic Spots" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {scenic.map((a) => (
            <AttractionCard key={a.name} {...a} />
          ))}
        </div>

        <CategoryDivider label="Food &amp; Drink" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {food.map((a) => (
            <AttractionCard key={a.name} {...a} />
          ))}
        </div>

        <CategoryDivider label="Beaches" />
        <div className="flex justify-center">
          {beaches.map((a) => (
            <AttractionCard key={a.name} {...a} />
          ))}
        </div>

        <CategoryDivider label="Cultural Sites" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {cultural.map((a) => (
            <AttractionCard key={a.name} {...a} />
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## src/app/travel/page.tsx

```tsx
import PageHeader from "@/components/layout/PageHeader";
import { WaveDivider } from "@/components/decorative";

function PlaneIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage" aria-hidden="true">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

function LuggageIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage" aria-hidden="true">
      <rect x="6" y="7" width="12" height="13" rx="1" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <line x1="12" y1="12" x2="12" y2="15" />
      <line x1="10.5" y1="13.5" x2="13.5" y2="13.5" />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage" aria-hidden="true">
      <rect x="3" y="5" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 5V3" />
      <path d="M16 5V3" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="16.5" cy="18.5" r="1.5" />
      <path d="M7.5 17V20" />
      <path d="M16.5 17V20" />
    </svg>
  );
}

function TravelSection({
  icon,
  label,
  name,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  name: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center max-w-lg mx-auto">
      <div className="flex justify-center mb-4">{icon}</div>
      <p className="font-serif text-sage-deep text-sm tracking-widest uppercase mb-3">
        {label}
      </p>
      <div
        className="font-script text-sage leading-tight mb-8"
        style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)" }}
      >
        {name}
      </div>
      <div className="font-serif text-sage-deep text-center">{children}</div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex justify-center my-16 md:my-20">
      <WaveDivider size={120} />
    </div>
  );
}

export default function TravelPage() {
  return (
    <div className="flex flex-col items-center px-6">
      <PageHeader title="Travel" />

      <div className="w-full max-w-2xl pb-24 md:pb-32">
        <p className="font-serif italic text-sage-deep text-center text-lg md:text-xl max-w-xl mx-auto mb-16">
          Eek, thank you so much for making the 10+ hour journey to celebrate
          with us. Heart.
        </p>

        {/* Flight */}
        <TravelSection
          icon={<PlaneIcon />}
          label="Flight"
          name={<>Incheon International Airport<br />&amp; Jeju International Airport</>}
        >
          <p className="mb-3">
            Okay first, you&rsquo;ll fly to Incheon International Airport (ICN).
            Then, you have two options:
          </p>
          <p className="mb-3">
            1. You make a direct transfer from ICN to Jeju International Airport
            (CJU). Please keep in mind there are only a few ICN-CJU flights per
            week.
          </p>
          <p>
            2. You take a taxi or the subway to Gimpo International Airport
            (GMP) and fly to Jeju Island from there. GMP is a smaller city
            airport with multiple CJU-bound flights every day.
          </p>
        </TravelSection>

        <SectionDivider />

        {/* Hotel */}
        <TravelSection
          icon={<LuggageIcon />}
          label="Hotel"
          name="Yak Maeul"
        >
          <p className="mb-6">
            We&rsquo;ll be providing accommodation for both nights at Yak Maeul.
          </p>
          <p className="font-serif font-semibold text-sage-deep mb-1">Address:</p>
          <p>162 Saekdaljungang-ro</p>
          <p>특별자치도, Seogwipo-si</p>
        </TravelSection>

        <SectionDivider />

        {/* Shuttle */}
        <TravelSection
          icon={<BusIcon />}
          label="Shuttle"
          name="Shuttle from Yak Maeul to Seaes"
        >
          <p className="font-serif font-semibold text-sage-deep mb-4">
            May 14, 2027 · 4:30 pm
          </p>
          <p>
            There will be a shuttle from Yak Maeul to Seaes Hotel on the day of
            the wedding. The shuttle will also be available to take us to the
            after party, then back to Yak Maeul.
          </p>
        </TravelSection>
      </div>
    </div>
  );
}
```
