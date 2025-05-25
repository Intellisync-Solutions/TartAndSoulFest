import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SponsorCardProps {
  sponsor: {
    id: String;
    name: string;
    tier: string;
    logo: string;
    description: string;
    impact: string;
    website: string;
    testimonial?: string;
    yearsSponsor?: number;
    initiatives?: string[];
  };
  tierInfo: {
    name: string;
    icon: React.ElementType;
    color: string;
  };
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, tierInfo }) => {
  const TierIcon = tierInfo.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, boxShadow: '0 6px 36px 0 #00A89F33' }}
      className="relative flex flex-col h-full bg-gradient-to-br from-[#2E1F1F] to-[#3A2C2C] rounded-3xl shadow-xl border border-opacity-10 border-tart-mint p-6 transition-all duration-300"
      style={{ borderColor: tierInfo.color }}
    >
      {/* Tier badge */}
      <div className="absolute top-3 right-3 z-10">
        <span
          className="flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold shadow-md whitespace-nowrap"
          style={{ background: tierInfo.color, color: '#2E1F1F' }}
        >
          <TierIcon size={12} className="mr-1" />
          {tierInfo.name}
        </span>
      </div>
      
      {/* Card content */}
      <div className="flex flex-col h-full pt-8">
        {/* Logo and Name */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-24 h-24 rounded-xl bg-white/5 flex items-center justify-center p-3 mb-4">
            {sponsor.logo ? (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="object-contain h-full w-full"
                loading="lazy"
              />
            ) : (
              <span className="text-2xl font-bold text-tart-mint">
                {sponsor.name[0]}
              </span>
            )}
          </div>
          <h3 className="text-xl font-extrabold text-white text-center line-clamp-2 mb-2">
            {sponsor.name}
          </h3>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {sponsor.impact && (
            <span className="inline-block bg-tart-mint/10 text-tart-mint text-xs font-semibold px-3 py-1 rounded-full mb-3 text-center self-center">
              {sponsor.impact}
            </span>
          )}
          
          <p className="text-sm text-gray-300 mb-5 line-clamp-4 text-center flex-1">
            {sponsor.description}
          </p>
          
          {sponsor.website && (
            <div className="mt-auto pt-2">
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-2 text-sm rounded-full bg-tart-mint text-[#2E1F1F] font-semibold hover:bg-tart-mint/90 transition-colors"
              >
                Visit <ExternalLink size={14} className="ml-1.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorCard;


//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="bg-gradient-to-br from-[#2E1F1F] to-[#3A2C2C] rounded-xl overflow-hidden shadow-xl border border-opacity-10"
//       style={{ borderColor: tierInfo.color }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <motion.div 
//         className="relative h-48 overflow-hidden"
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.3 }}
//       >
//         <motion.div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${sponsor.logo})` }}
//           animate={{ scale: isHovered ? 1.1 : 1 }}
//           transition={{ duration: 0.5 }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#2E1F1F] to-transparent" />
        
//         <motion.div
//           className="absolute top-4 right-4 bg-[#2E1F1F] rounded-full p-2"
//           whileHover={{ scale: 1.1 }}
//           style={{ backgroundColor: tierInfo.color }}
//         >
//           <TierIcon size={24} className="text-[#2E1F1F]" />
//         </motion.div>
//       </motion.div>

//       <div className="p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-2xl font-bold text-white">{sponsor.name}</h3>
//           <span 
//             className="text-sm font-semibold px-3 py-1 rounded-full"
//             style={{ color: tierInfo.color, backgroundColor: `${tierInfo.color}20` }}
//           >
//             {tierInfo.name}
//           </span>
//         </div>

//         <p className="text-gray-300 mb-4">{sponsor.description}</p>

//         <motion.div
//           className="space-y-4"
//           animate={{ height: isExpanded ? 'auto' : '0' }}
//         >
//           <AnimatePresence>
//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="space-y-4"
//               >
//                 <div className="bg-[#3A2C2C] p-4 rounded-lg">
//                   <h4 className="text-tart-mint font-semibold mb-2">Community Impact</h4>
//                   <p className="text-gray-300 text-sm">{sponsor.impact}</p>
//                 </div>

//                 {sponsor.testimonial && (
//                   <div className="bg-[#3A2C2C] p-4 rounded-lg flex flex-col items-center">
//                     <img
//                       src={sponsor.logo}
//                       alt={sponsor.name + ' Logo'}
//                       className="mb-4 h-16 w-auto object-contain rounded-xl drop-shadow"
//                       style={{ maxHeight: '64px' }}
//                     />
//                     <h4 className="text-tart-mint font-semibold mb-2">Why We Support</h4>
//                     <p className="text-gray-300 text-sm italic">"{sponsor.testimonial}"</p>
//                   </div>
//                 )}

//                 {sponsor.initiatives && (
//                   <div className="flex flex-wrap gap-2">
//                     {sponsor.initiatives.map((initiative, index) => (
//                       <span
//                         key={index}
//                         className="text-xs px-3 py-1 rounded-full bg-[#3A2C2C] text-gray-300"
//                       >
//                         {initiative}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         <div className="flex items-center justify-between mt-6">
//           <motion.button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="flex items-center gap-2 text-gray-300 hover:text-tart-mint transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
//             <motion.div
//               animate={{ rotate: isExpanded ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <ChevronDown size={16} />
//             </motion.div>
//           </motion.button>

//           <motion.a
//             href={sponsor.website}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-tart-mint hover:text-white transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span>Visit</span>
//             <ExternalLink size={16} />
//           </motion.a>
//         </div>

//         {sponsor.yearsSponsor && (
//           <div className="mt-4 flex items-center gap-2 text-gray-300 text-sm">
//             <Heart size={14} className="text-tart-mint" />
//             <span>Supporting us for {sponsor.yearsSponsor} years</span>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default SponsorCard;