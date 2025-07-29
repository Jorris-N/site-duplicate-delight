import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Developer Photo Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-fade-in">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
                <AvatarImage src="/placeholder.svg" alt="Developer Profile" />
                <AvatarFallback className="text-4xl md:text-5xl font-bold bg-gradient-primary text-white">JD</AvatarFallback>
              </Avatar>
              {/* Gradient ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse" />
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center px-4 py-2 hover:bg-primary/10 bg-green-600/20 border hover:border-primary/20 border-green-600/30 rounded-full text-green-400 text-sm font-medium mb-8 animate-fade-in ease-in-out duration-300 cursor-pointer">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
              Available for Freelance
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="bg-gradient-hero bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
                Frontend
              </span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-none mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              I craft beautiful, responsive web applications with modern frontend technologies that engage users and provide exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
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
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <a
                href="#"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};