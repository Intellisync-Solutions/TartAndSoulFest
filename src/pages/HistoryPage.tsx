import PageHero from '../components/ui/PageHero';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import SEO from '../components/seo/SEO';
import HistoryHighlights from '../components/sections/HistoryHighlights';
import HistoryMediaGallery from '../components/sections/HistoryMediaGallery';
import HistoryTestimonials from '../components/sections/HistoryTestimonials';
import HistoryTimeline from '../components/sections/HistoryTimeline';
import HistoryGallery from '../components/sections/HistoryGallery';
import HistoryMilestones from '../components/sections/HistoryMilestones';
import FounderStory from '../components/sections/FounderStory';
import LookingForward from '../components/sections/LookingForward';

import { BookOpen, Users, Flag, Cake, Heart, Award, GalleryHorizontalEnd } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: BookOpen,
    text: "Rich Heritage"
  },
  {
    icon: Users,
    text: "Community Stories"
  },
  {
    icon: BookOpen,
    text: "Cultural Legacy"
  }
];

const MEDIA_ITEMS = [
  {
    type: 'image' as const,
    url: "placeholder-image", // Placeholder until image is available
    thumbnail: "placeholder-image", // Placeholder until image is available
    title: 'Tart & Soul Fest 2025',
    description: 'Our inaugural community event brought together local bakers and musicians.',
    year: '2025'
  },
  {
    type: 'image' as const,
    url: "placeholder-image", // Placeholder until image is available
    thumbnail: "placeholder-image", // Placeholder until image is available
    title: 'Tart & Soul Fest 2025',
    description: 'The beginning of our weekly celebration of food and culture.',
    year: '2025'
  },
  {
    type: 'image' as const,
    url: "placeholder-image", // Placeholder until image is available
    thumbnail: "placeholder-image", // Placeholder until image is available
    title: 'Tart Competition 2025',
    description: 'Local bakers showcasing their unique takes on the classic butter tart.',
    year: '2025'
  },
  {
    type: 'image' as const,
    url: "placeholder-image", // Placeholder until image is available
    thumbnail: "placeholder-image", // Placeholder until image is available
    title: 'Tart & Soul Fest 2025',
    description: 'Celebrating our growing community and cultural heritage.',
    year: '2025'
  }
];

const TESTIMONIALS = [
  {
    quote:
      "With June 28th, 2025 fast approaching, I’m thrilled to see Tart & Soul evolve into a vibrant celebration that unites our community and honors our rich heritage through innovative flavors and unforgettable experiences.",
    author: "Doug",
    role: "The Foodie",
    year: "2025",
    image: "placeholder-profile" // Placeholder until image is available
  },
  {
    quote:
      "The upcoming Tart & Soul event is set to redefine cultural celebration, blending traditional butter tarts with soulful influences. I can’t wait to experience this dynamic fusion and see our community shine in 2025.",
    author: "Chris June",
    role: "Co-Founder",
    year: "2025",
    image: "placeholder-profile" // Placeholder until image is available
  }
];

const HISTORICAL_FACTS = [
  {
    year: "Early 20th Century",
    title: "Humble Beginnings",
    description: "The first documented butter tart recipe appeared in 1900 in the Women's Auxiliary of the Royal Victoria Hospital Cookbook from Barrie, Ontario.",
    facts: [
      "Recipe submitted by Mrs. Malcolm MacLeod",
      "Influenced by French-Canadian tarte au sucre and Scottish border tarts",
      "Pioneers adapted recipes using available local ingredients"
    ],
    icon: Cake,
    color: "#FFA600"
  },
  {
    year: "Mid 20th Century",
    title: "Cultural Icon Emerges",
    description: "The butter tart became an integral part of Canadian identity, particularly in Ontario, with its distinctive gooey, sweet filling in flaky pastry.",
    facts: [
      "Debates over additions like raisins or nuts became common",
      "Symbolized Canadian comfort food and nostalgia",
      "Featured in community gatherings and family recipes"
    ],
    icon: Heart,
    color: "#F472B6"
  },
  {
    year: "21st Century",
    title: "Festival Celebrations",
    description: "The butter tart gained national recognition with dedicated festivals celebrating this beloved Canadian treat.",
    facts: [
      "Ontario's Best Butter Tart Festival in Midland draws thousands",
      "Bakers and enthusiasts gather from across Canada",
      "Celebration of Canadian culinary heritage"
    ],
    icon: Users,
    color: "#00A89F"
  },
  {
    year: "Present Day",
    title: "A Living Legacy",
    description: "The butter tart remains a cherished symbol of Canadian heritage, inspiring new generations of bakers and food enthusiasts.",
    facts: [
      "Continues to evolve with creative variations",
      "Represents Canadian culinary innovation",
      "A source of national pride and cultural connection"
    ],
    icon: Flag,
    color: "#8EF4B6"
  }
];

