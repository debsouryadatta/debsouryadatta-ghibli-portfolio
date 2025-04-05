"use client";

import React from 'react';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 mb-8">
            <h2 className="text-xl text-primary font-medium">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold">My Journey</h3>
            <Separator className="w-24 h-1 bg-primary rounded-full mt-4" />
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate full stack developer with a strong focus on creating intuitive and performant web applications. 
              With 5+ years of experience in the industry, I've worked on a variety of projects ranging from small business websites 
              to large-scale enterprise applications.
            </p>
            <p>
              My approach to development is centered around user experience and clean, maintainable code. I believe in the power 
              of well-designed software to transform businesses and improve lives.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
