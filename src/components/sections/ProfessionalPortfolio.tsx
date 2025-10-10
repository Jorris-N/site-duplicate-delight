import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { AnimatedElement } from "@/components/AnimatedElement";
import { ExternalLink, Github, Eye, Filter, Star, TrendingUp, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects, getFeaturedProjects } from "@/lib/contentful";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  client?: string;
}

export const ProfessionalPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Fetch all projects
  const { data: allProjectsData, isLoading, error, refetch } = useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: getAllProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Fetch featured projects
  const { data: featuredProjectsData } = useQuery({
    queryKey: ['featured-projects'],
    queryFn: getFeaturedProjects,
    staleTime: 5 * 60 * 1000,
  });

  // Transform Contentful data for all projects
  const transformedProjects: Project[] = allProjectsData?.map(project => ({
    id: project.sys.id,
    title: project.fields.title,
    description: project.fields.description,
    longDescription: project.fields.longDescription,
    image: project.fields.image.fields.file.url.startsWith('//') 
      ? `https:${project.fields.image.fields.file.url}`
      : project.fields.image.fields.file.url,
    category: project.fields.category,
    technologies: project.fields.technologies,
    liveUrl: project.fields.links?.live || '',
    githubUrl: project.fields.links?.github,
    year: project.fields.year,
    client: project.fields.client,
    featured: project.fields.featured || false
  })) || [];

  // Transform Contentful data for featured projects
  const transformedFeaturedProjects: Project[] = featuredProjectsData?.map(project => ({
    id: project.sys.id,
    title: project.fields.title,
    description: project.fields.description,
    longDescription: project.fields.longDescription,
    image: project.fields.image.fields.file.url.startsWith('//') 
      ? `https:${project.fields.image.fields.file.url}`
      : project.fields.image.fields.file.url,
    category: project.fields.category,
    technologies: project.fields.technologies,
    liveUrl: project.fields.links?.live || '',
    githubUrl: project.fields.links?.github,
    year: project.fields.year,
    client: project.fields.client,
    featured: true
  })) || [];

  // Filter projects
  const filteredProjects = activeFilter === 'all' 
    ? transformedProjects 
    : transformedProjects.filter(p => p.category === activeFilter);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Dynamic category counts
  const categories = [
    { id: 'all', label: 'All Projects', count: transformedProjects.length },
    { id: 'fullstack', label: 'Full Stack', count: transformedProjects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: transformedProjects.filter(p => p.category === 'frontend').length },
    { id: 'mobile', label: 'Mobile', count: transformedProjects.filter(p => p.category === 'mobile').length },
    { id: 'backend', label: 'Backend', count: transformedProjects.filter(p => p.category === 'backend').length }
  ];

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
            
            {isLoading ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {[...Array(2)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <CardContent className="p-8">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <div className="flex gap-2">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-20" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8">
                {transformedFeaturedProjects.map((project, index) => (
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
                          {project.longDescription || project.description}
                        </p>

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
                            <Button size="sm" className="group" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Eye className="mr-2 h-4 w-4" />
                                Live Demo
                                <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button variant="outline" size="sm" className="group" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            )}
          </div>
        </AnimatedElement>

        {/* Filter Navigation */}
        <AnimatedElement delay={0.4}>
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Filter className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-semibold">All Projects</h2>
            </div>
            
            <div className="flex gap-2 flex-wrap">
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

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-40 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Error Handling */}
        {error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Failed to load projects. Please try again.</p>
            <Button onClick={() => refetch()} variant="outline">
              Retry
            </Button>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && paginatedProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* All Projects Grid */}
        {!isLoading && !error && paginatedProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project, index) => (
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
                        <Button size="sm" variant="outline" className="flex-1 group" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Eye className="mr-2 h-3 w-3" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="flex-1 group" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && !isLoading && !error && (
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className={cn(
                      "cursor-pointer",
                      currentPage === 1 && "pointer-events-none opacity-50"
                    )}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className={cn(
                      "cursor-pointer",
                      currentPage === totalPages && "pointer-events-none opacity-50"
                    )}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

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
          <div className="text-center mt-16 pb-16">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's discuss how I can help bring your vision to life with cutting-edge technology and proven expertise.
            </p>
            <Button size="lg" className="group" asChild>
              <a href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};