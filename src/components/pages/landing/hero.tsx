import { ArrowRightIcon } from "@radix-ui/react-icons";

("use client");

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import ShimmerButton from "@/components/ui/shimmer-button";
import NumberTicker from "@/components/ui/number-ticker";
import ShinyButton from "@/components/ui/shiny-button";
import BlurFade from "@/components/ui/blur-fade";

export default function Header() {
  return (
    <section className="relative flex h-fit min-h-screen max-[450px]:min-h-[100vh] w-screen flex-col items-center justify-center gap-y-8 pb-28 pt-16 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#5F2BAF_100%)] max-[400px]:gap-y-12 sm:pb-32 md:gap-y-14 md:shadow-xl lg:pb-36">
      <BlurFade delay={0.25} inView>
        <ShimmerButton
          shimmerColor={"#ED066B"}
          className="flex flex-row items-center justify-center gap-x-5 px-5 py-2 font-normal sm:px-6 lg:px-8"
          onClick={() => {
            window.location.href = "https://www.instagram.com/codeva.cs/";
          }}
        >
          <span className="text-xs font-light sm:text-sm lg:text-base">
            <span className="hidden md:inline">
              Product under Development...
            </span>{" "}
            Coming Soon...
          </span>
          <ArrowRightIcon className="size-4.5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
        </ShimmerButton>
      </BlurFade>

      <div className="flex flex-col items-center justify-center gap-y-6 text-center">
        <BlurFade delay={0.5} inView>
          <h1
            className="text-center text-3xl font-medium max-[400px]:text-[7.5vw] max-[400px]:leading-[9vw] min-[500px]:text-4xl min-[650px]:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              background:
                "linear-gradient(0deg, #FFF -4.78%, rgba(255, 255, 255, 0.00) 223.03%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Millions of STEM Students. <br /> One Platform.
          </h1>
        </BlurFade>

        <BlurFade delay={0.75} inView>
          <p
            className="text- mx-auto w-[90vw] max-w-[950px] text-sm font-medium max-[400px]:w-[95vw] max-[400px]:text-[.775rem] md:w-[80vw] md:text-base lg:text-[1.25em] lg:text-lg"
            style={{
              background:
                "linear-gradient(180deg, #EAEAEA 0%, rgba(234, 234, 234, 0.00) 321.67%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Connect with millions of STEM students worldwide on Codeva! Learn,
            share, and collaborate on coding, math, physics, and more — join
            competitions, host events, create projects, and make friends
            globally.
          </p>
        </BlurFade>

        <div
          className="flex flex-row items-center justify-center"
          onClick={() => {
            window.location.href = "";
          }}
        >
          <BlurFade delay={1} inView>
            <span
              className="rounded-full"
              onClick={() => {
                window.location.href = "https://www.instagram.com/codeva.cs/";
              }}
            >
              <ShinyButton className="group rounded-full border border-solid border-[rgba(255,255,255,.3)] bg-black px-6 py-2 text-sm max-[400px]:text-xs lg:text-base min-[1350px]:px-8 min-[1350px]:py-4">
                <span
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    marginRight: ".5rem",
                  }}
                >
                  ✨
                </span>

                <span
                  className="bg-[radial-gradient(67.93%_101.18%_at_44.51%_75%,#ED066B_0%,rgba(249,236,225,0.9)_100%)] bg-clip-text text-transparent transition-all duration-300 ease-in-out group-hover:ml-3"
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Keep Track of the Progress.
                </span>
              </ShinyButton>
              <BorderBeam
                size={200}
                duration={12}
                delay={0}
                colorFrom="#5F2BAF"
                colorTo="#ED066B"
              />
            </span>
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={1.25} inView>
        <div className="flex flex-col items-center justify-center gap-y-4 text-xs sm:gap-y-6 sm:text-sm lg:text-base">
          <p
            style={{
              background:
                "linear-gradient(180deg, rgba(234, 234, 234, 0.85) 0%, rgba(234, 234, 234, 0.00) 321.67%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <NumberTicker value={7000} delay={1} />+ Students are already
            interested!
          </p>

          <div className="flex cursor-pointer flex-row items-center justify-center gap-x-6 sm:gap-x-8">
            <img
              className="size-14 max-[400px]:size-12 md:size-16"
              src="../../../../logos/nyu.png"
            />
            <img
              className="size-16 max-[400px]:size-[3.15rem] md:size-[4.4rem]"
              src="../../../../logos/northwestern.png"
            />
            <img
              className="size-16 max-[400px]:size-[3.15rem] md:size-[4.4rem]"
              src="../../../../logos/mit.png"
            />
          </div>
        </div>
      </BlurFade>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(60rem_circle_at_center,white,transparent)]",
          "z-0",
        )}
      />

      <div className="absolute bottom-2 flex flex-col items-center justify-center gap-1 text-xs font-light text-[rgba(255,255,255,.5)] max-[400px]:text-[.7rem] lg:bottom-5 lg:gap-4 lg:text-sm">
        <BlurFade inView delay={1.5}>
          <div className="flex flex-row items-center justify-center gap-4">
            <p className="max-w-[90vw] text-pretty text-center">
              Contact us at{" "}
              <span className="font-semibold text-[#ED066B]">
                contact@codeva.xyz
              </span>
              , or at{" "}
              <span className="font-semibold text-[#ED066B]">
                business@codeva.xyz
              </span>{" "}
              for business inquiries.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            <img
              src="../../../../brand/svg/gray.svg"
              className="size-7 sm:size-10"
            />
            <p>Copyright 2024 © Codeva SA. All rights reserved.</p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
