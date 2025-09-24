'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, Building, Users, Handshake, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { initializeScrollAnimations } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

export default function Partners() {
  useEffect(() => {
    const cleanup = initializeScrollAnimations();
    return () => cleanup();
  }, []);

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    partnership: "",
    message: ""
  });
  const { toast } = useToast();

  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "BlockChain Ventures", logo: "BV" },
    { name: "AI Innovations", logo: "AI" },
    { name: "Future Labs", logo: "FL" },
    { name: "Digital Assets", logo: "DA" },
    { name: "Crypto Solutions", logo: "CS" },
    { name: "Neural Networks", logo: "NN" },
    { name: "Quantum Systems", logo: "QS" },
  ];

  const partnershipTypes = [
    {
      title: "Technology Integration",
      description: "Integrate our AI and blockchain solutions into your existing products and services.",
      icon: Building,
    },
    {
      title: "Strategic Alliance",
      description: "Form long-term partnerships to co-develop innovative solutions for emerging markets.",
      icon: Users,
    },
    {
      title: "Channel Partnership",
      description: "Become a certified partner to resell and support our products in your region.",
      icon: Handshake,
    },
    {
      title: "Research Collaboration",
      description: "Join our research initiatives to advance AI and blockchain technology together.",
      icon: Star,
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.companyName || !formData.contactName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Partnership Inquiry Submitted",
      description: "We'll get back to you within 24 hours to discuss partnership opportunities.",
    });
    
    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      partnership: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
    return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 network-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6 fade-up">
              Partner <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 fade-up">
              Join our ecosystem of innovative partners building the future of AI and blockchain technology.
              Together, we can create solutions that drive real-world adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Our Partners</h2>
            <p className="text-muted-foreground">
              Working with industry leaders to advance technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="group card-focus flex items-center justify-center h-20 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center font-bold text-muted-foreground group-hover:text-ql-primary group-hover:bg-ql-primary/10 transition-all duration-300">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Partnership Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover different ways to collaborate with us and leverage our cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnershipTypes.map((type, index) => (
              <Card
                key={type.title}
                className="border-border/50 hover:border-ql-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="p-3 rounded-xl bg-ql-primary/10 w-fit mb-4">
                    <type.icon className="h-8 w-8 text-ql-primary" />
                  </div>
                  <h3 className="text-card-title mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section-title mb-4">Let's Collaborate</h2>
              <p className="text-muted-foreground">
                Ready to explore partnership opportunities? Tell us about your organization and how we can work together.
              </p>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        placeholder="Enter your company name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Contact Name *
                      </label>
                      <Input
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Partnership Interest
                    </label>
                    <Input
                      value={formData.partnership}
                      onChange={(e) => handleInputChange("partnership", e.target.value)}
                      placeholder="e.g., Technology Integration, Strategic Alliance"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tell us more about your partnership goals
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your organization, partnership goals, and how you'd like to collaborate with us..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    Submit Partnership Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
