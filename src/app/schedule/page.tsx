import PageHeader from "@/components/layout/PageHeader";
import EventBlock from "@/components/schedule/EventBlock";
import { WaveDivider } from "@/components/decorative";

const schedule = [
  {
    date: "Thursday, May 13",
    events: [
      {
        id: "welcome-dinner",
        name: "Welcome Dinner",
        time: "Time TBD",
        venue: "Venue TBD · Jeju, South Korea",
      },
    ],
  },
  {
    date: "Friday, May 14",
    events: [
      {
        id: "ceremony",
        name: "Ceremony & Reception",
        time: "Time TBD",
        venue: "Seaes Hotel & Resort · Jeju, South Korea",
      },
    ],
  },
];

export default function SchedulePage() {
  return (
    <div className="flex flex-col items-center px-6">
      <PageHeader
        title="Schedule"
        tagline="What to expect. Weeee."
      />

      <div className="w-full max-w-xl pb-24 md:pb-32">
        {schedule.map((day, i) => (
          <div key={day.date}>
            {i > 0 && (
              <div className="flex justify-center my-16 md:my-24">
                <WaveDivider size={120} />
              </div>
            )}
            <h2
              className="font-script text-sage text-center mb-8"
              style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)" }}
            >
              {day.date}
            </h2>

            <div className="flex flex-col">
              {day.events.map((event, j) => (
                <div key={event.id}>
                  {j > 0 && (
                    <div className="w-px h-12 bg-sage-light mx-auto" />
                  )}
                  <EventBlock {...event} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
