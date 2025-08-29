import SectionHeader from "@/components/shared/SectionHeader";
import CalendarSvg from "./CalendarSvg";
import EventGallery from "./EventGallery";
import { HTMLAttributes } from "react";
import clsx from "clsx";
import EventHighlights from "./EventHighlights";

interface EventsProps extends HTMLAttributes<HTMLElement> {}

export default function Events({ className, ...props }: EventsProps) {
  return (
    <section
      className={clsx("flex flex-col items-center bg-inherit", className)}
      {...props}
    >
      <div className="w-[87%] max-w-fit flex flex-col items-center justify-center sm:w-full">
        <SectionHeader
          badgeIcon={<CalendarSvg />}
          title="Educative events,"
          highlight="Redesigned"
          description="Creating a more globally accessible way of participating, organizing, and managing events. All through one Platform."
        />

        <EventGallery className="w-[93%]" />
        <EventHighlights />
      </div>
    </section>
  );
}
