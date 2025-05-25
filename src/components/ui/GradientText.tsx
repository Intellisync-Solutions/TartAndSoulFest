import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  duration?: number; // Duration for the animation in seconds
  colors?: string[]; // Custom gradient colors (array of color strings)
  angle?: number; // Angle for the gradient in degrees
  pauseOnHover?: boolean; // If true, pause the animation on hover
  disableAnimation?: boolean; // Manually disable animation if needed
  delay?: number; // Animation delay in seconds
  ease?: string | number[]; // Custom easing function
}

const defaultVariants: Record<string, { colors: string[]; angle: number }> = {
  /**
   * Primary gradient
   * Mint green to dark brown
   */
  primary: {
    colors: ['#00A89F', '#2E1F1F', '#3A2C2C', '#00A89F'],
    angle: -45,
  },
  /**
   * Secondary gradient
   * Orange to mint green to dark brown and back to orange
   */
  secondary: {
    colors: ['#FFA600', '#00A89F', '#5A2A0C', '#FFA600'],
    angle: -45,
  },
  /**
   * Accent gradient
   * Dark brown to mint green to orange and back to dark brown
   */
  accent: {
    colors: ['#2E1F1F', '#00A89F', '#FFA600', '#2E1F1F'],
    angle: -45,
  },
};

const buildGradient = (colors: string[], angle: number) => {
  return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
};

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  variant = 'primary',
  duration = 10, // Reduced from 30s to 10s for a faster animationlower number faster the transition
  colors,
  angle,
  pauseOnHover = true,
  disableAnimation = false,
  delay = 0,
  ease = 'linear',
}) => {
  // Check if the user prefers reduced motion
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const handler = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // State for hover if pauseOnHover is enabled
  const [isHovered, setIsHovered] = useState(false);

  // Determine the gradient colors and angle to use
  const effectiveColors = colors || defaultVariants[variant].colors;
  const effectiveAngle = angle ?? defaultVariants[variant].angle;

  // Build the CSS style for the gradient
  const gradientStyle = {
    background: buildGradient(effectiveColors, effectiveAngle),
    backgroundSize: '400% 400%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  // Determine if we should animate (disable animation if user prefers reduced motion, 
  // if manually disabled, or if paused on hover)
  const shouldAnimate = !disableAnimation && !reduceMotion && !(pauseOnHover && isHovered);

  return (
    <motion.span
      className={`inline-block text-transparent pb-4 ${className}`}
      style={gradientStyle}
      animate={
        shouldAnimate
          ? {
              backgroundPosition: [
                // Start: First color (#00A89F) at left, cycling through the gradient
                '0% 50%',    // Colors: #00A89F → #2E1F1F → #3A2C2C → #00A89F
                // Moving right through the gradient
                '25% 50%',   // Colors: #2E1F1F → #3A2C2C → #00A89F → #2E1F1F
                '50% 50%',   // Colors: #3A2C2C → #00A89F → #2E1F1F → #3A2C2C
                '75% 50%',   // Colors: #00A89F → #2E1F1F → #3A2C2C → #00A89F
                // At far right, starts moving back
                '100% 50%',  // Colors: #2E1F1F → #3A2C2C → #00A89F → #2E1F1F
                // Moving back left through the gradient
                '75% 50%',   // Colors: #3A2C2C → #00A89F → #2E1F1F → #3A2C2C
                '50% 50%',   // Colors: #00A89F → #2E1F1F → #3A2C2C → #00A89F
                '25% 50%',   // Colors: #2E1F1F → #3A2C2C → #00A89F → #2E1F1F
                // Back to start
                '0% 50%'     // Colors: #00A89F → #2E1F1F → #3A2C2C → #00A89F
              ],
            }
          : {}
      }
      transition={
        shouldAnimate
          ? {
              duration,
              ease,
              delay,
              repeat: Infinity,
            }
          : {}
      }
      onHoverStart={() => pauseOnHover && setIsHovered(true)}
      onHoverEnd={() => pauseOnHover && setIsHovered(false)}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;