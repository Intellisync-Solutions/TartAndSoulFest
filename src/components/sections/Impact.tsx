import { motion } from 'framer-motion';
import { Heart, Users, Music, Utensils } from 'lucide-react';

const IMPACT_STATS = [
  {
    icon: Users,
    value: "",
    label: "Community Members",
    description: "Bringing people together through food and music"
  },
  {
    icon: Utensils,
    value: "",
    label: "Local Bakers",
    description: "Supporting Black-owned businesses"
  },
  {
    icon: Music,
    value: "",
    label: "Live Performances",
    description: "Celebrating soul music and culture"
  },
  {
    icon: Heart,
    value: "",
    label: "Community Impact",
    description: "Reinvested in local initiatives"
  }
];

const Impact = () => {
  return (
    <section className="py-20 bg-[#2E1F1F] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-tart-mint rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFA600] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Together, we're building a stronger community through cultural celebration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {IMPACT_STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-6 relative">
                 <div className="absolute inset-0 bg-[#00A89F] rounded-full blur-xl opacity-20 animate-pulse" />
                  <div className="relative bg-[#3A2C2C] w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                   <Icon size={32} className="text-[#00A89F]" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
               <p className="text-[#00A89F] font-semibold mb-2">{stat.label}</p>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
          {/* For Future Use */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-tart-mint text-[#2E1F1F] px-8 py-3 rounded-full font-bold inline-flex items-center"
          >
            <Heart size={20} className="mr-2" />
            Support Our Mission
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Impact;