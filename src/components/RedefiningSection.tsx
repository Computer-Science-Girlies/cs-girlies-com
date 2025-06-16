
interface RedefiningProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const RedefiningSection = ({ number, title, children }: RedefiningProps) => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="cs-container">
        <h2 className="text-3xl md:text-5xl font-bold text-csgirlies-pink mb-12">
          {number}. Redefining {title} in Tech
        </h2>
        {children}
      </div>
    </section>
  );
};

export default RedefiningSection;
