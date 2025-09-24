'use client';

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionAndVision from "@/components/MissionAndVision";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { initializeScrollAnimations } from '@/hooks/useScrollAnimation';
import Products from '@/components/Products';
import FocusArea from '@/components/FocusArea';
import WhyQuari from '@/components/WhyQuari';

export default function Home() {
  useEffect(() => {
    const cleanup = initializeScrollAnimations();
    return () => cleanup();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <FocusArea />
      <MissionAndVision />
      <WhyQuari />
      {/* CTA Banner */}
      <section className="py-20 network-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title mb-6 fade-up">
              Explore the products we're building—join us at the edge of <span className="text-gradient">AI and blockchain</span>
            </h2>
            <p className="text-body text-muted-foreground mb-8 fade-up">
              Ready to see how cutting-edge technology can transform your industry? Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 fade-up">
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
        </div>
      </section>
      <Footer />
    </div>
  );
}