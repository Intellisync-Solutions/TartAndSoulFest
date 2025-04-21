import { useState, useEffect } from 'react';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Music, Star, Heart, Calendar, MapPin, Clock, ChevronDown, Utensils, Users, ArrowRight, CakeSlice } from 'lucide-react';

// Components
import PageHero from '../components/ui/PageHero';
import About from '../components/sections/About';
import Events from '../components/sections/Events';
import FeaturedTarts from '../components/sections/FeaturedTarts';
import Impact from '../components/sections/Impact';
import LogoCarousel from '../components/sections/LogoCarousel';
import GradientText from '../components/ui/GradientText';

// Commented out until images are available
// import tartAndSoulImage from '../assets/images/tart-and-soul.jpeg';
// import festivalImage1 from '../assets/images/festival-1.jpeg';
// import festivalImage2 from '../assets/images/festival-2.jpeg';
// import festivalImage3 from '../assets/images/festival-3.jpeg';

const HIGHLIGHTS = [
  {
    icon: Music,
    text: "Live Soul Music"
  },
  {
    icon: Star,
    text: "Award-Winning Tarts"
  },
  {
    icon: Heart,
    text: "Community Spirit"
  }
];

import intellisyncLogo from "../assets/images/logo.png";

const SPONSORS = [
  {
    id: 1,
    name: "Sons of Kent",
    logo: "placeholder-logo", // Placeholder until image is available
  },
  {
    id: 2,
    name: "Intellisync Solutions",
    logo: intellisyncLogo,
  },
  {
    id: 3,
    name: "LPGraphic Design&Print",
    logo: "placeholder-logo", // Placeholder until image is available
  },
  {
    id: 4,
    name: "WTR - With This Ring",
    logo: "placeholder-logo", // Placeholder until image is available
  },
{
    id: 5,
    name: "Doug the Foodie",
    logo: "placeholder-logo", // Placeholder until image is available
  }
];

// Festival highlights data
const FESTIVAL_HIGHLIGHTS = [
  {
    title: "Soul Food Experience",
    description: "Discover the rich flavors of authentic soul food, from classic comfort dishes to innovative culinary creations that blend Canadian and Southern traditions.",
    icon: Utensils,
    stats: [
      { value: "25+", label: "Food Vendors" },
      { value: "50+", label: "Unique Dishes" }
    ]
  },
  {
    title: "Live Music & Entertainment",
    description: "Feel the rhythm with performances by talented soul artists Journeymen of Soul. This outdoor stage hosts both established names and emerging local talent.",
    icon: Music,
    stats: [
      { value: "1", label: "Live Stage" },
      { value: "20+", label: "Performances" }
    ]
  },
  {
    title: "Butter Tart Competition",
    description: "Watch as amateur and professional bakers go head-to-head in our signature butter tart competition, blending traditional recipes with soul food influences.",
    icon: CakeSlice,
    stats: [
      { value: "100+", label: "Entries" },
      { value: "5", label: "Categories" }
    ]
  },
  {
    title: "Community Celebration",
    description: "Experience the warmth of our community as we come together to celebrate cultural heritage, support local tartisans, and create lasting connections with our community.",
    icon: Users,
    stats: [
      { value: "5,000+", label: "Attendees" },
      { value: "15+", label: "Community Partners" }
    ]
  }
];

// Testimonials data
const TESTIMONIALS = [
  {
    quote: "Tart & Soul brought together everything I love about our community - incredible food, soulful music, and wonderful people. I can't wait for next year!",
    author: "Melissa J.",
    role: "Festival Attendee",
    year: "2023"
  },
  {
    quote: "As a butter tart baker, this festival has given me a platform to share my heritage through food. The community support has been overwhelming.",
    author: "David T.",
    role: "Local Baker",
    year: "2023"
  },
  {
    quote: "The fusion of soul food and Canadian butter tarts is pure genius. This event has put our town on the culinary map!",
    author: "Sarah M.",
    role: "Food Blogger",
    year: "2023"
  }
];

