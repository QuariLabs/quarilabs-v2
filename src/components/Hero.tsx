'use client';

import Link from 'next/link';
import { ArrowRight, Brain, Layers, Database, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
    // Hero Section
    return (
        <section className="pt-24 pb-20 network-bg overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Content */}
            <div className="fade-up">
              <h1 className="text-hero mb-6">
                AI Architecture and <span className="text-gradient">Blockchain Protocols</span> for Real-World Use
              </h1>
              <p className="text-body text-muted-foreground mb-8 max-w-2xl">
                From intelligent automation to decentralized infrastructure, we deliver solutions built for scale and adoption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button className="btn-hero">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="btn-outline-hero">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Animated AI Nodes */}
            <div className="relative fade-right">
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-ql-gradient animate-glow-pulse flex items-center justify-center">
                  <Brain className="h-12 w-12 text-muted-foreground" />
                </div>
                
                {/* Floating nodes */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-ql-primary/20 backdrop-blur-sm border border-ql-primary/30 flex items-center justify-center animate-float">
                  <Layers className="h-8 w-8 text-ql-primary" />
                </div>
                <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-ql-primary-200/20 backdrop-blur-sm border border-ql-primary-200/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <Database className="h-6 w-6 text-ql-primary-200" />
                </div>
                <div className="absolute bottom-1/3 left-1/6 w-14 h-14 rounded-full bg-ql-primary-100/20 backdrop-blur-sm border border-ql-primary-100/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Shield className="h-7 w-7 text-ql-primary-100" />
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-18 h-18 rounded-full bg-ql-primary/20 backdrop-blur-sm border border-ql-primary/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                  <Zap className="h-9 w-9 text-ql-primary" />
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--ql-primary))" />
                      <stop offset="100%" stopColor="hsl(var(--ql-primary-200))" />
                    </linearGradient>
                  </defs>
                  <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="75%" y2="33%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <line x1="50%" y1="50%" x2="17%" y2="67%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <line x1="50%" y1="50%" x2="67%" y2="75%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}