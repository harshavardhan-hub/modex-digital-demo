import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import Button from '@/components/common/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsMobileMenuOpen(false), [location]);
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product' },
    { name: 'Clients', path: '/clients' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <>
      {/* ================= Desktop Header ================= */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 z-50">
            <img
              src={SITE_CONFIG.logo}
              alt={SITE_CONFIG.name}
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Center Nav — perfectly centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex items-center bg-white rounded-full shadow-md px-10 py-2 space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-neutral-800 hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Updated Button — Fixed Hover (No Color Change) */}
          <Button
            as={Link}
            to="/contact"
            variant="primary"
            size="sm"
            className="rounded-full px-6 py-2 bg-accent text-white shadow-md flex items-center space-x-2 transition-all duration-200"
          >
            <span>Book a Call</span>
            <ArrowRight size={15} />
          </Button>
        </div>
      </header>

      {/* ================= Mobile Header ================= */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-transparent px-3 pt-2">
        <div className="flex items-center justify-between px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={SITE_CONFIG.logo}
              alt={SITE_CONFIG.name}
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* Menu Button */}
          <button
            className="p-1.5 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ================= Mobile Drawer ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 rounded-l-2xl overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="px-5 py-5 border-b border-neutral-200 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-neutral-800">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} className="text-neutral-600" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-5 py-5">
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 group ${
                            location.pathname === link.path
                              ? 'bg-accent text-white'
                              : 'text-neutral-800 hover:bg-neutral-100'
                          }`}
                        >
                          <span className="font-medium text-sm">{link.name}</span>
                          <ArrowRight
                            size={16}
                            className={`transition-transform group-hover:translate-x-1 ${
                              location.pathname === link.path
                                ? 'text-white'
                                : 'text-neutral-400'
                            }`}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Info */}
                <div className="px-5 py-5 border-t border-neutral-200 bg-neutral-50 rounded-b-2xl">
                  <h3 className="text-xs font-semibold text-neutral-700 mb-3">Get In Touch</h3>
                  <div className="space-y-3 mb-4">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center space-x-2 text-neutral-800 hover:text-accent"
                    >
                      <Phone size={15} />
                      <span className="text-sm">{SITE_CONFIG.phone}</span>
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center space-x-2 text-neutral-800 hover:text-accent"
                    >
                      <Mail size={15} />
                      <span className="text-sm break-all">{SITE_CONFIG.email}</span>
                    </a>
                  </div>
                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full rounded-full bg-accent text-white text-sm"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
