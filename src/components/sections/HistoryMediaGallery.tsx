import React from 'react';
import MediaGallery from './MediaGallery';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  year: string;
}

interface HistoryMediaGalleryProps {
  items: MediaItem[];
}

const HistoryMediaGallery: React.FC<HistoryMediaGalleryProps> = ({ items }) => (
  <section className="py-12 bg-[#3A2C2C]">
    <div className="container mx-auto px-4">
      <MediaGallery items={items} />
    </div>
  </section>
);

export default HistoryMediaGallery;
