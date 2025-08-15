import { HTMLAttributes } from "react";
import PlaneBadge from "./PlaneBadge";
import TestimonialGrid from "./TestimonialGrid";

// Accept typical HTML <section> attributes (like className) for reusability
interface TestimonialSectionProps extends HTMLAttributes<HTMLElement> {}

export default function TestimonialSection({
  className,
  ...props
}: TestimonialSectionProps) {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-[#050222] ${className}`}
      {...props} // Other HTML <section> attributes
    >
      <div className="h-[85%] w-[80%]">
        {/* Header */}
        <div className="mb-16 flex h-fit items-center gap-12">
          {/* Badge */}
          <PlaneBadge />

          {/* Title and description */}
          <div className="flex h-full flex-col justify-between">
            <h2 className="text-[1.7rem] font-medium">
              Bringing students together,{" "}
              <span
                style={{
                  background:
                    "linear-gradient(to bottom, #ED066B 20%, #FFFFFF 92.23%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One step at a time.
              </span>
            </h2>

            <p className="text-[1.2rem] font-normal text-white/70">
              Building the future of learning by making it accessible to
              students worldwide.
            </p>
          </div>
        </div>

        {/* User reviews/testimonials */}
        <TestimonialGrid />
      </div>
    </section>
  );
}
