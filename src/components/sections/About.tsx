import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Music, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Soul Music',
      description:
        'Experience the rhythm and groove of authentic soul music at our events.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Community',
      description:
        'Building bridges through shared experiences and cultural celebration.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Culture',
      description:
        'Celebrating and preserving Black culture through food, music, and art.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#3A2C2C] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tart & Soul brings together the sweetness of community with the
            richness of Black culture, creating unforgettable experiences that
            celebrate our heritage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-[#2E1F1F]"
            >
              <div className="text-[#00A89F] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;