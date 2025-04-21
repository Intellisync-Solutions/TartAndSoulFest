import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  count: string;
  unit: string;
  icon: LucideIcon;
}

interface HistoryMilestonesProps {
  milestones: Milestone[];
}

const HistoryMilestones: React.FC<HistoryMilestonesProps> = ({ milestones }) => (
  <section className="py-12 bg-[#3A2C2C]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="flex flex-col items-center bg-[#2E1F1F] rounded-xl p-6">
            <div className="p-3 rounded-full mb-3" style={{ backgroundColor: '#FFA60020' }}>
              <milestone.icon size={28} className="text-[#FFA600]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">{milestone.title}</h4>
            <span className="text-sm text-gray-400 mb-2">{milestone.year}</span>
            <p className="text-gray-300 mb-2">{milestone.description}</p>
            <span className="text-2xl font-bold text-tart-mint">{milestone.count} <span className="text-base">{milestone.unit}</span></span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HistoryMilestones;
