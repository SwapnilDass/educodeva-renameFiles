import SectionHeader from "@/components/shared/SectionHeader";
import CalendarSvg from "./CalendarSvg";
import EventGallery from "./EventGallery";
import { HTMLAttributes } from "react";
import clsx from "clsx";
import EventHighlight from "./EventHighlight";
import SectionContainer from "@/components/shared/SectionContainer";

interface EventsProps extends HTMLAttributes<HTMLElement> {}

export default function Events({ className, ...props }: EventsProps) {
  return (
    <section
      className={clsx("flex flex-col items-center bg-inherit", className)}
      {...props}
    >
      <SectionContainer>
        <SectionHeader
          badgeIcon={<CalendarSvg />}
          title="Educative events,"
          highlight="Redesigned"
          description="Creating a more globally accessible way of participating, organizing, and managing events. All through one Platform."
        />

        <EventGallery />
        <EventHighlight />
      </SectionContainer>
    </section>
  );
}
