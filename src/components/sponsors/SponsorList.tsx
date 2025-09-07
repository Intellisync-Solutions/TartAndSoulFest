

interface Sponsor {
  id: string;
  name: string;
  tier: string;
  logo: string;
  description: string;
  impact: string;
  website: string;
  testimonial: string;
  yearsSponsor: number;
  initiatives: string[];
  industry: string;
  contactPerson: string;
  location: string;
}

interface SponsorListProps {
  sponsors: Sponsor[];
}

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SponsorCard from "../sections/SponsorCard";
import { SPONSOR_TIERS } from "../../data/SponsorsData";

const SPONSORS_PER_PAGE = 4;
const AUTO_SCROLL_INTERVAL = 4000;

const SponsorList: React.FC<SponsorListProps> = ({ sponsors }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(sponsors.length / SPONSORS_PER_PAGE);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalPages]);

  // Pagination logic
  const startIdx = page * SPONSORS_PER_PAGE;
  const currentSponsors = sponsors.slice(startIdx, startIdx + SPONSORS_PER_PAGE);

  // Handle edge case: less than 4 sponsors
  const sponsorsToDisplay =
    currentSponsors.length === SPONSORS_PER_PAGE
      ? currentSponsors
      : [...currentSponsors, ...sponsors.slice(0, SPONSORS_PER_PAGE - currentSponsors.length)];

  return (
    <section className="py-12 bg-[#2E1F1F] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-tart-mint">Proudly Sponsored By</span>
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {sponsorsToDisplay.map((sponsor) => {
                  // Get the tier info from SPONSOR_TIERS or use a default if not found
                  const tierKey = Object.entries(SPONSOR_TIERS).find(([_,tier]) => 
                    tier.name.toLowerCase() === sponsor.tier.toLowerCase()
                  )?.[0] || sponsor.tier;
                  
                  const tierInfo = SPONSOR_TIERS[tierKey as keyof typeof SPONSOR_TIERS] || {
                    name: sponsor.tier,
                    icon: () => null,
                    color: '#D4A76A',
                    description: '',
                    benefits: []
                  };
                  
                  return (
                    <div key={sponsor.id} className="w-full h-full">
                      <SponsorCard 
                        sponsor={sponsor} 
                        tierInfo={{
                          name: tierInfo.name,
                          icon: tierInfo.icon,
                          color: tierInfo.color
                        }} 
                      />
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  page === idx ? "bg-tart-mint" : "bg-gray-600"
                }`}
                aria-label={`Go to sponsor page ${idx + 1}`}
                onClick={() => setPage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorList;






