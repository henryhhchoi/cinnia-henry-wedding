import Button from "@/components/ui/Button";

interface EventBlockProps {
  id: string;
  name: string;
  time: string;
  venue: string;
}

export default function EventBlock({ id, name, time, venue }: EventBlockProps) {
  return (
    <div className="text-center py-10 px-8">
      <h3
        className="font-serif font-semibold text-sage"
        style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}
      >
        {name}
      </h3>
      <p className="font-serif text-sage-deep mt-2">{time}</p>
      <p className="font-serif italic text-sage mt-1 mb-8">{venue}</p>
      <Button as="a" href={`/api/calendar?event=${id}`} size="sm">
        Add to Calendar
      </Button>
    </div>
  );
}
