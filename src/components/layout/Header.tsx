import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

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

  // Prevent body scroll when menu is open
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
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Container>
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 relative z-50">
              <img
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
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
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-sm font-medium text-accent hover:text-accent2 flex items-center space-x-2 transition-colors"
              >
                <Phone size={18} />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <Button as={Link} to="/contact" variant="primary" size="sm">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-primary hover:text-accent transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </Container>
      </motion.header>

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
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="px-6 py-8 border-b border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-primary">Menu</h2>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                      aria-label="Close menu"
                    >
                      <X size={24} className="text-neutral-600" />
                    </button>
                  </div>
                  <p className="text-sm text-neutral-500">Navigate to explore our services</p>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group ${
                            location.pathname === link.path
                              ? 'bg-accent text-white'
                              : 'text-primary hover:bg-neutral-100'
                          }`}
                        >
                          <span className="font-medium">{link.name}</span>
                          <ArrowRight
                            size={18}
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
                <div className="px-6 py-6 border-t border-neutral-200 bg-neutral-50">
                  <h3 className="text-sm font-semibold text-primary mb-4">Get In Touch</h3>
                  
                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center space-x-3 text-neutral-700 hover:text-accent transition-colors"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Phone size={18} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">Call us</div>
                        <div className="text-sm font-medium">{SITE_CONFIG.phone}</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center space-x-3 text-neutral-700 hover:text-accent transition-colors"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Mail size={18} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">Email us</div>
                        <div className="text-sm font-medium break-all">{SITE_CONFIG.email}</div>
                      </div>
                    </a>
                  </div>

                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    className="w-full"
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
