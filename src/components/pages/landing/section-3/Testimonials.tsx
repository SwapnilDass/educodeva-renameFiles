import SectionHeader from "@/components/shared/SectionHeader";
import { HTMLAttributes } from "react";
import PlaneSvg from "./PlaneSvg";
import TestimonialGrid from "./TestimonialGrid";
import clsx from "clsx";
import SectionContainer from "@/components/shared/SectionContainer";

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
      <SectionContainer>
        <SectionHeader
          badgeIcon={<PlaneSvg />}
          title="Bringing students together,"
          highlight="One step at a time."
          description="Building the future of learning by making it accessible to students worldwide."
        />

        {/* User reviews/testimonials */}
        <TestimonialGrid />
      </SectionContainer>
    </section>
  );
}
