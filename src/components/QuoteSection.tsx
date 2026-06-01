const QuoteSection = () => {
  return (
    <section className="py-6 md:py-10 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60" 
      ></div>
      
      {/* QUOTATION BOX */}
      <div className="relative z-10 cs-container text-center max-w-3xl mx-auto px-4 bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
        <span className="text-4xl md:text-6xl text-csgirlies-pink font-righteous block leading-none mb-2">“</span>
        <p className="text-2xl md:text-4xl font-semibold font-mono text-gray-100 italic leading-relaxed">
          If your dreams do not scare you, they are not big enough.
        </p>
        <div className="mt-6 pt-4 border-t border-white/10 text-sm md:text-base text-gray-400 font-mono">
          &mdash; <span className="text-white font-bold">Ellen Johnson Sirleaf</span> // Nobel Peace Prize Laureate
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;