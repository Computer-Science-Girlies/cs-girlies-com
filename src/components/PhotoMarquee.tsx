import React from "react";

const modules = import.meta.glob("/public/photos/girlies/*.{jpg,jpeg,png,webp}", { eager: true });
export const GIRLIES_IMAGES: string[] = Object.keys(modules).map((path) =>
  path.replace("/public", "")
);

interface PhotoMarqueeProps {
  images: string[];
  direction?: "left" | "right";
  speedMs?: number;
  className?: string;
}

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
  speedMs = 30000,
  className = "",
}) => {
  const animClass = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";
  const [hoveredKey, setHoveredKey] = React.useState<string | null>(null);
  
  const isPaused = hoveredKey !== null;

  const renderImageGroup = (groupSuffix: string) => (
    <div 
      className={`flex items-center gap-6 md:gap-8 lg:gap-10 ${animClass} [will-change:transform] shrink-0 pr-6 md:pr-8 lg:pr-10`}
      style={{ 
        animationDuration: `${speedMs}ms`,
        animationPlayState: isPaused ? "paused" : "running"
      }}
    >
      {images.map((src, idx) => {
        const name = getDisplayName(src);
        const itemKey = `${groupSuffix}-${idx}`;
        const isActive = hoveredKey === itemKey;
        
        const scaleClass = isActive ? "scale-110" : "scale-100";
        const ringClass = isActive ? "ring-0" : "ring-1 ring-white/10";
        const nameOpacity = isActive ? "opacity-100" : "opacity-0";

        return (
          <div
            key={itemKey}
            className="shrink-0 flex flex-col items-center gap-2"
            onMouseEnter={() => setHoveredKey(itemKey)}
            onMouseLeave={() => setHoveredKey(null)}
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
            <span className={`text-white text-xs md:text-sm ${nameOpacity} transition-opacity duration-300 whitespace-nowrap`}>
              {name}
            </span> 
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      className={
        `overflow-hidden w-full py-4 flex ${className} ` +
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      }
    >
      <div className="flex w-max">
        {renderImageGroup("group-1")}
        {renderImageGroup("group-2")}
      </div>
    </div>
  );
};

export default PhotoMarquee;