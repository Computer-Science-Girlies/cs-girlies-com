import React from "react";

export const GIRLIES_IMAGES: string[] = [
  "/photos/girlies/Amarra.jpg",
  "/photos/girlies/Chandhana.jpg",
  "/photos/girlies/Daiana.jpg",
  "/photos/girlies/Maya.jpg",
  "/photos/girlies/Chinomso.jpg",
  "/photos/girlies/Sherlyn.jpg",
  "/photos/girlies/Tasha.jpg",
  "/photos/girlies/Shristi.jpg",
  "/photos/girlies/Michelle.jpg",
  "/photos/girlies/Shanine.jpg",
  "/photos/girlies/Emily.jpg",
  "/photos/girlies/Jei.jpg"
];

interface PhotoMarqueeProps {
  images: string[];
  direction?: "left" | "right";
  speedMs?: number;
  className?: string;
}

// Derive a display name from the image path (e.g., "/photos/girlies/Michelle.jpg" -> "Michelle")
function getDisplayName(path: string): string {
  try {
    const decoded = decodeURIComponent(path);
    const file = decoded.split("/").pop() || decoded;
    const base = file.replace(/\.[^.]+$/, "");
    return base.replace(/[-_]+/g, " ");
  } catch {
    return path;
  }
}

const PhotoMarquee: React.FC<PhotoMarqueeProps> = ({
  images,
  direction = "left",
  speedMs = 25000,
  className = "",
}) => {
  const animClass = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";
  const [hovered, setHovered] = React.useState<number | null>(null);

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
        {[...images, ...images].map((src, idx, arr) => {
          const name = getDisplayName(src);
          const total = arr.length;
          const isActive = hovered === idx;
          const isNeighbor =
            hovered !== null && ((idx - (hovered as number) + total) % total === 1 || ((hovered as number) - idx + total) % total === 1);
          const scaleClass = isActive ? "scale-110" : isNeighbor ? "scale-105" : "scale-100";
          const ringClass = isActive || isNeighbor ? "ring-0" : "ring-1 ring-white/10";
          const nameOpacity = isActive ? "opacity-100" : isNeighbor ? "opacity-60" : "opacity-0";

          return (
            <div
              key={idx}
              className="shrink-0 flex flex-col items-center gap-2"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`shrink-0 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full overflow-hidden ${ringClass} bg-white/5 shadow-sm transition-transform duration-300 ${scaleClass}`}
              >
                <img
                  src={src}
                  alt={name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className={`text-white text-xs md:text-sm ${nameOpacity} transition-opacity duration-300 whitespace-nowrap`}>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhotoMarquee;
