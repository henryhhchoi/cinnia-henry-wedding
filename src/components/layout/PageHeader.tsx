interface PageHeaderProps {
  title: string;
  tagline?: string;
}

export default function PageHeader({ title, tagline }: PageHeaderProps) {
  return (
    <div className="text-center pt-16 pb-12 md:pt-24 md:pb-16 px-6">
      <h1
        className="font-script text-sage leading-none"
        style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
      >
        {title}
      </h1>
      {tagline && (
        <p className="font-serif italic text-sage-deep mt-4 max-w-xl mx-auto">
          {tagline}
        </p>
      )}
    </div>
  );
}
