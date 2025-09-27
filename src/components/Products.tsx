import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Brain, Gamepad2, Heart, Layers, Database, Shield, Zap } from 'lucide-react';

const products = [
    {
      name: "Velix Protocol",
      description: "Liquid staking for tokens like STRK and METIS with ve-token rewards, MEV capture, and dynamic APY.",
      image: "/assets/Velix.png",
      href: "/products/velix-protocol"
    },
    {
      name: "Alpha Alith",
      description: "AI intelligence layer that filters noise, detects patterns, and delivers actionable on-chain insights.",
      image: "/assets/Alpha.png",
      href: "/products/alpha-alith"
    },
    {
      name: "Froska",
      description: "A memetic finance experiment blending culture, AI mechanics, and community engagement.",
      image: "/assets/Froska.png",
      href: "/products/froska"
    },
    {
      name: "Safeline",
      description: "AI health assistant designed to improve diagnosis accuracy and expand access to care.",
      image: "/assets/Safeline.png",
      href: "/products/safeline"
    }
  ];

export default function Products() {
    //Products Section
    return (
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4 fade-up">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto fade-up">
              Cutting-edge solutions at the intersection of AI and blockchain technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Link
                key={product.name}
                href={product.href}
                className="card-product group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-ql-primary/10 group-hover:border-ql-primary/50 transition-all duration-300">
                    <Image className="h-full w-full text-ql-primary group-hover:text-white transition-colors duration-300"
                    src={product.image} 
                    alt={product.name} 
                    width={48} 
                    height={48} 
                    />
                  </div>
                </div>
                <h3 className="text-card-title mb-4 group-hover:text-ql-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center text-ql-primary font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
}