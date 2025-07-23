
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Apps", "Mobile", "E-commerce", "Landing Pages"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "Modern e-commerce platform with React, TypeScript, and Stripe integration",
      image: "🛒",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Web Apps",
      description: "Collaborative task management application with real-time updates",
      image: "📋",
      technologies: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "Landing Pages",
      description: "Beautiful restaurant website with online ordering system",
      image: "🍽️",
      technologies: ["React", "SCSS", "Firebase", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "Mobile",
      description: "Secure mobile banking application with biometric authentication",
      image: "💳",
      technologies: ["React Native", "TypeScript", "Redux", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Landing Pages",
      description: "Personal portfolio website with modern animations and interactions",
      image: "💼",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      category: "Web Apps",
      description: "Analytics dashboard for social media management with data visualization",
      image: "📊",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Explore my collection of projects showcasing modern web development, 
            creative problem-solving, and attention to detail.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-gradient-card border border-border rounded-2xl p-6 hover:shadow-glow hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl mb-6 text-center">{project.image}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              All Projects
            </span>
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "hero" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="text-muted-foreground mb-8">
            Let's collaborate on your next project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start a Project
            </Button>
            <Button variant="glass" size="lg">
              View Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
