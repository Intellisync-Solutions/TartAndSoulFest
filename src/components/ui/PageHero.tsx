import React from 'react';
import { motion } from 'framer-motion';
import GradientText from './GradientText';
import HomeHeroTarts from '../../assets/images/HomeHeroTarts.png';


interface PageHeroProps {
  variant: 'home' | 'about' | 'events' | 'sponsors' | 'vendors' | 'history' | 'recipes';
  title: string;
  subtitle: string;
  image: string;
  alt?: string;
  foregroundImage?: string;
  foregroundImageAlt?: string;
  highlights?: Array<{
    icon: React.ElementType;
    text: string;
  }>;
  extraContent?: React.ReactNode;
  cta?: {
    label: string;
    icon?: React.ElementType;
    onClick: () => void;
  };
  backgroundOverlay?: React.ReactNode;
  decorations?: React.ReactNode;
  children?: React.ReactNode;
}

// Set default props for the PageHero component
const defaultForegroundImage = HomeHeroTarts;
const defaultForegroundImageAlt = 'Tarts and Soul Hero Image';

type GradientVariant = "accent" | "secondary" | "primary";

const variants: Record<
  PageHeroProps["variant"],
  {
    layout: string;
    gradientDirection: string;
    imagePosition: string;
    titleGradient: GradientVariant;
  }
> = {
  home: {
    layout: 'asymmetric-left',
    gradientDirection: 'to-r',
    imagePosition: '120% 50%',
    titleGradient: 'secondary',
  },
  about: {
    layout: 'asymmetric-right',
    gradientDirection: 'to-bl',
    imagePosition: '-20% center',
    titleGradient: 'accent',
  },
  events: {
    layout: 'staggered-grid',
    gradientDirection: 'to-tr',
    imagePosition: '120% 120%',
    titleGradient: 'primary',
  },
  sponsors: {
    layout: 'mosaic-grid',
    gradientDirection: 'to-tr',
    imagePosition: '80% 50%',
    titleGradient: 'primary',
  },
  vendors: {
    layout: 'asymmetric-right',
    gradientDirection: 'to-l',
    imagePosition: '-20% center',
    titleGradient: 'accent',
  },
  history: {
    layout: 'timeline',
    gradientDirection: 'to-tr',
    imagePosition: 'center center',
    titleGradient: 'secondary',
  },
  recipes: {
    layout: 'centered',
    gradientDirection: 'to-br',
    imagePosition: 'center 40%',
    titleGradient: 'accent',
  },
};

