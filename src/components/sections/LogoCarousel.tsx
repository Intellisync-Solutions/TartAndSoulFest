import React from 'react';
import { motion } from 'framer-motion';


interface LogoCarouselProps {
  sponsors: Array<{
    id: number;
    name: string;
    logo: string | { default: string };
  }>;
  scrollSpeedSeconds?: number; // New optional prop
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ sponsors, scrollSpeedSeconds = 40 }) => { //lower # = faster scroll
 
  // Duplicate sponsors array for seamless loop
  const extendedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="py-16 bg-gradient-to-r from-[#2E1F1F] via-[#3A2C2C] to-[#2E1F1F] overflow-hidden">
      {/* Top and bottom borders */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-tart-mint to-transparent opacity-20" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-tart-mint to-transparent opacity-20" />

      {/* Single scrolling row */}
      <div
        className="flex w-max"
        style={{
          animation: `scroll-left ${scrollSpeedSeconds}s linear infinite`
        }}
      >
        {extendedSponsors.map((sponsor, index) => (
          <motion.div
            key={`${sponsor.id}-${index}`}
            className="flex-none mx-8 bg-white p-4 rounded-lg flex items-center justify-center"
            style={{
              height: '100px', // Fixed height for consistency
              width: '200px', // Fixed width for consistency
              minWidth: '200px' // Prevent flex-shrink
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Display logo image if available, otherwise fallback to sponsor name */}
            {sponsor.logo ? (
              <img
                src={typeof sponsor.logo === "string" ? sponsor.logo : sponsor.logo?.default}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
              ) : (
                <div className="text-gray-500 text-lg font-medium">
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