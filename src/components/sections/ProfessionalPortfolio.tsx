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
import { ExternalLink, Star, TrendingUp, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects, getFeaturedProjects } from "@/lib/contentful";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  image: string;
  liveUrl?: string;
}

export const ProfessionalPortfolio = () => {
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
    image: project.fields.image.fields.file.url.startsWith('//') 
      ? `https:${project.fields.image.fields.file.url}`
      : project.fields.image.fields.file.url,
    liveUrl: project.fields.links,
  })) || [];

  // Transform Contentful data for featured projects
  const transformedFeaturedProjects: Project[] = featuredProjectsData?.map(project => ({
    id: project.sys.id,
    title: project.fields.title,
    image: project.fields.image.fields.file.url.startsWith('//') 
      ? `https:${project.fields.image.fields.file.url}`
      : project.fields.image.fields.file.url,
    liveUrl: project.fields.links,
  })) || [];

  // Calculate pagination
  const totalPages = Math.ceil(transformedProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const paginatedProjects = transformedProjects.slice(startIndex, endIndex);

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
                    <Skeleton className="h-64 w-full" />
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-3/4 mb-4" />
                      <div className="flex gap-2">
                        <Skeleton className="h-9 w-24" />
                        <Skeleton className="h-9 w-24" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {transformedFeaturedProjects.map((project, index) => (
                  <AnimatedElement key={project.id} delay={0.1 * index}>
                    <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group">
                      <div className="relative aspect-video">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary/90 backdrop-blur-sm">Featured</Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-base font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <div className="flex gap-3">
                          {project.liveUrl ? (
                            <Button size="sm" className="group" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          ) : (
                            <span className="text-muted">No live link available</span>
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

        {/* All Projects Section */}
        <AnimatedElement delay={0.4}>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-semibold">All Projects</h2>
          </div>
        </AnimatedElement>

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="aspect-video w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
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
                <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group">
                  <div className="relative aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-base font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex gap-3">
                      {project.liveUrl ? (
                        <Button size="sm" variant="default" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      ) : (
                        <span className="text-muted">No live link available</span>
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
                  <div className="text-3xl font-heading font-bold text-primary mb-2">30+</div>
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
                  <div className="text-3xl font-heading font-bold text-primary mb-2">200K+</div>
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