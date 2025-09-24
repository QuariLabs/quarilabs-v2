'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Products", href: "/products" },
    { name: "Focus Areas", href: "/#focus-areas" },
    { name: "Mission", href: "/#mission" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && typeof window !== 'undefined' && window.location.hash === href.substring(1);
    }
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-gradient focus-outline"
          >
            <div className="w-8 h-8 bg-ql-gradient rounded-lg"></div>
            <span>Quari Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`btn-ghost-hero ${
                  isActive(item.href) ? "nav-active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/products">
              <Button variant="outline" className="btn-outline-hero">
                View Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="btn-hero">Partner With Us</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus-outline"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/20 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`btn-ghost-hero text-left ${
                    isActive(item.href) ? "nav-active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/20">
                <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="btn-outline-hero w-full">
                    View Products
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-hero w-full">Partner With Us</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;