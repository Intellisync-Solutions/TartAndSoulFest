import { Calendar, Music, PartyPopper } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import MediaGallery from '../components/sections/MediaGallery';
import Events from '../components/sections/Events';
import Awards from '../components/sections/Awards';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import SEO from '../components/seo/SEO';

// Copied from MediaGallery.tsx for local typing
interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  year: string;
}

// TODO: Swap these placeholders for your actual media imports once added to the assets folder.
import TartSoulFest1 from '../assets/images/TartSoulFest1.png';
import TartSoulFest2 from '../assets/images/TartSoulFest2.png';
import JudgesAward from "../assets/images/Tart&SoulPictures/JudgesAward.jpg";
import TartandSoul2 from '../assets/images/Tart&SoulPictures/Tart and Soul 2.jpg';
import TartandSoul3 from '../assets/images/Tart&SoulPictures/Tart and Soul 3.jpg';
import TartandSoul4 from '../assets/images/Tart&SoulPictures/Tart and Soul 4.jpg';
import TartandSoul5 from '../assets/images/Tart&SoulPictures/Tart and Soul 5.jpg';
import TartandSoul6 from '../assets/images/Tart&SoulPictures/Tart and Soul 6.jpg';
import TartandSoul7 from '../assets/images/Tart&SoulPictures/Tart and Soul 7.jpg';
import TartandSoul8 from '../assets/images/Tart&SoulPictures/Tart and Soul 8.jpg';
import TartandSoul9 from '../assets/images/Tart&SoulPictures/Tart and Soul 9.jpg';
import SoulParkPerformance from '../assets/video/Soulful Park Performance.mp4';
import SoulfulTartCelebration from '../assets/video/Soulful Tart Celebration.mp4';


const mediaItems: MediaItem[] = [
  {
    type: "image",
    url: TartSoulFest1,
    thumbnail: TartSoulFest1,
    title: "Tart & Soul Fest",
    description: "A vibrant crowd enjoying the Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "video",
    url: SoulParkPerformance,
    thumbnail: SoulParkPerformance,
    title: "Soul Park Performance",
    description: "Short highlights from last year’s event.",
    year: "2025",
  },
 
  {
    type: "image",
    url: TartSoulFest2,
    thumbnail: TartSoulFest2,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "video",
    url: SoulfulTartCelebration,
    thumbnail: SoulfulTartCelebration,
    title: "Soulful Tart Celebration",
    description: "Short highlights from last year’s event.",
    year: "2025",
  },

  {
    type: "image",
    url: JudgesAward,
    thumbnail: JudgesAward,
    title: "Judges Award",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "image",
    url: TartandSoul2,
    thumbnail: TartandSoul2,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "image",
    url: TartandSoul3,
    thumbnail: TartandSoul3,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "image",
    url: TartandSoul4,
    thumbnail: TartandSoul4,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "image",
    url: TartandSoul5,
    thumbnail: TartandSoul5,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "image",
    url: TartandSoul6,
    thumbnail: TartandSoul6,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "image",
    url: TartandSoul7,
    thumbnail: TartandSoul7,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "image",
    url: TartandSoul8,
    thumbnail: TartandSoul8,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },

  {
    type: "image",
    url: TartandSoul9,
    thumbnail: TartandSoul9,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2025",
  },
];

const HIGHLIGHTS = [
  {
    icon: Calendar,
    text: "Regular Events"
  },
  {
    icon: Music,
    text: "Live Music"
  },
  {
    icon: PartyPopper,
    text: "Community Fun"
  }
];

const EventsPage = () => (
  <>
    <SEO 
      title="Events | Tart & Soul Fest 2025"
      description="Discover upcoming events at Tart & Soul Fest. Join us for music performances, cultural showcases, and community celebrations."
      keywords={['Tart & Soul Fest events', 'music festival 2025', 'live performances', 'cultural events', 'festival schedule']}
      type="event"
    />
    <PageHero
      variant="events"
      title="Experience the Soul"
      subtitle="Join us for unforgettable gatherings filled with music, food, and community spirit."
      image="/images/events-hero.jpg"
      highlights={HIGHLIGHTS}
      extraContent={
        <div className="flex flex-col items-center mt-4">
          <span className="text-sm text-gray-400">Check out our upcoming events below!</span>
        </div>
      }
    />
    <Events />
    <Awards />
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-tart-mint">Media Gallery</h2>
      <MediaGallery items={mediaItems} />
    </section>
    <ScrollToTopButton />
  </>
);

export default EventsPage;