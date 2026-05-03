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