// Next event data
const NEXT_EVENT = {
  name: "Tart & Soul Festival",
  date: "2025-06-28T08:00:00",
  location: "Sons of Kent",
  description: "Join us for our signature event celebrating soul food, butter tarts, and live music."
};

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.97]); // Used for hero scale on scroll
  
  // For next event countdown
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [highlightExpanded, setHighlightExpanded] = useState<number | null>(null);
  
  // Calculate time remaining until next event
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const eventDate = new Date(NEXT_EVENT.date);
      const diff = eventDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        // Event has passed
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <motion.div style={{ opacity, scale }}>
        <PageHero
          variant="home"
          title="Where Culture Meets Sweet Soul"
          subtitle="Join us in celebrating Black culture, soul music, and the sweetest butter tarts in town."
          highlights={HIGHLIGHTS}
          image="/images/TartSoulFest3.png"
        />
      </motion.div>
      
      {/* Next Event Countdown */}
      <section className="py-12 bg-[#3A2C2C] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#2E1F1F] to-[#3A2C2C] rounded-xl overflow-hidden shadow-2xl border border-tart-mint/20"
          >
            <div className="p-8 md:p-10 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-tart-mint/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFA600]/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <div className="inline-block bg-[#FFA600]/20 text-[#FFA600] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Coming Soon
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <GradientText variant="secondary">{NEXT_EVENT.name}</GradientText>
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {NEXT_EVENT.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar size={18} className="text-tart-mint mr-2" />
                      <span>
                        {new Date(NEXT_EVENT.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock size={18} className="text-tart-mint mr-2" />
                      <span>
                        {new Date(NEXT_EVENT.date).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin size={18} className="text-tart-mint mr-2" />
                      <span>{NEXT_EVENT.location}</span>
                    </div>
                  </div>
                  
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-tart-mint text-[#2E1F1F] px-6 py-3 rounded-full font-bold inline-flex items-center space-x-2"
                  >
                    <span>Reserve Your Spot</span>
                    <ArrowRight size={18} />
                  </motion.button> */}
                </div>
                
                <div className="flex justify-center">
                  <div className="grid grid-cols-4 gap-4">
                    <CountdownUnit value={timeRemaining.days} label="Days" />
                    <CountdownUnit value={timeRemaining.hours} label="Hours" />
                    <CountdownUnit value={timeRemaining.minutes} label="Minutes" />
                    <CountdownUnit value={timeRemaining.seconds} label="Seconds" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Logo Carousel with enhanced styling */}
      <section className="py-12 bg-[#2E1F1F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tart-mint/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">
              <GradientText variant="accent">Tart & Soul Fest Event Sponsors</GradientText>
            </h2>
          </motion.div>
        </div>
        <LogoCarousel sponsors={SPONSORS} />
      </section>
      
      {/* Festival Highlights Section */}
      <section className="py-20 bg-[#2E1F1F] relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tart-mint/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FFA600]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <GradientText variant="primary">Festival Highlights</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the magic of Tart & Soul, where every moment is filled with flavor, rhythm, and community connection.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {FESTIVAL_HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#3A2C2C] rounded-xl overflow-hidden"
              >
                <div className="p-1 bg-gradient-to-r from-[#00A89F] via-[#FFA600] to-[#00A89F]">
                  <div className="bg-[#3A2C2C] p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-[#2E1F1F] p-3 rounded-lg mr-4">
                        <highlight.icon size={24} className="text-tart-mint" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">
                          <GradientText variant="secondary" className="!pb-0">{highlight.title}</GradientText>
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">{highlight.description}</p>
                        
                        <div className="flex items-center space-x-4">
                          {highlight.stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col">
                              <span className="text-2xl font-bold text-tart-mint">{stat.value}</span>
                              <span className="text-xs text-gray-400">{stat.label}</span>
                            </div>
                          ))}
                          
                          <motion.button
                            onClick={() => setHighlightExpanded(highlightExpanded === index ? null : index)}
                            className="ml-auto text-sm text-tart-mint flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {highlightExpanded === index ? "Show Less" : "Learn More"}
                            <ChevronDown 
                              className={`ml-1 transition-transform ${highlightExpanded === index ? "rotate-180" : ""}`} 
                              size={16} 
                            />
                          </motion.button>
                        </div>
                        
                        <AnimatePresence>
                          {highlightExpanded === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-4 pt-4 border-t border-gray-700"
                            >
                              <p className="text-gray-300 text-sm">
                                Join us for this incredible experience at the Tart & Soul Festival. 
                                Our {highlight.title.toLowerCase()} is one of the highlights that makes
                                our festival unique and memorable for all attendees.
                              </p>
                              <div className="mt-4 flex justify-end">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="bg-[#2E1F1F] text-tart-mint px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center"
                                >
                                  View Details
                                  <ArrowRight size={16} className="ml-2" />
                                </motion.button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-[#3A2C2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tart-mint rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFA600] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <GradientText variant="accent">What People Are Saying</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from attendees, vendors, and community members about their Tart & Soul experience.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-0 left-0 text-[#00A89F] opacity-20 transform -translate-x-1/4 -translate-y-1/4">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
            
            <div className="bg-[#2E1F1F] rounded-xl p-8 md:p-10">
              <div className="relative h-48">
                <AnimatePresence mode="wait">
                  {TESTIMONIALS.map((testimonial, index) => (
                    activeTestimonial === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute inset-0"
                      >
                        <p className="text-xl italic text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-bold text-white">{testimonial.author}</p>
                          <p className="text-tart-mint">{testimonial.role}, {testimonial.year}</p>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
              
              <div className="flex justify-center mt-8">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                      activeTestimonial === index ? 'bg-tart-mint' : 'bg-gray-600'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 text-[#FFA600] opacity-20 transform translate-x-1/4 translate-y-1/4 rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Award Section */}
      {/* <section className="py-16 bg-[#2E1F1F] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[#3A2C2C] to-[#2E1F1F] rounded-xl overflow-hidden border border-[#FFA600]/20 shadow-lg"
          >
            <div className="p-8 md:p-10 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFA600]/10 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#FFA600] to-[#00A89F] p-1 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-[#2E1F1F] flex items-center justify-center">
                      <Award className="w-16 h-16 text-[#FFA600]" />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/4 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">
                    <GradientText variant="secondary">Award-Winning Festival</GradientText>
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Tart & Soul is proud to be recognized as the <span className="text-[#FFA600] font-semibold">Best Cultural Festival</span> by the Ontario Tourism Awards. Our unique blend of culinary excellence, musical talent, and community spirit creates an unforgettable experience for all attendees.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="bg-[#2E1F1F] px-4 py-2 rounded-lg">
                      <span className="text-[#FFA600] font-bold">2023</span>
                      <span className="text-gray-300 ml-2">Best Cultural Festival</span>
                    </div>
                    <div className="bg-[#2E1F1F] px-4 py-2 rounded-lg">
                      <span className="text-[#FFA600] font-bold">2023</span>
                      <span className="text-gray-300 ml-2">Community Impact Award</span>
                    </div>
                    <div className="bg-[#2E1F1F] px-4 py-2 rounded-lg">
                      <span className="text-[#FFA600] font-bold">2022</span>
                      <span className="text-gray-300 ml-2">Culinary Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      
      {/* Main content sections */}
      <div className="relative">
        <About />
        <FeaturedTarts />
        
        {/* Section Divider */}
        <div className="py-16 bg-[#2E1F1F] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-tart-mint/30 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#2E1F1F] px-6 py-3 rounded-full border border-tart-mint/20 shadow-lg shadow-tart-mint/5">
              <CakeSlice className="text-tart-mint w-8 h-8" />
            </div>
          </div>
        </div>
        
        <Events />
        <Impact />
        
        {/* Newsletter Signup */}
                
        <section className="py-20 bg-[#2E1F1F] relative overflow-hidden">
           
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#3A2C2C] to-[#2E1F1F] rounded-xl overflow-hidden p-1"
            >
              <div className="bg-[#2E1F1F] rounded-xl p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-tart-mint/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFA600]/5 rounded-full blur-2xl"></div>
                
                <div className="text-center max-w-2xl mx-auto relative z-10">
                  <h2 className="text-3xl font-bold mb-4">
                     {/* <div className="inline-block bg-[#FFA600]/20 text-[#FFA600] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Coming Soon 
                  </div> */}
                    <GradientText variant="primary">Newsletter Coming Soon</GradientText>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Sign up for our newsletter to receive updates on upcoming events, special announcements, and exclusive festival content.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-3 rounded-full bg-[#3A2C2C] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-tart-mint"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-tart-mint text-[#2E1F1F] px-8 py-3 rounded-full font-bold"
                    >
                     Coming Soon
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <ScrollToTopButton />
    </>
  );
};

// Countdown unit component
const CountdownUnit = ({ value, label }: { value: number; label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#2E1F1F] rounded-lg flex items-center justify-center shadow-lg mb-2">
        <span className="text-2xl md:text-3xl font-bold text-tart-mint">{value}</span>
      </div>
      <span className="text-xs text-gray-400">{label}</span>
    </motion.div>
  );
};

export default HomePage;