import React, { useState } from 'react';
import {
  Menu,
  X,
  Music2,
  Home,
  Info,
  Calendar,
  Landmark,
  Store,
  BookOpen,
  History,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../../assets/images/tart-and-soul.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Sponsors', href: '/sponsors', icon: Landmark },
    { name: 'Vendors', href: '/vendors', icon: Store },
    { name: 'Recipes', href: '/recipes', icon: BookOpen },
    { name: 'History', href: '/history', icon: History },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header className="fixed w-full bg-[#2E1F1F] text-white z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          className="flex items-center space-x-2 nav-link"
        >
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="h-12 w-12 rounded-full bg-[#2E1F1F] p-1 shadow-lg"
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Logo image commented out for now */}
              {/* <img src={logo} alt="Tart & Soul" className="h-full w-full object-contain" /> */}
              <Music2 className="h-full w-full text-[#00A89F] drop-shadow-lg transition-colors duration-300 group-hover:text-white" />
            </motion.div>
            <motion.span
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Tart & Soul
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + idx * 0.06 }}
                whileHover={{ scale: 1.13, rotate: 2 }}
                className="flex items-center"
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 nav-link transition-colors duration-300 ${location.pathname === item.href ? 'text-[#00A89F]' : ''}`}
                >
                  <Icon className="w-5 h-5 mr-1 transition-colors duration-300 group-hover:text-[#00A89F]" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9, rotate: -15 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="inline-block"
              >
                <X size={28} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="inline-block"
              >
                <Menu size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#3A2C2C]"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.06 }}
                    whileHover={{ scale: 1.08, x: 10 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 py-2 nav-link transition-colors duration-300 ${location.pathname === item.href ? 'text-[#00A89F]' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5 mr-1 transition-colors duration-300 group-hover:text-[#00A89F]" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;