const PageHero: React.FC<PageHeroProps> = ({
  variant,
  title,
  subtitle,
  image,
  alt = '',
  foregroundImage = defaultForegroundImage,
  foregroundImageAlt = defaultForegroundImageAlt,
  highlights,
  extraContent,
  // cta,
  backgroundOverlay,
  decorations,
  children,
}) => {
  const config = variants[variant];

  const containerStyles = {
    home: 'items-center',
    about: 'items-center justify-between',
    events: 'items-start justify-start',
    sponsors: 'items-center justify-center text-center',
    vendors: 'items-center justify-start',
    history: 'items-start justify-center',
    recipes: 'items-center justify-center',
  };

  const backgroundStyles = {
    home: 'opacity-20',
    about: 'opacity-15 scale-150 rotate-12',
    events: 'opacity-20 scale-125 -rotate-6',
    sponsors: 'opacity-10 scale-110 rotate-3',
    vendors: 'opacity-20 -rotate-12',
    history: 'opacity-10',
    recipes: 'opacity-15 scale-110 blur-[2px]',
  };

  return (
    <header
      className={`min-h-[70vh] bg-[#2E1F1F] text-white pt-20 relative overflow-hidden flex ${containerStyles[variant]}`}
      role="banner"
      aria-label={`${variant} hero section`}
    >
      {/* Animated SVG/Gradient Backgrounds */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none animate-fade-in"
        style={{ opacity: 0.2 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="heroGradient" cx="60%" cy="40%" r="1">
            <stop offset="0%" stopColor="#FFA600" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2E1F1F" stopOpacity="0.8" />
          </radialGradient>
        </defs>
        <ellipse
          cx="720"
          cy="300"
          rx="740"
          ry="320"
          fill="url(#heroGradient)"
        >
          <animate attributeName="rx" values="740;780;740" dur="8s" repeatCount="indefinite" />
          <animate attributeName="ry" values="320;350;320" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      {/* Background Image Layer (with alt for SEO) */}
      {image && (
        <img
          src={image}
          alt={alt || `${title} hero background`}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 ${backgroundStyles[variant]}`}
          style={{
            objectPosition: config.imagePosition,
            filter: 'blur(4px) brightness(0.6)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          aria-hidden="true"
        />
      )}
      {/* Custom overlay if provided */}
      {backgroundOverlay}
      {/* Variant-specific SVG/gradient overlays */}
      {/* Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-${config.gradientDirection} from-[#2E1F1F] via-[#2E1F1F]/80 to-transparent`}
      />

      {/* Content */}
      <div className="container mx-auto px-8 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`max-w-4xl ${
              variant === 'home'
                ? 'ml-8 md:ml-0 py-16 md:w-1/2'
                : variant === 'about' || variant === 'events'
                ? 'ml-8 md:ml-0 py-16'
                : variant === 'recipes'
                ? 'mx-auto py-20 text-center'
                : 'mx-auto py-16'
            }`}
          >
          <h1 className={`text-6xl md:text-7xl font-bold mb-12 leading-relaxed ${
            variant === 'home'
              ? 'text-left'
              : variant === 'about' || variant === 'events'
              ? 'text-left'
              : variant === 'recipes'
              ? 'text-center tracking-tight drop-shadow-lg'
              : 'text-center'
          } px-4 pb-16`}>
            <span className="sr-only">{title}</span>
            {title.split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 ? (
                  <>
                    <br className="mb-8" />
                    <GradientText variant={config.titleGradient}>
                      {word}
                    </GradientText>
                  </>
                ) : (
                  `${word} `
                )}
              </React.Fragment>
            ))}
          </h1>

          <p className={`text-2xl mb-12 text-gray-300 ${
            variant === 'home' 
              ? 'max-w-xl px-6 py-4' 
              : variant === 'about' || variant === 'events'
              ? 'max-w-xl px-6 py-4'
              : 'max-w-2xl mx-auto px-6 py-4'
          }`}>
            {subtitle}
          </p>

          {/* Animated highlights with hover and stagger */}
          {highlights && (
            <div className="flex gap-12 mb-12 justify-center">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12 }}
                  className="group focus:outline-none focus:ring-2 focus:ring-tart-mint/60 transition-all duration-200 cursor-pointer select-none hover:shadow-tart-mint/20 active:scale-95 flex flex-row items-center gap-2 bg-[#3A2C2C]/50 px-4 py-2 rounded-full shadow-lg shadow-tart-mint/10"
                  tabIndex={0}
                  aria-label={highlight.text}
                >
                  <highlight.icon className="text-tart-mint drop-shadow-md" size={28} />
                  <span className="text-gray-100 font-semibold text-lg tracking-wide">{highlight.text}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA Button if provided */}
          {/* {cta && (
            <motion.button
              onClick={cta.onClick}
              className="mt-6 px-8 py-4 rounded-full bg-tart-mint text-[#2E1F1F] font-bold shadow-xl flex items-center gap-3 text-lg hover:bg-[#FFA600] transition-colors focus:outline-none focus:ring-4 focus:ring-tart-mint/40"
              aria-label={cta.ariaLabel || cta.label}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              {cta.icon && <cta.icon className="mr-2" size={24} />}
              {cta.label}
            </motion.button>
          )} */}

          {/* Extra content and children */}
          {extraContent}
          {children}
          </motion.div>
          
          {/* Foreground image on the right side (now on all pages) */}
          {foregroundImage && (
            <motion.div 
              className="hidden md:block md:w-1/2 relative z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src={foregroundImage} 
                alt={foregroundImageAlt || 'Hero image'} 
                className="max-h-[500px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorations prop for custom floating icons, confetti, etc. */}
      {decorations}

      {/* Variant-specific decorative elements */}
      {variant === 'sponsors' && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-tart-mint/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-[#FFA600]/5 blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#2E1F1F]/60 to-[#2E1F1F]" />
        </>
      )}
      {variant === 'history' && (
        <>
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E1F1F]/80 via-transparent to-[#2E1F1F]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2E1F1F]/80 via-transparent to-[#2E1F1F]/80" />
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-tart-mint/20 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-tart-mint/20 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-tart-mint/20 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-tart-mint/20 rounded-br-3xl" />
        </>
      )}
      {variant === 'events' && (
        <motion.div 
          className="absolute inset-0 bg-[#2E1F1F]/20"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, transparent 0%, #2E1F1F 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      )}
      {/* Scroll cue arrow for all variants */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="sr-only">Scroll down</span>
        <svg width="32" height="32" fill="none" stroke="#FFA600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
          <path d="M16 6v20M8 22l8 8 8-8" />
        </svg>
      </div>
    </header>
  );
};

export default PageHero;