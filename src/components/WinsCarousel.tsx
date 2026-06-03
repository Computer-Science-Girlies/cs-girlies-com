import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Window from "@/components/Window";
import winsData from "@/data/wins.json";

interface Win {
  username: string;
  win: string;
}

const AUTO_ADVANCE_MS = 4000;

const WinsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wins, setWins] = useState<Win[]>([]);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const shuffled = [...winsData].sort(() => Math.random() - 0.5);
    setWins(shuffled);
    setCurrentIndex(Math.floor(Math.random() * shuffled.length));
  }, []);

  const advance = (next: number) => {
    setCurrentIndex(next);
    setAnimKey((k) => k + 1);
  };

  const goToPrevious = () => {
    if (wins.length === 0) return;
    advance(currentIndex === 0 ? wins.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    if (wins.length === 0) return;
    advance(currentIndex === wins.length - 1 ? 0 : currentIndex + 1);
  };

  // Auto-advance one by one
  useEffect(() => {
    if (wins.length === 0) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev === wins.length - 1 ? 0 : prev + 1;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [wins]);

  if (wins.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="cs-container">
          <Window title="girlies-wins.exe">
            <div className="p-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                What are the Girlies up to?
              </h2>
              <p className="text-lg">Loading community wins...</p>
            </div>
          </Window>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="cs-container">
        <Window title="girlies-wins.exe">
          <div className="py-8 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
              What are the Girlies up to?
            </h2>

            <div className="relative max-w-3xl mx-auto" style={{
              border: "1.5px solid #ff477e",
              borderRadius: "12px",
              padding: "2rem 3rem",
              minHeight: "160px",
            }}>
              <Button
                variant="outline"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black text-csgirlies-pink border-csgirlies-pink"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div key={animKey} className="wins-fade text-center px-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-csgirlies-pink">
                  {wins[currentIndex]?.username}
                </h3>
                <p className="text-lg md:text-xl">
                  "{wins[currentIndex]?.win}"
                </p>
              </div>

              <Button
                variant="outline"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black text-csgirlies-pink border-csgirlies-pink"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 mt-6">
                {Array.from({ length: Math.min(wins.length, 8) }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      background: i === currentIndex % 8 ? "#ff477e" : "rgba(255,71,126,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default WinsCarousel;
