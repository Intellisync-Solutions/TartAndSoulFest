import React from 'react';
import { motion } from 'framer-motion';

// Import sponsor logo images - commented out until images are available
// import soulKitchenLogo from '../../assets/images/soul-kitchen-logo.jpeg';
// import rhythmRecordsLogo from '../../assets/images/rhythm-records-logo.jpeg';
// import sweetHeritageLogo from '../../assets/images/sweet-heritage-logo.jpeg';

interface LogoCarouselProps {
  sponsors: Array<{
    id: number;
    name: string;
    logo: string;
  }>;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ sponsors }) => {
  // Duplicate sponsors array for seamless loop
  const extendedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="py-16 bg-gradient-to-r from-[#2E1F1F] via-[#3A2C2C] to-[#2E1F1F] overflow-hidden">
      {/* Top and bottom borders */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-tart-mint to-transparent opacity-20" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-tart-mint to-transparent opacity-20" />

      {/* Single scrolling row */}
      <div className="flex animate-scroll-left">
        {extendedSponsors.map((sponsor, index) => (
          <motion.div
            key={`${sponsor.id}-${index}`}
            className="flex-none mx-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Display logo image if available, otherwise fallback to sponsor name */}
            {typeof sponsor.logo === "string" && sponsor.logo !== "placeholder-logo" ? (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-48 max-w-none object-contain drop-shadow-lg rounded-2xl mx-8"
                loading="lazy"
              />
            ) : (
              <div className="h-48 flex items-center justify-center text-gray-500 text-2xl mx-8">
                {sponsor.name}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;