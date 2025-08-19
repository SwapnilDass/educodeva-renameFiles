import clsx from "clsx";
import { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
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
  ...props
}: SectionHeaderProps) {
  return (
    <header
      className={clsx(
        "mb-12 flex h-fit gap-8 md:mb-14 md:gap-10 lg:mb-16 lg:items-center lg:gap-12",
        className,
      )}
      {...props}
    >
      {badge}

      {/* Title and description */}
      <div className="flex h-full flex-col justify-between gap-y-3">
        <h2 className="text-xl font-medium md:text-[1.45rem] lg:text-[1.7rem]">
          {title}{" "}
          <span className="bg-gradient-to-b from-[#ED066B] from-20% to-white to-[92%] bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>

        <p className="text-base font-normal text-white/70 md:text-[1.1rem] lg:text-[1.2rem]">
          {description}
        </p>
      </div>
    </header>
  );
}
