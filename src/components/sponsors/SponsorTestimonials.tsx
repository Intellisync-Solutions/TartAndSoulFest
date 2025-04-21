import React, { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  logo: string;
  tier: string;
}

interface SponsorTestimonialsProps {
  testimonials: Testimonial[];
}

const TESTIMONIALS_PER_PAGE = 2;

const SponsorTestimonials: React.FC<SponsorTestimonialsProps> = ({ testimonials }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / TESTIMONIALS_PER_PAGE);

  const startIdx = page * TESTIMONIALS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIdx, startIdx + TESTIMONIALS_PER_PAGE);

  // Handle wrap-around for fewer than 2 testimonials on last page
  const testimonialsToDisplay =
    currentTestimonials.length === TESTIMONIALS_PER_PAGE
      ? currentTestimonials
      : [...currentTestimonials, ...testimonials.slice(0, TESTIMONIALS_PER_PAGE - currentTestimonials.length)];

  const handlePrev = () => setPage((prev: number) => (prev - 1 + totalPages) % totalPages);
  const handleNext = () => setPage((prev: number) => (prev + 1) % totalPages);

  return (
    <section className="py-20 bg-[#2E1F1F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-tart-mint">Sponsor Testimonials</h2>
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsToDisplay.map((t, idx) => (
              <div key={idx} className="bg-[#3A2C2C] rounded-xl p-8 flex flex-col items-center shadow-lg">
                <div className="mb-4 text-tart-mint text-2xl">“</div>
                <blockquote className="text-lg text-gray-200 italic mb-4 text-center">{t.quote}</blockquote>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-20 h-20 bg-tart-mint/10 rounded-full flex items-center justify-center">
                    <img
                      src={t.logo}
                      alt={t.name}
                      className="w-16 h-16 object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-tart-mint text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-tart-mint">{t.tier}</div>
              </div>
            ))}
          </div>
          {/* Pagination controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-tart-mint/20 text-tart-mint hover:bg-tart-mint/40 transition-colors flex items-center justify-center text-xl"
              aria-label="Previous testimonials"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-tart-mint/20 text-tart-mint hover:bg-tart-mint/40 transition-colors flex items-center justify-center text-xl"
              aria-label="Next testimonials"
            >
              &#8594;
            </button>
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  page === idx ? "bg-tart-mint" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial page ${idx + 1}`}
                onClick={() => setPage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorTestimonials;
