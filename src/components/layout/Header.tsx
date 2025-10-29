import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import Button from '@/components/common/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        style={{ width: '100vw', maxWidth: '100vw', margin: 0, padding: 0 }}
      >
        <div className="w-full" style={{ maxWidth: '100vw', overflow: 'hidden' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <nav className="flex items-center justify-between py-3 w-full" style={{ width: '100%' }}>
              {/* Logo */}
              <Link to="/" className="flex items-center relative z-50 flex-shrink-0">
                <img
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  className="h-9 sm:h-10 w-auto object-contain"
                  style={{ maxHeight: '40px' }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      location.pathname === link.path
                        ? 'text-accent'
                        : 'text-primary hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm font-medium text-accent hover:text-accent2 hidden xl:flex items-center space-x-2 transition-colors whitespace-nowrap"
                >
                  <Phone size={16} />
                  <span className="text-xs">{SITE_CONFIG.phone}</span>
                </a>
                <Button as={Link} to="/contact" variant="primary" size="sm">
                  Contact
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-primary hover:text-accent transition-colors relative z-50 flex-shrink-0 ml-auto"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              style={{ maxWidth: '85vw' }}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="px-5 py-6 border-b border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-primary">Menu</h2>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                      aria-label="Close menu"
                    >
                      <X size={20} className="text-neutral-600" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500">Explore our services</p>
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
                              : 'text-primary hover:bg-neutral-100'
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

                {/* Contact Information */}
                <div className="px-5 py-5 border-t border-neutral-200 bg-neutral-50">
                  <h3 className="text-xs font-semibold text-primary mb-3">Get In Touch</h3>
                  
                  <div className="space-y-2.5 mb-4">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center space-x-2.5 text-neutral-700 hover:text-accent transition-colors"
                    >
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                        <Phone size={15} className="text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] text-neutral-500">Call us</div>
                        <div className="text-xs font-medium truncate">{SITE_CONFIG.phone}</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center space-x-2.5 text-neutral-700 hover:text-accent transition-colors"
                    >
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                        <Mail size={15} className="text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] text-neutral-500">Email us</div>
                        <div className="text-[10px] font-medium break-all leading-tight">{SITE_CONFIG.email}</div>
                      </div>
                    </a>
                  </div>

                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full text-sm"
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
