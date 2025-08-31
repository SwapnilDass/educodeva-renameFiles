import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <div className={clsx("w-[87%] max-w-fit sm:w-[80%]", className)} {...props}>
      {children}
    </div>
  );
}
