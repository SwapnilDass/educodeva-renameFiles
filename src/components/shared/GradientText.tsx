import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={clsx(
        "bg-gradient-to-b from-[#ED066B] from-20% to-white to-[92%] bg-clip-text text-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
