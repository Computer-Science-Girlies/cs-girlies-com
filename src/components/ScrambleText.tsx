import React, { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  delay?: number;
  scrambleSpeed?: number;
  className?: string;
  children?: React.ReactNode;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  delay = 0, 
  scrambleSpeed = 50,
  className = "",
  children 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      animateText();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  const animateText = () => {
    let currentIndex = 0;
    const targetLength = text.length;
    
    const interval = setInterval(() => {
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
        clearInterval(interval);
      }
    }, scrambleSpeed);

    return () => clearInterval(interval);
  };

  if (children) {
    return (
      <span className={className}>
        {React.cloneElement(children as React.ReactElement, {
          children: displayText || text
        })}
      </span>
    );
  }

  return <span className={className}>{displayText || text}</span>;
};

export default ScrambleText;