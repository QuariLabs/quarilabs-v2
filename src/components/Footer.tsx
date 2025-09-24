import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Footer = () => {
  const productLinks = [
    { name: "Velix Protocol", href: "/products/velix-protocol" },
    { name: "Alpha Alith", href: "/products/alpha-alith" },
    { name: "Froska", href: "/products/froska" },
    { name: "Safeline", href: "/products/safeline" },
  ];

  const focusAreas = [
    "On-Chain AI Agents",
    "dApps",
    "HealthTech",
    "Data Management",
    "Chatbots",
    "Cross-Chain Intelligence",
  ];

  const companyLinks = [
    { name: "Mission", href: "/#mission" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@quarilabs.com" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold text-gradient mb-4"
            >
              <div className="w-8 h-8 bg-ql-gradient rounded-lg"></div>
              <Image className="-my-16" src="/assets/Quari logo.svg" alt="Quari Labs" width={256} height={32} />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI Architecture and Blockchain Protocols for Real-World Use. 
              Building secure, scalable solutions for global adoption.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button className="btn-hero">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-ql-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-3">
              {focusAreas.map((area) => (
                <li key={area}>
                  <span className="text-muted-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 mb-6">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-ql-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-medium mb-3">Connect</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-muted hover:bg-ql-primary hover:text-white transition-all duration-200 focus-outline"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Quari Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-ql-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ql-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;