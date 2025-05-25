
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import { motion } from 'framer-motion';
import { Heart, Music, Users, BookOpen, History as HistoryIcon, Sparkles } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GradientText from '../components/ui/GradientText';

const HIGHLIGHTS = [
  {
    icon: BookOpen,
    text: "Our Story"
  },
  {
    icon: HistoryIcon,
    text: "Rich Heritage"
  },
  {
    icon: Sparkles,
    text: "Cultural Impact"
  }
];

const AboutPage = () => {
  return (
    <>
      <div className="pt-20">
        <PageHero
          variant="about"
          title="Preserving Our Heritage"
          subtitle="Discover the story behind Tart & Soul and our mission to celebrate Black culture through food and community."
          highlights={HIGHLIGHTS}
          image="/images/TartSoulFest3.png"
        />

        <section className="py-20 bg-soul-brown text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6">About Tart & Soul</h1>
              <p className="text-xl text-gray-300">
                Where community, culture, and culinary delights come together to create unforgettable experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  <GradientText variant="primary">Our Story</GradientText>
                </h2>
                <p className="text-gray-300 mb-6">
                  Founded in the heart of Chatham-Kent, Tart & Soul began as a celebration of 
                  Black culture through the universal languages of food and music. Our signature butter tarts, infused with soul food inspiration, have become a symbol of 
                  cultural fusion and community connection.
                </p>
                <p className="text-gray-300">
                  Today, we're more than just a gathering place – we're a cultural hub where 
                  traditions are honored, new connections are forged, and the spirit of soul 
                  lives in every bite and beat.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#3A2C2C] p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="text-tart-mint w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Community First</h4>
                      <p className="text-gray-300">Building stronger bonds through shared experiences.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Music className="text-tart-mint w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Cultural Celebration</h4>
                      <p className="text-gray-300">Honouring Black heritage through food and music.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="text-tart-mint w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Inclusive Space</h4>
                      <p className="text-gray-300">Creating welcoming environments for all.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mission and Vision */}
            <div className="mt-20">
              <div className="max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-[#3A2C2C] rounded-lg overflow-hidden mb-12"
                >
                  <div className="p-1 bg-gradient-to-r from-[#00A89F] via-[#FFA600] to-[#00A89F]"></div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                      <GradientText variant="secondary">Our Mission</GradientText>
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      The Tart & Soul Butter Tart Festival is dedicated to celebrating community, culture, and culinary heritage by bringing together the rich traditions of soul food, soul music, and Canada's iconic butter tart. Founded by a Black entrepreneur with a passion for cultural expression, this festival uplifts diverse voices, supports local farmers and bakers, and fosters an inclusive space where food, music, and history unite.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-[#3A2C2C] rounded-lg overflow-hidden"
                >
                  <div className="p-1 bg-gradient-to-r from-[#FFA600] via-[#00A89F] to-[#FFA600]"></div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                      <GradientText variant="accent">Our Vision</GradientText>
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      To establish the Tart & Soul Butter Tart Festival as a premier tourism and cultural event that honours Black culture, Canadian culinary traditions, and local entrepreneurship. Through food, music, and storytelling, we aim to create a lasting legacy of inclusion, economic empowerment, and cultural pride, making Chatham a destination where people from all backgrounds come together to savour, celebrate, and soulfully connect.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;
