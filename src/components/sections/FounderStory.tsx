import React from 'react';

interface FounderStoryProps {
  paragraphs: string[];
}

const FounderStory: React.FC<FounderStoryProps> = ({ paragraphs }) => (
  <section className="py-12 bg-[#2E1F1F]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Founder Story</h2>
      <div className="space-y-4 max-w-2xl mx-auto text-gray-300">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </div>
  </section>
);

export default FounderStory;
