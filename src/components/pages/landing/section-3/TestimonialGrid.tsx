import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid() {
  const entries = [
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it...",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "My little bro just showed me Codeva and what he's been learning, he's doing way better in school especially in math, and he's making his own website now thanks to what he learned there!",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Yall gotta admit Codeva's the og",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "No way they teach all the math i need for free",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Too good at their job fr",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Just reached top 3 in the weekly leaderboard",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "This platform rocks man",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Tbh yall gotta admit Codeva is the best learning platform out there at the moment. They teach math, coding, physics, and more for free through interactive courses, host events, alow you to host your own and earn through your own shop, discover events according to your needs, compete with other students on a leaderboard and get paid for courses. Damn man they really cracked the winning formula of Duolingo, can't wait to see where this goes!",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it..",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it..",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Looking for a way to learn coding, math, physics, and more, all through the comfort of your home? Codeva's what you need. Check it out right now and gain expertise in what YOU like. https://codeva.xyz/",
      pfp: "",
      image: "",
    },

    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Gained a ton of xp on Codeva by joining the summer hackathon on their platform, even got a certificate and gifts",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "They rock so hard",
      pfp: "",
    },
  ];

  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleShowMore = () => {
    setVisibleCount(entries.length); // Show all entries when show more is pressed
    setShowMore(true); // Disable show more button and related effects
  };

  useEffect(() => {
    const getVisibleCount = () => {
      if (window.innerWidth < 768) {
        return 4; // For small screens (tailwind sm: 640px and up)
      } else if (window.innerWidth < 1024) {
        return 8; // For medium screens (tailwind md: 768px and up)
      } else {
        return 13; // For large screens (tailwind lg: 1024px and up)
      }
    };

    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize(); // Initial call to display on load

    window.addEventListener("resize", handleResize); // Dynamically resize number of items dispalyed

    return () => {
      // Cleanup on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-fit columns-1 gap-x-[1.375rem] space-y-[1.625rem] md:columns-2 lg:columns-3">
      {entries.slice(0, visibleCount).map((entry, index) => (
        <TestimonialCard key={index} {...entry} />
      ))}

      {!showMore && (
        <>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[34rem] bg-gradient-to-t from-[#050222] from-[12%] to-transparent" />
          <div className="absolute bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 justify-center">
            <button
              className="rounded-lg border-white/20 bg-gradient-to-b from-white/20 to-white/15 px-[3.875rem] py-3 font-medium text-white shadow-lg transition hover:bg-white/30"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        </>
      )}
    </div>
  );
}
