import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/AnimatedElement";
import { ExternalLink, Github, Eye, Filter, Star, TrendingUp, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
  year: string;
  client?: string;
}

export const ProfessionalPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced analytics and inventory management",
      longDescription: "Built a comprehensive e-commerce platform handling 10k+ daily transactions with real-time inventory tracking, advanced analytics dashboard, and seamless payment integration.",
      image: "/images/projects/HeartofHelp.png",
      category: "fullstack",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      metrics: [
        { label: "Performance Score", value: "98/100" },
        { label: "User Growth", value: "+240%" },
        { label: "Conversion Rate", value: "4.2%" }
      ],
      year: "2024",
      client: "TechFlow Solutions"
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      description: "Real-time analytics platform for B2B clients with custom reporting features",
      longDescription: "Developed a sophisticated analytics platform processing millions of data points daily, featuring custom dashboards, automated reporting, and advanced data visualization.",
      image: "/images/projects/NextAge.png",
      category: "frontend",
      technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      metrics: [
        { label: "Data Processing", value: "5M+ points/day" },
        { label: "Response Time", value: "<200ms" },
        { label: "Client Satisfaction", value: "98%" }
      ],
      year: "2024",
      client: "DataCorp Inc"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with telemedicine features",
      longDescription: "Created a secure healthcare platform with patient portals, appointment scheduling, telemedicine integration, and comprehensive medical record management.",
      image: "/images/projects/evermed.png",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "WebRTC"],
      liveUrl: "https://example.com",
      featured: false,
      metrics: [
        { label: "Security Score", value: "A+" },
        { label: "Uptime", value: "99.9%" },
        { label: "User Adoption", value: "85%" }
      ],
      year: "2023",
      client: "MedTech Solutions"
    },
    {
      id: 4,
      title: "Fintech Mobile App",
      description: "React Native financial app with AI-powered spending insights",
      longDescription: "Developed a cross-platform financial application with AI-driven spending analysis, budget tracking, and investment portfolio management.",
      image: "/images/projects/timekazi.png",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow.js"],
      liveUrl: "https://apps.apple.com",
      featured: false,
      metrics: [
        { label: "App Store Rating", value: "4.8/5" },
        { label: "Downloads", value: "50k+" },
        { label: "Retention Rate", value: "78%" }
      ],
      year: "2023",
      client: "FinanceApp Startup"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "fullstack", label: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "mobile", label: "Mobile", count: projects.filter(p => p.category === "mobile").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedElement>
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and successful projects that delivered real business value
            </p>
          </div>
        </AnimatedElement>

        {/* Featured Projects */}
        <AnimatedElement delay={0.2}>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-semibold">Featured Projects</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <AnimatedElement key={project.id} delay={0.1 * index}>
                  <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 backdrop-blur-sm">Featured</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                          {project.client && (
                            <p className="text-sm text-muted-foreground mb-2">Client: {project.client}</p>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/20 rounded-lg">
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-semibold text-primary">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <Button size="sm" className="group">
                            <Eye className="mr-2 h-4 w-4" />
                            Live Demo
                            <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Filter Navigation */}
        <AnimatedElement delay={0.4}>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Filter className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-semibold">All Projects</h2>
            </div>
            
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category.id)}
                  className="text-sm"
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedElement key={project.id} delay={0.1 * index}>
              <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group h-full">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary/90 backdrop-blur-sm text-xs">Featured</Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-semibold">{project.title}</h3>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="flex-1 group">
                        <Eye className="mr-2 h-3 w-3" />
                        Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="flex-1 group">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Success Metrics */}
        <AnimatedElement delay={0.6}>
          <div className="mt-20 text-center">
            <Card className="bg-gradient-card border-border shadow-card p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Project Success Metrics</h3>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">5M+</div>
                  <div className="text-muted-foreground">Users Impacted</div>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement delay={0.8}>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's discuss how I can help bring your vision to life with cutting-edge technology and proven expertise.
            </p>
            <Button size="lg" className="group">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};