export default function Feature3() {
  return (
    <div className="bg-[#1E1B38] border border-white/20 rounded-[10px] px-5 pt-3 pb -4 md:pt-6 md:pb-5 flex flex-col justify-start gap -3 md:gap-4 w-full overflow-hidden"
    >
      
      <div className="pl-2 md:pl-3 max-w-[92%] text-left">
        <h3 className="text-white text-[20px] md:text-[22px] font-medium leading-tight tracking-[-0.5px]">
          Compete & Reach the top!
        </h3>
        <p className="mt-2 text-white/70 text-[13px] md:text-[14px] leading-relaxed">
          Any activity you do earns you XP, so gather as much as you can and compete in the leaderboard to win prizes!
        </p>
      </div>

      {/*Notification */}
      <div className="flex justify-center items-center gap-0 mb-3">
        <div className="relative w-[240px] md:w-[260px] lg:w-[280px]">
          <img
            src="/brand/png/Notifications.png"
            alt="Notifications"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}