import React, { useState, useEffect } from 'react';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, Sparkles, Coffee, Gift, BadgeCheck,  Medal, Users, Globe, 
} from 'lucide-react';

import PageHero from '../components/ui/PageHero';
import ImpactStats from '../components/sponsors/ImpactStats';
// import SponsorTiers from '../components/sponsors/SponsorTiers';// for Future Development
import SponsorList from '../components/sponsors/SponsorList';
import SponsorTestimonials from '../components/sponsors/SponsorTestimonials';
import FAQ from '../components/common/FAQ';
import { FAQ_DATA } from '../data/FAQData';
import { HIGHLIGHTS, SPONSOR_TIERS, SPONSORS, IMPACT_STATISTICS } from "../data/SponsorsData";
import { SPONSOR_TESTIMONIALS } from "../data/SponsorTestimonials";

import SponsorCard from '../components/sections/SponsorCard';
import TestimonialCard from '../components/sections/TestimonialCard';

import GradientText from '../components/ui/GradientText';
import Newsletter from '../components/sections/Newsletter';



interface SponsorshipLevelProps {
  title: string;
  icon: React.ElementType;
  color: string;
  price: string;
  benefits: string[];
  isPopular?: boolean;
}

const SponsorshipLevel: React.FC<SponsorshipLevelProps> = ({ 
  title, icon: Icon, color, price, benefits, isPopular = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {isPopular && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <span className="bg-[#FFA600] text-[#2E1F1F] px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className={`bg-[#3A2C2C] rounded-xl overflow-hidden border border-opacity-20`} style={{ borderColor: color }}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${color}20` }}>
                <Icon size={24} style={{ color }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color }}>{title}</h3>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-white">{price}</span>
              <span className="text-gray-400 text-sm block">per year</span>
            </div>
          </div>
          
          <ul className="space-y-3 mb-6">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <BadgeCheck size={18} className="text-tart-mint mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-full font-bold flex items-center justify-center"
            style={{ backgroundColor: color, color: '#2E1F1F' }}
          >
            Become a Sponsor
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCarousel: React.FC<{ testimonials: typeof SPONSOR_TESTIMONIALS }> = ({ testimonials }) => {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div className="relative overflow-hidden bg-[#2E1F1F] rounded-xl py-10 px-8">
      <div className="absolute top-0 left-0 w-32 h-32 bg-tart-mint/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FFA600]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold mb-2">
            <GradientText variant="secondary">What Our Sponsors Say</GradientText>
          </h3>
          <p className="text-gray-400">Hear directly from our partners about their experience</p>
        </div>
        
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, idx) => (
              active === idx ? (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <TestimonialCard {...testimonial} author={testimonial.name} image={testimonial.logo} />
                  <div className="mt-4 text-center">
                    <span 
                      className="inline-block text-xs px-3 py-1 rounded-full" 
                      style={{ 
                        backgroundColor: `${SPONSOR_TIERS[testimonial.tier as keyof typeof SPONSOR_TIERS].color}20`,
                        color: SPONSOR_TIERS[testimonial.tier as keyof typeof SPONSOR_TIERS].color
                      }}
                    >
                      {SPONSOR_TIERS[testimonial.tier as keyof typeof SPONSOR_TIERS].name} Sponsor
                    </span>
                  </div>
                </motion.div>
              ) : null
            ))}
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                active === idx ? 'bg-tart-mint' : 'bg-gray-600'
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SponsorsPage = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'become'>('current');

  return (
    <motion.div className="pt-20">
      <PageHero
  variant="sponsors"
  title="Our Amazing Partners"
  subtitle="Meet the incredible organizations helping us build a stronger, more vibrant community"
  highlights={HIGHLIGHTS}
  image="/images/sponsors-hero.jpg" // Update as needed for your sponsor hero image
/>

      {/*
        // for future development
        <SponsorTiers tiers={SPONSOR_TIERS} />
      */}

      <ImpactStats stats={IMPACT_STATISTICS} />

      <SponsorList sponsors={SPONSORS} />

      <SponsorTestimonials testimonials={SPONSOR_TESTIMONIALS} />


      {/* Sponsors By Industry */}
      {/* <section className="py-20 bg-[#3A2C2C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tart-mint rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFA600] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end flex-wrap mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-3">
                <GradientText variant="primary">Our Diverse Partners</GradientText>
              </h2>
              <p className="text-gray-300">Organizations from every sector supporting our mission</p>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 bg-tart-mint text-[#2E1F1F] px-6 py-2 rounded-full font-medium inline-flex items-center"
            >
              <span>View All Partners</span>
              <ArrowRight size={16} className="ml-2" />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SPONSOR_SECTORS.map((sector, index) => (
              <SectorCard 
                key={sector.name}
                icon={sector.icon}
                name={sector.name}
                count={sector.count}
                color={sector.color}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Sponsor Cards section with tabs */}
      <section className="py-20 bg-[#2E1F1F] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full p-1 bg-[#3A2C2C]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('current')}
                className={`px-6 py-2 rounded-full font-medium ${
                  activeTab === 'current' 
                    ? 'bg-tart-mint text-[#2E1F1F]' 
                    : 'text-white'
                }`}
              >
                Current Sponsors
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('become')}
                className={`px-6 py-2 rounded-full font-medium ${
                  activeTab === 'become' 
                    ? 'bg-tart-mint text-[#2E1F1F]' 
                    : 'text-white'
                }`}
              >
                Become a Sponsor
              </motion.button>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            {activeTab === 'current' ? (
              <motion.div
                key="current-sponsors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {SPONSORS.map((sponsor) => (
                    <SponsorCard
                      key={sponsor.id}
                      sponsor={sponsor}
                      tierInfo={SPONSOR_TIERS[sponsor.tier as keyof typeof SPONSOR_TIERS]}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="become-sponsor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <SponsorshipLevel
                    title="Sweet Soul Pioneer"
                    icon={Crown}
                    color="#FFD700"
                    price="$3,500"
                    benefits={SPONSOR_TIERS.PLATINUM.benefits}
                    isPopular={true}
                  />
                  <SponsorshipLevel
                    title="Golden Butter"
                    icon={Sparkles}
                    color="#FFA600"
                    price="$2,500"
                    benefits={SPONSOR_TIERS.GOLD.benefits}
                  />
                  <SponsorshipLevel
                    title="Sugar Sprinkle"
                    icon={Gift}
                    color="#C0C0C0"
                    price="$1,000"
                    benefits={SPONSOR_TIERS.SILVER.benefits}
                  />
                  <SponsorshipLevel
                    title="Crust Companion"
                    icon={Coffee}
                    color="#CD7F32"
                    price="$500"
                    benefits={SPONSOR_TIERS.BRONZE.benefits}
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 text-center"
                >
                  <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                    Looking for a custom sponsorship package tailored to your organization's goals? 
                    Contact our sponsorship team to discuss your specific needs.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#2E1F1F] px-8 py-3 rounded-full font-bold"
                  >
                    Contact Sponsorship Team
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Testimonials & CTA Section */}
      <section className="py-20 bg-[#3A2C2C] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-tart-mint">
            What our sponsors say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <TestimonialCarousel testimonials={SPONSOR_TESTIMONIALS} />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2E1F1F] rounded-xl overflow-hidden p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                <GradientText variant="secondary">Ready to Make an Impact?</GradientText>
              </h3>
              <p className="text-gray-300 mb-6">
                Join our community of sponsors and help us continue to celebrate culture, 
                food, and music while making a meaningful difference in Chatham-Kent.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Medal className="text-[#FFA600] mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Enhance Your Brand</h4>
                    <p className="text-gray-400 text-sm">Connect with our engaged community and boost your visibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-[#FFA600] mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Support Local Culture</h4>
                    <p className="text-gray-400 text-sm">Help preserve and celebrate our rich cultural heritage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="text-[#FFA600] mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Drive Community Growth</h4>
                    <p className="text-gray-400 text-sm">Be part of creating a thriving, connected community</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-tart-mint text-[#2E1F1F] px-6 py-3 rounded-full font-medium flex-1 text-center"
                >
                  Download Sponsor Kit
                </motion.button> */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-tart-mint text-tart-mint px-6 py-3 rounded-full font-medium flex-1 text-center hover:bg-tart-mint hover:text-[#2E1F1F] transition-colors"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-[#2E1F1F] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tart-mint/20 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <GradientText variant="primary">Frequently Asked Questions</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about sponsoring the Tart & Soul Festival
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ faq={FAQ_DATA} />
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
      <ScrollToTopButton />
    </motion.div>
  );
};

export default SponsorsPage;