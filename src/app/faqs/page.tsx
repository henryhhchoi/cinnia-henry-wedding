import PageHeader from "@/components/layout/PageHeader";
import { WaveDivider } from "@/components/decorative";

const faqs = [
  {
    q: "When should I RSVP by?",
    a: "Please RSVP by December 1, 2026. Knowing your plans early helps us finalize room assignments, meals, and all the other logistics that go into a destination wedding — we really appreciate it.",
  },
  {
    q: "What's the dress code?",
    a: "Semi-formal. Think cocktail attire or a sleek midi dress — elegant enough for a wedding, comfortable enough to actually enjoy the party. Jeju evenings in May can be breezy, so a light layer is a good idea.",
  },
  {
    q: "I have a food allergy or dietary restriction — can you accommodate?",
    a: "Of course! Please note it in your RSVP and we'll make sure you're taken care of. If you have a severe allergy, feel free to reach out directly so we can coordinate with the venue.",
  },
  {
    q: "Is the venue accessible?",
    a: "Yes — Seaes Hotel & Resort is fully accessible. If you have specific mobility needs or anything we should know in advance, please let us know and we'll coordinate directly.",
  },
  {
    q: "What's the best way to get from the airport?",
    a: "A taxi or the Kakao T ride-hailing app is the easiest option from Jeju International Airport (CJU). The drive to Seaes Hotel & Resort takes roughly 30–40 minutes. See the Travel page for the full rundown.",
  },
  {
    q: "Will there be wifi at the venue?",
    a: "Yes — Seaes Hotel & Resort has wifi throughout the property.",
  },
  {
    q: "What's the weather like in Jeju in May?",
    a: "May in Jeju is lovely: warm, green, and generally sunny, with highs around 20–23°C (68–74°F). The island can get occasional showers, so a light rain jacket is worth packing alongside your sunscreen.",
  },
  {
    q: "Are there activities for kids?",
    a: "Absolutely. Jeju is incredibly family-friendly — beaches, lava caves, an outdoor folk village, and more. Check out our Things To Do page for ideas, and let us know if there's anything specific we can help with.",
  },
  {
    q: "What if I'm jet-lagged and need to rest?",
    a: "Please do rest! The schedule has some breathing room built in, and we completely understand the journey you're making to be here. Arrive a day early if you can — it makes a big difference.",
  },
];

export default function FAQsPage() {
  return (
    <div className="flex flex-col items-center px-6">
      <PageHeader
        title="FAQs"
        tagline="Can't find what you're looking for? Reach out and we'll get back to you."
      />

      <div className="w-full max-w-xl pb-24 md:pb-32">
        {faqs.map((item, i) => (
          <div key={i}>
            {i > 0 && (
              <div className="flex justify-center my-12">
                <WaveDivider size={120} />
              </div>
            )}
            <div className="text-center">
              <h2
                className="font-serif text-sage mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                {item.q}
              </h2>
              <p className="font-serif text-sage-deep">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
