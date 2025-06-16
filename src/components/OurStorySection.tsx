
const OurStorySection = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="cs-container">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-csgirlies-pink">
          Our Story
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              The Big Vision
            </h3>
            <p className="text-lg mb-6">
              We're here to <strong>empower Gen Z women in tech around the world</strong> to chase their dreams, whatever those dreams may look like:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="mr-2">💻</span>
                Building an amazing product
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎓</span>
                Earning a computer science degree
              </li>
              <li className="flex items-center">
                <span className="mr-2">📝</span>
                Landing their dream job
              </li>
              <li className="flex items-center">
                <span className="mr-2">💛</span>
                Networking at a conference
              </li>
            </ul>
            <p className="text-lg mb-6">
              <strong>No dream is too big or too small.</strong> We want every young woman to know that her goals in tech are <em>possible</em>.
            </p>
            <p className="text-lg mb-6">
              And not just possible—we're here to make those dreams achievable by giving her two essential things:
            </p>
            <ol className="space-y-2 mb-6 list-decimal pl-5">
              <li>All the <strong>resources</strong> she needs to succeed.</li>
              <li>A <strong>supportive community</strong> that truly has her back.</li>
            </ol>
            <p className="text-lg">
              With 12,000+ members in our Discord and growing, we're already making an impact. But this is just the beginning—we're on our way to empowering <strong>hundreds of thousands of young women</strong> to explore tech careers, discover their passions, and feel deeply supported every step of the way. But how?
            </p>
          </div>
          <div>
            <img 
              src="/public/lovable-uploads/5d29b034-6b94-4c54-9c96-51d0a13f2515.png" 
              alt="Woman reading in library" 
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
