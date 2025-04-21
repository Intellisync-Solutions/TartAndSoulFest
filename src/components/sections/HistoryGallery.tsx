import React from 'react';

interface GalleryItem {
  image: string;
  title: string;
  year: string;
  category: string;
}

interface HistoryGalleryProps {
  items: GalleryItem[];
}

const HistoryGallery: React.FC<HistoryGalleryProps> = ({ items }) => (
  <section className="py-12 bg-[#2E1F1F]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="bg-[#3A2C2C] rounded-xl overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.year} &ndash; {item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HistoryGallery;
