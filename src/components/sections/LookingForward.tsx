import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import GradientText from '../ui/GradientText';

const values = [
  { label: 'Community', color: '#00A89F' },
  { label: 'Culture', color: '#FFA600' },
  { label: 'Connection', color: '#8EF4B6' },
];

const LookingForward: React.FC = () => (
  <section className="py-12 bg-[#3A2C2C]">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">
        <GradientText variant="primary">Looking Forward</GradientText>
      </h2>
      <div className="bg-gradient-to-br from-[#3A2C2C] to-[#2E1F1F] p-0.5 rounded-2xl overflow-hidden shadow-xl mb-8">
        <div className="bg-[#2E1F1F] p-8 rounded-2xl">
          <p className="text-gray-300 leading-relaxed mb-8">
            As we continue to grow, we're committed to preserving and celebrating our cultural heritage
            while creating new traditions for future generations. The journey of Tart & Soul is just beginning,
            and we invite you to be part of our evolving story.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="py-4"
              >
                <div className="relative mb-2">
                  <motion.div 
                    className="w-16 h-16 mx-auto flex items-center justify-center rounded-full"
                    style={{ backgroundColor: `${value.color}20` }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Sparkles 
                      className="text-white" 
                      style={{ color: value.color }} 
                      size={24} 
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white">{value.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-tart-mint text-soul-brown px-8 py-3 rounded-full font-bold inline-flex items-center space-x-2"
      >
        <span>Get Involved</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  </section>
);

export default LookingForward;
