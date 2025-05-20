import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import Welcome from '../components/Welcome';
import ProblemSolution from '../components/ProblemSolution';
import Catalog from '../components/Catalog';
import WhyUs from '../components/Whyus';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SocialButtons from '../components/SocialButtons';
import SolutionSection from '../components/SolutionSection';
import OrderSection from '../components/OrderSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeCarousel />
      <Welcome />
      <ProblemSolution />
      <SolutionSection />
      <Catalog />
      <WhyUs />
      <OrderSection />
      <Testimonials />
      <Footer />
      <SocialButtons />
    </div>
  );
}