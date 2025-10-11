import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  children?: React.ReactNode;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 0, 
  speed = 100,
  className = "",
  showCursor = true,
  onComplete,
  children 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    setShowCursorBlink(true);

    const timer = setTimeout(() => {
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(typeInterval);
          onComplete?.();
          
          // Stop cursor blinking after a delay
          setTimeout(() => {
            setShowCursorBlink(false);
          }, 1000);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed, onComplete]);

  const cursorClass = showCursor && showCursorBlink ? 'animate-blink' : '';

  if (children) {
    return (
      <span className={className}>
        {React.cloneElement(children as React.ReactElement, {
          children: (
            <>
              {displayText}
              {showCursor && <span className={`${cursorClass} text-csgirlies-pink font-mono`}>|</span>}
            </>
          )
        })}
      </span>
    );
  }

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className={`${cursorClass} text-csgirlies-pink font-mono`}>|</span>}
    </span>
  );
};

export default TypewriterText;