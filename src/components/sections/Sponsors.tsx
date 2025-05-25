import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import intellisyncLogo from '../../assets/images/logo.png';
import lpGraphicsLogo from '../../assets/images/LPGraphics.png';
import sonsOfKentLogo from '../../assets/images/sonsofkent.webp';
import wtrLogo from '../../assets/images/WTR.png';
import dougTheFoodieLogo from '../../assets/images/DougTheFoodie.png';
import cksxLogo from '../../assets/images/CKSX.webp';
import planetPrintLogo from '../../assets/images/PlanetPrint.png';
import adanaLawLogo from '../../assets/images/AdanaLaw.png';
import oswLogo from '../../assets/images/OSW.png';
import curiousBirdLogo from '../../assets/images/CuriousBird.png';
import retrosuitesLogo from '../../assets/images/retrosuites.webp';

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
    tier: 'Sweet Soul Pioneer',
    description: 'Our highest tier partners who help keep the soul alive and thriving.',
    sponsors: [
      {
        name: 'Sons of Kent',
        logo: sonsOfKentLogo,
        description: 'Proud local brewery supporting the festival and community spirit.',
      },
      {
        name: 'Intellisync Solutions',
        logo: intellisyncLogo,
        description: 'Technology partner powering our digital experience.',
      },
      {
        name: 'Adana Law',
        logo: adanaLawLogo,
        description: 'Legal partner providing support for our events.',
      },
      {
        name: 'OSW',
        logo: oswLogo,
        description: 'Event planning partner helping us organize our events.',
      },
      {
        name: 'Curious Bird',
        logo: curiousBirdLogo,
        description: 'Marketing partner helping us promote our events.',
      },
      {
        name: 'Retrosuites',
        logo: retrosuitesLogo,
        description: 'Venue partner providing space for our events.',
      },
    ],
  },
  {
    tier: 'Golden Butter',
    description: 'Partners who add their unique beat to our community.',
    sponsors: [
      {
        name: 'LPGraphic Design&Print',
        logo: lpGraphicsLogo,
        description: 'Design and print partner for all festival branding.',
      },
      {
        name: 'WTR - With This Ring',
        logo: wtrLogo,
        description: 'Bringing creative flair and support to our events.',
      },
    ],
  },
  {
    tier: 'Sugar Sprinkle',
    description: 'Friends who help us create perfect harmony in our events.',
    sponsors: [
      {
        name: 'Doug the Foodie',
        logo: dougTheFoodieLogo,
        description: 'Food influencer sharing the soul of our festival with the world.',
      },
      {
        name: 'CKSX 99.1 FM',
        logo: cksxLogo,
        description: 'Local radio station supporting community events.',
      },
      {
        name: 'Planet Print',
        logo: planetPrintLogo,
        description: 'Full-service print shop for community events.',
      },
    ],
  },
];

const SponsorCard = ({ name, tier, logo }: { name: string; tier: string; logo: string }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  // Debug: Log sponsor name and logo path
  console.log('SponsorCard logo debug:', { name, logo });

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
          style={{
            border: '5px solid red',
            background: 'yellow',
            width: '100px',
            height: '100px',
            zIndex: 9999,
            position: 'relative'
          }}
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

  // Debug: Log sponsors array for this tier
  console.log('SponsorTier sponsors debug:', level.tier, level.sponsors);

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
            <SponsorCard
              key={sponsor.name}
              name={sponsor.name}
              tier={level.tier}
              logo={sponsor.logo}
            />
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
