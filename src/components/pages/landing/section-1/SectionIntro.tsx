export default function SectionIntro() {
  return (
    <section className="w-full pt-0 mb-2 md:mb-3">
      <div className="flex items-start gap-3 md:gap-4">
        <div
          aria-hidden="true"
          className="grid place-items-center shrink-0 size-[44px] md:size-[52px] lg:size-[56px] rounded-[12px] md:rounded-[14px] lg:rounded-[16px]"
        >
          <img
            src="/brand/svg/Vector.svg"
            alt="Vector Icon"
            className="w-[18px] md:w-[20px] lg:w-[24px] h-auto"
          />
        </div>

        <div className="max-w-[760px]">
          <h1 className="font-medium tracking-[-0.01em] text-white leading-tight text-[18px] px-5 md:text-[22px] lg:text-[26px]">
          <h1 className="font-medium tracking-[-0.01em] text-white leading-tight text-[18px] px-5 md:text-[22px] lg:text-[26px]">
            Learn new skills{" "}
            <span className="bg-gradient-to-b from-[#ED066B] to-[#FFFFFF] text-transparent bg-clip-text">
              faster, together.
            </span>
          </h1>
          <p className="mt-1 text-white/70 leading-snug text-[13px] px-5 md:text-[15px] lg:text-[16px]">
          <p className="mt-1 text-white/70 leading-snug text-[13px] px-5 md:text-[15px] lg:text-[16px]">
            A new way to gather, expand, and put to practice your skills.
          </p>
        </div>
      </div>
    </section>
  );
}
