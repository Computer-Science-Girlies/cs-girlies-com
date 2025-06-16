import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import winsData from "@/data/wins.json";

interface Win {
  username: string;
  win: string;
}

const WinsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wins, setWins] = useState<Win[]>([]);

  useEffect(() => {
    // Shuffle the wins data to randomize the order
    const shuffledWins = [...winsData].sort(() => Math.random() - 0.5);
    setWins(shuffledWins);
    
    // Start with a random win
    const randomIndex = Math.floor(Math.random() * shuffledWins.length);
    setCurrentIndex(randomIndex);
  }, []);

  const goToPrevious = () => {
    if (wins.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? wins.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (wins.length === 0) return;
    const isLastSlide = currentIndex === wins.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // If wins are still loading, show a loading state
  if (wins.length === 0) {
    return (
      <section className="bg-black py-16 md:py-24">
        <div className="cs-container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Community Wins
          </h2>
          <div className="relative max-w-3xl mx-auto border border-csgirlies-pink rounded-xl p-8 md:p-12 text-center">
            <p className="text-lg">Loading community wins...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="cs-container">
       
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          What are the Girlies up to?
        </h2>
        <div className="relative max-w-3xl mx-auto border border-csgirlies-pink rounded-xl p-8 md:p-12">
          <Button 
            variant="outline" 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black text-csgirlies-pink border-csgirlies-pink"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-csgirlies-pink">
              {wins[currentIndex].username}
            </h3>
            <p className="text-lg md:text-xl">
              "{wins[currentIndex].win}"
            </p>
          </div>

          <Button 
            variant="outline" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black text-csgirlies-pink border-csgirlies-pink"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WinsCarousel;
