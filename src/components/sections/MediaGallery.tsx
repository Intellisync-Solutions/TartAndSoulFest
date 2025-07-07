import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';



interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  year: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track the selected media item based on currentIndex
  const selectedItem = items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square cursor-pointer group"
            onClick={() => {
              setCurrentIndex(index);
              setIsModalOpen(true);
            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-[#2E1F1F] rounded-lg">
              {item.type === 'image' ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <video
                  src={item.thumbnail}
                  className="w-full h-full object-cover rounded-lg"
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white hover:text-tart-mint transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="relative">
                {selectedItem.type === 'video' ? (
                  <video
                    src={items[currentIndex].url}
                    controls
                    className="w-full rounded-lg"
                  />
                ) : (
                  <img
                    src={items[currentIndex].url}
                    alt={items[currentIndex].title}
                    className="w-full max-h-[70vh] object-contain rounded-lg"
                  />
                )}

                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-tart-mint transition-colors"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-tart-mint transition-colors"
                  onClick={handleNext}
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{items[currentIndex].title}</h3>
                <p className="text-gray-300 mt-2">{items[currentIndex].description}</p>
                <p className="text-tart-mint mt-2">{items[currentIndex].year}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaGallery;