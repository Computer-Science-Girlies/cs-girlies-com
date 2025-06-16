
const QuoteSection = () => {
  return (
    <section className="py-16 md:py-32 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60" 

      ></div>
      <div className="relative z-10 cs-container text-center">
        <div className="text-6xl text-white mb-6">
          "
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          If your dreams do not scare you,
          <br />
          they are not big enough.
        </h2>
      </div>
    </section>
  );
};

export default QuoteSection;
