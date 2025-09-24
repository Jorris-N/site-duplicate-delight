import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowRight, Download, ExternalLink, Star, Users } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

export const ProfessionalHeroSection = () => {
  const typewriterText = useTypewriter([
    'Front-End Developer',
    'Web Developer', 
    'Software Developer',
    'Search Engine Optimization'
  ], 100, 50, 2000);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Developer Photo Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative animate-fade-in">
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div 
                  className="w-full h-full border-4 border-primary/20 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105"
                  style={{ 
                    aspectRatio: '1/1',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    background: `url('/images/Jorris1.jpg') center/cover no-repeat`
                  }}
                  role="img"
                  aria-label="Jorris - Senior Frontend Developer"
                />
              </div>
              {/* Professional status indicator */}
              <div className="absolute -bottom-4 -right-4 bg-card border-2 border-primary rounded-full p-3 shadow-glow">
                <Star className="h-6 w-6 text-primary fill-primary" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            {/* Professional Status */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 mt-4">
              <Badge variant="default" className="inline-flex items-center px-4 py-2 bg-green-600/20 border-green-600/30 text-green-400 hover:bg-green-600/30">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Available for Hire
              </Badge>
              <Badge variant="outline" className="inline-flex items-center px-4 py-2">
                <Users className="w-3 h-3 mr-2" />
                3+ Years Experience
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="text-4xl md:text-4xl lg:text-4xl font-heading font-bold mb-6 animate-fade-in-up space-y-4" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-foreground"> &#x1f44b; I'm Jorris</h1>
              <h1 className="bg-gradient-hero bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
                {typewriterText}<span className="animate-pulse">|</span>
              </h1>
            </div>

            {/* Professional Value Proposition */}
            <p className="text-base md:text-base text-muted-foreground max-w-2xl lg:max-w-none mb-6 leading-relaxed animate-fade-in-up font-sans" style={{ animationDelay: "0.4s" }}>
              I specialize in building <span className="text-primary font-medium">scalable web applications</span> using React, TypeScript, and modern frontend technologies. 
              Helping startups and enterprises deliver exceptional user experiences.
            </p>

            {/* Key Metrics */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Project Success</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Button href="/portfolio" size="lg" className="group font-medium">
                View My Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group font-medium">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>

            {/* Professional Links */}
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <a
                href="https://github.com/Jorris-N"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/jorris-nyange/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:nyangejorris@gmail.com"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#contact"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <svg className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"></path></svg>
              </a>
            </div>

            {/* Professional Note */}
            <p className="text-sm text-muted-foreground mt-6 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              Currently based in <span className="text-foreground font-medium">Kenya</span> • Open to remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};