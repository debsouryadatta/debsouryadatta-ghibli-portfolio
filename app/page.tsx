"use client";

import React from 'react';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import FloatingNav from '@/components/floating-nav';

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
