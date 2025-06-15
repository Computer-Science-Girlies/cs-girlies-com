interface QuoteSectionProps {
  quote: string;
  author: string;
  authorTitle: string;
}

const QuoteSection = ({ quote, author, authorTitle }: QuoteSectionProps) => {
  return (
    <div className="bg-gradient-to-r from-rose-pompadour to-bright-pink py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">{quote}</h2>
        <p className="text-white text-lg">
          {author}, {authorTitle}
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;
