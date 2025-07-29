import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { AnimatedElement } from "@/components/AnimatedElement";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Developer Photo Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <AnimatedElement animation="scale-in" delay={200} interactive>
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-700 hover:scale-110 animate-float group-hover:animate-wiggle">
                <AvatarImage src="/placeholder.svg" alt="Developer Profile" />
                <AvatarFallback className="text-4xl md:text-5xl font-bold bg-gradient-primary text-white">JD</AvatarFallback>
              </Avatar>
              {/* Enhanced gradient ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl animate-glow-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-10 blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
            </AnimatedElement>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Availability Badge */}
            <AnimatedElement animation="bounce-subtle" delay={0}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8 hover:bg-primary/20 transition-all duration-300">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-glow" />
                Available for Freelance
              </div>
            </AnimatedElement>

            {/* Main Heading */}
            <AnimatedElement animation="reveal" delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift hover:animate-wiggle cursor-default">
                  Frontend
                </span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
            </AnimatedElement>

            {/* Description */}
            <AnimatedElement animation="fade-in-up" delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-none mb-8 leading-relaxed">
                I craft beautiful, responsive web applications with modern frontend technologies that engage users and provide exceptional user experiences.
              </p>
            </AnimatedElement>

            {/* CTA Buttons */}
            <AnimatedElement animation="elastic" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button variant="hero" size="lg" className="group hover:animate-bounce-subtle">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2 group-hover:animate-wiggle" />
                </Button>
                <Button variant="glass" size="lg" className="group hover:animate-bounce-subtle">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce-subtle" />
                  Download CV
                </Button>
              </div>
            </AnimatedElement>

            {/* Social Links */}
            <AnimatedElement animation="stagger" delay={800}>
              <div className="flex justify-center lg:justify-start space-x-6">
                <AnimatedElement animation="elastic" delay={900} interactive>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group hover:animate-bounce-subtle"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:animate-wiggle" />
                  </a>
                </AnimatedElement>
                <AnimatedElement animation="elastic" delay={1000} interactive>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group hover:animate-bounce-subtle"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:animate-wiggle" />
                  </a>
                </AnimatedElement>
                <AnimatedElement animation="elastic" delay={1100} interactive>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group hover:animate-bounce-subtle"
                  >
                    <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:animate-wiggle" />
                  </a>
                </AnimatedElement>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};