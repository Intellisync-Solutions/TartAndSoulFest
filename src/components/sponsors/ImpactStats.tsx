import React from "react";
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '../ui/GradientText';

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
};

interface ImpactStatsProps {
  stats: Stat[];
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ stats }) => (
  <section className="py-16 bg-[#3A2C2C] relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          <GradientText variant="primary">Sponsor Impact</GradientText>
        </h2>
        <p className="text-gray-300">
          Our sponsors make a real difference in our community through their generous support
        </p>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2E1F1F] rounded-xl p-6 text-center"
            >
              <div className="bg-tart-mint/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon size={32} className="text-tart-mint" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-tart-mint font-medium mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ImpactStats;
