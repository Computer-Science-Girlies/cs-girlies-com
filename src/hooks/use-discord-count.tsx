import { DISCORD_INVITE_ID } from '@/lib/constants';
import { useState, useEffect } from 'react';

export const useDiscordCount = () => {
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const fetchDiscordCount = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        if (!DISCORD_INVITE_ID) {
          throw new Error('Discord invite not found');
        }

        const response = await fetch(
          `https://discord.com/api/v9/invites/${DISCORD_INVITE_ID}?with_counts=true`
        );

        if (!response.ok) {
          throw new Error(`Discord API error: ${response.status}`);
        }

        const data = await response.json();
        const count = data.approximate_member_count;
        
        if (count) {
          setMemberCount(count);
          // Start animation from 0 to the actual count
          animateCount(count);
        } else {
          setError('No member count data received');
        }
      } catch (err) {
        console.error('Failed to fetch Discord member count:', err);
        setError('Failed to fetch member count');
      } finally {
        setIsLoading(false);
      }
    };

    const animateCount = (targetCount: number) => {
      // Reset display count to 0 to start animation
      setDisplayCount(0);
      
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = targetCount / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const currentCount = Math.floor(increment * currentStep);
        setDisplayCount(currentCount);

        if (currentStep >= steps) {
          setDisplayCount(targetCount);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    fetchDiscordCount();
    
    // Refresh count every 5 minutes
    const interval = setInterval(fetchDiscordCount, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    memberCount,
    isLoading,
    error,
    displayCount,
    formattedCount: displayCount ? `${displayCount.toLocaleString()}+` : '0+'
  };
};
