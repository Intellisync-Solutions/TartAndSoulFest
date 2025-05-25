import React from "react";
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

interface Tier {
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
  benefits: string[];
}

interface SponsorTiersProps {
  tiers: Record<string, Tier>;
}

const tierGradients: Record<string, string> = {
  SweetSoulPioneer: 'from-[#8EF4B6] to-[#e0fffa]',
  GoldenButter: 'from-[#FFD700] to-[#FFF7AE]',
  SugarSprinkle: 'from-[#C0C0C0] to-[#F0F0F0]',
  CrustCompanion: 'from-[#CD7F32] to-[#FFD6AE]',
};

const AnimatedBg = () => (
  <motion.div
    aria-hidden
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.18 }}
    className="pointer-events-none absolute inset-0 z-0 flex justify-center items-center"
  >
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      className="w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-gradient-to-br from-tart-mint/40 via-[#ffd70033] to-[#8EF4B6]/40 rounded-full blur-3xl"
    />
  </motion.div>
);

const SponsorTiers: React.FC<SponsorTiersProps> = ({ tiers }) => (
  <section className="relative py-20 bg-soul-brown text-white overflow-hidden">
    <AnimatedBg />
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center drop-shadow-lg tracking-tight">
        Sponsorship Levels
      </h2>
      <TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 max-w-[2000px] mx-auto">
          {Object.entries(tiers).map(([key, tier]) => {
            const Icon = tier.icon;
            const gradient = tierGradients[key] || 'from-tart-mint to-white';
            const isFeatured = key === 'PLATINUM';
            return (
              <motion.div
                key={key}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.07,
                  rotateX: 4,
                  rotateY: 4,
                  boxShadow: `0 16px 48px 0 ${tier.color}99`
                }}
                transition={{ duration: 0.5, type: 'spring' }}
                className={`relative cursor-pointer rounded-3xl flex flex-col items-center group ${isFeatured ? 'scale-105 z-20 shadow-[0_0_80px_10px_rgba(142,244,182,0.3)] animate-pulse-slow' : ''} w-full h-full min-h-[320px]`}
                style={{
                  perspective: 1200,
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': gradient.split(' ')[0],
                  '--tw-gradient-to': gradient.split(' ')[1]
                } as React.CSSProperties}
                tabIndex={0}
                aria-label={`${tier.name} sponsor tier`}
              >
                {/* Tier Badge */}
                <span className={`absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-soul-brown shadow-lg border border-white/30 z-30 flex items-center gap-2 animate-gradient-x ${isFeatured ? 'text-tart-mint bg-gradient-to-r from-tart-mint/80 to-[#e0fffa]/90 shadow-tart-mint/30' : ''}`}
                  style={{ letterSpacing: '0.12em', filter: isFeatured ? 'drop-shadow(0 0 8px #8EF4B6)' : undefined }}
                >
                  {isFeatured && <span className="mr-1">🌟</span>}
                  {tier.name}
                  {isFeatured && <span className="ml-1">🌟</span>}
                </span>
                <Card className="w-full h-full bg-white/10 backdrop-blur-lg border-2 border-white/10 shadow-2xl rounded-3xl pt-16 pb-6 px-4 sm:px-6 flex flex-col items-center relative overflow-visible">
                  {/* Animated Icon with Gradient Glow */}
                  <div className={`relative mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                      className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40"
                      style={{ background: `radial-gradient(circle at 60% 40%, ${tier.color}33 40%, transparent 80%)` }}
                    />
                    <Icon size={44} className="text-white drop-shadow-lg z-10" />
                  </div>
                  <CardHeader className="w-full flex flex-col items-center justify-center px-0 pt-0 pb-2">
                    <CardTitle className={`text-lg md:text-xl font-extrabold text-center ${isFeatured ? 'text-tart-mint drop-shadow-tart-mint' : ''}`} style={{ color: isFeatured ? tier.color : undefined }}>{tier.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="w-full flex-1 flex flex-col items-center justify-center pt-0">
                    <p className="text-gray-100 mb-4 text-center min-h-[48px] text-sm sm:text-base font-medium px-1">
                      {tier.description}
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-200 list-disc list-inside mb-4 space-y-1 w-full max-w-[90%] mx-auto">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="relative group w-fit mx-auto">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span tabIndex={0} className="underline underline-offset-2 decoration-dotted cursor-help focus:outline-tart-mint">{benefit}</span>
                            </TooltipTrigger>
                            <TooltipContent className="bg-black/90 text-white text-xs rounded shadow-lg px-3 py-2">
                              {benefit}
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                {/* Confetti/Spotlight for featured tier */}
                {isFeatured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-10 pointer-events-none z-40"
                  >
                    <svg width="100%" height="100%" viewBox="0 0 128 32" fill="none">
                      <defs>
                        <radialGradient id="spot" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor="#8EF4B6" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#8EF4B6" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <ellipse cx="64" cy="16" rx="60" ry="12" fill="url(#spot)" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </TooltipProvider>
    </div>
  </section>
);

export default SponsorTiers;
