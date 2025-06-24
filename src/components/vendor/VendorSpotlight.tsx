import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CakeSlice, Award, MapPin, Calendar, ArrowRight, Star, Heart, ExternalLink, Phone } from 'lucide-react';
import GradientText from '../ui/GradientText';

interface TartImage {
  src: string;
  alt: string;
}

interface TartVariety {
  name: string;
  description: string;
  price: string;
  image?: string;
  isSignature?: boolean;
  ingredients?: string[];
}

interface VendorSpotlightProps {
  vendor: {
    id: string;
    name: string;
    image: string;
    logo?: string;
    description: string;
    location: string;
    established: string;
    hours?: string;
    specialties: string[];
    tarts?: Array<{
      name: string;
      description: string;
      price: string;
      isSignature?: boolean;
      image?: string;
      ingredients?: string[];
    }>;
    story?: string;
    awards?: string[];
    website?: string;
    phone?: string;
    email?: string;
    featuredImages?: TartImage[];
  };
  isActive: boolean;
}

const VendorSpotlight: React.FC<VendorSpotlightProps> = ({ vendor, isActive }) => {
  const [selectedTart, setSelectedTart] = useState<TartVariety | null>(null);
  const [likedTarts, setLikedTarts] = useState<Set<string>>(new Set());

  const toggleLike = (tartName: string) => {
    const newLiked = new Set(likedTarts);
    if (newLiked.has(tartName)) {
      newLiked.delete(tartName);
    } else {
      newLiked.add(tartName);
    }
    setLikedTarts(newLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-br from-[#261817] to-[#3A2C2C] p-6 md:p-8 rounded-3xl shadow-2xl shadow-[#00A89F]/10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
          <div className="flex items-center gap-4">
            {vendor.logo && (
              <div className="h-16 w-16 rounded-full border-2 border-[#00A89F] p-1 shadow-lg shadow-[#00A89F]/20">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img src={vendor.logo} alt={`${vendor.name} logo`} className="object-cover" />
                </div>
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold">
                <GradientText variant="secondary">{vendor.name}</GradientText>
              </h2>
              <div className="flex items-center mt-1 text-gray-300">
                <MapPin size={16} className="mr-1 text-[#00A89F]" />
                <span>{vendor.location}</span>
                <span className="mx-2">•</span>
                <Calendar size={16} className="mr-1 text-[#00A89F]" />
                <span>Est. {vendor.established}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {vendor.specialties.map((specialty, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gradient-to-r from-[#00A89F]/20 to-[#00A89F]/10 rounded-full text-[#00A89F] text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Vendor Story */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-[#503432] p-6 rounded-2xl shadow-inner mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Star className="mr-2 text-[#FFA600]" />
                Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">{vendor.story}</p>
              
              {vendor.hours && (
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <h4 className="font-semibold mb-2 text-[#00A89F]">Hours</h4>
                  <p className="text-gray-300">{vendor.hours}</p>
                </div>
              )}
              
              <div className="border-t border-gray-700 pt-4 mt-4">
                <h4 className="font-semibold mb-2 text-[#00A89F]">Contact</h4>
                <div className="space-y-2">
                  {vendor.phone && (
                    <a href={`tel:${vendor.phone}`} className="flex items-center text-gray-300 hover:text-[#00A89F] transition-colors">
                      <Phone size={16} className="mr-2" />
                      {vendor.phone}
                    </a>
                  )}
                  <a href={vendor.website} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-[#00A89F] transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            
            {vendor.awards && vendor.awards.length > 0 && (
              <div className="bg-gradient-to-br from-[#2E1F1F] to-[#514040] p-0.5 rounded-2xl shadow-lg">
                <div className="bg-[#1F1413] p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Award className="mr-2 text-[#FFA600]" />
                    Awards & Recognition
                  </h3>
                  <ul className="space-y-3">
                    {vendor.awards.map((award, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="bg-[#FFA600]/20 p-1 rounded-full mr-3 mt-0.5">
                          <Award size={14} className="text-[#FFA600]" />
                        </div>
                        {award}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Middle & Right Column - Tarts & Visuals */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <CakeSlice size={20} className="mr-2 text-[#00A89F]" />
              {vendor.tarts?.length ? 'Signature Tarts' : 'No Tarts Available'}
            </h3>
            {vendor.tarts && vendor.tarts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {vendor.tarts.map((tart) => (
                  <motion.div
                    key={tart.name}
                    className="bg-gradient-to-br from-[#2E1F1F] to-[#3A2C2C] p-0.5 rounded-xl overflow-hidden group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="bg-[#4d3331] p-4 rounded-xl h-full flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white flex items-center">
                          {tart.name}
                          {tart.isSignature && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#FFA600]/20 text-[#FFA600]">
                              <Star size={10} className="mr-1" />
                              Signature
                            </span>
                          )}
                        </h4>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleLike(tart.name)}
                          className="text-gray-400 hover:text-[#00A89F] transition-colors"
                        >
                          <Heart 
                            size={18} 
                            className={likedTarts.has(tart.name) ? "fill-[#00A89F] text-[#00A89F]" : ""} 
                          />
                        </motion.button>
                      </div>
                      <p className="text-gray-400 text-sm flex-grow">{tart.description}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="font-bold text-[#00A89F]">{tart.price}</span>
                        <div className="inline-block bg-[#FFA600]/20 text-[#FFA600] px-3 py-1 rounded-full text-sm font-medium mr-2">
                          Coming Soon
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedTart(tart)}
                          className="text-xs bg-[#514040] hover:bg-[#00A89F] text-[#00A89F] hover:text-[#1F1413] px-3 py-1 rounded-full transition-colors flex items-center"
                        >
                          Details
                          <ArrowRight size={12} className="ml-1" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Featured Images or Carousel could go here */}
            {vendor.featuredImages && vendor.featuredImages.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {vendor.featuredImages.slice(0, 4).map((image, idx) => (
                    <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-8 text-center">
          <motion.a
            href={vendor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#00A89F] to-[#008E87] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-[#00A89F]/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit {vendor.name}
            <ExternalLink size={16} className="ml-2" />
          </motion.a>
        </div>
      </div>
      
      {/* Tart Details Modal */}
      <AnimatePresence>
        {selectedTart && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTart(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-[#2E1F1F] to-[#3A2C2C] p-0.5 rounded-2xl overflow-hidden max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#1F1413] rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedTart.name}
                    {selectedTart.isSignature && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#FFA600]/20 text-[#FFA600]">
                        <Star size={10} className="mr-1" />
                        Signature
                      </span>
                    )}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedTart(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </motion.button>
                </div>
                
                {selectedTart.image && (
                  <div className="h-48 rounded-lg overflow-hidden mb-4">
                    <img src={selectedTart.image} alt={selectedTart.name} className="w-full h-full object-cover" />
                  </div>
                )}
                
                <p className="text-gray-300 mb-4">{selectedTart.description}</p>
                
                {selectedTart.ingredients && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#00A89F] mb-2">Ingredients</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedTart.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00A89F] mr-2"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-6">
                  <span className="text-2xl font-bold text-[#00A89F]">{selectedTart.price}</span>
                  <div className="inline-block bg-[#FFA600]/20 text-[#FFA600] px-3 py-1 rounded-full text-sm font-medium mr-2">
                    Coming Soon
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#00A89F] text-white px-4 py-2 rounded-lg font-medium"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VendorSpotlight;