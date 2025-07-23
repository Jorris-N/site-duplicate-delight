import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", active: true },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Articles", href: "#articles" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="text-primary text-2xl font-bold">
              &lt;/&gt;
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${
                  item.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                {item.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" className="animate-glow-pulse">
              💼 Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors ${
                    item.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="w-full mt-4">
                💼 Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};