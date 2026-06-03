const QuoteSection = () => {
  return (
    <section className="py-6 md:py-10 relative flex items-center justify-center">
      <div
        className="quote-float glass-hover relative z-10 cs-container text-center max-w-3xl mx-auto px-4 rounded-2xl p-8 md:p-12 cursor-default"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,0,5,0.92) 30%, rgba(255,71,126,0.13) 100%)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1.5px solid #ff477e",
          boxShadow:
            "0 0 32px rgba(255,71,126,0.18), 0 8px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <span className="text-4xl md:text-6xl text-csgirlies-pink font-righteous block leading-none mb-2">
          "
        </span>
        <p className="text-2xl md:text-4xl font-semibold font-mono text-gray-100 italic leading-relaxed">
          If your dreams do not scare you, they are not big enough.
        </p>
        <div
          className="mt-6 pt-4 text-sm md:text-base text-gray-400 font-mono"
          style={{ borderTop: "1px solid rgba(255,71,126,0.25)" }}
        >
          &mdash;{" "}
          <span className="text-white font-bold">Ellen Johnson Sirleaf</span> //
          Nobel Peace Prize Laureate
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
