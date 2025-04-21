import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Fact {
  year: string;
  title: string;
  description: string;
  facts: string[];
  icon: LucideIcon;
  color: string;
}

interface HistoryTimelineProps {
  facts: Fact[];
}

const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ facts }) => (
  <section className="py-12 bg-[#3A2C2C]">
    <div className="container mx-auto px-4">
      <div className="space-y-8">
        {facts.map((fact, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 p-3 rounded-full" style={{ backgroundColor: `${fact.color}20` }}>
              <fact.icon size={28} style={{ color: fact.color }} />
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ color: fact.color }}>{fact.year}: {fact.title}</h3>
              <p className="text-gray-300 mb-2">{fact.description}</p>
              <ul className="list-disc ml-5 text-gray-400">
                {fact.facts.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HistoryTimeline;
