import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';

// Local image imports - commented out until images are available
// import soulButterClassic from '../../assets/images/soul-butter-classic.jpeg';
// import sweetPotatoDream from '../../assets/images/sweet-potato-dream.jpeg';
// import jazzAppleCrumble from '../../assets/images/jazz-apple-crumble.jpeg';

const FEATURED_TARTS = [
  {
    name: "Soul Butter Classic",
    image: "placeholder-tart-image", // Placeholder until image is available
    description: "Our signature butter tart with a hint of bourbon vanilla",
    price: "",
    awards: [""],
    isSignature: true
  },
  {
    name: "Sweet Potato Dream",
    image: "placeholder-tart-image", // Placeholder until image is available
    description: "Southern comfort meets Canadian tradition",
    price: "",
    awards: [""],
    isSignature: true
  },
  {
    name: "Jazz Apple Crumble",
    image: "placeholder-tart-image", // Placeholder until image is available
    description: "Spiced apple filling with soul food inspired crumble",
    price: "",
    awards: [],
    isSignature: false
  }
];

const FeaturedTarts = () => {
  return (
    <section className="py-20 bg-[#3A2C2C]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Tarts Coming Soon</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience our award-winning butter tarts, where soul food meets Canadian tradition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_TARTS.map((tart, index) => (
            <motion.div
              key={tart.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#2E1F1F] rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-[#2E1F1F]">
                  <span className="text-gray-500">{tart.name}</span>
                </div>
                {tart.isSignature && (
                  <div className="absolute top-4 right-4 bg-[#FFA600] text-[#2E1F1F] px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star size={16} className="mr-1" />
                    Signature
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tart.name}</h3>
                <p className="text-gray-300 mb-4">{tart.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#00A89F] text-xl font-bold">{tart.price}</span>
                  <div className="inline-block bg-[#FFA600]/20 text-[#FFA600] px-3 py-1 rounded-full text-sm font-medium mr-2">
                    Coming Soon
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#00A89F] text-[#2E1F1F] px-4 py-2 rounded-full font-bold text-sm"
                  >
                    Order Now
                  </motion.button>
                </div>
                {tart.awards.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {tart.awards.map((award, i) => (
                        <div
                          key={i}
                          className="flex items-center text-[#FFA600] text-sm"
                        >
                          <Award size={14} className="mr-1" />
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTarts;