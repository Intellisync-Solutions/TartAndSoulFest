import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import SEO from '../components/seo/SEO';
import { CakeSlice, Loader2, Search, Store, Users } from 'lucide-react';

// Custom components

import VendorCard from '../components/vendor/VendorCard';
import VendorSpotlight from '../components/vendor/VendorSpotlight';
import VendorFilter from '../components/vendor/VendorFilter';
import VendorStats from '../components/vendor/VendorStats';
import PageHero from '../components/ui/PageHero';
import GradientText from '../components/ui/GradientText';
import FoodVendorTrucksCarousel from '../components/sections/FoodVendorTrucksCarousel';

// Types for vendor data
interface TartVariety {
  name: string;
  description: string;
  price: string;
  isSignature?: boolean;
}

interface Vendor {
  id: number;
  name: string;
  image: string;
  logo?: string;
  description: string;
  location: string;
  established: string;
  specialties: string[];
  hours?: string;
  tarts: TartVariety[];
  story: string;
  awards?: string[];
  website: string;
  phone?: string;
  email?: string;
}

// 🖼️ Local vendor images - uncomment when available
// import sweetHeritageImage from '../assets/images/vendors/sweet-heritage.jpeg';
// import sweetHeritageLogo from '../assets/images/vendors/sweet-heritage-logo.jpeg';
// import tartSoulKitchenImage from '../assets/images/vendors/tart-soul-kitchen.jpeg';
// import tartSoulKitchenLogo from '../assets/images/vendors/tart-soul-kitchen-logo.jpeg';
// import southernSweetsImage from '../assets/images/vendors/southern-sweets.jpeg';
// import southernSweetsLogo from '../assets/images/vendors/southern-sweets-logo.jpeg';
// import bluesBerriesImage from '../assets/images/vendors/blues-berries.jpeg';
// import bluesBerriesLogo from '../assets/images/vendors/blues-berries-logo.jpeg';

// Sample vendor data with enhanced structure
const ALL_VENDORS: Vendor[] = [
  {
    id: 1,
    name: "Sweet Heritage Bakery",
    image: "placeholder-vendor-image", // 🔜 Replace with: image: sweetHeritageImage
    logo: "placeholder-vendor-logo",   // 🔜 Replace with: logo: sweetHeritageLogo
    description: "Crafting traditional butter tarts with a soul food twist since 1985.",
    location: "Downtown Chatham-Kent",
    established: "1985",
    specialties: ["Classic Butter Tart", "Soul Food Fusion", "Vegan Options"],
    hours: "Tue-Sat: 7AM-6PM",
    tarts: [
      {
        name: "Classic Soul Butter Tart",
        description: "Our signature butter tart with a hint of bourbon vanilla",
        price: "$3.95",
        isSignature: true,
      },
      {
        name: "Sweet Potato Butter Tart",
        description: "A soul food inspired twist on the classic",
        price: "$4.25",
      },
      {
        name: "Pecan Praline Butter Tart",
        description: "Southern comfort meets Canadian tradition",
        price: "$4.50",
      }
    ],
    story: "Founded by Grandma Rose in 1985, Sweet Heritage Bakery bridges cultural traditions through the art of baking. Our butter tarts use a secret family recipe that marries Canadian techniques with soul food influences. Each tart is crafted with locally sourced ingredients and time-honored methods passed down through generations, creating a unique fusion that celebrates our diverse culinary heritage.",
    awards: [
      "Best Butter Tart - Chatham-Kent Food Festival 2023",
      "Heritage Award - Ontario Culinary Association 2022",
      "Community Choice Award - Soul Food Festival 2023"
    ],
    website: "https://example.com",
    phone: "(555) 123-4567",
    email: "info@sweetheritage.com"
  },
  {
    id: 2,
    name: "Tart & Soul Kitchen",
    image: "placeholder-vendor-image", // 🔜 Replace with: image: tartSoulKitchenImage
    logo: "placeholder-vendor-logo",   // 🔜 Replace with: logo: tartSoulKitchenLogo
    description: "Where modern innovation meets traditional butter tart crafting.",
    location: "East Chatham",
    established: "2010",
    specialties: ["Artisanal Tarts", "Seasonal Flavors", "Custom Orders"],
    hours: "Mon-Sat: 8AM-7PM, Sun: 9AM-3PM",
    tarts: [
      {
        name: "Maple Bourbon Butter Tart",
        description: "Rich maple syrup and premium bourbon",
        price: "$4.50",
        isSignature: true,
      },
      {
        name: "Chocolate Soul Tart",
        description: "Dark chocolate meets butter tart perfection",
        price: "$4.25",
      },
      {
        name: "Cinnamon Spice Butter Tart",
        description: "Warm spices with a caramelized crust",
        price: "$4.00",
      }
    ],
    story: "Started by Chef James Wilson, Tart & Soul Kitchen combines professional pastry techniques with home-style comfort. Each tart is handcrafted with locally sourced ingredients. Chef James draws inspiration from his grandmother's Southern cooking, infusing traditional Canadian butter tarts with the soulful flavors of his heritage. Our small-batch approach ensures quality and consistency in every delicious bite.",
    awards: [
      "Rising Star Award - Ontario Baking Association 2022",
      "Innovation Excellence - Food & Drink Magazine 2023"
    ],
    website: "https://example.com",
    phone: "(555) 987-6543",
    email: "hello@tartandsoulkitchen.com"
  },
  {
    id: 3,
    name: "Southern Sweet Spot",
    image: "placeholder-vendor-image", // 🔜 Replace with: image: southernSweetsImage
    logo: "placeholder-vendor-logo",   // 🔜 Replace with: logo: southernSweetsLogo
    description: "Authentic Southern-inspired desserts with a Canadian twist.",
    location: "North Chatham",
    established: "2015",
    specialties: ["Southern Flavors", "Gluten-Free Options", "Mini Tarts"],
    hours: "Wed-Sun: 10AM-6PM",
    tarts: [
      {
        name: "Georgia Peach Butter Tart",
        description: "Fresh peaches in a traditional butter tart base",
        price: "$4.75",
        isSignature: true,
      },
      {
        name: "Sweet Potato Pie Tart",
        description: "Southern classic reimagined as a butter tart",
        price: "$4.50",
      },
      {
        name: "Classic Butter Tart",
        description: "Traditional recipe with premium ingredients",
        price: "$3.95",
      }
    ],
    story: "Southern Sweet Spot was born from a passion for bringing together the best of Southern dessert traditions with the iconic Canadian butter tart. Owner Melissa Thomas moved to Chatham-Kent from Georgia and fell in love with butter tarts, seeing an opportunity to blend her Southern baking heritage with this Canadian classic. Each recipe is developed through countless tastings and refinements to achieve the perfect balance of flavors.",
    website: "https://example.com"
  },
  {
    id: 4,
    name: "Blues & Berries Bakery",
    image: "placeholder-vendor-image", // 🔜 Replace with: image: bluesBerriesImage
    logo: "placeholder-vendor-logo",   // 🔜 Replace with: logo: bluesBerriesLogo
    description: "Berry-infused butter tarts with a musical twist.",
    location: "West Chatham",
    established: "2018",
    specialties: ["Berry Tarts", "Music-Themed Desserts", "Organic Ingredients"],
    hours: "Thu-Mon: 9AM-8PM",
    tarts: [
      {
        name: "Blueberry Blues Tart",
        description: "Wild blueberries with a touch of lemon zest",
        price: "$4.95",
        isSignature: true,
      },
      {
        name: "Raspberry Rhythm Tart",
        description: "Tart raspberries with white chocolate undertones",
        price: "$4.95",
      },
      {
        name: "Soul Berry Medley",
        description: "Mixed berry butter tart with a brown sugar crust",
        price: "$5.25",
      }
    ],
    story: "Blues & Berries combines owner Marcus Johnson's love of music and baking. A former blues musician, Marcus found parallels between creating the perfect melody and the perfect tart. Each of our creations is named after a musical style or famous song, celebrating the harmony between food and music. We source organic berries from local farms and focus on sustainable practices in everything we do.",
    awards: [
      "Best New Bakery - Chatham Business Awards 2019",
      "Sustainability Champion - Green Eating Magazine 2022"
    ],
    website: "https://example.com",
    phone: "(555) 789-0123",
    email: "orders@bluesandberries.com"
  }
];

// Available specialties for filtering
const SPECIALTY_OPTIONS = [
  { label: "Classic Butter Tart", value: "Classic Butter Tart" },
  { label: "Soul Food Fusion", value: "Soul Food Fusion" },
  { label: "Vegan Options", value: "Vegan Options" },
  { label: "Artisanal Tarts", value: "Artisanal Tarts" },
  { label: "Seasonal Flavors", value: "Seasonal Flavors" },
  { label: "Southern Flavors", value: "Southern Flavors" },
  { label: "Gluten-Free Options", value: "Gluten-Free Options" },
  { label: "Mini Tarts", value: "Mini Tarts" },
  { label: "Berry Tarts", value: "Berry Tarts" },
  { label: "Organic Ingredients", value: "Organic Ingredients" },
  { label: "Custom Orders", value: "Custom Orders" },
];

// Available locations for filtering
const LOCATION_OPTIONS = [
  { label: "Downtown", value: "Downtown Chatham-Kent" },
  { label: "East", value: "East Chatham" },
  { label: "North", value: "North Chatham" },
  { label: "West", value: "West Chatham" },
];

const ITEMS_PER_PAGE = 5;

const VendorsPage = () => {
  // State for managing vendors and filtering
  const [page, setPage] = useState(1);
  const [vendors, setVendors] = useState<Vendor[]>([]);

  // Calculate paginated vendors
  const paginatedVendors = vendors.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVendor, setSelectedVendor] = useState<number | null>(null);
  const [spotlightVendor, setSpotlightVendor] = useState<number | null>(null);

  // Filter states
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showAwardWinning, setShowAwardWinning] = useState(false);
  
  // Scroll related hooks
  const { scrollY } = useScroll();
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Parallax transformations
  const bgY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Filter functions
  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const handleAwardWinningChange = () => {
    setShowAwardWinning(prev => !prev);
  };

  // Function to fetch vendors with simulated delay
  const fetchVendors = React.useCallback(async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Filter vendors based on selected filters
    let filteredVendors = [...ALL_VENDORS];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredVendors = filteredVendors.filter(vendor => 
        vendor.name.toLowerCase().includes(query) ||
        vendor.description.toLowerCase().includes(query) ||
        vendor.specialties.some(s => s.toLowerCase().includes(query))
      );
    }
    
    // Apply specialty filter
    if (selectedSpecialties.length > 0) {
      filteredVendors = filteredVendors.filter(vendor => 
        vendor.specialties.some(s => selectedSpecialties.includes(s))
      );
    }
    
    // Apply location filter
    if (selectedLocations.length > 0) {
      filteredVendors = filteredVendors.filter(vendor => 
        selectedLocations.includes(vendor.location)
      );
    }
    
    // Apply award-winning filter
    if (showAwardWinning) {
      filteredVendors = filteredVendors.filter(vendor => 
        vendor.awards && vendor.awards.length > 0
      );
    }
    
    setVendors(filteredVendors);
     // Since we're loading all filtered vendors at once
    setLoading(false);
  }, [searchQuery, selectedSpecialties, selectedLocations, showAwardWinning]);
  
  // Effect to fetch vendors when filters change
  useEffect(() => {
    fetchVendors();
    // Reset selected vendor when filters change
    setSelectedVendor(null);
    setSpotlightVendor(null);
  }, [fetchVendors]);
  

  // Handle card expansion and spotlight
  const toggleVendorExpansion = (vendorId: number) => {
    // If clicking on the currently selected vendor, close it
    if (selectedVendor === vendorId) {
      setSelectedVendor(null);
      // Allow a small delay before closing the spotlight
      setTimeout(() => setSpotlightVendor(null), 300);
    } else {
      // If selecting a new vendor
      setSelectedVendor(vendorId);
      setSpotlightVendor(vendorId);
      
      // Scroll to the selected vendor's spotlight after a small delay
      setTimeout(() => {
        const spotlightElement = document.getElementById(`spotlight-${vendorId}`);
        if (spotlightElement) {
          spotlightElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
    }
  };
  

  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="relative overflow-hidden pt-10 bg-[#1F1413]">
      <SEO 
        title="Vendors & Artisans | Tart & Soul Fest"
        description="Discover talented vendors and artisans at Tart & Soul Fest. Explore unique crafts, delicious food, and one-of-a-kind products from local and regional makers."
        keywords={['Tart & Soul Fest vendors', 'artisan market', 'local crafts', 'food vendors', 'shopping festival']}
        type="website"
      />
      {/* Decorative background */}
      <motion.div
        className="absolute inset-0 bg-[#1F1413] z-0"
        style={{ y: bgY, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E1F1F]/80 to-[#1F1413]/90 z-0" />
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgNC4yNWEuNzUuNzUgMCAwMS43NS43NXY1MGEuNzUuNzUgMCAwMS0xLjUgMHYtNTBhLjc1Ljc1IDAgMDEuNzUtLjc1ek00LjI1IDMwYS43NS43NSAwIDAxLjc1LS43NWg1MGEuNzUuNzUgMCAwMTAgMS41aC01MGEuNzUuNzUgMCAwMS0uNzUtLjc1eiIgZmlsbD0iIzAwQTg5RiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]" />
      </motion.div>
      
      {/* Page Hero */}
      <PageHero
        variant="vendors"
        title="Our Vendors"
        subtitle="Discover the talented bakers and artisans behind Tart & Soul. Explore their stories, specialties, and award-winning tarts."
        highlights={[
          { icon: Store, text: 'Local Vendors' },
          { icon: CakeSlice, text: 'Signature Tarts' },
          { icon: Users, text: 'Family-Owned' },
        ]}
        image="/images/vendors-hero.jpg" // Update as needed for your vendor hero image
      />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Vendor Stats */}
        <VendorStats />
        
        {/* Search & Filter Section */}
        <div className="relative z-20 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 relative"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search vendors, specialties, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#2E1F1F] border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A89F] focus:border-transparent"
            />
          </motion.div>
          
          <VendorFilter 
            specialties={SPECIALTY_OPTIONS}
            locations={LOCATION_OPTIONS}
            selectedSpecialties={selectedSpecialties}
            selectedLocations={selectedLocations}
            onSpecialtyChange={handleSpecialtyChange}
            onLocationChange={handleLocationChange}
            showAwardWinning={showAwardWinning}
            onAwardWinningChange={handleAwardWinningChange}
          />
        </div>
        
        {/* Results Summary */}
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            <GradientText variant="primary">
              {vendors.length === 0 && !loading
                ? "No vendors found"
                : `Discovered ${vendors.length} Artisans`
              }
            </GradientText>
          </motion.h2>
        </div>
        
        {/* Loading State */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <Loader2 size={48} className="animate-spin text-[#00A89F] mb-4" />
              <p className="text-gray-300 text-lg">Discovering amazing tartisans...</p>
            </motion.div>
          ) : vendors.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CakeSlice size={64} className="text-gray-600 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Vendors Found</h3>
              <p className="text-gray-300 max-w-md mb-6">
                We couldn't find any vendors matching your criteria. Try adjusting your filters or search term.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSpecialties([]);
                  setSelectedLocations([]);
                  setShowAwardWinning(false);
                }}
                className="bg-[#00A89F] text-[#1F1413] px-6 py-2 rounded-full font-medium"
              >
                Reset All Filters
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              ref={contentRef}
              className="relative"
            >
              {/* Vendors Grid with Expanded Vendor Spotlights */}
              <div className="space-y-16">
                {paginatedVendors.map((vendor) => (
                  <div key={vendor.id} className="relative">
                    {/* Vendor Card */}
                    <VendorCard 
                      vendor={vendor}
                      onClick={() => toggleVendorExpansion(vendor.id)}
                      isExpanded={selectedVendor === vendor.id}
                      isSpotlightOpen={spotlightVendor !== null}
                    />
                    
                    {/* Vendor Spotlight */}
                    <div id={`spotlight-${vendor.id}`} className="mt-6">
                      <VendorSpotlight 
                        vendor={vendor}
                        isActive={spotlightVendor === vendor.id}
                      />
                    </div>
                  </div>
                ))}

                {/* Pagination Controls */}
                <div className="flex justify-center mt-10 gap-4">
                  <button
                    className="px-4 py-2 rounded-full bg-[#2E1F1F] text-white border border-tart-mint disabled:opacity-50"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                  <span className="text-tart-mint font-semibold flex items-center">Page {page} of {Math.max(1, Math.ceil(vendors.length / ITEMS_PER_PAGE))}</span>
                  <button
                    className="px-4 py-2 rounded-full bg-[#2E1F1F] text-white border border-tart-mint disabled:opacity-50"
                    onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(vendors.length / ITEMS_PER_PAGE)))}
                    disabled={page >= Math.ceil(vendors.length / ITEMS_PER_PAGE)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Food Vendor Trucks Infinite Carousel */}
      <FoodVendorTrucksCarousel />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default VendorsPage;