
import { useDiscordCount } from "@/hooks/use-discord-count";

const StatsSection = () => {
  const { formattedCount, isLoading, displayCount } = useDiscordCount();
  
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="cs-container">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center px-6 py-4 md:py-6 md:px-8">
          
          {isLoading ? (
            <span className="inline-block">
              <span className="text-csgirlies-pink text-6xl">
                {displayCount.toLocaleString()}+
              </span>
              <span className="text-sm text-gray-400 ml-4">(counting up...)</span>
            </span>
          ) : (
            <span className="text-csgirlies-pink">{formattedCount}</span>
          )} Community Members

        </h2>
      </div>
    </section>
  );
};

export default StatsSection;
