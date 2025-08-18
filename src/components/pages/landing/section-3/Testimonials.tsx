import SectionHeader from "@/components/shared/SectionHeader";
import { HTMLAttributes } from "react";
import PlaneBadge from "./PlaneBadge";
import TestimonialGrid from "./TestimonialGrid";

// Accept typical HTML <section> attributes (like className) for reusability
interface TestimonialsProps extends HTMLAttributes<HTMLElement> {}

export default function Testimonials({
  className,
  ...props
}: TestimonialsProps) {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-[#050222] py-28 ${className}`}
      {...props} // Other HTML <section> attributes
    >
      <div className="h-[85%] w-[80%]">
        <SectionHeader
          badge={<PlaneBadge />}
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
