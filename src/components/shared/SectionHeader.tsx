import clsx from "clsx";

interface SectionHeaderProps {
  badge: React.ReactNode;
  title: string;
  highlight: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-16 flex h-fit justify-start gap-8 sm:items-center sm:gap-12",
        className,
      )}
    >
      {badge}

      {/* Title and description */}
      <div className="flex h-full flex-col justify-between gap-y-3">
        <h2 className="text-xl font-medium md:text-[1.7rem]">
          {title}{" "}
          <span
            style={{
              background:
                "linear-gradient(to bottom, #ED066B 20%, #FFFFFF 92.23%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {highlight}
          </span>
        </h2>

        <p className="text-base font-normal text-white/70 sm:text-[1.2rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
