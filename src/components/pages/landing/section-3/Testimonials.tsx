import SectionHeader from "@/components/shared/SectionHeader";
import { HTMLAttributes } from "react";
import PlaneSvg from "./PlaneSvg";
import TestimonialGrid from "./TestimonialGrid";
import clsx from "clsx";

interface TestimonialsProps extends HTMLAttributes<HTMLElement> {}

export default function Testimonials({
  className,
  ...props
}: TestimonialsProps) {
  return (
    <section
      className={clsx("flex flex-col items-center bg-inherit", className)}
      {...props}
    >
      <div className="w-[87%] max-w-fit sm:w-[80%]">
        <SectionHeader
          badgeIcon={<PlaneSvg />}
          title="Bringing students together,"
          highlight="One step at a time."
          description="Building the future of learning by making it accessible to students worldwide."
        />

        {/* User reviews/testimonials */}
        <TestimonialGrid />
      </div>
    </section>
  );
}
