import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CakeSlice, Award, ExternalLink, ChevronRight } from 'lucide-react';
import GradientText from '../ui/GradientText';

interface TartVariety {
  name: string;
  description: string;
  price: string;
  isSignature?: boolean;
}

interface VendorCardProps {
  vendor: {
    id: string;
    name: string;
    image: string;
    logo?: string;
    description: string;
    location: string;
    established: string;
    specialties: string[];
    tarts?: TartVariety[];
    story?: string;
    awards?: string[];
    website?: string;
    hours?: string;
  };
  onClick: () => void;
  isExpanded: boolean;
  isSpotlightOpen: boolean;
}

const VendorCard: React.FC<VendorCardProps> = ({ 
  vendor, 
  onClick, 
  isExpanded,
  isSpotlightOpen
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: isSpotlightOpen && isExpanded ? 0.95 : 1,
      }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ 
        type: "spring", 
        stiffness: 280, 
        damping: 20,
        layout: { duration: 0.4 }
      }}
      className={`overflow-hidden transform ${isSpotlightOpen && isExpanded ? 'opacity-70' : 'opacity-100'}`}
    >
      <div className="bg-gradient-to-br from-[#00A89F]/50 via-transparent to-[#FFA600]/30 p-0.5 rounded-3xl overflow-hidden shadow-xl">
        <div className="bg-[#1F1413] rounded-3xl overflow-hidden relative">
          {/* Vendor Image with Overlay */}
          <div className="h-56 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${vendor.image})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1413] to-transparent" />
            
            {/* Floating Vendor Logo */}
            {vendor.logo && (
              <motion.div 
                className="absolute top-4 left-4 z-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <div className="h-16 w-16 rounded-full border-2 border-white p-1 shadow-lg">
                  <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img src={vendor.logo} alt={`${vendor.name} logo`} className="object-cover" />
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Award Badge */}
            {vendor.awards && vendor.awards.length > 0 && (
              <motion.div
                className="absolute top-4 right-4 bg-[#FFA600] text-[#1F1413] px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center"
                initial={{ x: 30 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              >
                <Award size={14} className="mr-1" />
                Award Winning
              </motion.div>
            )}
          </div>
          
          {/* Content Section */}
          <div className="p-6 relative">
            {/* Decorative blobs */}
            <div className="absolute -top-4 right-12 w-16 h-16 bg-[#00A89F]/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-20 h-20 bg-[#FFA600]/20 blur-3xl rounded-full"></div>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                  <GradientText variant="primary">{vendor.name}</GradientText>
                </h3>
                
                <div className="flex items-center text-sm space-x-4">
                  <div className="flex items-center">
                    <MapPin size={14} className="text-[#00A89F] mr-1" />
                    <span className="text-gray-300">{vendor.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="text-[#00A89F] mr-1" />
                    <span className="text-gray-300">Est. {vendor.established}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-5">{vendor.description}</p>
              
              {/* Specialties Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {vendor.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-[#3A2C2C] text-[#00A89F]"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              {/* Featured Tart Highlight */}
              {vendor.tarts && vendor.tarts.length > 0 && vendor.tarts.some(tart => tart.isSignature) && (
                <div className="bg-gradient-to-r from-[#1F1413] via-[#2E1F1F] to-[#1F1413] p-4 rounded-xl mb-6">
                  {vendor.tarts.filter(tart => tart?.isSignature).slice(0, 1).map((tart, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <CakeSlice size={16} className="text-[#FFA600] mr-2" />
                          <h4 className="font-semibold text-white">{tart.name}</h4>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{tart.description}</p>
                      </div>
                      <span className="text-[#00A89F] font-bold ml-4">{tart.price}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <motion.a
                  href={vendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A89F] hover:text-white transition-colors text-sm flex items-center"
                  whileHover={{ x: 3 }}
                >
                  Visit Website
                  <ExternalLink size={14} className="ml-1" />
                </motion.a>
                
                <motion.button
                  onClick={onClick}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full ${
                    isExpanded 
                      ? 'bg-[#00A89F] text-[#1F1413]' 
                      : 'bg-[#3A2C2C] text-[#00A89F] hover:bg-[#00A89F]/20'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{isExpanded ? 'Close' : 'View Details'}</span>
                  <ChevronRight 
                    size={16} 
                    className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VendorCard;