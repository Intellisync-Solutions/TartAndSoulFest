import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Award, CakeSlice } from 'lucide-react';
import GradientText from '../ui/GradientText';

interface ParallaxBannerProps {
  title: string;
  subtitle: string;
}

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ title, subtitle }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  
  // Floating animation for decorative elements
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 10);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div 
      className="relative h-[40vh] md:h-[60vh] bg-[#1F1413] overflow-hidden"
      style={{ y }}
    >
      {/* Background parallax elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(0, 168, 159, 0.3) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(255, 166, 0, 0.3) 0%, transparent 60%)'
        }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => {
          const size = Math.random() * 40 + 10;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const speed = Math.random() * 0.5 + 0.2;
          const delay = Math.random() * 2;
          
          const x = initialX + Math.sin(time * speed + delay) * 5;
          const y = initialY + Math.cos(time * speed + delay) * 5;
          
          const icons = [CakeSlice, Star, Award];
          const Icon = icons[i % icons.length];
          
          return (
            <div 
              key={i}
              className="absolute text-white/5"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
              }}
            >
              <Icon size={size} />
            </div>
          );
        })}
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <GradientText variant="secondary">{title}</GradientText>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            {subtitle}
          </p>
        </motion.div>
      </motion.div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1F1413] to-transparent" />
    </motion.div>
  );
};

export default ParallaxBanner;