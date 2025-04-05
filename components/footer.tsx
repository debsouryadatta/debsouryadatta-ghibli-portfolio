"use client";

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-8 mb-6">
            <a 
              href="mailto:johndoe@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} className="hover:scale-110 transition-transform" />
            </a>
          </div>
          <Separator className="mb-6 max-w-md mx-auto" />
          <div className="text-center space-y-2">
            <p className="font-medium">
              <span className="text-primary">John</span>Doe
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
