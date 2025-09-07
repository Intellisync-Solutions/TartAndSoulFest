// All sponsor-related data for the Sponsors page
import { Users, Zap, ShieldCheck, Medal, HandHeart, Crown, Star, Sparkles, Coffee, Gift, } from 'lucide-react';
import IntellisyncLogo from '../assets/images/logo.png';
import SonsOfKentLogo from '../assets/images/sonsofkent.png';
import WindsorTourismLogo from '../assets/images/Windsor-Tourism.png';
import WTRLogo from '../assets/images/WTR.png';
import DougTheFoodieLogo from '../assets/images/DougTheFoodie.png';


export const HIGHLIGHTS = [
  { icon: HandHeart, text: "Community Support" },
  { icon: Crown, text: "Premier Partners" },
  { icon: Medal, text: "Award-Winning Sponsors" },
  { icon:Star, text: "Festival Champions" },
];

export const SPONSOR_TIERS = {
  SweetSoulPioneer: {
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
  GoldenButter: {
    name: 'Golden Butter',
    icon: Sparkles,
    color: '#FFD700',
    description: 'High-impact sponsorship with standout benefits.',
    benefits: [
      'Logo on event materials',
      'Featured social media shoutout',
      'Priority booth placement',
    ],
  },
  SugarSprinkle: {
    name: 'Sugar Sprinkle',
    icon: Gift,
    color: '#C0C0C0',
    description: 'Supporter-level sponsorship for key contributors.',
    benefits: [
      'Logo on website',
      'Sponsor appreciation post',
    ],
  },
  CrustCompanion: {
    name: 'Crust Companion',
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
    name: 'Sons of Kent',
    tier: 'SweetSoulPioneer',
    logo: SonsOfKentLogo,
    description:
      'A craft brewery producing unique beers inspired by local history and traditions, bringing an authentic taste to every event.',
    impact:
      'Supported the launch of the festival’s first community Tatisan event.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 1,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
  {
    id: 'intellisync',
    name: 'Intellisync Solutions',
    tier: 'GoldenButter',
    logo: IntellisyncLogo,
    description:
      'Pioneering AI-first web app development that transforms ideas into innovative digital solutions.',
    impact:
      'Building the Tart & Soul Fest Community Website',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 1,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
  {
    id: 'wtr',
    name: 'WTR - With This Ring',
    tier: 'GoldenButter',
    logo: WTRLogo,
    description:
      'Experts in crafting unforgettable wedding experiences with a personal touch and meticulous attention to detail.',
    impact:
      'Sponsored the main stage, enabling headline performances and memorable moments.',
    location: 'Chatham, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 1,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
 
  {
    id: 'doug-the-foodie',
    name: 'Doug the Foodie',
    tier: 'CrustCompanion',
    logo: DougTheFoodieLogo,
    description:
      'A celebrated local culinary influencer who shares authentic food reviews, recipes, and gastronomic adventures.',
    impact:
      'Hosted live cooking demos and food tours, attracting hundreds of foodies to the event.',
    location: 'Various Locales',
    website: '',
    testimonial: '',
    yearsSponsor: 1,
    initiatives: [],
    contactPerson: '',
    industry: '',
  },
 

 
  {
    id: 'tourism',
    name: 'Tourism Windsor Essex Pelee Island',
    tier: 'CrustCompanion',
    logo: WindsorTourismLogo,
    description:
      'Official Tourism Hub to Southwestern Ontario, providing information and resources for visitors.',
    impact:
      'Supported the festival’s tourism needs and provide tourism information and services.',
    location: 'Windsor, ON',
    website: '',
    testimonial: '',
    yearsSponsor: 1,
    initiatives: [],
    contactPerson: '',
    industry: 'Tourism',

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
