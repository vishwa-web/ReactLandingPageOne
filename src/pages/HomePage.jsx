import React from 'react';
import { Header } from '../components/Header';
import { ServicesSection } from '../components/ServicesSection';
import { ResearchCapabilities } from '../components/ResearchCapabilities';
import { IndustrySection } from '../components/IndustrySection';
import { BlogSection } from '../components/BlogSection';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        <Header />
        
        {/* Main Content */}
        <main>
          <ServicesSection />
          <ResearchCapabilities />
          <IndustrySection />
          <BlogSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};