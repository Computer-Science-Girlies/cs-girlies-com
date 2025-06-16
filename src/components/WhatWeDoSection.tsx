
const WhatWeDoSection = () => {
  return (
    <section className="bg-black py-24 md:py-32 my-8 md:my-16">
      <div className="cs-container">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-csgirlies-pink">
          What We Do
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Redefine Learning in Tech
            </h3>
            <p className="text-gray-300 mb-4">
              <span className="italic">Memorable and Engaging Education:</span> We make complex tech concepts relatable by linking them to familiar, cute themes, ensuring that learning is both effective and enjoyable.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Redefine Community in Tech
            </h3>
            <p className="text-gray-300 mb-4">
              <span className="italic">Your Online Support Network:</span> Connect with other Gen Z women who share your experiences, celebrate your wins, and provide support — all in one vibrant online community.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Redefine Diversity in Tech
            </h3>
            <p className="text-gray-300 mb-4">
              <span className="italic">Bringing Opportunities to You:</span> We source and share internships, scholarships, and events that might otherwise go unnoticed, placing them directly in front of you on platforms you use every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
