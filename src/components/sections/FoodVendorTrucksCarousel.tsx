import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import KitchenetteImg from "../../assets/images/Kitchenette.jpg";

// Placeholder for future food trucks
type FoodTruck = {
  name: string;
  image: string;
};

const foodTrucks: FoodTruck[] = [
  {
    name: "Kitchenette",
    image: KitchenetteImg,
  },
  // Add more trucks here as needed
];

// Infinite scroll carousel logic
const FoodVendorTrucksCarousel: React.FC = () => {
  const [startIdx, setStartIdx] = React.useState(0);
  const visibleCount = 3; // Number of trucks visible at once

  // Infinite scroll effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % foodTrucks.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Get visible trucks (looping)
  const getVisibleTrucks = () => {
    const trucks: FoodTruck[] = [];
    for (let i = 0; i < visibleCount; i++) {
      trucks.push(foodTrucks[(startIdx + i) % foodTrucks.length]);
    }
    return trucks;
  };

  return (
    <section className="py-8 rounded-xl shadow-md mb-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-700 tracking-wide">Food Vendors</h2>
      <div className="flex justify-center items-center gap-6 min-h-[180px] md:min-h-[220px] overflow-hidden">
        <AnimatePresence initial={false}>
          {getVisibleTrucks().map((truck, idx) => (
            <motion.div
              className="bg-white rounded-xl px-4 py-4 min-w-[120px] max-w-[160px] md:min-w-[180px] md:max-w-[200px] flex flex-col items-center transition-shadow hover:shadow-lg"
              key={truck.name + idx}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
            >
              <img src={truck.image} alt={truck.name} className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-xl mb-4 border-2 border-orange-200 shadow-sm" />
              <div className="text-lg md:text-xl font-semibold text-orange-900 mt-2">{truck.name}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <p className="mt-5 text-orange-700/80 text-base">More food trucks coming soon!</p>
    </section>
  );
};

export default FoodVendorTrucksCarousel;
