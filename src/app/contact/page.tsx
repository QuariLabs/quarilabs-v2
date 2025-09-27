'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Mail, MessageSquare, Building, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for general inquiries",
      contact: "quarilabs@gmail.com",
      action: "mailto:quarilabs@gmail.com"
    },
    {
      icon: MessageSquare,
      title: "Business Inquiries",
      description: "For partnerships and business development",
      contact: "contact@quarilabs.com",
      action: "mailto:contact@quarilabs.com"
    },
    {
      icon: Building,
      title: "Press & Media",
      description: "Media inquiries and press releases",
      contact: "press@quarilabs.com",
      action: "mailto:press@quarilabs.com"
    }
  ];

  const interestOptions = [
    "Product Demo",
    "Partnership Opportunity",
    "Investment Inquiry",
    "Technical Integration",
    "Press & Media",
    "Career Opportunities",
    "General Inquiry"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours. Thank you for reaching out!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      interest: "",
      message: ""
    });
    setIsSubmitting(false);
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
              Get <span className="text-gradient">In Touch</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 fade-up">
              Ready to explore how our AI and blockchain solutions can transform your business? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className="border-border/50 hover:border-ql-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(method.action, '_blank')}
              >
                <CardContent className="p-8 text-center">
                  <div className="p-4 rounded-xl bg-ql-primary/10 w-fit mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-ql-primary" />
                  </div>
                  <h3 className="text-card-title mb-3">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <p className="text-ql-primary font-medium">{method.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section-title mb-4">Send us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                      />
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
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company (Optional)
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter your company name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Area of Interest
                      </label>
                      <Select 
                        value={formData.interest} 
                        onValueChange={(value) => handleInputChange("interest", value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {interestOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your project, questions, or how we can help..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-hero w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Other Ways to Connect</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates on our products and industry insights.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/QuariLabs" className="text-muted-foreground hover:text-ql-primary transition-colors">
              X (formerly Twitter)
            </a>
            <a href="https://www.linkedin.com/company/quarilabs/" className="text-muted-foreground hover:text-ql-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/QuariLabs/" className="text-muted-foreground hover:text-ql-primary transition-colors">
              GitHub
            </a>
            <a href="https://t.me/quari_admin" className="text-muted-foreground hover:text-ql-primary transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}