// Photo gallery items
const GALLERY_ITEMS = [
  {
    image: "placeholder-image", // Placeholder until image is available
    title: "First Tart & Soul Festival",
    year: "2025",
    category: "Events"
  },
  {
    image: "placeholder-image", // Placeholder until image is available
    title: "Founder with Award-Winning Tart",
    year: "2025",
    category: "People"
  },
  {
    image: "placeholder-image", // Placeholder until image is available
    title: "Community Soul Food Dinner",
    year: "2025",
    category: "Food"
  },
  {
    image: "placeholder-image", // Placeholder until image is available
    title: "Live Music Performance",
    year: "2025",
    category: "Music"
  },
  {
    image: "placeholder-image", // Placeholder until image is available
    title: "Tart Making Workshop",
    year: "2025",
    category: "Events"
  },
  {
    image: "placeholder-image", // Placeholder until image is available
    title: "Cultural Heritage Celebration",
    year: "2025",
    category: "Culture"
  }
];

// Milestone achievements
const MILESTONES = [
  {
    year: "2025",
    title: "First Festival",
    description: "Launch of the inaugural Tart & Soul Festival",
    count: "",
    unit: "",
    icon: Users
  },
  {
    year: "2025",
    title: "Best Tart Award",
    description: "Inagrural 1st Place Tartisan",
    count: "1st",
    unit: "Place",
    icon: Award
  },
  {
    year: "2025",
    title: "Community Collaboration",
    description: "A Chatham-Kent Event",
    count: "",
    unit: "",
    icon: Flag
  },
  {
    year: "2025",
    title: "Impact",
    description: "Family Focused Event",
    count: "1,000+",
    unit: "Tarts sold",
    icon: GalleryHorizontalEnd
  }
];

// Founder story paragraphs
const FOUNDER_STORY = [
  "As a certified event planner, I've always believed in the magic of bringing people together through unforgettable experiences. But Tart & Soul is more than just an event—it's a piece of my heart, a tribute to my roots, and a celebration of the things that have always made me feel at home: soul food, soul music, and my mom's love for butter tarts.",
  "Growing up, butter tarts were my mom's absolute favourite treat. No matter what kind of day she was having, one bite of that buttery, gooey goodness would instantly bring a smile to her face. That smile is something I'll never forget. It wasn't just about the sweetness of the dessert—it was about the comfort, the tradition, and the simple joys that food can bring.",
  "But food was only part of it. Music was the heartbeat of our home. Whether it was soul, R&B, or the timeless sounds of Motown, music was always playing in the background at my nana's home or my family home, setting the mood for everything from Sunday dinners to spontaneous dance parties in the kitchen. And of course, there was the food—rich, flavourful, Southern-inspired dishes that brought our family together and told stories of our heritage with every bite.",
  "As I built my career in event planning, I knew I wanted to create something that blended all these passions together—something that celebrated community, culture, and connection. That's how Tart & Soul was born.",
  "This festival is my way of sharing the joy, warmth, and nostalgia that butter tarts, soul music, and great food have always brought to my life. It's a space where people can come together, enjoy incredible flavours, dance to the rhythm of soulful beats, and celebrate the rich cultural influences that make food and music so powerful.",
  "Most of all, I hope Tart & Soul brings you the same kind of happiness that I remember so vividly on my mom's face. Because at the end of the day, that's what this festival is all about—good food, good music, and good vibes that make you smile from the inside out."
];

const HistoryPage = () => (
  <>
    <SEO 
      title="Our History | Tart & Soul Fest"
      description="Explore the rich history of Tart & Soul Fest. From our humble beginnings to becoming a celebrated cultural event, discover our journey through the years."
      keywords={['Tart & Soul Fest history', 'festival origins', 'cultural celebration history', 'event timeline', 'community heritage']}
      type="website"
    />
    <PageHero
      variant="history"
      title="Our Story"
      subtitle="History, Heritage, and Community"
      image="/images/history-hero.jpg"
      highlights={[
        { icon: BookOpen, text: 'Rich Heritage' },
        { icon: Users, text: 'Community Stories' },
        { icon: Award, text: 'Cultural Legacy' },
      ]}
    />
    <HistoryHighlights highlights={HIGHLIGHTS} />
    <HistoryMediaGallery items={MEDIA_ITEMS} />
    <HistoryTestimonials testimonials={TESTIMONIALS} />
    <HistoryTimeline facts={HISTORICAL_FACTS} />
    <HistoryGallery items={GALLERY_ITEMS} />
    <HistoryMilestones milestones={MILESTONES} />
    <FounderStory paragraphs={FOUNDER_STORY} />
    <LookingForward />
    <ScrollToTopButton />
  </>
);

export default HistoryPage;
                      