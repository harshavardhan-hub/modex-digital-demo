import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import Container from '@/components/common/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/#about' },
      { name: 'Services', path: '/services' },
      { name: 'Product', path: '/product' },
      { name: 'Clients', path: '/clients' },
    ],
    Support: [
      { name: 'Contact', path: '/contact' },
      { name: 'Support Center', path: '/support' },
      { name: 'FAQ', path: '/support#faq' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-neutral-400 text-sm mb-4">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-neutral-400 hover:text-accent transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-sm">
                  <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-neutral-400 hover:text-accent transition-colors duration-200"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-sm">
                  <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-neutral-400 hover:text-accent transition-colors duration-200"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-sm">
                  <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-400">
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-neutral-400 hover:text-accent text-sm transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-neutral-400 hover:text-accent text-sm transition-colors duration-200"
              >
              Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
