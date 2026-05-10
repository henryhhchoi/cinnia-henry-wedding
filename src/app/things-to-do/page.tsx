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

        {/* Scenic Spots: featured hero + 2-column supporting grid */}
        <CategoryDivider label="Scenic Spots" />
        <AttractionCard {...scenic[0]} featured />
        <div className="grid grid-cols-2 gap-3 mt-4">
          {scenic.slice(1).map((a) => (
            <AttractionCard key={a.name} {...a} />
          ))}
        </div>

        {/* Food & Drink: featured hero + single supporting */}
        <CategoryDivider label="Food &amp; Drink" />
        <AttractionCard {...food[0]} featured />
        <div className="mt-4">
          {food.slice(1).map((a) => (
            <AttractionCard key={a.name} {...a} />
          ))}
        </div>

        {/* Beaches: single featured */}
        <CategoryDivider label="Beaches" />
        <AttractionCard {...beaches[0]} featured />

        {/* Cultural Sites: featured hero + single supporting */}
        <CategoryDivider label="Cultural Sites" />
        <AttractionCard {...cultural[0]} featured />
        <div className="mt-4">
          {cultural.slice(1).map((a) => (
            <AttractionCard key={a.name} {...a} />
          ))}
        </div>

      </div>
    </div>
  );
}
