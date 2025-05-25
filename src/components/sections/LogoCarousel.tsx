import React from 'react';
import { motion } from 'framer-motion';


interface LogoCarouselProps {
  sponsors: Array<{
    id: string;
    name: string;
    logo: string;
  }>;
  scrollSpeedSeconds?: number; // New optional prop
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ sponsors, scrollSpeedSeconds = 40 }) => { //lower # = faster scroll
 
  // Duplicate sponsors array for seamless loop
  const extendedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="py-16 bg-gradient-to-b from-[#1a1212] to-[#2E1F1F] overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMjEgM2M2LjA3NSAwIDExIDQuOTI1IDExIDExaDExdjExYzAgNi4wNzUtNC45MjUgMTEtMTEgMTFIMjF2LTExSDEwQzEwIDEzLjkzIDE0LjQ3NyA5LjUgMjAgOS41VjN6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      {/* Top and bottom borders */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-tart-mint to-transparent opacity-30" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-tart-mint to-transparent opacity-30" />

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
            className="flex-none mx-8 bg-[#2E1F1F] p-6 rounded-full flex items-center justify-center shadow-xl"
            style={{
              height: '180px',
              width: '180px',
              minWidth: '180px',
              border: '1px solid rgba(0, 168, 159, 0.15)',
              boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.8)'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#3A2C2C',
              boxShadow: '0 0 30px rgba(0, 168, 159, 0.4)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Display logo image if available, otherwise fallback to sponsor name */}
            {sponsor.logo ? (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-[120px] max-w-[120px] object-contain"
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