import Button from "@/components/ui/Button";

interface AttractionCardProps {
  name: string;
  location: string;
  description: string;
  mapsUrl: string;
  featured?: boolean;
}

export default function AttractionCard({
  name,
  location,
  description,
  mapsUrl,
  featured = false,
}: AttractionCardProps) {
  if (featured) {
    return (
      <div className="flex flex-col items-center text-center pb-8">
        {/* Full-width landscape placeholder — swaps for a real photo later */}
        <div
          className="w-full rounded-lg bg-sage-light mb-8 flex-shrink-0 aspect-[3/2]"
          role="img"
          aria-label={name}
        />
        <h3
          className="font-script text-sage mb-2"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
        >
          {name}
        </h3>
        <p className="font-serif italic text-sage text-sm mb-4">{location}</p>
        <p className="font-serif text-sage-deep mb-8 max-w-sm">{description}</p>
        <Button as="a" href={mapsUrl} target="_blank" rel="noopener noreferrer">
          View
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center mx-auto py-6">
      <div
        className="rounded-full bg-sage-light mb-5 flex-shrink-0"
        style={{ width: 150, height: 150 }}
        role="img"
        aria-label={name}
      />
      <h3
        className="font-script text-sage mb-1"
        style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
      >
        {name}
      </h3>
      <p className="font-serif italic text-sage text-xs mb-3">{location}</p>
      <p className="font-serif text-sage-deep text-sm mb-5">{description}</p>
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
