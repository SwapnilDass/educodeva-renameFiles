import { HTMLAttributes } from "react";
import clsx from "clsx";

interface EventHighlightsProps extends HTMLAttributes<HTMLDivElement> {}

export default function EventHighlight({
  className,
  ...props
}: EventHighlightsProps) {
  return (
    <div className={clsx("mt-20 md:mt-28 lg:mt-32", className)} {...props}>
      <h2 className="text-center text-lg font-medium sm:text-xl md:text-[1.45rem] lg:text-[1.7rem]">
        Think it's too good to be true?{" "}
        <span className="bg-gradient-to-b cursor-pointer from-[#ED066B] from-20% to-white to-[92%] bg-clip-text text-transparent">
          Check it out!
        </span>
      </h2>

      <div className="relative mx-auto mt-12 flex max-w-3xl items-center justify-center">
        {/* Background Cards */}
        <div
          className="absolute h-full w-[75%] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg"
          style={{ transform: "translateY(-16px) scale(0.90)", zIndex: 10 }}
        />
        <div
          className="absolute h-full w-[80%] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg"
          style={{ transform: "translateY(-8px) scale(0.95)", zIndex: 20 }}
        />

        {/* Front Card */}
        <div className="relative z-30 w-full max-w-2xl rounded-2xl bg-gradient-to-b from-white/20 to-white/5 p-6 shadow-lg backdrop-blur-lg">
          <div className="flex items-start gap-4">
            <img
              src="/landing/ismael.png"
              alt="Ismael's avatar"
              className="h-12 w-12 rounded-full border-2 border-white/20"
            />
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <h3 className="font-semibold text-white">Ismael</h3>
                <p className="text-xs text-white/60">4:19 PM</p>
              </div>
              <p className="mt-1 text-white/80">
                We have dedicated an entire tab on the user Dashboard to
                creating and managing events, check our socials to see more...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
