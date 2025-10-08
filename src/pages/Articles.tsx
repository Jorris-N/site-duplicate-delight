import { Navigation } from "@/components/Navigation";
import { AnimatedElement } from "@/components/AnimatedElement";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";
import { Search, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAllArticles, calculateReadingTime, getPreviewText } from "@/lib/contentful";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Fetch all articles from Contentful
  const { data: contentfulArticles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: getAllArticles,
  });

  // Transform Contentful data to display format
  const articles = useMemo(() => {
    return contentfulArticles?.map(article => {
      const imageUrl = article.fields.image?.fields?.file?.url 
        ? `https:${article.fields.image.fields.file.url}`
        : '';
      
      return {
        id: article.sys.id,
        title: article.fields.title,
        excerpt: getPreviewText(article.fields.excerpt),
        slug: article.fields.slug,
        image: imageUrl,
        date: new Date(article.sys.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        readTime: calculateReadingTime(article.fields.excerpt),
        tags: article.fields.tags || [],
      };
    }) || [];
  }, [contentfulArticles]);

  // Featured articles - 3 most recent
  const featuredArticles = useMemo(() => {
    return articles.slice(0, 3);
  }, [articles]);

  // All available tags from articles
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach(article => {
      article.tags?.forEach(tag => tags.add(tag));
    });
    return ["All", ...Array.from(tags)];
  }, [articles]);

  // Articles for "All Articles" section - exclude the 3 most recent (featured)
  const nonFeaturedArticles = useMemo(() => {
    return articles.slice(3);
  }, [articles]);

  // Filter articles based on search and tags
  const filteredArticles = useMemo(() => {
    return nonFeaturedArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = activeTag === "All" || article.tags?.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [nonFeaturedArticles, searchTerm, activeTag]);

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, activeTag]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 px-6">
        <div className="max-w-7xl mx-auto text-center py-16">
          <AnimatedElement animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Articles & Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Sharing knowledge about modern web development, best practices, 
              and emerging technologies in the frontend world.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h2>
          </AnimatedElement>
          
          {isLoading ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gradient-card border border-border rounded-2xl p-6">
                  <Skeleton className="w-full h-48 mb-6" />
                  <Skeleton className="h-4 w-24 mb-4" />
                  <Skeleton className="h-8 w-full mb-3" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : featuredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No featured articles yet.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <AnimatedElement 
                  key={article.id} 
                  animation="fade-in-up"
                  delay={index * 200}
                >
                  <Link to={`/articles/${article.slug}`}>
                    <article className="bg-gradient-card border border-border rounded-2xl p-6 hover:shadow-glow hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                      {article.image && (
                        <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                        {article.excerpt}
                      </p>
                      <Button variant="outline" className="w-full group mt-auto">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </article>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={activeTag === tag ? "hero" : "outline"}
                    size="sm"
                    onClick={() => setActiveTag(tag)}
                    className="transition-all duration-300"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                All Articles
              </span>
            </h2>
          </AnimatedElement>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gradient-card border border-border rounded-xl p-6">
                  <Skeleton className="w-full h-48 mb-6" />
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <Skeleton className="h-8 w-24" />
                </div>
              ))}
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                {paginatedArticles.map((article, index) => (
                <AnimatedElement 
                  key={article.id} 
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <Link to={`/articles/${article.slug}`}>
                    <article className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
                      {article.image && (
                        <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                          {article.excerpt}
                        </p>
                        <Button variant="ghost" size="sm" className="group mt-auto self-start">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </article>
                  </Link>
                </AnimatedElement>
              ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <AnimatedElement animation="fade-in-up" delay={100}>
                  <div className="mt-12 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                          // Show first page, last page, current page, and pages around current
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <PaginationItem key={page}>
                                <PaginationLink
                                  onClick={() => setCurrentPage(page)}
                                  isActive={currentPage === page}
                                  className="cursor-pointer"
                                >
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          } else if (page === currentPage - 2 || page === currentPage + 2) {
                            return (
                              <PaginationItem key={page}>
                                <PaginationEllipsis />
                              </PaginationItem>
                            );
                          }
                          return null;
                        })}

                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </AnimatedElement>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-gradient-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get notified when I publish new articles about web development and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default Articles;
