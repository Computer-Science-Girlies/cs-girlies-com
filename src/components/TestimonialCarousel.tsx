
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Char",
    content: "After 100+ applications, finally secured a recruiter response from a local company, showing resilience in the job search process."
  },
  {
    id: 2,
    name: "Emma",
    content: "Found an incredible support system through CS Girlies that helped me navigate my first tech internship!"
  },
  {
    id: 3,
    name: "Jessica",
    content: "The resources shared by this community helped me ace my coding interviews and land my dream job!"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

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
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-lg md:text-xl">
              {testimonials[currentIndex].content}
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

export default TestimonialCarousel;
