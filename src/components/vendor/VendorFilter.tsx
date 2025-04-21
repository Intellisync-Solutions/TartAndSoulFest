import React from 'react';
import { motion } from 'framer-motion';
import { Filter, CakeSlice, Award, Clock, MapPin } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface VendorFilterProps {
  specialties: FilterOption[];
  locations: FilterOption[];
  selectedSpecialties: string[];
  selectedLocations: string[];
  onSpecialtyChange: (specialty: string) => void;
  onLocationChange: (location: string) => void;
  showAwardWinning: boolean;
  onAwardWinningChange: () => void;
}

const VendorFilter: React.FC<VendorFilterProps> = ({
  specialties,
  locations,
  selectedSpecialties,
  selectedLocations,
  onSpecialtyChange,
  onLocationChange,
  showAwardWinning,
  onAwardWinningChange
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-gradient-to-r from-[#1F1413] via-[#2E1F1F] to-[#1F1413] rounded-3xl p-6 mb-8 shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <Filter className="mr-2 text-[#00A89F]" size={20} />
          Filter Vendors
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm text-gray-400 hover:text-[#00A89F]"
          onClick={() => {
            // Reset all filters
            selectedSpecialties.forEach(s => onSpecialtyChange(s));
            selectedLocations.forEach(l => onLocationChange(l));
            if (showAwardWinning) onAwardWinningChange();
          }}
        >
          Reset Filters
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Specialties Filter */}
        <div>
          <h4 className="font-semibold text-[#00A89F] flex items-center mb-3">
            <CakeSlice size={16} className="mr-2" />
            Specialties
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <motion.button
                key={specialty.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSpecialtyChange(specialty.value)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedSpecialties.includes(specialty.value)
                    ? 'bg-[#00A89F] text-[#1F1413]'
                    : 'bg-[#3A2C2C] text-gray-300 hover:bg-[#00A89F]/20'
                }`}
              >
                {specialty.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Locations Filter */}
        <div>
          <h4 className="font-semibold text-[#00A89F] flex items-center mb-3">
            <MapPin size={16} className="mr-2" />
            Locations
          </h4>
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <motion.button
                key={location.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onLocationChange(location.value)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedLocations.includes(location.value)
                    ? 'bg-[#00A89F] text-[#1F1413]'
                    : 'bg-[#3A2C2C] text-gray-300 hover:bg-[#00A89F]/20'
                }`}
              >
                {location.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Award-Winning Filter */}
        <div>
          <h4 className="font-semibold text-[#00A89F] flex items-center mb-3">
            <Award size={16} className="mr-2" />
            Recognition
          </h4>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAwardWinningChange}
            className={`px-3 py-1 rounded-full text-sm ${
              showAwardWinning
                ? 'bg-[#FFA600] text-[#1F1413]'
                : 'bg-[#3A2C2C] text-gray-300 hover:bg-[#FFA600]/20'
            }`}
          >
            Award-Winning
          </motion.button>
        </div>

        {/* Established Filter */}
        <div>
          <h4 className="font-semibold text-[#00A89F] flex items-center mb-3">
            <Clock size={16} className="mr-2" />
            Established
          </h4>
          <div className="space-y-1">
            <div className="flex items-center">
              <input 
                type="range" 
                min="1950" 
                max="2023" 
                className="w-full accent-[#00A89F]" 
                // Add value and onChange handlers as needed
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>1950</span>
              <span>2023</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VendorFilter;