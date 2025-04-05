"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API"]
    },
    {
      title: "Tools & Others",
      skills: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Testing", "UI/UX Design"]
    }
  ];

  const otherSkills = ["Redux", "Firebase", "Framer Motion", "Webpack", "Vercel", "Figma", "Jest", "Cypress"];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 mb-12 text-center">
            <h2 className="text-xl text-primary font-medium">My Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Professional Skills</h3>
            <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h4 className="text-2xl font-bold text-center">{category.title}</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="py-2 px-4 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h4 className="text-xl font-bold text-center mb-6">Other Technologies</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="py-2 px-4 rounded-full text-sm hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
