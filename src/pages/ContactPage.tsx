import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Building2, Store, HandHeart, CakeSlice, Users, Award } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import GradientText from '../components/ui/GradientText';
import TartisanForm from '../components/forms/TartisanForm';
import SponsorForm from '../components/forms/SponsorForm';
import VolunteerForm from '../components/forms/VolunteerForm';
import CorporateCrustChallengeForm from '../components/forms/CorporateCrustChallengeForm';
import ScrollToTopButton from '../components/common/ScrollToTopButton';

const HIGHLIGHTS = [
  {
    icon: HandHeart,
    text: "Become a Sponsor"
  },
  {
    icon: CakeSlice,
    text: "Tartasians"
  },
  {
    icon: Award,
    text: "Crust Challenge"
  },
  {
    icon: Users,
    text: "Volunteer"
  },
  {
    icon: Mail,
    text: "Get in Touch"
  }
];



const ContactPage = () => {
  // Sponsor form is now managed in its own component (SponsorForm) and not in ContactPage state.

  // Tartisan form is now managed in its own component (TartisanForm) and not in ContactPage state.

  // Volunteer form is now managed in its own component (VolunteerForm) and not in ContactPage state.

  const [activeForm, setActiveForm] = useState<'sponsor' | 'tartisan' | 'volunteer' | 'crustChallenge'>('sponsor');

  return (
    <>
      <div className="pt-20">
        <PageHero
          variant="sponsors"
          title="Get in Touch"
          subtitle="Join our vibrant community as a sponsor or vendor"
          highlights={HIGHLIGHTS}
          image="/images/contact-hero.jpg"
        />

        <section className="py-20 bg-soul-brown text-white">
          <div className="container mx-auto px-4">
            {/* Contact Information */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">
                <GradientText variant="primary">Contact Information</GradientText>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center p-6 bg-[#3A2C2C] rounded-lg"
                >
                  <Mail className="text-tart-mint mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="mailto:dougthefoodie@icloud.com" className="text-gray-300 hover:text-tart-mint transition-colors">
                  dougthefoodie@icloud.com
                  </a>
                </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center p-6 bg-[#3A2C2C] rounded-lg"
              >
                <Phone className="text-tart-mint mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+15193556386" className="text-gray-300 hover:text-tart-mint transition-colors">
                  (519) 355-6386
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center p-6 bg-[#3A2C2C] rounded-lg"
              >
                <MapPin className="text-tart-mint mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">27 Adelaide Street South, Chatham-Kent, ON</p>
              </motion.div>
            </div>
          </div>

          {/* Form Tabs */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex space-x-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveForm('sponsor')}
                className={`flex items-center px-6 py-3 rounded-full font-bold ${
                  activeForm === 'sponsor'
                    ? 'bg-tart-mint text-soul-brown'
                    : 'border-2 border-tart-mint text-tart-mint'
                }`}
              >
                <Building2 className="mr-2" size={20} />
                Become a Sponsor
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveForm('tartisan')}
                className={`flex items-center px-6 py-3 rounded-full font-bold ${
                  activeForm === 'tartisan'
                    ? 'bg-tart-mint text-soul-brown'
                    : 'border-2 border-tart-mint text-tart-mint'
                }`}
              >
                <Store className="mr-2" size={20} />
                Join as Tartisan
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveForm('volunteer')}
                className={`flex items-center px-6 py-3 rounded-full font-bold ${
                  activeForm === 'volunteer'
                    ? 'bg-tart-mint text-soul-brown'
                    : 'border-2 border-tart-mint text-tart-mint'
                }`}
              >
                <Users className="mr-2" size={20} />
                Volunteer Sign Up
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveForm('crustChallenge')}
                className={`flex items-center px-6 py-3 rounded-full font-bold ${
                  activeForm === 'crustChallenge'
                    ? 'bg-tart-mint text-soul-brown'
                    : 'border-2 border-tart-mint text-tart-mint'
                }`}
              >
                <Award className="mr-2" size={20} />
                Crust Challenge
              </motion.button>
            </div>
          </div>

          {/* Forms */}
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {activeForm === 'sponsor' && <SponsorForm />}
              {activeForm === 'tartisan' && <TartisanForm />}
              {activeForm === 'volunteer' && <VolunteerForm />}
              {activeForm === 'crustChallenge' && <CorporateCrustChallengeForm />}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
      <ScrollToTopButton />
    </>
  );
};

export default ContactPage;