import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2E1F1F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Music2 className="h-8 w-8 text-[#00A89F]" />
              <h3 className="text-xl font-bold">Tart & Soul</h3>
            </div>
            <p className="text-gray-300">
              Celebrating Black culture through food, music, and community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-[#00A89F] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00A89F] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00A89F] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>27 Adelaide St South, Chatham-Kent</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:dougthefoodie@icloud.com" className="hover:text-[#00A89F] transition-colors">
                  dougthefoodie@icloud.com
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+15193556386" className="hover:text-[#00A89F] transition-colors">
                  (519) 355-6386
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="text-gray-300">
              <p>Saturday June 28: 11am - 11pm</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-[#00A89F] transition-colors">About Us</a>
              <a href="/events" className="block text-gray-300 hover:text-[#00A89F] transition-colors">Events</a>
              <a href="/blog" className="block text-gray-300 hover:text-[#00A89F] transition-colors">Blog</a>
              <a href="/sponsors" className="block text-gray-300 hover:text-[#00A89F] transition-colors">Sponsors</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Tart & Soul. Made with ❤️ in Chatham-Kent. All rights reserved.
          </p>
          <p className="text-gray-300 mt-2">
            Powered by IntelliSync Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;