'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { initializeScrollAnimations } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";



export default function Products() {
  useEffect(() => {
    const cleanup = initializeScrollAnimations();
    return () => cleanup();
  }, []);

  const products = [
    {
      id: "velix-protocol",
      name: "Velix Protocol",
      description: "Liquid staking for tokens like STRK and METIS with ve-token rewards, MEV capture, and dynamic APY.",
      image: "/assets/Velix.png",
      features: ["Liquid Staking", "MEV Capture", "Dynamic APY", "ve-token Rewards"],
      status: "Live",
      href: "/products/velix-protocol"
    },
    {
      id: "alpha-alith",
      name: "Alpha Alith",
      description: "AI intelligence layer that filters noise, detects patterns, and delivers actionable on-chain insights.",
      image: "/assets/Alpha.png",
      features: ["Pattern Detection", "Noise Filtering", "On-chain Analytics", "Real-time Insights"],
      status: "Beta",
      href: "/products/alpha-alith"
    },
    {
      id: "froska",
      name: "Froska",
      description: "A memetic finance experiment blending culture, AI mechanics, and community engagement.",
      image: "/assets/Froska.png",
      features: ["Memetic Finance", "AI Mechanics", "Community Driven", "Cultural Fusion"],
      status: "Experimental",
      href: "/products/froska"
    },
    {
      id: "safeline",
      name: "Safeline",
      description: "AI health assistant designed to improve diagnosis accuracy and expand access to care.",
      image: "/assets/Safeline.png",
      features: ["AI Diagnosis", "Health Analytics", "Care Access", "Medical Insights"],
      status: "Development",
      href: "/products/safeline"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500/20 text-green-400";
      case "Beta": return "bg-blue-500/20 text-blue-400";
      case "Experimental": return "bg-purple-500/20 text-purple-400";
      case "Development": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };
    return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 network-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6 fade-up">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 fade-up">
              Explore our suite of AI and blockchain solutions designed to solve real-world challenges
              and drive innovation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="card-product group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-ql-primary/10 group-hover:bg-ql-primary group-hover:text-white transition-all duration-300">
                    <Image className="h-10 w-10 text-ql-primary group-hover:text-white transition-colors duration-300"
                      src={product.image} 
                      alt={product.name} 
                      width={48} 
                      height={48} 
                      />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-card-title mb-4 group-hover:text-ql-primary transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link href={product.href}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-ql-primary group-hover:text-ql-primary transition-all duration-300"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-section-title mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us at the intersection of AI and blockchain. Let's create solutions that matter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="btn-hero">
                Partner With Us
              </Button>
            </Link>
            <Link href="/#mission">
              <Button variant="outline" className="btn-outline-hero">
                Learn Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}