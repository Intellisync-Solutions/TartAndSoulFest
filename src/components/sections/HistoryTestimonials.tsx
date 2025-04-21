import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  year: string;
  image: string;
}

interface HistoryTestimonialsProps {
  testimonials: Testimonial[];
}

const HistoryTestimonials: React.FC<HistoryTestimonialsProps> = ({ testimonials }) => (
  <section className="py-12 bg-[#2E1F1F]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Community Voices</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#00A89F]/30 via-transparent to-[#FFA600]/30 p-0.5 rounded-2xl overflow-hidden">
              <TestimonialCard {...testimonial} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HistoryTestimonials;
