import React from "react";

export const GIRLIES_IMAGES: string[] = [
  "/photos/girlies/01.jpg",
  "/photos/girlies/02.jpg",
  "/photos/girlies/03.jpg",
  "/photos/girlies/04.jpg",
  "/photos/girlies/05.jpg",
  "/photos/girlies/06.jpg",
  "/photos/girlies/07.jpg",
  "/photos/girlies/08.jpg",
  "/photos/girlies/09.jpg",
  "/photos/girlies/10.jpg",
  "/photos/girlies/11.jpg",
  "/photos/girlies/12.jpg",
];

interface PhotoMarqueeProps {
  images: string[];
  direction?: "left" | "right";
  speedMs?: number;
  className?: string;
}

const PhotoMarquee: React.FC<PhotoMarqueeProps> = ({
  images,
  direction = "left",
  speedMs = 35000,
  className = "",
}) => {
  const animClass = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";

  return (
    <div
      className={
        `overflow-hidden w-full py-4 group ${className} ` +
        // nice edge fade on both sides
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      }
    >
      <div
        className={`flex items-center gap-6 md:gap-8 lg:gap-10 ${animClass} [will-change:transform] group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speedMs}ms` }}
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="shrink-0 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full overflow-hidden ring-1 ring-white/10 bg-white/5 shadow-sm transition-transform duration-300 hover:scale-105 hover:ring-csgirlies-pink/60 hover:shadow-lg hover:shadow-csgirlies-pink/25"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoMarquee;
