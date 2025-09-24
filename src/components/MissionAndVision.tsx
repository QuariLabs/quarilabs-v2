'use client';

import { useEffect } from 'react';
import { Target, Zap, Shield, Users, LineChart, Wrench } from 'lucide-react';
import { initializeScrollAnimations } from '@/hooks/useScrollAnimation';

export default function MissionAndVision() {
  useEffect(() => {
    const cleanup = initializeScrollAnimations();
    return () => cleanup();
  }, []);
    //Mission and Vision Section
    return (
      <section id="mission" className="py-20 bg-gradient-to-r from-ql-primary/5 via-transparent to-ql-primary-200/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4 fade-up">
              Our <span className="text-gradient">Mission & Vision</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto fade-up">
              Driving innovation at the intersection of AI and blockchain
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card-product group fade-up">
              <div className="flex items-start mb-6">
                <div className="p-4 rounded-xl bg-ql-primary/10 group-hover:bg-ql-primary group-hover:text-white transition-all duration-300 mr-6">
                  <Target className="h-8 w-8 text-ql-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-card-title mb-4 group-hover:text-ql-primary transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We build AI solutions and blockchain protocols that address <strong>real user needs</strong> and industrial challenges. 
                    Our mission is to design technologies that are <strong>secure, scalable, and practical</strong>, turning emerging 
                    innovation into usable systems for global adoption.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-product group fade-up">
              <div className="flex items-start mb-6">
                <div className="p-4 rounded-xl bg-ql-primary-200/10 group-hover:bg-ql-primary-200 group-hover:text-white transition-all duration-300 mr-6">
                  <Zap className="h-8 w-8 text-ql-primary-200 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-card-title mb-4 group-hover:text-ql-primary-200 transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To drive a future where <strong>advanced AI architectures</strong> and blockchain protocols power industries, 
                    enhance human interaction, and create a <strong>more connected digital economy</strong> that benefits everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="mt-16 text-center fade-up">
            <h3 className="text-xl font-semibold mb-8 text-foreground">Built on Core Values</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 px-4 py-2 bg-ql-primary/10 rounded-full">
                <Shield className="h-5 w-5 text-ql-primary" />
                <span className="text-sm font-medium">Security First</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-ql-primary-200/10 rounded-full">
                <Users className="h-5 w-5 text-ql-primary-200" />
                <span className="text-sm font-medium">User-Centric</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-ql-primary-100/10 rounded-full">
                <LineChart className="h-5 w-5 text-ql-primary-100" />
                <span className="text-sm font-medium">Scalable Solutions</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-ql-primary/10 rounded-full">
                <Wrench className="h-5 w-5 text-ql-primary" />
                <span className="text-sm font-medium">Innovation Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}