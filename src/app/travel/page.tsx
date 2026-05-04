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
