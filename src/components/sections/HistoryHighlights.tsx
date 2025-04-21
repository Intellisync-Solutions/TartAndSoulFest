import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Highlight {
  icon: LucideIcon;
  text: string;
}

interface HistoryHighlightsProps {
  highlights: Highlight[];
}

const HistoryHighlights: React.FC<HistoryHighlightsProps> = ({ highlights }) => (
  <section className="py-12 bg-[#2E1F1F]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="bg-tart-mint/10 p-4 rounded-full mb-4">
              <highlight.icon size={32} className="text-tart-mint" />
            </div>
            <h4 className="text-lg font-semibold text-white">{highlight.text}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HistoryHighlights;
