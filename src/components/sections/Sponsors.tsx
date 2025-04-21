import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type SponsorLevel = {
  tier: string;
  description: string;
  sponsors: {
    name: string;
    logo: string;
    description: string;
  }[];
};

const sponsorLevels: SponsorLevel[] = [
  {
    tier: 'Soul Pioneer',
    description: 'Our highest tier partners who help keep the soul alive and thriving.',
    sponsors: [
      {
        name: 'Soul Kitchen',
        logo: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&q=80',
        description: 'Bringing authentic flavors to our community since 2010.',
      },
    ],
  },
  {
    tier: 'Rhythm Maker',
    description: 'Partners who add their unique beat to our community.',
    sponsors: [
      {
        name: 'Music Haven',
        logo: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80',
        description: 'Supporting local musicians and artists.',
      },
    ],
  },
  {
    tier: 'Harmony Builder',
    description: 'Friends who help us create perfect harmony in our events.',
    sponsors: [
      {
        name: 'Community First',
        logo: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=500&q=80',
        description: 'Building stronger communities through arts and culture.',
      },
    ],
  },
];

const SponsorCard = ({ name, tier, logo }: { name: string; tier: string; logo: string }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="relative w-full h-48 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 1000 }}
    >
      <div
        className={`absolute w-full h-full bg-[#3A2C2C] rounded-lg p-6 backface-hidden
          ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
      >
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className={`absolute w-full h-full bg-[#5A2A0C] rounded-lg p-6 backface-hidden
          ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div className="text-center">
          <h4 className="text-xl font-bold mb-2">{name}</h4>
          <p className="text-sm text-gray-300">{tier} Sponsor</p>
        </div>
      </div>
    </motion.div>
  );
};

const SponsorTier = ({ level }: { level: SponsorLevel }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#5A2A0C] p-6 rounded-lg flex items-center justify-between group hover:bg-opacity-90 transition-colors"
      >
        <div className="text-left">
          <h3 className="text-2xl font-bold text-[#8EF4B6]">{level.tier}</h3>
          <p className="text-gray-300 mt-2">{level.description}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#8EF4B6]"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-6 p-6 bg-[#3A2C2C] rounded-b-lg">
          {level.sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#2E1F1F] p-6 rounded-lg"
            >
              <div className="h-40 mb-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">{sponsor.name}</h4>
              <p className="text-gray-300">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-[#3A2C2C] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're grateful for our partners who help make our community events possible.
            Each sponsor plays a unique role in bringing soul to our celebrations.
          </p>
        </motion.div>

        <div className="space-y-6">
          {sponsorLevels.map((level) => (
            <SponsorTier key={level.tier} level={level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
