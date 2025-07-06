import React, { useState, useEffect, useRef } from 'react';

interface CasinoCounterProps {
  target: number;
}

const CasinoCounter: React.FC<CasinoCounterProps> = ({ target }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const duration = 2000; // 2 seconds
    const incrementTime = (duration / end) / 2;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
        setHasAnimated(true);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, target]);

  const handleClick = () => {
    setCount(0);
    setHasAnimated(false);
    startAnimation();
  };

  return (
    <div 
      ref={counterRef}
      className="font-righteous text-5xl md:text-9xl text-csgirlies-pink-light cursor-pointer hover:scale-105 transition-transform duration-200" 
      style={{ textShadow: '0 0 10px #ff69b4, 0 0 20px #ff69b4' }}
      onClick={handleClick}
      title="Click to restart animation"
    >
      ${count.toLocaleString()}
    </div>
  );
};

export default CasinoCounter;
