import React from 'react';
import { motion } from 'framer-motion';
import { Award, Store, Flag, Star } from 'lucide-react';
import GradientText from '../ui/GradientText';

interface VendorStatProps {
  icon: React.ElementType;
  label: string;
  value: string;
  description: string;
  color: string;
  delay?: number;
}

const VendorStat: React.FC<VendorStatProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  description, 
  color,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 15 }}
      className="relative overflow-hidden"
    >
      <div className={`p-0.5 rounded-2xl bg-gradient-to-br ${color}`}>
        <div className="bg-[#1F1413] p-5 rounded-2xl relative h-full">
          <div className="absolute right-0 bottom-0 opacity-10">
            <Icon size={80} />
          </div>
          
          <div className="flex items-start">
            <div
  className={
    `p-3 rounded-xl mr-4 ` +
    ( //Located on the Vendors Page
      color.includes('#00A89F') ? 'bg-[#00A89F]/20' :
      color.includes('#FFA600') ? 'bg-[#FFA600]/20' :
      color.includes('#8EF4B6') ? 'bg-[#8EF4B6]/20' :
      color.includes('#F472B6') ? 'bg-[#F472B6]/20' :
      'bg-tart-mint/20'
    )
  }
>
  <Icon
    className={
      color.includes('#00A89F') ? 'text-[#00A89F]' :
      color.includes('#FFA600') ? 'text-[#FFA600]' :
      color.includes('#8EF4B6') ? 'text-[#8EF4B6]' :
      color.includes('#F472B6') ? 'text-[#F472B6]' :
      'text-tart-mint'
    }
    size={24}
  />
</div>
            
            <div>
              <h3
  className={
    `text-3xl font-bold mb-1 ` +
    (//Vendor Stats on the Vendor Page
      color.includes('#00A89F') ? 'text-[#00A89F]' :
      color.includes('#FFA600') ? 'text-[#FFA600]' :
      color.includes('#8EF4B6') ? 'text-[#8EF4B6]' :
      color.includes('#F472B6') ? 'text-[#F472B6]' :
      'text-tart-mint'
    )
  }
>
  {value}
</h3>
              <p className="text-xs uppercase tracking-wider text-gray-400">{label}</p>
              <p className="text-gray-300 text-sm mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VendorStats: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          <GradientText variant="secondary">
            CK's Vibrant Tart Scene
          </GradientText>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover the tartisan behind Chatham-Kent's finest butter tarts, each bringing their unique soul-inspired twist to this Canadian classic.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <VendorStat
          icon={Store}
          value=""
          label="Local Vendors"
          description="Artisan bakers creating soul-infused tarts across Chatham-Kent"
          color="from-[#00A89F] to-[#008080]"
          delay={0.1}
        />
        <VendorStat
          icon={Star}
          value=""
          label="Signature Recipes"
          description="Unique butter tart creations blending Canadian and Soul food traditions"
          color="from-[#FFA600] to-[#FF7A00]"
          delay={0.2}
        />
        <VendorStat
          icon={Award}
          value=""
          label="Award Winners"
          description="Nationally recognized bakers pushing culinary boundaries"
          color="from-[#8EF4B6] to-[#4CAF50]"
          delay={0.3}
        />
        <VendorStat
          icon={Flag}
          value=""
          label="Local Regions"
          description="Representing the diverse communities of Chatham-Kent"
          color="from-[#F472B6] to-[#C026D3]"
          delay={0.4}
        />
      </div>
    </section>
  );
};

export default VendorStats;