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
        {/* Header */}
        <div className="mb-16 flex h-fit justify-start gap-8 sm:items-center sm:gap-12">
          {/* Badge */}
          <div className="max-sm:mt-2">
            <PlaneBadge />
          </div>

          {/* Title and description */}
          <div className="flex h-full flex-col justify-between gap-y-3">
            <h2 className="text-xl font-medium md:text-[1.7rem]">
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

            <p className="text-base font-normal text-white/70 sm:text-[1.2rem]">
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
