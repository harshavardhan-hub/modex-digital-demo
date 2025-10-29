import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', path: '/#about' },
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product' },
    { name: 'Clients', path: '/clients' },
  ];

  const supportLinks = [
    { name: 'Support Center', path: '/support' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              {/* Add social media icons here if needed */}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start space-x-3 text-sm text-neutral-300 hover:text-accent transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start space-x-3 text-sm text-neutral-300 hover:text-accent transition-colors break-all"
                >
                  <Mail size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-neutral-300">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-neutral-400 text-center sm:text-left">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs text-neutral-400">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
              <span>•</span>
              <a href="/sitemap.xml" className="hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
