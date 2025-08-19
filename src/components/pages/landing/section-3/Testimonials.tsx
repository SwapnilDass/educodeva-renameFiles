import SectionHeader from "@/components/shared/SectionHeader";
import { HTMLAttributes } from "react";
import PlaneBadge from "./PlaneBadge";
import TestimonialGrid from "./TestimonialGrid";
import clsx from "clsx";

// Include HTML element attributes (like className) for reusability
interface TestimonialsProps extends HTMLAttributes<HTMLElement> {}

export default function Testimonials({
  className,
  ...props
}: TestimonialsProps) {
  return (
    <section
      className={clsx("flex flex-col items-center bg-[#050222]", className)}
      {...props} // Other HTML element attributes
    >
      <div className="w-[87%] max-w-fit sm:w-[80%]">
        <SectionHeader
          badge={<PlaneBadge className="md:ml-1 lg:ml-2" />}
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
