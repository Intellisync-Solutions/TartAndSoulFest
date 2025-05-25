
import { Calendar, Music, PartyPopper } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import MediaGallery from '../components/sections/MediaGallery';
import Events from '../components/sections/Events';
import Awards from '../components/sections/Awards';
import ScrollToTopButton from '../components/common/ScrollToTopButton';

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
import SoulParkPerformance from '../assets/video/Soulful Park Performance.mp4';
import SoulfulTartCelebration from '../assets/video/Soulful Tart Celebration.mp4';


const mediaItems: MediaItem[] = [
  {
    type: "image",
    url: TartSoulFest1,
    thumbnail: TartSoulFest1,
    title: "Tart & Soul Fest",
    description: "A vibrant crowd enjoying the Tart & Soul Festival.",
    year: "2024",
  },

  {
    type: "video",
    url: SoulParkPerformance,
    thumbnail: SoulParkPerformance,
    title: "Soul Park Performance",
    description: "Short highlights from last year’s event.",
    year: "2024",
  },
 
  {
    type: "image",
    url: TartSoulFest2,
    thumbnail: TartSoulFest2,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2024",
  },

  {
    type: "video",
    url: SoulfulTartCelebration,
    thumbnail: SoulfulTartCelebration,
    title: "Soulful Tart Celebration",
    description: "Short highlights from last year’s event.",
    year: "2024",
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