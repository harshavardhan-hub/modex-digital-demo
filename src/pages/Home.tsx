import React from 'react';
import Hero from '@/components/home/Hero';
import ServiceSnapshot from '@/components/home/ServiceSnapshot';
import Solutions from '@/components/home/Solutions';
import ProductTeaser from '@/components/home/ProductTeaser';
import OurProcess from '@/components/home/OurProcess'; 
import Automation from '@/components/home/Automation';
import Stats from '@/components/home/Stats';
import CaseStudies from '@/components/home/CaseStudies';
import Testimonials from '@/components/home/Testimonials';
import Support from '@/components/home/Support';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceSnapshot />
      <Solutions />
      <ProductTeaser />
      <OurProcess /> 
      <Automation />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Support />
    </>
  );
};

export default Home;
