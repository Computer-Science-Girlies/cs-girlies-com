import { useEffect, useRef, useState } from "react";
import Window from "@/components/Window";

const WhatWeDoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section
      className={`py-24 md:py-32 my-8 md:my-16 overflow-hidden ${revealed ? "what-we-do-revealed" : ""}`}
    >
      <div className="cs-container max-w-6xl mx-auto">
        <Window title="what-we-do.exe">
          <div ref={sectionRef} className="p-8 md:p-12 text-center">
            {/* Title slides UP */}
            <h2
              className={`wwd-title text-3xl md:text-5xl font-bold text-center mb-6 text-csgirlies-pink ${
                revealed ? "" : "opacity-0"
              }`}
            >
              What We Do
            </h2>

            {/* Pink horizontal line that flashes and fades*/}
            <div className="relative flex items-center justify-center mb-16">
              <div
                className={`wwd-pink-line h-[2px] w-full max-w-2xl origin-center ${revealed ? "" : "opacity-0"}`}
                style={{ background: "#ff477e" }}
              />
            </div>

            {/* Cards pop one by one */}
            <div className={`grid md:grid-cols-3 gap-8`}>
              <div className="wwd-card bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-light border-2 border-csgirlies-pink rounded-lg p-6 shadow-lg text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Redefine Learning in Tech
                </h3>
                <p className="mb-4">
                  <span className="italic font-semibold">
                    Memorable and Engaging Education:
                  </span>{" "}
                  We make complex tech concepts relatable by linking them to
                  familiar, cute themes, ensuring that learning is both
                  effective and enjoyable.
                </p>
              </div>

              <div className="wwd-card bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-light border-2 border-csgirlies-pink rounded-lg p-6 shadow-lg text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Redefine Community in Tech
                </h3>
                <p className="mb-4">
                  <span className="italic font-semibold">
                    Your Online Support Network:
                  </span>{" "}
                  Connect with other Gen Z women who share your experiences,
                  celebrate your wins, and provide support — all in one vibrant
                  online community.
                </p>
              </div>

              <div className="wwd-card bg-gradient-to-b from-csgirlies-pink to-csgirlies-pink-light border-2 border-csgirlies-pink rounded-lg p-6 shadow-lg text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Redefine Diversity in Tech
                </h3>
                <p className="mb-4">
                  <span className="italic font-semibold">
                    Bringing Opportunities to You:
                  </span>{" "}
                  We source and share internships, scholarships, and events that
                  might otherwise go unnoticed, placing them directly in front
                  of you on platforms you use every day.
                </p>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
