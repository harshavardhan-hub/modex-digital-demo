import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Headphones, Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/utils/constants';
import { fadeInUp } from '@/utils/animations';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

const Support: React.FC = () => {
  const [ref, isInView] = useInView();

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I'm interested in your services!");
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+/g, '')}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section ref={ref} className="section-padding bg-primary text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Headphones className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                24/7 Support
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-neutral-300 mb-8">
              We're here to help you succeed. Get in touch anytime, and we'll respond
              within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <div className="text-sm text-neutral-400">Call Us</div>
                  <div className="font-semibold">{SITE_CONFIG.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <div className="text-sm text-neutral-400">Email Us</div>
                  <div className="font-semibold break-all">{SITE_CONFIG.email}</div>
                </div>
              </a>

              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <MessageCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <div className="text-left">
                  <div className="text-sm text-neutral-400">WhatsApp</div>
                  <div className="font-semibold">Chat with us instantly</div>
                </div>
              </button>
            </div>

            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Open a Ticket
            </Button>
          </motion.div>

          {/* Right Illustration - HIDDEN ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                alt="24/7 Customer Support"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent2/20 mix-blend-overlay"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-accent text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              ⚡ Fast Response
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Support;
