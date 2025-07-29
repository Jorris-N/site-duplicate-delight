import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(220 26% 7% / 0.9), hsl(220 26% 7% / 0.8)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="space-y-8">
          {/* Availability Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Available for Freelance
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up" style={{ animationDelay: "0.2s", textShadow: "0 4px 8px rgba(0,0,0,0.8)" }}>
            <span className="bg-gradient-hero bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
              Frontend
            </span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: "0.4s", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
            I craft beautiful, responsive web applications with modern frontend technologies that engage users and provide exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#"
              className="p-3 rounded-full bg-card/80 border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group backdrop-blur-sm"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card/80 border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group backdrop-blur-sm"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card/80 border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group backdrop-blur-sm"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};