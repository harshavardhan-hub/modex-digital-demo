import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, TrendingUp, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import SEO from '@/components/seo/SEO';

const Product: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setSubscribed(true);
    setEmail('');
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'AI-Powered Automation',
      description: 'Automate repetitive tasks and workflows with intelligent automation.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Real-Time Analytics',
      description: 'Get actionable insights with comprehensive analytics dashboard.',
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Enterprise Security',
      description: 'Bank-level security to keep your business data safe.',
    },
  ];

  return (
    <>
      <SEO
        title="Product — Next-Gen Business Platform — Modex Digital"
        description="Join the waitlist for our upcoming business management platform with AI automation and analytics."
        canonical="/product"
      />

      {/* Hero - Single Page View */}
      <section className="h-screen flex items-center bg-gradient-to-br from-primary via-primary to-neutral-900 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                🚀 Coming Q1 2026
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-white">
                The Future of Business Management
              </h1>

              <p className="text-lg text-neutral-300 mb-6">
                An all-in-one platform designed for small businesses to manage operations,
                automate workflows, and scale efficiently with AI-powered insights.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  'Unified dashboard for all business operations',
                  'Smart automation that saves hours every week',
                  'Real-time collaboration tools',
                  'Mobile-first design for on-the-go management',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Waitlist Form */}
              {!subscribed ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-3 rounded-lg text-primary focus:ring-2 focus:ring-accent text-sm"
                  />
                  <Button type="submit" variant="primary" size="md">
                    Join Waitlist
                  </Button>
                </form>
              ) : (
                <div className="bg-success/20 border border-success text-success px-5 py-3 rounded-lg text-sm">
                  ✓ Thank you! We'll notify you when we launch.
                </div>
              )}
            </motion.div>

            {/* Product Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="https://res.cloudinary.com/drit9nkha/image/upload/v1761921397/unnamed_1_fel5z4.jpg"
                  alt="Product Dashboard Mockup"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent2/20 mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-primary mb-4">Powerful Features</h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Everything you need to run your business efficiently
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={staggerItem}>
                <Card className="text-center h-full">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Pricing Teaser */}
      <section className="section-padding bg-neutral-100">
        <Container size="md">
          <div className="text-center">
            <h2 className="heading-2 text-primary mb-4">Early Bird Pricing</h2>
            <p className="text-lg text-neutral-500 mb-8">
              Join the waitlist and get exclusive early bird discount
            </p>
            <div className="bg-white rounded-2xl shadow-card p-12 max-w-md mx-auto">
              <div className="text-5xl font-bold text-primary mb-2">
                50% <span className="text-2xl">OFF</span>
              </div>
              <div className="text-neutral-500 mb-6">for first 100 customers</div>
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-sm text-neutral-600">
                Subscribe to the waitlist to secure your early bird discount
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-accent to-accent2 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-2 text-white mb-6">
              Be Among the First to Experience It
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our waitlist and get exclusive early access when we launch.
            </p>
            {!subscribed ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-lg text-primary"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-accent"
                >
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="bg-white/20 border border-white text-white px-6 py-4 rounded-lg max-w-md mx-auto">
                ✓ You're on the list! Check your email for confirmation.
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Product;
