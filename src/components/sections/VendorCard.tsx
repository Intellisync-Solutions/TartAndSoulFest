import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, ExternalLink, ChevronDown, Award } from 'lucide-react';

interface TartVariety {
  name: string;
  description: string;
  price: string;
  isSignature?: boolean;
}

interface VendorCardProps {
  vendor: {
    id: number;
    name: string;
    image: string;
    logo?: string;
    description: string;
    location: string;
    established: string;
    specialties: string[];
    tarts: TartVariety[];
    story: string;
    awards?: string[];
    website: string;
    hours?: string;
  };
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#2E1F1F] to-[#3A2C2C] rounded-xl overflow-hidden shadow-xl border border-[#8EF4B6] border-opacity-10"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${vendor.image})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E1F1F] to-transparent" />
        
        {vendor.logo && (
          <div className="absolute bottom-4 left-4 bg-white rounded-full p-2 h-16 w-16">
            <img
              src={vendor.logo}
              alt={`${vendor.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{vendor.name}</h3>
            <div className="flex items-center text-gray-300 text-sm">
              <MapPin size={16} className="mr-2" />
              {vendor.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-tart-mint text-sm">Est. {vendor.established}</div>
            {vendor.hours && (
              <div className="text-gray-300 text-sm mt-1">{vendor.hours}</div>
            )}
          </div>
        </div>

        <p className="text-gray-300 mb-4">{vendor.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {vendor.specialties.map((specialty, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-[#3A2C2C] text-tart-mint"
            >
              {specialty}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#3A2C2C] p-4 rounded-lg">
                <h4 className="text-tart-mint font-semibold mb-3">Our Story</h4>
                <p className="text-gray-300 text-sm">{vendor.story}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-tart-mint font-semibold">Our Tarts</h4>
                {vendor.tarts.map((tart, index) => (
                  <div
                    key={index}
                    className="bg-[#3A2C2C] p-4 rounded-lg flex justify-between items-start"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="font-semibold text-white">{tart.name}</h5>
                        {tart.isSignature && (
                          <Star size={16} className="text-[#FFA600]" />
                        )}
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{tart.description}</p>
                    </div>
                    <span className="text-tart-mint font-semibold">{tart.price}</span>
                  </div>
                ))}
              </div>

              {vendor.awards && (
                <div className="space-y-2">
                  <h4 className="text-tart-mint font-semibold">Awards & Recognition</h4>
                  {vendor.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <Award size={16} className="text-[#FFA600]" />
                      {award}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between mt-6">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-gray-300 hover:text-tart-mint transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.button>

          <motion.a
            href={vendor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-tart-mint hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Visit Website</span>
            <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default VendorCard