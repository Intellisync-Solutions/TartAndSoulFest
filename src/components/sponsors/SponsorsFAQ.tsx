import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface SponsorsFAQProps {
  faq: FAQItem[];
}

const SponsorsFAQ: React.FC<SponsorsFAQProps> = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#2E1F1F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-tart-mint">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faq.map((item, idx) => (
            <div key={idx} className="mb-4 border-b border-tart-mint/20">
              <button
                className="w-full text-left py-4 px-2 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-white">{item.question}</span>
                <span className="text-tart-mint">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="py-2 px-4 text-gray-300 bg-[#3A2C2C] rounded-b">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsFAQ;
