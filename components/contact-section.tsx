"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xl text-primary font-medium">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Let's Work Together</h3>
            <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold">Contact Information</h4>
                <p className="text-muted-foreground text-lg">
                  Feel free to reach out for collaborations or just a friendly hello. I'm currently 
                  available for freelance work and full-time positions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <a href="mailto:hello@example.com" className="text-lg hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Github size={18} />
                    </Button>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Linkedin size={18} />
                    </Button>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Twitter size={18} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold">Send a Message</h4>
                <p className="text-muted-foreground">
                  Have a question or want to work together? Send me a message!
                </p>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <Input placeholder="Your Name" className="rounded-md" />
                  <Input placeholder="Your Email" type="email" className="rounded-md" />
                  <Textarea placeholder="Your Message" className="min-h-[120px] rounded-md" />
                  <Button className="w-full rounded-md">Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
