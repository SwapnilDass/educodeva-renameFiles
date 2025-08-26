export default function Feature5() {
  return (
    <div className="bg-[#1E1B38] border border-white/20 rounded-[10px] shadow-[0_18px_40px_rgba(0,0,0,0.35)] px-5 pt-3 pb -4 md:pt-6 md:pb-5 flex flex-col justify-start gap -3 md:gap-4 w-full overflow-hidden">
      
{/* Stats */}
      <div className="flex justify-center items-center">
        <div className="relative w-[240px] md:w-[260px] lg:w-[280px]">
          <img
            src="/brand/svg/Graph.svg"
            alt="Radar statistics graphic"
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>

{/* Text */}
      <div className="pl-2 md:pl-3 max-w-[92%] text-left">
        <h3 className="text-white text-[20px] md:text-[22px] font-medium leading-tight tracking-[-0.5px]">
          Earn as you Learn.        </h3>
        <p className="mt-2 text-white/70 text-[14px] md:text-[15px] leading-relaxed">
          Want to host your event through Codeva? No problem! We’ll provide you with custom shops, ticketing, management, and more, all through one Platform.
        </p>
      </div>
    </div>
  );
}
