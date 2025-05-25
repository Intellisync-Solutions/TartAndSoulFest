// All sponsor-related data for the Sponsors page
import { Users, Zap, ShieldCheck, Medal, HandHeart, Crown, Star, Sparkles, Coffee, Gift, } from 'lucide-react';
import IntellisyncLogo from '../assets/images/logo.png';
import SonsOfKentLogo from '../assets/images/sonsofkent.png';
import LPGraphicsLogo from '../assets/images/LPGraphics.png';
import WTRLogo from '../assets/images/WTR.png';
import DougTheFoodieLogo from '../assets/images/DougTheFoodie.png';
import CKSXLogo from '../assets/images/CKSX.webp';
import PlanetPrintLogo from '../assets/images/PlanetPrint.png';
import AdanaLawLogo from '../assets/images/AdanaLaw.png';
import OSWLogo from "../assets/images/OSW.png";
import CuriousBirdLogo from '../assets/images/CuriousBird.png';
import retrosuitesLogo from '../assets/images/retrosuites.webp';

export const HIGHLIGHTS = [
  { icon: HandHeart, text: "Community Support" },
  { icon: Crown, text: "Premier Partners" },
  { icon: Medal, text: "Award-Winning Sponsors" },
  { icon:Star, text: "Festival Champions" },
];

export const SPONSOR_TIERS = {
  PLATINUM: {
    name: 'Sweet Soul Pioneer',
    icon: Crown,
    color: '#8EF4B6',
    description: 'Top-tier sponsorship for visionary partners.',
    benefits: [
      'Premium logo placement',
      'VIP event access',
      'Custom partnership opportunities',
    ],
  },
  GOLD: {
    name: 'Soulful Innovator',
    icon: Sparkles,
    color: '#FFD700',
    description: 'High-impact sponsorship with standout benefits.',
    benefits: [
      'Logo on event materials',
      'Featured social media shoutout',
      'Priority booth placement',
    ],
  },
  SILVER: {
    name: 'Groove Maker',
    icon: Gift,
    color: '#C0C0C0',
    description: 'Supporter-level sponsorship for key contributors.',
    benefits: [
      'Logo on website',
      'Sponsor appreciation post',
    ],
  },
  BRONZE: {
    name: 'Community Friend',
    icon: Coffee,
    color: '#CD7F32',
    description: 'Entry-level sponsorship for local supporters.',
    benefits: [
      'Name listed on website',
    ],
  },
};

export const SPONSORS = [
  {
    id: 'sons-of-kent',
    name: 'Sons of Kent Brewery',
    tier: 'PLATINUM',
    logo: SonsOfKentLogo,
    description:
      'A craft brewery producing unique beers inspired by local history and traditions, bringing an authentic taste to every event.',
    impact:
      'Supported the launch of the festival’s first community Tatisan event.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
  {
    id: 'intellisync',
    name: 'Intellisync Solutions',
    tier: 'GOLD',
    logo: IntellisyncLogo,
    description:
      'Pioneering AI-first web app development that transforms ideas into innovative digital solutions.',
    impact:
      'Developed the festival’s ticketing platform, streamlining the experience for 5,000+ attendees.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
  {
    id: 'wtr',
    name: 'WTR - With This Ring',
    tier: 'GOLD',
    logo: WTRLogo,
    description:
      'Experts in crafting unforgettable wedding experiences with a personal touch and meticulous attention to detail.',
    impact:
      'Sponsored the main stage, enabling headline performances and memorable moments.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
  {
    id: 'lpgraphics',
    name: 'LPGraphics',
    tier: 'SILVER',
    logo: LPGraphicsLogo,
    description:
      'Delivering cutting-edge graphic design and printing services that elevate brand identity and creative storytelling.',
    impact:
      'Designed all festival branding, signage, and merchandise for 2024.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
  {
    id: 'doug-the-foodie',
    name: 'Doug the Foodie',
    tier: 'BRONZE',
    logo: DougTheFoodieLogo,
    description:
      'A celebrated local culinary influencer who shares authentic food reviews, recipes, and gastronomic adventures.',
    impact:
      'Hosted live cooking demos and food tours, attracting hundreds of foodies to the event.',
    location: 'Various Locales',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
  {
    id: 'cksx',
    name: 'CKSX 99.1 FM',
    tier: 'SILVER',
    logo: CKSXLogo,
    description:
      'Local radio station supporting community events and spreading the word about Tart & Soul Festival.',
    impact:
      'Provided live event coverage and promoted the festival across Chatham-Kent.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: 'Media',
  },
  {
    id: 'planet-print',
    name: 'Planet Print',
    tier: 'BRONZE',
    logo: PlanetPrintLogo,
    description:
      'Full-service print shop delivering high-quality materials for community events and businesses.',
    impact:
      'Printed banners, posters, and event signage for the festival.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: 'Printing',

  },
  {
    id: 'adana-law',
    name: 'Adana Law',
    tier: 'BRONZE',
    logo: AdanaLawLogo,
    description:
      'Adana Law is a client-focused legal practice serving Chatham, Windsor, Sarnia, and London, specializing in criminal defence, immigration and refugee law, mental health law, and notary services.',
    impact:
      'Supported the festival’s legal needs and provided pro bono legal services.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: 'Legal',

  },
 
  {
    id: 'osw',
    name: 'OSW',
    tier: 'BRONZE',
    logo: OSWLogo,
    description:
      'Official Tourism Hub to Southwestern Ontario, providing information and resources for visitors.',
    impact:
      'Supported the festival’s tourism needs and provide tourism information and services.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: 'Tourism',

  },
  {
    id: 'curious-bird',
    name: 'Curious Bird',
    tier: 'BRONZE',
    logo: CuriousBirdLogo,
    description:
      "A BIPOC endeavour, Curious Bird's the place for candid converstaion, opinion sharing, and culturally enriched experiences from a birds eye view ." ,
    impact:
      'Supporting the festival’s community needs and providing a platform for cultural exchange and dialogue.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: 'Community',

  },
  {
    id: 'retrosuites',
    name: 'Retrosuites',
    tier: 'BRONZE',
    logo: retrosuitesLogo,
    description:
      'A boutique hotel and event space offering a unique blend of comfort and style.',
    impact:
      'Supported the festival’s community needs and providing a platform for cultural exchange and dialogue.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 0,
    initiatives: [],
    contactPerson: '',
    industry: 'Community',

  },
];

export const IMPACT_STATISTICS = [
  {
    icon: Users,
    value: '',
    label: 'Attendees',
    description: 'Celebrating a record-breaking turnout in 2024!'
  },
  {
    icon: Zap,
    value: '',
    label: 'Events',
    description: 'A packed schedule of performances, workshops, and tastings.'
  },
  {
    icon: ShieldCheck,
    value: '',
    label: 'Funds Raised',
    description: 'Supporting local charities, artists, and community initiatives.'
  },
  {
    icon: Medal,
    value: '',
    label: 'Sponsors',
    description: 'A growing network of partners making a difference.'
  }
];
