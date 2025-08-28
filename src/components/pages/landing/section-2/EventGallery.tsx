import { HTMLAttributes } from "react";
import clsx from "clsx";

interface EventGallery extends HTMLAttributes<HTMLDivElement> {}

export default function EventGallery({ className, ...props }: EventGallery) {
  const galleryPhotos = [
    // Column 1
    {
      url: "/landing/feature1.png",
      alt: "Feature 1",
    },
    {
      url: "/landing/feature4.png",
      alt: "Feature 4",
    },
    {
      url: "/landing/feature7.png",
      alt: "Feature 7",
    },

    // Column 2
    {
      url: "/landing/feature2.png",
      alt: "Feature 2",
    },
    {
      url: "/landing/feature5.png",
      alt: "Feature 5",
    },
    {
      url: "/landing/feature8.png",
      alt: "Feature 8",
    },

    // Column 3
    {
      url: "/landing/feature3.png",
      alt: "Feature 3",
    },
    {
      url: "/landing/feature6.png",
      alt: "Feature 6",
    },
    {
      url: "/landing/feature9.png",
      alt: "Feature 9",
    },
  ];

  return (
    <div className={clsx("flex justify-center", className)} {...props}>
      <div className="columns-1 gap-x-[1.375rem] space-y-[1.625rem] md:columns-2 lg:columns-3">
        {galleryPhotos.map((entry, index) => (
          <img
            key={index}
            src={entry.url}
            alt={entry.alt}
            className="w-full max-w-lg"
          />
        ))}
      </div>
    </div>
  );
}
