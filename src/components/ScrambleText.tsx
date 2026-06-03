import React, { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  delay?: number;
  scrambleSpeed?: number;
  className?: string;
  triggerOnView?: boolean;
  children?: React.ReactNode;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  delay = 0, 
  scrambleSpeed = 50,
  className = "",
  triggerOnView = false,
  children 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';

  const animateText = () => {
    // Clear any in-progress animation
    if (intervalRef.current) clearInterval(intervalRef.current);

    let currentIndex = 0;
    const targetLength = text.length;
    
    intervalRef.current = setInterval(() => {
      if (currentIndex <= targetLength) {
        const decoded = text.slice(0, currentIndex);
        const scrambled = Array.from({ length: Math.max(0, targetLength - currentIndex) }, () => 
          scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
        ).join('');
        
        setDisplayText(decoded + scrambled);
        currentIndex++;
      } else {
        setDisplayText(text);
        setIsAnimating(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, scrambleSpeed);
  };

  useEffect(() => {
    if (triggerOnView) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Clear any pending timer from a previous trigger
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
              setIsAnimating(true);
              animateText();
            }, delay);
          } else {
            // Element left the viewport — reset so it re-animates next scroll-in
            if (timerRef.current) clearTimeout(timerRef.current);
            if (intervalRef.current) clearInterval(intervalRef.current);
            setDisplayText(text);
            setIsAnimating(false);
          }
        },
        { threshold: 0.1 }
      );
      if (textRef.current) {
        observer.observe(textRef.current);
      }
      return () => {
        observer.disconnect();
        if (timerRef.current) clearTimeout(timerRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        animateText();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [text, delay, triggerOnView]);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDisplayText('');
      animateText();
    }
  };

  if (children) {
    return (
      <span ref={textRef} className={`cursor-pointer ${className}`} onClick={handleClick}>
        {React.cloneElement(children as React.ReactElement, {
          children: displayText || text
        })}
      </span>
    );
  }

  return <span ref={textRef} className={`cursor-pointer ${className}`} onClick={handleClick}>{displayText || text}</span>;
};

export default ScrambleText;