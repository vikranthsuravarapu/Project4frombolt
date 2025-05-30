import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import Testimonials from '../components/home/Testimonials';
import Calculator from '../components/home/Calculator';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'BrickMaster | Premium Construction Services';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <ProjectsShowcase />
      <Testimonials />
      <Calculator />
      <CTA />
    </>
  );
};

export default HomePage;